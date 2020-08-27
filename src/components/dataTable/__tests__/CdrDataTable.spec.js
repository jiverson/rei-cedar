import { shallowMount, mount } from '@vue/test-utils';
import CdrDataTable from 'componentdir/dataTable/CdrDataTable';

const data = {
  colHeaders: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
  rowHeaders: ['Chest', 'Sleeve Length', 'Waist', 'Hip', 'Inseam'],
  rowData: [
    {
      xs: '31.5 - 33',
      s: '35 - 38',
      m: '38 - 41',
      l: '42 - 45',
      xl: '46 - 49',
      xxl: '50 - 53',
      xxxl: '54-57',
    },
    {
      s: '33',
      m: '34',
      l: '35',
      xl: '35.5',
      xxl: '36',
      xxxl: '36.6',
      xs: 'N/A',
    },
    {
      xs: '26.5 - 27.5',
      s: '28 - 30',
      m: '32 - 34',
      l: '36 - 38',
      xl: '40 - 42',
      xxl: '44 - 46',
      xxxl: '48 - 50',
    },
    {
      xs: 'N/A',
      s: '35 - 37',
      m: '38 - 40',
      l: '41 - 43',
      xl: '44 - 46',
      xxl: '47 - 49',
      xxxl: '51 - 54',
    },
    {
      xs: '31',
      s: '32',
      m: '32',
      l: '32',
      xl: '32',
      xxl: '32',
      xxxl: '32',
    },
  ],
};

describe('CdrDataTable', () => {

  describe('mounted hook', () => {
    it('sets hasColHeaders, hasRowHeaders with boolean', () => {
      const wrapper = shallowMount(CdrDataTable, {
        propsData: {
          colHeaders: false,
          rowHeaders: false,
          rowData: data.rowData,
        }
      });

      expect(wrapper.vm.hasColHeaders).toBe(false);
      expect(wrapper.vm.hasRowHeaders).toBe(false);
    });

    it ('sets hasColHeaders, hasRowHeaders with data array', () => {
      const wrapper = shallowMount(CdrDataTable, {
        propsData: {
          colHeaders: ['test', 'test2'],
          rowHeaders: ['test', 'test2'],
          rowData: data.rowData,
        }
      });

      expect(wrapper.vm.hasColHeaders).toBe(true);
      expect(wrapper.vm.hasRowHeaders).toBe(true);
    });

    it('adds resize event watcher', async () => {
      const elem = document.createElement('div')
      if (document.body) {
        document.body.appendChild(elem)
      }
      const wrapper = shallowMount(CdrDataTable, {
        propsData: {
          colHeaders: data.colHeaders,
          rowHeaders: data.rowHeaders,
          rowData: data.rowData,
        },
        computed: {
          lockedCol: () => true,
        },
        methods: {
          setRowsContentHeight: () => true,
        },
        attachTo: elem,
      });

      const spy = spyOn(wrapper.vm, 'checkScroll');
      window.dispatchEvent(new Event('resize'));
      await wrapper.vm.$nextTick();

      expect(spy).toHaveBeenCalled();
      wrapper.destroy();
    });

    it('adds load event watcher', async () => {
      const elem = document.createElement('div')
      if (document.body) {
        document.body.appendChild(elem)
      }
      const wrapper = shallowMount(CdrDataTable, {
        propsData: {
          colHeaders: data.colHeaders,
          rowHeaders: data.rowHeaders,
          rowData: data.rowData,
        },
        computed: {
          lockedCol: () => true,
        },
        methods: {
          setRowsContentHeight: () => true,
        },
        attachTo: elem,
      });

      const spy = spyOn(wrapper.vm, 'setRowsContentHeight');
      window.dispatchEvent(new Event('load'));
      await wrapper.vm.$nextTick();

      expect(spy).toHaveBeenCalled();
      wrapper.destroy();
    });
  });

  describe('computed properties', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallowMount(CdrDataTable, {
        propsData: {
          colHeaders: ['col1', 'col2'],
          rowHeaders: ['row1', 'row2'],
          rowData: data.rowData,
          keyOrder: ["xs", "sm"],
        }
      });
    });

    it('lockedCol checks number of columns and hasRowHeaders', async () => {
      wrapper.setData({
        cols: 5,
        hasRowHeaders: true,
      });
      await wrapper.vm.$nextTick();
      expect(wrapper.vm.lockedCol).toBe(true);
    });

    it('lockedCol checks that rowData prop is used', async () => {
      wrapper = shallowMount(CdrDataTable, {
        propsData: {
          colHeaders: ['col1', 'col2'],
          rowHeaders: ['row1', 'row2'],
          keyOrder: ["xs", "sm"],
        },
        slots: {
          tbody: '<tr><td></td><td></td><td></td></tr>',
        },
      });

      wrapper.setData({
        cols: 5,
        hasRowHeaders: true,
      });
      await wrapper.vm.$nextTick();
      expect(wrapper.vm.lockedCol).toBe(false);
    });

    it('isScrolling requires lockedCol to be true', async () => {
      wrapper = shallowMount(CdrDataTable, {
        propsData: {
          colHeaders: ['col1', 'col2', 'col3'],
          rowHeaders: false,
          rowData: data.rowData,
          keyOrder: ["xs", "sm", "m"],
        }
      });

      wrapper.setData({
        clientWidth: 500,
        scrollWidth: 700,
      });
      await wrapper.vm.$nextTick();
      expect(wrapper.vm.isScrolling).toBe(false);
    });

    it('headerRowAlignHeight returns px height for empty cell align', async () => {
      wrapper.setData({
        cols: 5,
        hasRowHeaders: true,
        headerRowHeight: 45,
      });
      await wrapper.vm.$nextTick();
      expect(wrapper.vm.headerRowAlignHeight).toBe('46px');
    });
  });

  describe('methods', () => {
    it('checkScroll sets clientWidth and scrollWidth', async () => {
      const wrapper = shallowMount(CdrDataTable, {
        propsData: {
          colHeaders: ['col1', 'col2', 'col3'],
          rowHeaders: ['row1', 'row2', 'row3'],
          rowData: data.rowData,
          keyOrder: ["xs", "sm", "m"],
        }
      });

      wrapper.setData({
        clientWidth: 500,
        scrollWidth: 500,
      });
      await wrapper.vm.$nextTick();

      wrapper.vm.checkScroll();
      expect(wrapper.vm.clientWidth).not.toBe(500);
      expect(wrapper.vm.scrollWidth).not.toBe(500);
    });

    it('getCellContent', () => {
      const wrapper = shallowMount(CdrDataTable, {
        propsData: {
          colHeaders: ['col1', 'col2', 'col3'],
          rowHeaders: ['row1', 'row2', 'row3'],
          rowData: data.rowData,
          keyOrder: ["xs", "sm", "m"],
        }
      });

      expect(wrapper.vm.getCellContent({ a: 1, b: 2, c: 3 }, 'b')).toBe(2);
    });

    describe('getRowAlignHeight', () => {
      let wrapper;

      beforeEach(() => {
        wrapper = shallowMount(CdrDataTable, {
          propsData: {
            colHeaders: ['col1', 'col2', 'col3'],
            rowHeaders: ['row1', 'row2', 'row3'],
            rowData: data.rowData,
            keyOrder: ["xs", "sm", "m"],
          }
        });
      });

      it('already aligned', async () => {
        await wrapper.vm.$nextTick();
        // wait for next tick to finish setting up test
        wrapper.setData({
          rowHeights: [{ th: 25, td: 24 }],
        });
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.getRowAlignHeight('th', 0)).toBe(null);
        });

      it('returns null when not the changing elem', async () => {
        wrapper.setData({
          rowHeights: [{ th: 30, td: 12 }],
        });
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.getRowAlignHeight('th', 0)).toBe(null);
      });

      xit('returns a pixel value', async () => {
        wrapper.setData({
          rowHeights: [{ th: 30, td: 12 }],
        });
        await wrapper.vm.$nextTick();

        expect(wrapper.vm.getRowAlignHeight('td', 0)).toBe('29px');

        expect(wrapper.vm.getRowAlignHeight('td', 0)).toBe('29px');
      });
    });

    it('default functions for rowData, keyOrder prop', () => {
      const wrapper = shallowMount(CdrDataTable, {
        slots: {
          tbody: '<tr><td></td><td></td><td></td></tr>',
        },
      });

      expect(wrapper.vm.rowData).toEqual([]);
      expect(wrapper.vm.keyOrder).toEqual([]);
    });
  });
});
