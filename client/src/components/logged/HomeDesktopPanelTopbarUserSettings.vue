<template>
  <v-avatar color="grey lighten-4">
    <img src="../../assets/crAvatar.jpg" alt="avatar" v-click-outside="hide" @click="toggle">
    <generalSettings v-show="isActive"></generalSettings>
  </v-avatar>
</template>

<script>
import axios from "axios";
import ClickOutside from "vue-click-outside";
import GeneralSettings from "./user_settings/General.vue";

export default {
  data() {
    return {
      isActive: false
    };
  },

  components: {
    GeneralSettings
  },

  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
    hide() {
      this.isActive = false;
    }
  },

  mounted() {
    // prevent click outside event with popupItem.
    this.popupItem = this.$el;
  },

  directives: {
    ClickOutside
  },

  created() {
    axios.defaults.withCredentials = true;

    axios
      .get("http://localhost:8081/auth/getUser")
      .then(console.log("get user avatar"))
      .catch(err => console.log(err));
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/master.scss";

.hidden {
  display: none;
}
img {
  &:hover {
    cursor: pointer;
  }
  object-fit: cover;
  object-position: center;
}
</style>
