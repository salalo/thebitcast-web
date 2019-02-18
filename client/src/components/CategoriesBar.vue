<template>
  <div class="categories-bar">
		a
  </div>
</template>

<script>

export default {
}

</script>

<style lang="scss" scoped>

@import '@/stylesheets/master.scss';

.categories-bar {
  background-color: #fff;
	box-shadow: 0 0 10px rgba(0, 0, 0, .3);
  width: 300px;
  height: calc(100vh - 80px);
  position: fixed;
  bottom: 0;
  left: 300px;
  
  div {
    overflow: hidden;
    padding: 15% 0;
    border-bottom: 1px solid $dark-white;
  }
}

a {
  width: 100%;
  height: 40px;
  text-decoration: none;
  color: $grey;
  float: left;

  &:hover { background-color: $dark-white; }
  .icon {
    margin: 0 50px;
    font-size: 18px;
    line-height: 40px;
    vertical-align: middle;
  }
  span {
    line-height: 40px;
    font-size: 16px;
    vertical-align: middle;
  }
}

</style>