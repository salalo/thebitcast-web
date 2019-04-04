<template>
  <div class="container__mobile">
    <div class="header row">
      <span class="header__logo col">LOGO</span>
      <span class="header__info col">Info</span>
    </div>

    <div class="info">
      <div class="info__name">The BitCast</div>
      <div class="info__text">Start your experience down below.</div>
    </div>

    <div class="badges row">
      <!-- not a proper badge just img -->
      <img src="../assets/Home/google-play-badge.png" alt="google" width="50%" height="80">

      <img src="../assets/Home/ios-badge.png" alt="ios" width="44%" height="54" class="badges__ios">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/stylesheets/master.scss";

.container__mobile {
  background-color: $main;
  background-image: url("../assets/Home/mobile-bg.png");
  background-size: cover;
  height: 100vh;
  text-align: center;
}
.header {
  font-size: 20px;
  padding: 30px;
  color: $grey;

  &__logo {
    text-align: left;
  }
  &__info {
    text-align: right;
  }
}
.info {
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  margin: auto;
  color: $grey;

  &__name {
    font-size: 50px;
    font-weight: 600;
  }

  &__text {
    font-size: 13px;
    margin-top: -8px;
  }
}
.badges {
  position: absolute;
  bottom: 25vh;

  &__ios {
    margin-top: 12px;
  }
}
</style>