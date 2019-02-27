<template>
  <div class="categories-bar">
    <a v-for="icon in categories">
      <font-awesome-icon :icon="['fas',  icon.icon ]" class="icon" />
      <span>{{ icon.text }}</span>
    </a>
  </div>
</template>

<script>

export default {
  data() {
    return {
      categories: [
        { icon: 'paint-brush', text: 'Art' },
        { icon: 'dollar-sign', text: 'Business' },
        { icon: 'car-side', text: 'Cars & motorization' },
        { icon: 'smile-beam', text: 'Comedy' },
        { icon: 'graduation-cap', text: 'Education' },
        { icon: 'film', text: 'Film' },
        { icon: 'gamepad', text: 'Games & hobbies' },
        { icon: 'briefcase-medical', text: 'Health' },
        { icon: 'baby', text: 'Kids & family' },
        { icon: 'music', text: 'Music' },
        { icon: 'newspaper', text: 'News & politycs' },
        { icon: 'brain', text: 'Psychology' },
        { icon: 'cross', text: 'Religion & spirituality' },
        { icon: 'flask', text: 'Science' },
        { icon: 'users', text: 'Society & culture' },
        { icon: 'football-ball', text: 'Sport' },
        { icon: 'microchip', text: 'Technology' },
        { icon: 'camera-retro', text: 'Tourism' },
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
  bottom: 0;
  
  div {
    overflow: hidden;
    padding: 15% 0;
    border-bottom: 1px solid $dark-white;
  }
}

a {
  // minus width of scrollbar
  @include transition(0s, color 1s);
  width: calc(100%);
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
    margin-left: 50px;
    font-size: 18px;
    line-height: 40px;
    vertical-align: middle;
  }
  span {
    margin-left: 50px;
    line-height: 40px;
    font-size: 16px;
    vertical-align: middle;
  }
}

</style>