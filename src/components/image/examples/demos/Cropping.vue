<template>
  <div>
    <cdr-text
      tag="h3"
      modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
    >
      Cropping (with landscape images)
    </cdr-text>
    <cdr-row
      cols="1 3@md"
    >
      <cdr-col>
        <div>
          <cdr-text modifier="subheading">
            Left
          </cdr-text>
          <cdr-img
            ratio="square"
            cover
            crop="left"
            alt="crop left"
            src="http://placehold.it/1920x1080"
          />
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <cdr-text modifier="subheading">
            Center
          </cdr-text>
          <cdr-img
            ratio="square"
            cover
            crop="center"
            alt="crop x-center"
            src="http://placehold.it/1920x1080"
          />
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <cdr-text modifier="subheading">
            Right
          </cdr-text>
          <cdr-img
            ratio="square"
            cover
            crop="right"
            alt="crop right"
            src="http://placehold.it/1920x1080"
          />
        </div>
      </cdr-col>
    </cdr-row>

    <cdr-text
      tag="h3"
      modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
    >
      Cropping (with portrait images)
    </cdr-text>
    <cdr-row
      cols="1 3@md"
    >
      <cdr-col>
        <div>
          <cdr-text modifier="subheading">
            Top
          </cdr-text>
          <cdr-img
            ratio="square"
            cover
            crop="top"
            alt="crop top"
            src="http://placehold.it/1080x1920"
          />
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <cdr-text modifier="subheading">
            Center
          </cdr-text>
          <cdr-img
            ratio="square"
            cover
            crop="center"
            alt="crop y-center"
            src="http://placehold.it/1080x1920"
          />
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <cdr-text modifier="subheading">
            Bottom
          </cdr-text>
          <cdr-img
            ratio="square"
            cover
            crop="bottom"
            alt="crop bottom"
            src="http://placehold.it/1080x1920"
          />
        </div>
      </cdr-col>
    </cdr-row>

    <cdr-text
      tag="h3"
      modifier="heading-sans-400 heading-sans-500@md heading-sans-500@lg"
    >
      Cropping (combinations)
    </cdr-text>
    <cdr-row justify="center">
      <cdr-col span="9">
        <div>
          <cdr-text modifier="subheading">
            Reference Image
          </cdr-text>
          <cdr-img
            alt="reference image"
            :src="testImage"
          />
        </div>
      </cdr-col>
    </cdr-row>
    <cdr-row
      cols="1 3@md"
    >
      <cdr-col>
        <div>
          <cdr-text modifier="subheading">
            top, left
          </cdr-text>
          <cdr-img
            ratio="16-9"
            crop="top left"
            alt="crop top left"
            :src="testImage"
          />
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <cdr-text modifier="subheading">
            top, x-center
          </cdr-text>
          <cdr-img
            ratio="16-9"
            crop="top center"
            alt="crop top x-center"
            :src="testImage"
          />
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <cdr-text modifier="subheading">
            top, right
          </cdr-text>
          <cdr-img
            ratio="16-9"
            crop="top right"
            alt="crop top right"
            :src="testImage"
          />
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <cdr-text modifier="subheading">
            y-center, left
          </cdr-text>
          <cdr-img
            ratio="16-9"
            crop="center left"
            alt="crop y-center left"
            :src="testImage"
          />
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <cdr-text modifier="subheading">
            y-center, x-center
          </cdr-text>
          <cdr-img
            ratio="16-9"
            crop="center center"
            alt="crop y-center x-center"
            :src="testImage"
          />
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <cdr-text modifier="subheading">
            y-center, right
          </cdr-text>
          <cdr-img
            ratio="16-9"
            crop="center right"
            alt="crop y-center right"
            :src="testImage"
          />
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <cdr-text modifier="subheading">
            bottom, left
          </cdr-text>
          <cdr-img
            ratio="16-9"
            crop="left bottom"
            alt="crop bottom left"
            :src="testImage"
          />
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <cdr-text modifier="subheading">
            bottom, x-center
          </cdr-text>
          <cdr-img
            ratio="16-9"
            crop="center bottom"
            alt="crop bottom x-center"
            :src="testImage"
          />
        </div>
      </cdr-col>
      <cdr-col>
        <div>
          <cdr-text modifier="subheading">
            bottom, right
          </cdr-text>
          <cdr-img
            ratio="16-9"
            crop="right bottom"
            alt="crop bottom right"
            :src="testImage"
          />
        </div>
      </cdr-col>
    </cdr-row>
  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'Cropping',
  components: Components,
  data() {
    return {
      testImage: 'test-image.png',
    };
  },
};
</script>
