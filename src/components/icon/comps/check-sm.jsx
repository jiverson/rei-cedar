import CdrIcon from '../CdrIcon';
export default {
  name: 'IconCheckSm',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props, attrs: this.$attrs} }>
      {this.$slots.default}
      <path d="M16.77 8.645a1 1 0 10-1.533-1.286l-5.95 7.083-1.52-1.817a1 1 0 10-1.533 1.285l2.227 2.66a.999.999 0 001.565.1l6.743-8.025z"></path>
    </cdr-icon>)
  },
};
