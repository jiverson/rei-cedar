<template>
  <div>
    <cdr-text
      tag="h2"
      modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
    >
      Text Inputs
    </cdr-text>
    <div data-backstop="input-target">
      <cdr-input
        class="demo-input"
        v-model="defaultModel"
        label="Default"
        :background="backgroundColor"
      />

      <cdr-input
        class="demo-input"
        v-model="requiredModel"
        label="Required"
        required
        :background="backgroundColor"
      />

      <cdr-input
        class="demo-input"
        v-model="optionalModel"
        label="Optional"
        optional
        :background="backgroundColor"
      />
    </div>

    <cdr-input
      class="demo-input"
      v-model="hiddenModel"
      label="This has no label"
      hide-label
      placeholder="hidden-label"
      :background="backgroundColor"
    />

    <cdr-input
      class="demo-input"
      v-model="disabledModel"
      label="Disabled Input"
      placeholder="I am disabled"
      data-backstop="input-disabled"
      disabled
      :background="backgroundColor"
    />

    <cdr-input
      class="demo-input"
      v-model="sizeModel"
      label="Large Input"
      placeholder="Large Input"
      size="large"
      :background="backgroundColor"
    />
    <cdr-input
      class="demo-input"
      v-model="sizeModel"
      label="Large@xs Input"
      placeholder="Large@xs Input"
      size="large@xs"
      :background="backgroundColor"
    />
    <cdr-input
      class="demo-input"
      v-model="sizeModel"
      label="Large@sm Input"
      placeholder="Large@sm Input"
      size="large@sm"
      :background="backgroundColor"
    />
    <cdr-input
      class="demo-input"
      v-model="sizeModel"
      label="Large@md Input"
      placeholder="Large@md Input"
      size="large@md"
      :background="backgroundColor"
    />
    <cdr-input
      class="demo-input"
      v-model="sizeModel"
      label="Large@lg Input"
      placeholder="Large@lg Input"
      size="large@lg"
      :background="backgroundColor"
    />

    <cdr-input
      class="demo-input"
      v-model="requiredWithIcons"
      id="required-with-icon"
      placeholder="Required with Icon"
      label="Required with Icon"
      required
      type="email"
      :background="backgroundColor"
    >
      <template slot="info-action">
        <cdr-link tag="button" type="button">
          <icon-information-stroke inherit-color />
          <span class="cdr-display-sr-only">Information!</span>
        </cdr-link>
      </template>
      <template slot="pre-icon">
        <cdr-icon
          use="#twitter"
        />
      </template>
      <template slot="post-icon">
        <cdr-icon
          use="#check-lg"
        />
      </template>
      <template slot="helper-text">
        This is helper text. Input length: {{ requiredWithIcons.length }}
      </template>
    </cdr-input>

    <form>
      <cdr-input
        class="demo-input"
        v-model="formWithButtons"
        id="form-example"
        placeholder="For testing icon/button placement with autofill"
        label="Form with Two Buttons"
        required
        type="email"
        autocomplete="username"
        :background="backgroundColor"
      >
        <template slot="pre-icon">
          <cdr-icon
            use="#twitter"
          />
        </template>
        <template slot="post-icon">
          <cdr-tooltip
            class="cdr-input__button"
            id="input-tooltip"
          >
            <cdr-button
              :icon-only="true"
              slot="trigger"
              aria-label="navigate"
            >
              <icon-map />
            </cdr-button>

            hey where am i?
          </cdr-tooltip>
          <cdr-button
            :icon-only="true"
            class="cdr-input__button"
            aria-label="close"
          >
            <icon-x-lg />
          </cdr-button>
        </template>
      </cdr-input>
    </form>

    <cdr-input
      class="demo-input"
      v-model="helperValidationModel"
      placeholder=""
      :error="helperValidationError"
      @blur="validate"
      label="Top helper with validation"
      :background="backgroundColor"
    >
      <template slot="helper-text-top">
        Must be 4 or less characters
      </template>

      <template
        slot="error"
        v-if="helperValidationError"
      >
        ERROR ERROR
      </template>

      <template slot="info">
        <cdr-link
          modifier="standalone"
          href="#/inputs"
        >
          Support link
        </cdr-link>
      </template>
    </cdr-input>

    <cdr-input
      class="demo-input"
      :required="true"
      v-model="megaModel"
      :error="megaErr"
      label="Everything at the same time"
      @blur="megaErr = false"
      size="large"
    >
      <icon-map slot="pre-icon" />
      <template slot="helper-text-top">
        Hey im on top of the input!
      </template>
      <template slot="helper-text-bottom">
        Hey im below the input!
      </template>
      <template slot="info">
        <cdr-link
          href="#baz"
          modifier="standalone"
        >
          Hey im also on top of the input!
        </cdr-link>
      </template>
      <template slot="info-action">
        <cdr-link
          tag="button"
          type="button"
        >
          <span class="cdr-display-sr-only">I trigger some sort of action!</span>
          <icon-check-stroke inherit-color />
        </cdr-link>
      </template>
      <template slot="post-icon">
        <cdr-tooltip
          class="cdr-input__button"
          id="mega-tooltip"
        >
          <cdr-button
            slot="trigger"
            :icon-only="true"
            @click="megaErr = 'An error has occurred please fix it'"
            size="large"
            aria-label="Click me to cause an error"
          >
            <icon-x-stroke />
          </cdr-button>
          I put the input into an error state!
        </cdr-tooltip>
        <cdr-popover
          class="cdr-input__button"
          id="mega-popover"
        >
          <cdr-button
            slot="trigger"
            :icon-only="true"
            size="large"
            aria-label="Hello"
          >
            <icon-information-stroke />
          </cdr-button>
          Hey What's Up?
        </cdr-popover>
      </template>
    </cdr-input>

    <cdr-input
      class="demo-input "
      v-model="multiRowModel"
      :rows="10"
      placeholder="Multi Line Input/TextArea"
      label="Multi Line Input/TextArea"
      :background="backgroundColor"
    />
    <cdr-input
      class="demo-input "
      v-model="masterModel"
      @input="onMasterInput"
      placeholder="What would you like to set all input values to?"
      label="Master input that overwrites all other inputs on this page"
      :background="backgroundColor"
    />

    <div class="demo-input">
      Default Input Value = {{ defaultModel }}
    </div>
    <div class="demo-input">
      Required Input Value = {{ requiredModel }}
    </div>
    <div class="demo-input">
      Optional Input Value = {{ optionalModel }}
    </div>
    <div class="demo-input">
      Hidden Input Value = {{ hiddenModel }}
    </div>
    <div class="demo-input">
      Disabled Input Value = {{ disabledModel }}
    </div>
    <div class="demo-input">
      With Icons Input Value = {{ requiredWithIcons }}
    </div>
    <div class="demo-input">
      Form With Buttons Value = {{ formWithButtons }}
    </div>
    <div class="demo-input">
      Helper/Validation Input Value = {{ helperValidationModel }}
    </div>
    <div class="demo-input">
      Multi Row Input Value = {{ multiRowModel }}
    </div>
    <div class="demo-input">
      Size Inputs Value = {{ sizeModel }}
    </div>

    <div class="demo-input">
      Mega Input Value = {{ megaModel }}
    </div>
    <div class="demo-input">
      Master Inputs Value = {{ masterModel }}
    </div>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'Inputs',
  components: {
    ...Components,
  },
  data() {
    return {
      defaultModel: '',
      requiredModel: '',
      optionalModel: '',
      hiddenModel: '',
      disabledModel: '',
      helperValidationModel: '',
      helperValidationError: false,
      requiredWithIcons: '',
      multiRowModel: '',
      sizeModel: '',
      formWithButtons: '',
      masterModel: '',
      megaModel: '',
      megaErr: false,
      backgroundColor: 'primary',
    };
  },
  watch: {
    $route(to) {
      this.setBackground(to.query.background);
    },
  },
  mounted() {
    this.setBackground(this.$router.currentRoute.query.background);
  },
  methods: {
    validate() {
      this.helperValidationError = this.helperValidationModel.length > 4;
    },
    onMasterInput(value, e) {
      console.log('On Master Input value = ', value, ' e = ', e); // eslint-disable-line
      this.defaultModel = value;
      this.requiredModel = value;
      this.optionalModel = value;
      this.hiddenModel = value;
      this.disabledModel = value;
      this.formWithButtons = value;
      this.requiredWithIcons = value;
      this.helperValidationModel = value;
      this.multiRowModel = value;
      this.sizeModel = value;
      this.megaModel = value;
    },
    setBackground(background) {
      switch (background) {
        case 'primary':
          this.backgroundColor = 'primary';
          break;
        case 'secondary':
          this.backgroundColor = 'secondary';
          break;
        default:
          this.backgroundColor = 'primary';
      }
    },
  },
};
</script>
<style>
  .demo-input {
    margin: 10px;
    /*line-height: 1;*/
  }
</style>
