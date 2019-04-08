<template>
  <div v-if="isLogged">
    <Panel/>
    <SidebarLogged/>
    <TopbarLogged/>
  </div>

  <div v-else-if="true">
    <Sidebar/>
    <Panel/>
    <Topbar/>
  </div>

  <div v-else>
    <LoadingScreen/>
  </div>
</template>

<script>
import Sidebar from "@/components/Home/unlogged/Sidebar.vue";
import SidebarLogged from "@/components/Home/logged/Sidebar.vue";
import Panel from "@/components/shared/Panel/Panel.vue";
import TopbarLogged from "@/components/Home/logged/PanelTopbar.vue";
import Topbar from "@/components/Home/unlogged/PanelTopbar.vue";
import LoadingScreen from "@/views/loadingScreen.vue";
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
    TopbarLogged,
    Topbar,
    LoadingScreen
  }
};
</script>
