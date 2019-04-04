<template>
  <v-toolbar light color="#fff" class="topbar-logged" height="80">
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
    <v-toolbar-title class="hidden-md-and-down">Bitcast</v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- COMPONENT -->
    <Player></Player>

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat color="#F44336">
        <i class="material-icons">volume_up</i>
      </v-btn>
      <v-btn flat color="#F44336">
        <i class="material-icons">timer</i>
      </v-btn>
      <v-btn flat color="#F44336" @click="addBookmark()">
        <i class="material-icons">{{ bmIcon }}</i>
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-md-and-down">
      <v-text-field
        append-icon="search"
        class="search"
        single-line
        value
        label="Search"
        color="#F44336"
      ></v-text-field>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <!-- COMPONENT -->
    <UserLogged class="hidden-sm-and-down"></UserLogged>
  </v-toolbar>
</template>

<script>
import UserLogged from "./HomeDesktopPanelTopbarUserSettings.vue";
import Player from "../Player.vue";

export default {
  data() {
    return {
      bmIcon: "bookmark_outline"
    };
  },

  components: {
    UserLogged,
    Player
  },

  computed: {
    addBookmark() {
      // if added
      if (this.bmIcon === "bookmark_outline") {
        this.bmIcon = "bookmark";
        // get title, ID or URL of podcast
        // post to users db
      }
      // if removed
      else {
        this.bmIcon = "bookmark_outline";
        // get title, ID or URL of podcast
        // find in db and remove
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/master.scss";

.search {
  margin-top: 10px !important;
}
.topbar-logged {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
</style>
