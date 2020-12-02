<template>
  <div
    :style="`background-image: url(${slide.url})`"
    class="slide-with-big-picture"
  >
    <div class="slide-with-big-picture__main">
      <img class="slide-with-big-picture__picture" :src="slide.thumbnailUrl">
    </div>
    <div class="slide-with-big-picture__description">
      <p class="slide-with-big-picture__text">
        {{ slide.title }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

import { Slide } from '../../../types/components/slides.interface'

@Component({})
export default class SlideWithBigPicture extends Vue {
  @Prop({ required: true, type: Object }) readonly slide!: Slide
}
</script>

<style lang="scss">
.slide-with-big-picture {
  display: flex;
  position: relative;
  height: 252px;
  justify-content: center;
  align-items: center;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  @include tablet-only {
    height: 240px;
  }
  @include mobile {
    height: 192px;
  }
  &__main {
    display: flex;
    position: absolute;
    width: 150px;
    height: 150px;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 4px;
    z-index: 3;
  }
  &__bg {
    position: absolute;
  }
  &__picture {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
  }
  &__description {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: flex-end;
    padding: 16px 20px;
    width: 100%;
    height: 94px;
    bottom: 0;
    margin-top: auto;
    background: rgba(32, 42, 37, 0.6);
    color: #fff;
    z-index: 2;
    @include mobile {
      height: 74px;
      padding: 12px;
    }
  }
  &__title,
  &__text {
    line-height: 16px;
    @include mobile {
      line-height: 12px;
    }
  }
  &__title {
    font-size: 12px;
    margin-bottom: 6px;
    @include mobile {
      font-size: 10px;
    }
  }
  &__text {
    font-weight: 500;
    font-size: 16px;
    @include mobile {
      font-size: 12px;
    }
  }
}
</style>
