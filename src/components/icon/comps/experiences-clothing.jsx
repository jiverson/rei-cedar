import CdrIcon from '../CdrIcon';
export default {
  name: 'IconExperiencesClothing',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M17.505 11.355c-.502-.322-.997-.818-1.102-2.888-.03-.652-.6-1.162-1.29-1.162h-.54V5.903a1.38 1.38 0 00-.023-.248v-.03c-.113-.645-.607-1.125-1.208-1.125H9.909c-.6 0-1.095.487-1.208 1.14v.008a1.403 1.403 0 00-.022.255v1.395h-.54c-.69 0-1.26.51-1.29 1.162-.106 2.077-.6 2.565-1.103 2.887-.308.203-.495.57-.495.983v6.292c0 .683.585 1.23 1.298 1.23h10.155c.712 0 1.297-.555 1.297-1.23V12.33c0-.405-.188-.773-.495-.975zm-.765 5.13l-1.875-1.875h2.385v1.875h-.51zm-10.74 0V14.61h2.385L6.51 16.485H6zm0-4.147c0-.06.015-.255.15-.353h4.725v1.875H6v-1.522zm11.1-.353c.142.098.15.293.15.353v1.522h-5.625v-.563H12c.21 0 .375-.165.375-.375a.371.371 0 00-.375-.375h-.375v-.562H17.1zM9.352 14.7c.03-.03.046-.06.06-.09h1.463v1.875H7.567L9.352 14.7zm2.273 1.223H12c.21 0 .375-.165.375-.376a.371.371 0 00-.375-.375h-.375v-.562h2.213a.33.33 0 00.06.09l1.784 1.785h-4.057v-.563zm4.027-7.425c.068 1.372.308 2.19.676 2.737h-4.703v-.563H12c.21 0 .375-.165.375-.375A.371.371 0 0012 9.922h-.375V9.36h1.71c.652 0 1.185-.585 1.222-1.313h.548c.293 0 .54.203.547.45zM9.428 6.63c.15.06.307.105.48.105h.967V8.61h-.967c-.263 0-.48-.3-.48-.652V6.63zm2.197 1.417H12c.21 0 .375-.165.375-.375A.371.371 0 0012 7.299h-.375v-.563h1.71c.172 0 .33-.045.48-.105v1.327c0 .353-.217.653-.48.653h-1.71v-.563zM9.908 5.25h3.427c.21 0 .39.195.45.457-.06.165-.24.278-.443.278H9.909a.486.486 0 01-.45-.3c.075-.247.247-.435.45-.435zm-2.31 3.248c.007-.248.255-.45.54-.45h.547c.045.727.57 1.312 1.223 1.312h.967v1.875H6.923c.367-.547.607-1.365.675-2.737zM6 18.63v-1.395h4.875v1.875H6.548c-.3 0-.548-.218-.548-.48zm10.703.48h-5.078v-.563H12c.21 0 .375-.165.375-.375a.371.371 0 00-.375-.375h-.375v-.562h5.625v1.395c0 .262-.247.48-.547.48z"></path>
    </cdr-icon>)
  },
};