import CdrIcon from '../CdrIcon';
export default {
  name: 'IconFire',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props, attrs: this.$attrs} }>
      {this.$slots.default}
      <path role="presentation" d="M12.264 6.35a7.317 7.317 0 01-.56-1.272c-1.412 1.586-2.64 4.13-2.682 6.17-.02 1.07.13 1.846.902 2.372.45.306 1.046.363 1.67.384 1.197.04 2.496-.315 3.06-1.123.258-.372.347-.725.364-1.135.019-.451-.06-.968-.332-1.606-.302-.711-.77-1.357-1.267-2.041-.397-.548-.808-1.116-1.155-1.748V6.35zm-.516 9.654c-1.067 0-2.118-.163-2.95-.732-1.336-.911-1.81-2.315-1.775-4.063.072-3.586 2.918-7.76 4.992-9.056a.997.997 0 011.376.316.992.992 0 01.068.937c-.004.089.002.185.003.235.004.209.028.384.076.582.086.353.243.735.48 1.167.286.522.643 1.013 1.02 1.535.54.744 1.098 1.512 1.49 2.43.245.58.456 1.305.49 2.107.034.8-.107 1.677-.724 2.562-.93 1.337-2.76 1.98-4.546 1.98zm-6.45 5.962a1 1 0 11-.55-1.922l3.639-1.041-3.64-1.04a1 1 0 01.552-1.923L12.023 18l6.725-1.961a1 1 0 11.55 1.922L15.66 19l3.639 1.04a1 1 0 11-.551 1.924L12.023 20l-6.724 1.966z"></path>
    </cdr-icon>)
  },
};
