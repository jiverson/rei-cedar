import CdrIcon from '../CdrIcon';
export default {
  name: 'IconVerifiedPurchaser',
  components: {
    CdrIcon,
  },
  extends: CdrIcon,
  render() {
    return (<cdr-icon {...{props: this.$props} }>
      {this.$slots.default}
      <path d="M13.51 2.586l.854.795a.83.83 0 00.575.217h1.21c1.175 0 2.13.904 2.13 2.016v1.134a.75.75 0 00.241.539l.855.8c.833.782.833 2.052.002 2.83l-.857.802a.745.745 0 00-.24.539v1.134c0 1.1-.956 1.997-2.13 1.997H16V21a1 1 0 01-1.202.98l-.114-.031L12 21.054l-2.684.895a1 1 0 01-1.31-.83L8 21v-5.614h-.15c-1.174 0-2.13-.895-2.13-1.996v-1.134a.749.749 0 00-.24-.54l-.855-.8a1.914 1.914 0 010-2.83l.857-.801a.745.745 0 00.24-.54V5.612c0-1.112.956-2.016 2.13-2.016h1.21a.835.835 0 00.576-.215l.855-.797c.83-.779 2.183-.779 3.016.002zM14 15.955l-.49.46c-.417.39-.964.585-1.51.585a2.202 2.202 0 01-1.51-.584l-.49-.461v3.657l1.684-.56a1 1 0 01.507-.034l.125.033 1.684.561v-3.657zM11.905 4.017l-.048.03-.852.793a2.817 2.817 0 01-1.728.748l-.214.008h-1.21c-.075 0-.114.022-.126.021l-.005-.005v1.133a2.74 2.74 0 01-.741 1.867l-.133.133-.809.755.808.758c.505.472.818 1.12.866 1.809l.007.189v1.134c0-.027.021-.013.08-.006l.05.003h1.21a2.85 2.85 0 011.782.626l.163.142.853.801A.212.212 0 0012 15a.26.26 0 00.108-.021l.034-.023.855-.801a2.847 2.847 0 011.727-.758l.215-.008h1.21c.078 0 .115-.02.127-.01l.004.013v-1.134c0-.698.27-1.362.741-1.867l.133-.133.806-.755-.808-.757a2.753 2.753 0 01-.865-1.81l-.007-.188V5.614c0 .015-.024-.004-.081-.013l-.05-.003h-1.21a2.837 2.837 0 01-1.775-.612l-.162-.14-.86-.801c-.051-.048-.161-.057-.237-.028z"></path>
    </cdr-icon>)
  },
};