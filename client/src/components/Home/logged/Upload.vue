<template>
  <div class="upload-container">
    <Sidebar></Sidebar>
    <Topbar></Topbar>
    <!--     v-else-if="isRendered && isLogged" -->
    <main id="upload-panel-container">
      <UploadCategories ref="uploadCategory"></UploadCategories>
      <UploadThumbnail ref="uploadThumbnail"></UploadThumbnail>
      <UploadFile ref="uploadFile"></UploadFile>
      <UploadData ref="uploadData"></UploadData>
      <button @click="uploadPodcast">asd</button>
    </main>
  </div>
</template>

<script>
import Topbar from "@/components/Home/logged/PanelTopbar.vue";
import Sidebar from "@/components/Home/logged/Sidebar.vue";
import UploadFile from "@/components/Home/logged/upload_podcast/PanelFile.vue";
import UploadThumbnail from "@/components/Home/logged/upload_podcast/PanelThumbnail.vue";
import UploadData from "@/components/Home/logged/upload_podcast/PanelData.vue";
import UploadCategories from "@/components/Home/logged/upload_podcast/PanelCategories.vue";

export default {
  components: {
    Topbar,
    Sidebar,
    UploadCategories,
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
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/master.scss";

main {
  @include transition(0s, transform 0.5s);
  height: calc(100vh - 80px);
  width: calc(100vw - 300px);
  padding: 50px;
  right: 300px;
  position: absolute;
  bottom: 0;
  right: 0;
  overflow-y: scroll;
}
</style>
