import style from './styles/CdrTooltip.scss';
import CdrPopup from '../popup/CdrPopup';
import propValidator from '../../utils/propValidator';

export default {
  name: 'CdrTooltip',
  components: {
    CdrPopup,
  },
  props: {
    position: {
      type: String,
      required: false,
      default: 'top',
      validator: (value) => propValidator(
        value,
        ['top', 'bottom', 'left', 'right'],
      ),
    },
    autoPosition: {
      type: Boolean,
      default: true,
    },
    id: {
      type: String,
      required: true,
    },
    contentClass: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      style,
      open: false,
      openHandler: undefined,
      closeHandler: undefined,
      timeout: undefined,
    };
  },
  mounted() {
    this.addHandlers();
    const trigger = this.$refs.trigger.children[0];
    if (trigger) trigger.setAttribute('aria-describedby', this.id);
  },
  methods: {
    openTooltip(e) {
      if (this.timeout) clearTimeout(this.timeout);
      this.open = true;
      this.$emit('opened', e);
    },
    closeTooltip(e) {
      this.timeout = setTimeout(() => {
        this.open = false;
        this.$emit('closed', e);
      }, 250);
    },
    addHandlers() {
      this.openHandler = this.openTooltip.bind(this);
      this.closeHandler = this.closeTooltip.bind(this);

      const triggerElement = this.$refs.trigger.children[0];
      const popupElement = this.$refs.popup.$el;
      if (triggerElement) {
        triggerElement.addEventListener('mouseover', this.openHandler);
        triggerElement.addEventListener('focus', this.openHandler);

        triggerElement.addEventListener('mouseleave', this.closeHandler);
        triggerElement.addEventListener('blur', this.closeHandler);

        popupElement.addEventListener('mouseover', this.openHandler);
        popupElement.addEventListener('mouseleave', this.closeHandler);
      }
    },
  },
  render() {
    return (
      <div
        class={this.style['cdr-tooltip--wrapper']}
      >
        <div ref="trigger">
          { this.$slots.trigger }
        </div>
        <cdr-popup
          class={this.style['cdr-tooltip']}
          contentClass={ this.contentClass }
          role="tooltip"
          ref="popup"
          position={ this.position }
          autoPosition={ this.autoPosition }
          opened={ this.open }
          id={this.id}
          onClosed={ this.closeTooltip }
        >
          { this.$slots.default }
        </cdr-popup>
      </div>
    );
  },
};