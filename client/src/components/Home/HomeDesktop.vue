<template>
  <div v-if="isLogged">
    <PanelLogged/>
    <SidebarLogged/>
    <TopbarLogged/>
  </div>

  <div v-else-if="isLogged === false">
    <Sidebar/>
    <Panel/>
    <Topbar/>
  </div>

  <div v-else>
    <p>xD</p>
    <!-- loading screen -->
  </div>
</template>

<script>
import Sidebar from "./unlogged/HomeDesktopSidebar.vue";
import SidebarLogged from "./logged/HomeDesktopSidebar.vue";
import Panel from "./unlogged/HomeDesktopPanel.vue";
import PanelLogged from "./logged/HomeDesktopPanel.vue";
import TopbarLogged from "./logged/HomeDesktopPanelTopbar.vue";
import Topbar from "./unlogged/HomeDesktopPanelTopbar.vue";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("user", {
      isLogged: store => store.isLogged
    })
  },
  components: {
    Sidebar,
    SidebarLogged,
    Panel,
    PanelLogged,
    TopbarLogged,
    Topbar
  }
};
</script>
