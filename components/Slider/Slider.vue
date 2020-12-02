<template>
  <div
    class="slider"
    :class="`slider--${type}`"
  >
    <div
      class="swiper-button-prev"
      :class="`swiper-button-prev--${type}`"
    />
    <div
      class="swiper-button-next"
      :class="`swiper-button-next--${type}`"
    />
    <div
      :class="`swiper-container--${type}`"
      class="swiper-container"
    >
      <div class="swiper-wrapper">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="swiper-slide"
        >
          <component :is="getSlide" :slide="slide" />
        </div>
      </div>
      <div class="swiper-pagination" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

import SwiperInstance, { Navigation, Pagination, A11y } from 'swiper'

import { SwiperOptions, Swiper } from 'swiper/swiper.d'
import { Slide } from '../../types/components/slides.interface'

import settings from './settings'

SwiperInstance.use([Navigation, Pagination, A11y])

const SlideWithBigPicture = () => import('./templates/SlideWithBigPicture.vue')
const SlideWithSmallPicture = () => import('./templates/SlideWithSmallPicture.vue')
const SlideWithText = () => import('./templates/SlideWithText.vue')

@Component({
  components: {
    SlideWithBigPicture,
    SlideWithSmallPicture,
    SlideWithText
  }
})
export default class Slider extends Vue {
  @Prop({ required: true, type: Array }) readonly slides!: Slide[]
  @Prop({ required: true, type: String }) readonly type!: string

  private swiperInstance: Swiper = {} as Swiper

  private settings: SwiperOptions = settings[this.type]

  get getSlide () {
    switch (this.type) {
      case 'with-small-picture':
        return 'SlideWithSmallPicture'
      case 'with-text':
        return 'SlideWithText'
      case 'with-big-picture':
        return 'SlideWithBigPicture'
      default:
        break
    }
  }

  mounted () {
    this.swiperInstance = new SwiperInstance(`.swiper-container--${this.type}`, this.settings)
  }
}
</script>

<style lang="scss">
.slider {
  position: relative;
  .swiper-button-next,
  .swiper-button-prev {
    outline: none;
  }
  .swiper-container {
    z-index: unset;
  }
}

.slider--with-big-picture {
  .swiper-button-next,
  .swiper-button-prev {
    @include touch {
      display: none;
    }
    display: inline-flex;
    top: -56px;
    left: unset;
    right: 0px;
    bottom: unset;
    margin: auto;
    width: 32px;
    height: 32px;
    border: 1px solid #000;
    border-radius: 50%;
    outline: none;
    &::after {
      font-size: 10px;
      color: #000;
      font-weight: bold;
    }
  }
  .swiper-button-prev {
    right: 44px;
  }
  .swiper-pagination {
    display: flex;
    position: static;
    justify-content: center;
    margin-top: 20px;
    @include mobile {
      margin-top: 12px;
    }
    .swiper-pagination-bullet {
      margin-right: 8px;
    }
    .swiper-pagination-bullet-active {
      background-color: blue;
    }
  }
}

.slider--with-small-picture,
.slider--with-text {
  @include tablet-only {
    margin-right: -40px;
  }
  @include mobile {
    margin-right: -16px;
  }
  .swiper-pagination {
    display: none;
  }
  .swiper-button-disabled {
    display: none;
  }
  .swiper-button-prev,
  .swiper-button-next {
    @include touch {
      display: none;
    }
    height: 40px;
    width: 40px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
    &::after {
      font-size: 14px;
      color: #000;
      font-weight: bold;
    }
  }
  .swiper-button-next {
    right: -20px;
  }
  .swiper-button-prev {
    left: -20px;
  }
}

</style>
