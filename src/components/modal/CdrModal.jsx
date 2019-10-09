import tabbable from 'tabbable';
import style from './styles/CdrModal.scss';
import onTransitionEnd from './onTransitionEnd';

export default {
  name: 'CdrModal',
  props: {
    opened: {
      type: Boolean,
      required: true,
    },
    closeModal: {
      type: Function,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    dialogAttrs: Object,
    dialogClass: String,
    overlayClass: String,
    wrapperClass: String,
    contentClass: String,
    animationDuration: {
      type: Number,
      default: parseInt(style.animationDuration, 10),
    },
  },
  data() {
    return {
      style,
      unsubscribe: null,
      keyHandler: null,
      lastActive: null,
      focusHandler: null,
      reallyClosed: !this.opened,
      offset: null,
    };
  },
  watch: {
    opened(newValue, oldValue) {
      if (!!newValue === !!oldValue) return;
      if (newValue) {
        this.handleOpened();
      } else {
        this.handleClosed();
      }
    },
  },
  mounted() {
    if (this.opened) {
      this.addNoScroll();
      this.addHandlers();
    }
  },
  beforeDestroy() {
    if (this.unsubscribe) this.unsubscribe();
    if (this.opened) this.removeNoScroll();
    document.removeEventListener('focusin', this.focusHandler, true);
    document.removeEventListener('keydown', this.keyHandler);
  },
  methods: {
    handleKeyDown({ key }) {
      switch (key) {
        case 'Escape':
          this.closeModal();
          break;
        default: break;
      }
    },
    handleFocus(e) {
      const { documentElement } = document;
      if (this.$refs.modal.contains(e.target) || !documentElement) return;

      const tabbables = tabbable(documentElement);
      const these = tabbable(this.$refs.modal);
      const nextIx = tabbables.indexOf(e.target);
      const firstModalIx = tabbables.indexOf(these[0]);
      const nextRef = nextIx < firstModalIx ? these[these.length - 1] : these[0];
      if (nextRef) nextRef.focus();

      documentElement.scrollTop = this.scrollTop;
      documentElement.scrollLeft = this.scrollLeft;
    },
    handleOpened() {
      const { activeElement } = document;

      this.addNoScroll();
      this.reallyClosed = false;
      this.lastActive = activeElement;

      this.$nextTick(() => {
        this.$refs.modal.focus();
        this.addHandlers();

        setTimeout(() => {
          // for some reason Safari scrolls the wrapper down a bit?
          // doesn't work without setTimeout for some unknown reason
          this.$refs.wrapper.scrollTop = 0;
        });
      });
    },
    handleClosed() {
      document.removeEventListener('keydown', this.keyHandler);

      this.unsubscribe = onTransitionEnd(
        this.$refs.wrapper,
        () => {
          this.unsubscribe();
          this.removeNoScroll();
          this.unsubscribe = null;
          this.reallyClosed = true;

          // restore previous scroll position
          window.scrollTo(this.offset.x, this.offset.y);

          document.removeEventListener('focusin', this.focusHandler, true);

          if (this.lastActive) this.lastActive.focus();
        },
        this.animationDuration + 16,
      );
    },
    addNoScroll() {
      const { documentElement, body } = document;
      const offset = {
        x: window.scrollX
          || (documentElement || {}).scrollLeft
          || (body || {}).scrollLeft
          || 0,
        y: window.scrollY
          || (documentElement || {}).scrollTop
          || (body || {}).scrollTop
          || 0,
      };
      this.offset = offset;

      if (documentElement) {
        documentElement.classList.add(style.noscroll);
        // keep current scroll position manually
        documentElement.style.top = `-${offset.y}px`;
        documentElement.style.left = `-${offset.x}px`;
      }

      if (body) {
        body.classList.add(style.noscroll);
      }
    },
    removeNoScroll() {
      const { documentElement, body } = document;

      if (body) {
        body.classList.remove(style.noscroll);
      }

      if (documentElement) {
        documentElement.classList.remove(style.noscroll);
        documentElement.style.top = '';
        documentElement.style.left = '';
      }
    },
    addHandlers() {
      this.focusHandler = this.handleFocus.bind(this);
      this.keyHandler = this.handleKeyDown.bind(this);
      document.addEventListener('focusin', this.focusHandler, true);
      document.addEventListener('keydown', this.keyHandler);
    },
  },
  render() {
    const {
      closeModal,
      modalId,
      opened,
      label,
      wrapperClass,
      overlayClass,
      dialogClass,
      contentClass,
      reallyClosed,
      $slots: {
        default: defaultSlot,
      },
    } = this;
    return (
      <div
        class={{
          [style.modal]: true,
          [style.closed]: !opened,
        }}
        ref="wrapper"
        role="presentation"
      >
        <div class={[style.outerWrap, wrapperClass]}>
          <div
            aria-hidden="true"
            onClick={closeModal}
            class={[style.overlay, overlayClass]}
          />
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
          <div tabIndex={opened ? '0' : undefined} />
          {/*
            this is the "uncommon case of an element that captures incoming tab traversal
            for a composite widget" mentioned in the rule docs
          */}
          <div
            ref="modal"
            class={[style.contentWrap, dialogClass]}
            id={modalId}
            tabIndex="-1"
            role="dialog"
            aria-modal={!!opened}
            aria-label={label}
            {...{ attrs: this.dialogAttrs || {} }}
          >
            <div
              class={[style.innerWrap, contentClass]}
              style={reallyClosed
                ? { display: 'none' }
                : undefined
              }
            >
              {defaultSlot}
            </div>
          </div>
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
          <div tabIndex={opened ? '0' : undefined} />
        </div>
      </div>
    );
  },
};
