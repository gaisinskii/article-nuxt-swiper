<template>
  <div
    class="slide-with-small-picture"
  >
    <img :src="slide.thumbnailUrl" class="slide-popular-retailer__picture">
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

import { Slide } from '../../../types/components/slides.interface'

@Component({})
export default class SlidePopularRetailer extends Vue {
  @Prop({ required: true, type: Object }) readonly slide!: Slide
}
</script>

<style lang="scss">
.slide-with-small-picture {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: grey;
}
</style>
