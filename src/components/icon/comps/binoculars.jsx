import CdrIcon from '../CdrIcon';
export default {
  name: 'IconBinoculars',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M10 13v1h3.996v2H10v1a4 4 0 11-7.853-1.085l1.795-8.93.093-.442A3 3 0 0110 7v4h3.997V7a3 3 0 015.965-.456l.093.442 1.795 8.93A4.003 4.003 0 0117.998 21a4 4 0 01-4-4v-4H10zm9.296.214l-1.308-6.38a1.01 1.01 0 00-.99-.835 1 1 0 00-1 1v6.536a4.016 4.016 0 013.299-.321zm-14.6 0c.408-.14.844-.215 1.298-.215.73 0 1.413.195 2.002.536V7a1 1 0 00-1-1 1.01 1.01 0 00-.99.836l-1.31 6.38zM18 19a2 2 0 100-4 2 2 0 000 4zM6.011 19a2 2 0 100-4 2 2 0 000 4z"></path>
    </cdr-icon>)
  },
};
