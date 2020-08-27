import CdrIcon from '../CdrIcon';
export default {
  name: 'IconTwitter',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props, attrs: this.$attrs} }>
      {this.$slots.default}
      <path role="presentation" d="M11.992 9.052s-1.063-2.731 2.115-4.603c0 0 2.582-1.47 5.073.91 0 0 1.124-.053 2.479-1.018 0 0 .2.888-1.567 2.316 0 0 .982-.077 2.098-.785 0 0-.212 1.223-2.032 2.11 0 0 .554 9.673-9.188 11.79 0 0-5.152 1.127-8.78-1.631 0 0 3.849.388 5.893-1.69 0 0-2.565.233-3.828-2.7 0 0 1.282.214 1.804-.194 0 0-2.706.02-3.308-3.904 0 0 1.103.544 1.824.447 0 0-3.063-1.834-1.21-5.414 0 0 3.418 4.118 8.627 4.366z"></path>
    </cdr-icon>)
  },
};
