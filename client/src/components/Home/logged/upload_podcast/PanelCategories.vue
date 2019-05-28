<template>
  <div class="categories-panel">
    <div class="info">
      <p>Choose the most appropriate category</p>
      <p>for your podcast.</p>
    </div>

    <v-divider class="divider-line"></v-divider>

    <a
      v-for="category in categories"
      :key="category"
      :style="pickCategory ? {color: '#F44336'} : null"
      @click="pickCategory = true"
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
      pickCategory: false,
      categories: [
        { icon: "brush", text: "Art" },
        { icon: "attach_money", text: "Business" },
        { icon: "directions_car", text: "Cars & motorization" },
        { icon: "mood", text: "Comedy" },
        { icon: "school", text: "Education" },
        { icon: "movie", text: "Film" },
        { icon: "gamepad", text: "Games & hobbies" },
        { icon: "spa", text: "Nature" },
        { icon: "wifi_tethering", text: "Live", circle: "lens" },
        { icon: "local_hospital", text: "Health" },
        { icon: "import_contacts", text: "History" },
        { icon: "child_care", text: "Kids & family" },
        { icon: "music_note", text: "Music" },
        { icon: "receipt", text: "News & politycs" },
        { icon: "accessibility_new", text: "Psychology" },
        { icon: "location_city", text: "Religion & spirituality" },
        { icon: "touch_app", text: "Science" },
        { icon: "free_breakfast", text: "Small talk" },
        { icon: "group", text: "Society & culture" },
        { icon: "fitness_center", text: "Sport" },
        { icon: "mic", text: "Stories" },
        { icon: "memory", text: "Technology" },
        { icon: "photo_camera", text: "Tourism" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/master.scss";

.categories-panel {
  @include transition(0s, 0.4s box-shadow);
  float: left;
  background-color: #fff;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0), 2px 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 300px;
  height: 800px;
  padding: 30px 0;
  overflow-y: auto;

  &:hover {
    @include transition(0s, 0.4s box-shadow);
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  .divider-line {
    margin: 20px;
  }
  .info {
    background: transparent !important;
    p {
      margin: 0;
      font-size: 16px;
      font-weight: 500;
      text-align: center;
    }
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
    @include transition(0s, color 0.4s);
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
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>

