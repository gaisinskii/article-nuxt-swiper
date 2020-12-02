<template>
  <div
    class="slide-with-text"
  >
    <span class="slide-with-text__name">{{ slide.title }}</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

import { Slide } from '../../../types/components/slides.interface'

@Component({})
export default class SlideWithText extends Vue {
  @Prop({ required: true, type: Object }) readonly slide!: Slide
}
</script>

<style lang="scss">
.slide-with-text {
  display: flex;
  position: relative;
  height: 108px;
  justify-content: center;
  align-items: center;
  z-index: 2;
  background:yellow;
  &::after {
    z-index: 1;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(22, 101, 193, 0.18) 0%, rgba(22, 101, 193, 0.63) 0%, rgba(5, 34, 68, 0.9) 147.22%);
  }
  &__name {
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    z-index: 3;
  }
}
</style>
