<template>
  <div data-backstop="buttons">
    <div
      class="cdr-space-inset-one-x"
      v-for="(section, index) in data"
      :key="index"
      :data-backstop="section.backstop ? section.backstop : null"
    >
      <cdr-text
        tag="h3"
        modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
      >
        {{ section.title }}
      </cdr-text>
      <cdr-text v-if="index === 0">
        Clicks: {{ clickCount }}
      </cdr-text>
      <cdr-button
        v-for="(button, index2) in section.buttons"
        :key="index2"
        :size="button.size"

        :full-width="button.fullWidth"
        :type="button.type"
        :disabled="button.disabled"
        @click="clickCount++"
      >
        {{ button.label }}
      </cdr-button>
    </div>
    <div
      class="cdr-space-inset-one-x"
      data-backstop="cdr-button--anchor"
    >
      <cdr-text
        tag="h3"
        modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
      >
        Primary Anchor
      </cdr-text>
      <cdr-button
        tag="a"
        href="https://rei.com"
        size="large"
      >
        Large Link
      </cdr-button>

      <cdr-button
        tag="a"
        href="https://rei.com"
        size="small"
      >
        Small Link
      </cdr-button>
    </div>
    <div
      class="cdr-space-inset-one-x"
    >
      <cdr-text
        tag="h3"
        modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
      >
        Primary Responsive
      </cdr-text>
      <cdr-button
        size="large large@xs medium@sm small@lg"
      >
        Responsive
      </cdr-button>
    </div>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'Default',
  components: {
    ...Components,
  },
  data: function data() {
    return {
      clickCount: 0,
      data: [
        {
          title: 'Default sizes',
          backstop: 'cdr-button--size',
          buttons: [
            {
              label: 'Large',
              disabled: false,
              size: 'large',
              space: 'cdr-mr-space-one-x',
              fullWidth: false,
            },
            {
              label: 'Medium',
              disabled: false,
              size: 'medium',
              space: 'cdr-mr-space-one-x',
              fullWidth: false,
            },
            {
              label: 'Small',
              disabled: false,
              size: 'small',
              space: '',
              fullWidth: false,
            },
          ],
        },
        {
          title: 'Disabled',
          backstop: 'cdr-button--disabled',
          buttons: [
            {
              label: 'Large',
              disabled: true,
              size: 'large',
              space: 'cdr-mr-space-one-x',
              fullWidth: false,
            },
            {
              label: 'Medium',
              disabled: true,
              size: 'medium',
              space: 'cdr-mr-space-one-x',
              fullWidth: false,
            },
            {
              label: 'Small',
              disabled: true,
              size: 'small',
              space: '',
              fullWidth: false,
            },
          ],
        },
      ],
    };
  },
};
</script>
