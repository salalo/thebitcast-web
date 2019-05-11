<template>
  <div class="thumbnail-container">
    <i class="material-icons">insert_photo</i>
    <p>Select thumbnail for your podcast</p>
    <p>or drag and drop.</p>
    <p class="default-text">Defaulty your avatar will be used as thumbnail.</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/master.scss";
@import "./file_thumbnail.scss";

.thumbnail-container {
  float: right;

  .default-text {
    font-size: 16px;
    font-weight: 400;
    margin-top: 15px;
  }
}
</style>