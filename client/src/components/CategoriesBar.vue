<template>
  <div class="categories-bar">
    <a
      v-for="category in categories"
      v-bind:key="category"
    >

      <font-awesome-icon :icon="['fas', category.icon]" class="icon" />
      <span :class="category.className">{{ category.text }}</span>
      <font-awesome-icon :icon="['fas', category.circle]" class="live-dot" />
    </a>
  </div>
</template>

<script>

export default {
  data() {
    return {
      categories: [
        { icon: 'paint-brush', text: 'Art', className: 'art' },
        { icon: 'dollar-sign', text: 'Business', className: 'business' },
        { icon: 'car-side', text: 'Cars & motorization', className: 'cars' },
        { icon: 'smile-beam', text: 'Comedy', className: 'comedy' },
        { icon: 'graduation-cap', text: 'Education', className: 'education' },
        { icon: 'film', text: 'Film', className: 'film' },
        { icon: 'gamepad', text: 'Games & hobbies', className: 'games' },
        { icon: 'leaf', text: 'Nature', className: 'nature' },
        { icon: 'satellite-dish', text: 'Live', className: 'live', circle: 'circle' },
        { icon: 'briefcase-medical', text: 'Health', className: 'health' },
        { icon: 'book', text: 'History', className: 'history' },
        { icon: 'baby', text: 'Kids & family', className: 'kids' },
        { icon: 'music', text: 'Music', className: 'music' },
        { icon: 'newspaper', text: 'News & politycs', className: 'news' },
        { icon: 'brain', text: 'Psychology', className: 'psychology' },
        { icon: 'cross', text: 'Religion & spirituality', className: 'religion' },
        { icon: 'flask', text: 'Science', className: 'science' },
        { icon: 'mug-hot', text: 'Small talk', className: 'sm-talk' },
        { icon: 'users', text: 'Society & culture', className: 'society' },
        { icon: 'football-ball', text: 'Sport', className: 'sport' },
        { icon: 'microphone-alt', text: 'Stories', className: 'stories' },
        { icon: 'microchip', text: 'Technology', className: 'technology' },
        { icon: 'camera-retro', text: 'Tourism', className: 'tourism' },
      ]
    }
  }
}

</script>

<style lang="scss" scoped>

@import '@/stylesheets/master.scss';

.categories-bar {
  @include transition(0s, transform .5s);
  z-index: 100;
  background-color: #fff;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0), 2px 0 10px rgba(0, 0, 0, .1);
  width: 300px;
  height: calc(100vh - 80px);
  position: fixed;
  padding: 30px 0;
  bottom: 0;
  overflow-y: auto;
  
  div {
    overflow: hidden;
    padding: 15% 0;
    border-bottom: 1px solid $dark-white;
  }
}

a {
  // minus width of scrollbar
  @include transition(0s, color 1s);
  width: calc(100% - 7px);
  height: 40px;
  text-decoration: none;
  color: $grey;
  float: left;

  &:hover {
    @include transition(0s, color .4s);
    color: $main;
    cursor: pointer;
  }

  .icon {
    margin: 0 50px;
    font-size: 18px;
    line-height: 40px;
    vertical-align: middle;
  }
  span {
    line-height: 40px;
    font-size: 16px;
    vertical-align: middle;
  }
}

.live-dot {
  font-size: 8px;
  margin-left: 20px;
  color: rgb(255, 0, 0);
  margin-bottom: 2px;

  animation: pulsate 1s ease-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes pulsate {
  from { opacity: 1; }
  to { opacity: 0; }
}

.tourism,
.technology,
.sport,
.music,
.health,
.film,
.comedy,
.art,
.live { margin-left: 5px; }

.psychology, .news, .nature { margin-left: 2px; }
.religion, .kids { margin-left: 9px; }
.science, .history { margin-left: 7px; }
.business { margin-left: 12px; }
.stories { margin-left: 10px; }

</style>