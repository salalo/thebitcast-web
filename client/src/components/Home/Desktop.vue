<template>
  <div v-if="this.$store.getters['user/checkIsLogged']">
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

export default {  
  async mounted(){
    let res = await this.$store.dispatch("user/getUser")
    if(res.data.status === 200){
      this.$store.commit("user/login", res.data.user)
      
    }else{
      this.$store.commit("user/logout")
    }
    
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
