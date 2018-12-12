<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">

@import '@/stylesheets/master.scss';

::-webkit-scrollbar{ background: transparent; }

html, body {
  padding: 0 !important;
  margin: 0 !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  -webkit-touch-callout: none;
    -webkit-user-select: none;
     -khtml-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
}

#app {
  background-color: #f5f5f5;
  padding: 0 !important;
  margin: 0 !important;
  height: 100vh;
}
</style>
