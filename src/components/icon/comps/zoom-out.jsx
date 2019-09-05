
import CdrIcon from '../CdrIcon';

export default {
  name: 'IconZoomOut',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...this.$props}>
      {this.$slots.default}
      <path d="M20.7061671 19.2960634c.3905243.3905243.3905243 1.0236893 0 1.4142136-.3905243.3905243-1.0236893.3905243-1.4142136 0l-4.2428307-4.2469407C13.7873239 17.4273642 12.2105351 18 10.5 18 6.35786438 18 3 14.6421356 3 10.5 3 6.35786438 6.35786438 3 10.5 3c4.1421356 0 7.5 3.35786438 7.5 7.5 0 1.7105351-.5726358 3.2873239-1.5366637 4.5491228l4.2428308 4.2469406zM10.5 16c3.0375661 0 5.5-2.4624339 5.5-5.5C16 7.46243388 13.5375661 5 10.5 5 7.46243388 5 5 7.46243388 5 10.5c0 3.0375661 2.46243388 5.5 5.5 5.5zM7.25 9.75h6.5c.4142136 0 .75.3357864.75.75s-.3357864.75-.75.75h-6.5c-.41421356 0-.75-.3357864-.75-.75s.33578644-.75.75-.75z"></path>
    </cdr-icon>)
  },
};