import CdrIcon from '../CdrIcon';
export default {
  name: 'IconExperiencesSnowsports',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M18.802 15.803l-2.46-1.426 2.025-.54a.367.367 0 00.262-.457.378.378 0 00-.457-.263l-2.745.735-2.558-1.477 2.55-1.47 2.745.735a.375.375 0 00.458-.263.375.375 0 00-.263-.457l-2.025-.54 2.468-1.425a.37.37 0 00.135-.51.372.372 0 00-.51-.135l-.645.367-.008.008-1.815 1.05.54-2.025a.375.375 0 00-.262-.457.385.385 0 00-.458.262l-.735 2.753-2.55 1.47v-2.94l2.01-2.01a.371.371 0 000-.533.378.378 0 00-.532 0L12.494 7.74V4.875a.371.371 0 00-.375-.375.371.371 0 00-.375.375v2.857l-1.477-1.477a.385.385 0 00-.533 0c-.15.143-.142.383 0 .532l2.01 2.01v2.933L9.21 10.26l-.735-2.745a.383.383 0 00-.457-.27.385.385 0 00-.27.465l.54 2.025-1.823-1.057-.007-.008-.645-.367a.37.37 0 00-.51.134.368.368 0 00.135.51L7.92 10.38l-2.025.54a.372.372 0 10.195.72l2.745-.735 2.535 1.47-2.542 1.47-2.745-.735a.38.38 0 00-.458.263.375.375 0 00.263.457l2.025.54-2.475 1.433a.37.37 0 00-.135.51c.105.18.33.24.51.135l.645-.368h.007l1.83-1.057-.54 2.024a.375.375 0 00.36.473.376.376 0 00.36-.277l.735-2.745 2.543-1.47v2.947l-2.018 2.01a.385.385 0 000 .532c.143.15.383.15.533 0l1.485-1.477v2.835c0 .21.165.375.375.375s.375-.165.375-.375v-2.843l1.485 1.485c.15.15.382.15.532 0a.371.371 0 000-.532l-2.01-2.01v-2.947l2.55 1.47.735 2.745a.376.376 0 00.36.277c.03 0 .068-.008.098-.015a.367.367 0 00.262-.457l-.54-2.025 1.815 1.05s.008 0 .008.007l.645.375a.37.37 0 00.51-.135c.09-.188.03-.42-.15-.518z"></path>
    </cdr-icon>)
  },
};
