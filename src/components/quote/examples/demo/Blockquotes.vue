<template>
  <div>
    <cdr-text
      tag="h2"
      modifier="heading-serif-600 heading-serif-700@md heading-serif-700@lg"
    >
      Blockquote
    </cdr-text>
    <cdr-quote

      cite="http://github.com/rei/rei-cedar"
      summary="Blockquote Summary:
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam
      ex aliquam. Temporibus, veritatis laudantium molestiae accusamus
      asperiores odio fuga reiciendis blanditiis magni?"
      citation="Blockquote Citation: Lorem ipsum dolor sit"
    />

    <cdr-text
      tag="h3"
      modifier="subheading"
    >
      Summary only
    </cdr-text>
    <cdr-quote
      summary="Blockquote Summary:
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam
      ex aliquam. Temporibus, veritatis laudantium molestiae accusamus asperiores
      odio fuga reiciendis blanditiis magni?"
    />

    <cdr-text
      tag="h3"
      modifier="subheading"
    >
      Citation only
    </cdr-text>
    <cdr-quote
      citation="Citation: Lorem ipsum dolor sit"
    />

    <cdr-text
      tag="h3"
      modifier="subheading"
    >
      Nested blockquote
    </cdr-text>
    <cdr-quote
      summary="Blockquote Summary:
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      At perferendis reiciendis sapiente delectus commodi eaque sunt aperiam
      ex aliquam. Temporibus, veritatis laudantium molestiae accusamus asperiores
      odio fuga reiciendis blanditiis magni?"
    >
      <cdr-quote
        citation="bob"
      >
        <cdr-text>
          consectetur adipisicing elit. At perferendis reiciendis
          sapiente delectus commodi eaque sunt aperiam ex aliquam.
          Temporibus, veritatis laudantium molestiae accusamus asperiores
          odio fuga reiciendis blanditiis magni?
        </cdr-text>
      </cdr-quote>
    </cdr-quote>

  </div>
</template>

<script>
import * as Components from 'srcdir/index';

export default {
  name: 'BlockquoteDemo',
  components: Components,
};
</script>

<style>
</style>
