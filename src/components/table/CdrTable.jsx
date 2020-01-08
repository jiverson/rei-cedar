import clsx from 'clsx';
import modifier from '../../mixins/modifier';
import style from './styles/CdrTable.scss';

export default {
  name: 'CdrTable',
  mixins: [modifier],
  props: {
    striped: {
      type: Boolean,
      default: true,
    },
    border: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      style,
      baseClass: 'cdr-table',
    };
  },
  computed: {
    tableClasses() {
      return {
        [this.style[this.baseClass]]: true,
        [this.modifyClassName(this.baseClass, 'striped')]: this.striped,
        [this.modifyClassName(this.baseClass, 'border')]: this.border,
      };
    },
  },
  render() {
    return (
      <table class={clsx(this.tableClasses)}>
        {this.$slots.default}
      </table>
    );
  },
};
