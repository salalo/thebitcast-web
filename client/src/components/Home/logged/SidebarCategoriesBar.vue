<template>
  <div class="categories-bar">
    <a v-for="category in categories" :key="category">
      <i class="material-icons icon">{{ category.icon_name }}</i>
      <span>{{ category.name }}</span>
      <i v-if='category.name == "Live"' class="material-icons live-dot">lens</i>
    </a>
  </div>
</template>

<script>
import axios from 'axios'

let Api = axios.create({
  baseURL: `http://localhost:8081`,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  async mounted(){
    let res = await Api.get('/categories/getCategories')
    if(res.data.status == 200)
      this.categories = res.data.categories
    else console.log("db error")//this.showAlert
  },
  data() {
    return {
      categories: []
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/master.scss";

.categories-bar {
  @include transition(0s, transform 0.5s);
  background-color: #fff;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0), 2px 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: calc(100vh - 80px);
  position: fixed;
  padding: 30px 0;
  bottom: 0;
  overflow-y: auto;

  div {
    overflow: hidden;
    padding: 15% 0;
    border-bottom: 1px solid $dark-white;
  }
}

a {
  // minus width of scrollbar
  @include transition(0s, color 1s);
  width: calc(100% - 7px);
  height: 40px;
  text-decoration: none;
  color: $grey;
  float: left;

  &:hover {
    @include transition(0s, color 0.4s);
    color: $main;
    cursor: pointer;
  }

  .icon {
    margin: 0 50px;
    vertical-align: middle;
  }
  span {
    line-height: 40px;
    font-size: 16px;
    vertical-align: middle;
  }
}

.live-dot {
  font-size: 8px;
  margin-left: 20px;
  color: rgb(255, 0, 0);
  margin-bottom: 2px;

  animation: pulsate 1s ease-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes pulsate {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>