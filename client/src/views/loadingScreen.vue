<template>
  <div>
    <img src="../../public/logos/logo_red_100.png">
    <p>Loading...</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

div {
  height: 200px;
  width: 100px;
  position: fixed;
  top: calc(50vh - 100px);
  left: calc(50vw - 50px);
}

img {
  animation: rotate 2s infinite;
  -webkit-animation: rotate 2s infinite;
}
p {
  margin: 30px 0 0 10px;
  font-weight: 500;
  font-size: 20px;
}
</style>
