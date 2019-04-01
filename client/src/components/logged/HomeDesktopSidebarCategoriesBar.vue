<template>
  <div class="categories-bar">
    <a
      v-for="category in categories"
      v-bind:key="category"
    >

      <i class="material-icons icon">{{ category.icon }}</i>
      <span>{{ category.text }}</span>
      <i class="material-icons live-dot">{{ category.circle }}</i>
    </a>
  </div>
</template>

<script>

export default {
  data() {
    return {
      categories: [
        { icon: 'brush', text: 'Art' },
        { icon: 'attach_money', text: 'Business' },
        { icon: 'directions_car', text: 'Cars & motorization' },
        { icon: 'mood', text: 'Comedy' },
        { icon: 'school', text: 'Education' },
        { icon: 'movie', text: 'Film' },
        { icon: 'gamepad', text: 'Games & hobbies' },
        { icon: 'spa', text: 'Nature' },
        { icon: 'wifi_tethering', text: 'Live', circle: 'lens' },
        { icon: 'local_hospital', text: 'Health' },
        { icon: 'import_contacts', text: 'History' },
        { icon: 'child_care', text: 'Kids & family' },
        { icon: 'music_note', text: 'Music' },
        { icon: 'receipt', text: 'News & politycs' },
        { icon: 'accessibility_new', text: 'Psychology' },
        { icon: 'location_city', text: 'Religion & spirituality' },
        { icon: 'touch_app', text: 'Science' },
        { icon: 'free_breakfast', text: 'Small talk' },
        { icon: 'group', text: 'Society & culture' },
        { icon: 'fitness_center', text: 'Sport' },
        { icon: 'mic', text: 'Stories' },
        { icon: 'memory', text: 'Technology' },
        { icon: 'photo_camera', text: 'Tourism' },
      ]
    }
  }
}

</script>

<style lang="scss" scoped>

@import '@/stylesheets/master.scss';

.categories-bar {
  @include transition(0s, transform .5s);
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

</style>