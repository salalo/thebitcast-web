<template>
  <div class="data-container">
    <v-text-field
      minlength="5"
      maxlength="50"
      required
      value
      v-model.trim="Podcast.title"
      label="Title"
      color="#F44336"
      class="input"
      @input="onChange"
    ></v-text-field>

    <v-text-field
      required
      minlength="5"
      maxlength="2500"
      value
      v-model.trim="Podcast.description"
      label="Description"
      color="#F44336"
      class="input"
      @input="onChange"
    ></v-text-field>

    <v-text-field
      required
      minlength="1"
      maxlength="30"
      value
      v-model.trim="Podcast.tagsRaw"
      label="Tags"
      color="#F44336"
      class="input"
      @input="onChange"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Podcast: {
        title: "",
        descriptiopn: "",
        tagsRaw: "",
        tags: []
      }
    };
  },
  methods: {
    onChange() {
      this.Podcast.tags = this.Podcast.tagsRaw.split(" ");
      console.log(this.Podcast.tags);
      this.$emit("onUploadDataUpdate", this.Podcast);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/master.scss";

.data-container {
  max-width: 1210px;
  width: 1160px;
  height: 400px;
  background-color: #fff;
  float: right;
  margin-top: 50px;
  padding: 50px;

  box-shadow: 0 0 0 rgba(0, 0, 0, 0), 2px 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  @include transition(0s, 0.4s box-shadow);

  &:hover {
    @include transition(0s, 0.4s box-shadow);
    cursor: pointer;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  .input {
    width: 90%;
    margin: 0 auto;
    margin-top: 25px;
  }
}
</style>