<template>
  <section class="player">
    <header class="row player__btns">
      <i class="material-icons">replay_10</i>

      <i class="material-icons" @click="isActive = true" :class="{ hidden: isActive}">pause</i>
      <i class="material-icons" @click="isActive = false" :class="{ hidden: !isActive}">play_arrow</i>
      <i class="material-icons">forward_10</i>
    </header>

    <footer class="time-sets">
      <v-slider color="red" thumb-color="red" v-model="slider" class="time-sets__timeline"></v-slider>

      <span class="time-sets__counter">99:59:59</span>
    </footer>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      volume: 100,
      speedMul: 1,
      slider: 0
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/master.scss";

header,
footer {
  max-height: 35px;
}

.hidden {
  display: none;
}

.player {
  max-height: 80px;
  text-align: center;
}
.time-sets {
  width: 350px;

  &__timeline {
    color: $main;
    padding-bottom: 70px;
  }

  &__counter {
    float: right;
    font-size: 11px;
    font-weight: 400;
    margin-top: -100px;
  }
}

i {
  font-size: 2.2rem;
  margin: 10px 0 0 40px;
  color: $main;

  &:first-child {
    margin-left: 0;
  }
  &:hover {
    cursor: pointer;
    color: $lighter-main;
  }
}
</style>
