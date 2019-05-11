<template>
  <main
    v-if="!isRendered"
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
      <Card></Card>
    </div>
  </main>

  <main
    v-else-if="isRendered && isLogged"
    id="upload-panel-container"
    style="width: calc(100vw - 600px); right: 300px;"
  >
    <UploadThumbnail ref="uploadThumbnail"></UploadThumbnail>
    <UploadFile ref="uploadFile"></UploadFile>
    <UploadData ref="uploadData"></UploadData>
    <button @click="uploadPodcast">asd</button>
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
    Card,
    UploadFile,
    UploadThumbnail,
    UploadData
  },

  data() {
    return {
      PodcastData: {}
    };
  },

  methods: {
    uploadPodcast() {
      this.PodcastData = this.$refs.uploadData._data.Podcast;

      let encodedMp3 = new Buffer(bl.toString(), "binary").toString("base64");
      let encodedThumbnail = new Buffer(bl.toString(), "binary").toString(
        "base64"
      );

      /*let data = {
        title:
        desc:
        tags:
        category:
        mp3:
        thumbnail:
      };*/
    }
  },

  computed: {
    ...mapState("user", {
      isLogged: store => store.isLogged
    }),

    ...mapState("view", {
      isRendered: store => store.rendered.upload
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
