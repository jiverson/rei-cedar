import { shallowMount, mount } from '@vue/test-utils';
import CdrButton from 'componentdir/button/CdrButton';
import sinon from 'sinon'

describe('CdrButton', () => {
  it('renders correctly', () => {
    const wrapper = mount(CdrButton);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('sets default type prop correctly', () => {
    const wrapper = shallowMount(CdrButton);
    expect(wrapper.attributes().type).toBe('button');
  });

  it('sets type attr correctly', () => {
    const wrapper = shallowMount(CdrButton, {
      propsData: {
        type: 'reset',
      },
    });
    expect(wrapper.attributes().type).toBe('reset');
  });

  it('click function triggers correctly', () => {
    const spy = sinon.spy();
    const wrapper = shallowMount(CdrButton, {
      listeners: {
        click: spy
      },
    });
    wrapper.trigger('click');
    expect(spy.calledOnce).toBeTruthy();
  });

  it('computes base class correctly', () => {
    const wrapper = shallowMount(CdrButton, {
      propsData: {
        el: 'a',
      },
    });

    expect(wrapper.classes()).toContain('cdr-button');
  });

  it('adds custom size class when icon only', () => {
    const wrapper = shallowMount(CdrButton, {
      propsData: {
        size: 'large',
        iconOnly: true,
      },
    });
    expect(wrapper.vm.buttonSizeClass).toBe('cdr-button--icon-only-large');
  })

  it('does not add icon class when slot is unused', () => {
    const wrapper = shallowMount(CdrButton);
    expect(wrapper.vm.iconClass).toBe('');
  });

  it('adds class for icon only', () => {
    const wrapper = shallowMount(CdrButton, {
      propsData: {
        iconOnly: true,
        withBackground: true,
      }
    });
    expect(wrapper.classes()).toContain('cdr-button--icon-only');
    expect(wrapper.classes()).toContain('cdr-button--with-background');
  });

  it('adds icon-left class when icon slot is used', () => {
    const wrapper = shallowMount(CdrButton, {
      slots: {
        default: [ 'default slot for text' ],
        icon: '<div />',
      },
    });

    expect(wrapper.classes()).toContain('cdr-button--has-icon-left');
  });


  it('adds icon left class when slot is used', () => {
    const wrapper = shallowMount(CdrButton, {
      slots: {
        default: [ 'default slot for text' ],
        'icon-left': '<div />',
      },
    });

    expect(wrapper.classes()).toContain('cdr-button--has-icon-left');
  });


  it('adds icon right class when slot is used', () => {
    const wrapper = shallowMount(CdrButton, {
      slots: {
        default: [ 'default slot for text' ],
        'icon-right': '<div />',
      },
    });

    expect(wrapper.classes()).toContain('cdr-button--has-icon-right');
  });

  it('renders a link', () => {
    const wrapper = shallowMount(CdrButton, {
      propsData: {
        tag: 'a',
      },
    });
    expect(wrapper.element.tagName).toBe('A');
  });
});
