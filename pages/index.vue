<template>
  <main class="page--main">
    <div class="container">
      <slider
        class="page__slider"
        type="with-big-picture"
        :slides="slides"
      />

      <slider
        class="page__slider"
        type="with-small-picture"
        :slides="slides"
      />

      <slider
        type="with-text"
        class="page__slider"
        :slides="slides"
      />
    </div>
  </main>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import Slider from '../components/Slider/Slider.vue'

import { Slide } from '../types/components/slides.interface'

@Component({
  components: {
    Slider
  },
  async asyncData ({ $axios }) {
    try {
      const response = await $axios.$get('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10')
      return {
        slides: response
      }
    } catch (error) {

    }
  }
})
export default class MainPage extends Vue {
  private slides: Slide[] = []
}
</script>

<style lang="scss">
.page--main {
  padding: 100px 0px;
  .page {
    &__slider {
      &:not(:last-of-type) {
        margin-bottom: 40px;
      }
    }
  }

  .container {
    @include touch {
      padding: 0px 40px;
    }
    @include mobile {
      padding: 0px 16px;
    }
  }
}
</style>
