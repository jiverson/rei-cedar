import debounce from 'lodash-es/debounce';
import clsx from 'clsx';
import {
  CdrColorBackgroundPrimary, CdrSpaceOneX, CdrSpaceHalfX,
} from '@rei/cdr-tokens/dist/js/cdr-tokens.esm';
import modifier from '../../mixins/modifier';
import size from '../../mixins/size';
import style from './styles/CdrTabs.scss';

export default {
  name: 'CdrTabs',
  mixins: [modifier, size],
  props: {
    height: {
      type: String,
      default: '240px',
    },
    activeTab: {
      type: Number,
      default: 0,
    },
    backgroundColor: {
      type: String,
      default: CdrColorBackgroundPrimary,
    },
  },
  data() {
    return {
      tabs: [],
      underlineOffsetX: 0,
      underlineWidth: 0,
      underlineScrollX: 0,
      activeTabIndex: 0,
      headerWidth: 0,
      headerOverflow: false,
      overflowLeft: false,
      overflowRight: false,
      animationInProgress: false,
      style,
    };
  },
  computed: {
    baseClass() {
      return 'cdr-tabs';
    },
    underlineStyle() {
      return {
        transform: `translateX(${this.underlineOffsetX}px)`,
        width: `${this.underlineWidth}px`,
      };
    },
    gradientLeftStyle() {
      const gradient = `linear-gradient(to left, rgba(255, 255, 255, 0), ${this.backgroundColor})`;
      return {
        background: gradient,
      };
    },
    gradientRightStyle() {
      const gradient = `linear-gradient(to right, rgba(255, 255, 255, 0), ${this.backgroundColor})`;
      return {
        background: gradient,
      };
    },
  },
  mounted() {
    this.tabs = (this.$slots.default || [])
      .map((vnode) => vnode.componentInstance)
      .filter((tab) => tab); // get vue component children in the slot

    this.activeTabIndex = this.getNextTab(this.activeTab);

    if (this.tabs[this.activeTabIndex] && this.tabs[this.activeTabIndex].setActive) {
      this.tabs[this.activeTabIndex].setActive(true);
    }

    this.$nextTick(() => {
      this.headerWidth = this.getHeaderWidth();
      this.calculateOverflow();
      setTimeout(() => {
        this.updateUnderline();
      }, 500);
    });
    // Check for header overflow on window resize for gradient behavior.
    window.addEventListener('resize', debounce(() => {
      this.headerWidth = this.getHeaderWidth();
      this.calculateOverflow();
      this.updateUnderline();
    }, 500));
    // Check for header overflow on widow resize for gradient behavior.
    this.$refs.cdrTabsHeader.parentElement.addEventListener('scroll', debounce(() => {
      this.calculateOverflow();
      this.updateUnderline();
    }, 50));
  },
  methods: {
    getNextTab(startIndex) {
      for (let i = startIndex; i < this.tabs.length; i += 1) {
        if (!this.tabs[i].disabled) {
          return i;
        }
      }

      if (startIndex !== 0) {
        for (let k = 0; k < startIndex; k += 1) {
          if (!this.tabs[k].disabled) {
            return k;
          }
        }
      }

      return -1;
    },
    getPreviousTab(startIndex) {
      for (let i = startIndex; i > -1; i -= 1) {
        if (!this.tabs[i].disabled) {
          return i;
        }
      }

      if (startIndex !== this.tabs.length - 1) {
        for (let k = this.tabs.length - 1; k > startIndex; k -= 1) {
          if (!this.tabs[k].disabled) {
            return k;
          }
        }
      }

      return -1;
    },
    handleClick: debounce(function handleClickCallback(tabClicked) {
      const newIndex = this.tabs.findIndex((tab) => tabClicked.name === tab.name);
      this.changeTab(newIndex);
    }, 500, { leading: true, trailing: false }),
    changeTab(newIndex) {
      const oldIndex = this.activeTabIndex;

      this.hideScrollBar();
      if (newIndex > oldIndex) {
        this.tabs[oldIndex].setAnimationDirection('exit-left');
        this.tabs[oldIndex].setActive(false);
        setTimeout(() => {
          this.tabs[newIndex].setActive(true);
          this.tabs[newIndex].setAnimationDirection('enter-right');
        }, 200);
      } else {
        this.tabs[oldIndex].setAnimationDirection('exit-right');
        this.tabs[oldIndex].setActive(false);
        setTimeout(() => {
          this.tabs[newIndex].setActive(true);
          this.tabs[newIndex].setAnimationDirection('enter-left');
        }, 200);
      }
      this.activeTabIndex = newIndex;
      this.updateUnderline();
      this.$refs.cdrTabsHeader.children[this.activeTabIndex].focus();
    },
    rightArrowNav: debounce(function handleRightArrow() {
      const nextTab = this.getNextTab(this.activeTabIndex + 1);
      if (nextTab !== -1) {
        this.changeTab(nextTab);
      }
    }, 300, { leading: true, trailing: false }),
    leftArrowNav: debounce(function handleLeftArrow() {
      const previousTab = this.getPreviousTab(this.activeTabIndex - 1);
      if (previousTab !== -1) {
        this.changeTab(previousTab);
      }
    }, 300, { leading: true, trailing: false }),
    calculateOverflow() {
      let containerWidth = 0;
      if (this.$refs.cdrTabsContainer) {
        containerWidth = this.$refs.cdrTabsContainer.offsetWidth;
      }
      this.headerOverflow = this.headerWidth > containerWidth;
      if (this.headerOverflow) {
        // Get Scroll Position
        const scrollX = this.$refs.cdrTabsHeader.parentElement.scrollLeft;
        this.overflowLeft = scrollX > 1;
        this.overflowRight = (scrollX + 1) < (this.headerWidth - containerWidth);
      } else {
        this.overflowLeft = false;
        this.overflowRight = false;
      }
    },
    updateUnderline() {
      const elements = Array.from(this.$refs.cdrTabsHeader.children);
      if (elements.length > 0) {
        const activeTab = elements[this.activeTabIndex];
        const activeRect = activeTab.getBoundingClientRect();
        const parentRect = this.$refs.cdrTabsHeader.getBoundingClientRect();
        const offset = activeRect.x - parentRect.x;

        this.underlineOffsetX = offset
          - this.$refs.cdrTabsHeader.parentElement.scrollLeft;
        this.underlineWidth = activeRect.width;

        // shrink/hide the underline if it scrolls outside the container
        if (this.underlineOffsetX + this.underlineWidth >= parentRect.width) {
          this.underlineWidth = Math.max(0, parentRect.width - this.underlineOffsetX);
          this.underlineOffsetX = Math.min(this.underlineOffsetX, parentRect.width);
        } else if (this.underlineOffsetX < 0) {
          this.underlineWidth = Math.max(0, this.underlineWidth + this.underlineOffsetX);
          this.underlineOffsetX = 0;
        }
      }
    },
    handleDownArrowNav() {
      if (!this.animationInProgress) {
        this.$el.lastElementChild.children[this.activeTabIndex].focus();
      }
    },
    setFocusToActiveTabHeader() {
      this.$refs.cdrTabsHeader.children[this.activeTabIndex].focus();
    },
    getHeaderWidth() {
      let headerElements = [];
      if (this.$refs.cdrTabsHeader) {
        headerElements = Array.from(this.$refs.cdrTabsHeader.children);
      }
      let totalWidth = 0;
      headerElements.forEach((element, i) => {
        // account for margin-left on header elements
        if (i > 0) {
          totalWidth += this.size === 'small' ? Number(CdrSpaceHalfX) : Number(CdrSpaceOneX);
        }
        totalWidth += element.offsetWidth || 0;
      });
      return totalWidth;
    },
    hideScrollBar() {
      const containerRef = this.$refs.cdrTabsContainer.style;
      const slotRef = this.$refs.slotWrapper.style;
      window.addEventListener('transitionend', () => {
        containerRef.setProperty('overflow-x', 'unset');
        slotRef.setProperty('overflow-y', 'unset');
      }, { once: true });
      containerRef.setProperty('overflow-x', 'hidden');
      slotRef.setProperty('overflow-y', 'hidden');
    },
    getTabEl(tab) {
      return tab.disabled ? (
        <button
          class={clsx(
            this.style['cdr-tabs__header-item'],
            this.style['cdr-tabs__header-item--disabled'],
          )}
          disabled
        >
          {tab.name}
        </button>
      ) : (
        <button
          role="tab"
          aria-selected={tab.active}
          aria-controls={tab.id}
          id={tab.ariaLabelledby}
          key={tab.id}
          class={clsx(
            tab.active ? this.style['cdr-tabs__header-item-active'] : '',
            this.style['cdr-tabs__header-item'],
          )}
          tabIndex={tab.active ? 0 : -1}
          vOn:click_prevent={(e) => this.handleClick(tab, e)}
          js-name={ tab.name }
        >
          { tab.name }
        </button>
      );
    },
  },
  render() {
    return (
      <div
        class={clsx(this.style[this.baseClass], this.modifierClass, this.sizeClass)}
        ref="cdrTabsContainer"
        style={{ height: this.height }}
      >
        <div
          class={this.style['cdr-tabs__gradient-container']}
          vOn:keyup_right={this.rightArrowNav}
          vOn:keyup_left={this.leftArrowNav}
          vOn:keydown_down_prevent={this.handleDownArrowNav}
        >
          <div class={clsx(
            this.style['cdr-tabs__gradient'],
            this.style['cdr-tabs__gradient--left'],
            this.overflowLeft ? this.style['cdr-tabs__gradient--active'] : '',
          )}
            style={this.gradientLeftStyle}
          ></div>
          <nav
            class={this.style['cdr-tabs__header-container']}
          >
            <div
              class={this.style['cdr-tabs__header']}
              role="tablist"
              ref="cdrTabsHeader"
            >
              {this.tabs.map((tab) => this.getTabEl(tab))}
            </div>
          </nav>
          <div class={clsx(
            this.style['cdr-tabs__gradient'],
            this.style['cdr-tabs__gradient--right'],
            this.overflowRight ? this.style['cdr-tabs__gradient--active'] : '',
          )}
            style={this.gradientRightStyle}
          ></div>
          <div
            class={this.style['cdr-tabs__underline']}
            style={this.underlineStyle}
          />
        </div>
        <div
          class={this.style['cdr-tabs__content-container']}
          ref="slotWrapper"
        >
          {this.$slots.default}
        </div>
      </div>
    );
  },
};
