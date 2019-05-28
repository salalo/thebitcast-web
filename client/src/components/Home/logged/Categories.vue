<template>
  <div class="categories-container">
    <CategoriesBar></CategoriesBar>
    <Sidebar></Sidebar>
    <Topbar></Topbar>
  </div>
</template>

<script>
import Topbar from "@/components/Home/logged/PanelTopbar.vue";
import Sidebar from "@/components/Home/logged/Sidebar.vue";
import CategoriesBar from "@/components/Home/logged/SidebarCategoriesBar.vue";

export default {
  components: {
    Topbar,
    Sidebar,
    CategoriesBar
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/master.scss";
</style>

