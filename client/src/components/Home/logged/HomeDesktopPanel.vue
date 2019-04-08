<template>
  <main id="card-panel-container">
    <div class="stack">
      <section class="recommended">
        <DeckTop></DeckTop>

        <swiper :options="swiperOption">
          <swiper-slide>
            <Card/>
          </swiper-slide>
          <swiper-slide>
            <Card/>
          </swiper-slide>
          <swiper-slide>
            <Card/>
          </swiper-slide>
          <swiper-slide>
            <Card/>
          </swiper-slide>
          <swiper-slide>
            <Card/>
          </swiper-slide>
          <swiper-slide>
            <Card/>
          </swiper-slide>
          <swiper-slide>
            <Card/>
          </swiper-slide>
          <swiper-slide>
            <Card/>
          </swiper-slide>
          <swiper-slide>
            <Card/>
          </swiper-slide>
          <swiper-slide>
            <Card/>
          </swiper-slide>
        </swiper>
      </section>

      <section class="popular">
        <DeckBottom></DeckBottom>

        <swiper :options="swiperOption">
          <swiper-slide>
            <Card/>
          </swiper-slide>
          <swiper-slide>
            <Card/>
          </swiper-slide>
          <swiper-slide>
            <Card/>
          </swiper-slide>
          <swiper-slide>
            <Card/>
          </swiper-slide>
          <swiper-slide>
            <Card/>
          </swiper-slide>
          <swiper-slide>
            <Card/>
          </swiper-slide>
          <swiper-slide>
            <Card/>
          </swiper-slide>
          <swiper-slide>
            <Card/>
          </swiper-slide>
          <swiper-slide>
            <Card/>
          </swiper-slide>
          <swiper-slide>
            <Card/>
          </swiper-slide>
        </swiper>
      </section>
    </div>
  </main>
</template>

<script>
import Card from "@/components/shared/Card/Card.vue";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import DeckTop from "./HomeDesktopPanelDeckTop.vue";
import DeckBottom from "./HomeDesktopPanelDeckBottom.vue";

export default {
  data() {
    return {
      swiperOption: {
        direction: "horizontal",
        mousewheel: true,
        slidesPerView: 7,
        spaceBetween: 30,
        freeMode: true
      }
    };
  },

  components: {
    Card,
    DeckTop,
    DeckBottom,
    swiper,
    swiperSlide
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/master.scss";

// minus width of Sidebar
main {
  @include transition(0s, transform 0.5s);
  width: calc(100vw - 300px);
  height: calc(100vh - 80px);
  position: fixed;
  bottom: 0;
  right: 0;
}

.stack {
  margin-left: 30px;
  width: inherit;
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  transform: translateY(-50%);
}

.recommended,
.popular {
  span {
    font-size: 20px;
    position: fixed;
    top: -40px;
  }
}
.popular {
  margin-top: 50px;
  // span { top: calc(50% - 180px); } for 3 row
  span {
    top: calc(50% + 10px);
  }
}

.swiper-slide {
  justify-content: center;
  align-self: center;
  min-width: 200px;
  min-height: 280px;
}
</style>
