<template>
  <Mobile v-if="isMobile"/>
  <Desktop v-else/>
</template>

<script>
import Mobile from "@/components/Home/HomeMobile.vue";
import Desktop from "@/components/Home/HomeDesktop.vue";

export default {
  components: {
    Mobile,
    Desktop
  },
  beforeCreate() {
    this.$store.dispatch("user/checkAuthStatus");
  },
  computed: {
    isMobile() {
      if (
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
      )
        return true;
      else return false;
    }
  }
};
</script>