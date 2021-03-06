import CdrIcon from '../CdrIcon';
export default {
  name: 'IconBookmarkStroke',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props, attrs: this.$attrs} }>
      {this.$slots.default}
      <path role="presentation" d="M5 2h14a1 1 0 011 1v18a1 1 0 01-1.6.8L12.002 17 5.6 21.8A1 1 0 014 21V3a1 1 0 011-1zm1 2v15l5.402-4.05a1 1 0 011.2 0L18 19V4H6z"></path>
    </cdr-icon>)
  },
};
