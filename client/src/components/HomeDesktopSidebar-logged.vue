<template>
  <div>
    <categories-bar/>

    <div class="container">
      <div class="taker">
        <router-link to="/">
          <font-awesome-icon :icon="['fas', 'home']" class="icon alt" />
          <span>Home</span>        
        </router-link>
        <a @click="changeCategoriesBar()">
          <font-awesome-icon :icon="['fas', 'table']" class="icon alt" />
          <span>Categories</span>        
        </a>
        <router-link to="#">
          <font-awesome-icon :icon="['fas', 'heart']" class="icon alt" />
          <span>Following</span>        
        </router-link>
        <router-link to="#">
          <font-awesome-icon :icon="['fas', 'bookmark']" class="icon alt" />
          <span>Bookmarks</span>    
        </router-link>
      </div>

      <div class="giver">
        <router-link to="#">
          <font-awesome-icon :icon="['fas', 'cloud-upload-alt']" class="icon alt" />
          <span>Upload podcast</span>
        </router-link>
        <router-link to="#">
          <font-awesome-icon :icon="['fas', 'chart-line']" class="icon alt" />
          <span>Statistics panel</span>
        </router-link>
      </div>

      <div class="info">
        <router-link to="/about-us">
          <font-awesome-icon :icon="['fas', 'handshake']" class="icon alt" />
          <span>Our mission</span>
        </router-link>
        <router-link to="/premium">
          <font-awesome-icon :icon="['fas', 'star']" class="icon alt" />
          <span>Premium</span>
        </router-link>
      </div>

      <div class="essentials">
        <router-link to="/feedback">  
          <font-awesome-icon :icon="['fas', 'comment']" class="icon alt" />
          <span>Feedback</span>
        </router-link>
        <router-link to="/support">  
          <font-awesome-icon :icon="['fas', 'question']" class="icon alt" />
          <span>Support & help</span>
        </router-link>
        <router-link to="/report">  
          <font-awesome-icon :icon="['fas', 'flag']" class="icon alt" />
          <span>Report</span>
        </router-link>
      </div>

      <div class="footer">
        <span>&copy; 2019 TheBitCast</span>
        <router-link to="/about-us">About us</router-link>
        <router-link to="/contact">Contact</router-link>
        <router-link to="/copyright">Copyright</router-link>
        <router-link to="/privacy-policy">Privacy & policy</router-link>
      </div>

    </div>
  </div>
</template>

<script>

import CategoriesBar from './CategoriesBar.vue'

export default {
  components: {
    'categories-bar': CategoriesBar
  },
  data() {
    return {
      isActive: {
        categories: false
      }
    }
  },

  methods: {
    changeCategoriesBar() {
      this.isActive.categories = !this.isActive.categories

      let cardPanel = document.getElementById('card-panel-container')
      let categoriesSidebar = document.getElementsByClassName('categories-bar')[0]

      if(this.isActive.categories) {
        this.$store.commit('CHANGE_CATBAR', true)
        categoriesSidebar.style.transform = "translateX(300px)"
        cardPanel.style.transform = "translateX(300px)"
      }

      else {
        this.$store.commit('CHANGE_CATBAR', false)
        cardPanel.style.transform = "translateX(0)"
        categoriesSidebar.style.transform = "translateX(0)"
      }
    }
  }
}

</script>

<style lang="scss" scoped>

@import '@/stylesheets/master.scss';

.container {
  background-color: #fff;
	box-shadow: 0 0 10px rgba(0, 0, 0, .3);
  width: 300px;
  z-index: 200;
  height: calc(100vh - 80px);
  position: fixed;
  bottom: 0;
  
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

.info { .icon, span { color: $main; } }

.footer {
  position: absolute;
  bottom: 20px;
  padding: 0 !important;
  border: none !important;
  
  span {
    font-size: 15px;
    color: $lighter-grey;
    display: block;
    margin-bottom: 10px;
    text-align: center;
  }
  a {
    color: $grey;
    float: none;
    font-size: 11px;
    margin-left: 20px;
    &:hover { background-color: inherit; }
  }
}

// @media (max-width: 1100px) {
//   .container { display: none; }
// }

</style>
