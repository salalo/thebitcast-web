<template>
  <main
    id="card-panel-container"
    :style="{width: isLogged ? 'calc(100vw - 300px)' : 'calc(100vw - 640px)',
            padding: isLogged ? '60px 200px' : '50px'}"
  >
    <div class="deck">
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  </main>
</template>

<script>
import Card from "@/components/shared/Card/Card.vue";
import UploadFile from "@/components/Home/logged/upload_podcast/PanelFile.vue";
import UploadThumbnail from "@/components/Home/logged/upload_podcast/PanelThumbnail.vue";
import UploadData from "@/components/Home/logged/upload_podcast/PanelData.vue";

import { mapState } from "vuex";

export default {
  components: {
    Card
  },

  computed: {
    ...mapState("user", {
      isLogged: store => store.isLogged
    })
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/master.scss";

// minus width of Sidebar
main {
  @include transition(0s, transform 0.5s);
  height: calc(100vh - 80px);
  position: absolute;
  bottom: 0;
  right: 0;
  overflow-y: scroll;
}

.deck {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-row-gap: 50px;
}
</style>
