<template>
  <div class="general">
    <header>
      <span>{{ actualUser.nick }}</span>
      <span>{{ actualUser.email }}</span>
    </header>

    <v-divider></v-divider>

    <ul>
      <li>
        <router-link to="/profile">
          <i class="material-icons icon">edit</i>
          <span>Edit profile</span>
        </router-link>
      </li>

      <li>
        <router-link to="/account">
          <i class="material-icons icon">person</i>
          <span>Account settings</span>
        </router-link>
      </li>

      <li>
        <router-link to="/notifs">
          <i class="material-icons icon">notifications</i>
          <span>Notifications</span>
        </router-link>
      </li>

      <li>
        <i class="material-icons icon">brightness_medium</i>
        <span>Dark mode</span>

        <v-switch class="dark-mode--switch" color="red"></v-switch>
      </li>

      <li @click="logout()">
        <i class="material-icons icon">exit_to_app</i>
        <span>Sign out</span>
      </li>
    </ul>

    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
import axios from "axios";
import VueCookie from "vue-cookies";

export default {
  data() {
    return {
      actualUser: {
        nick: "",
        email: ""
      }
    };
  },

  created() {
    axios.defaults.withCredentials = true;

    axios
      .get("http://localhost:8081/auth/getUser")
      .then(res => {
        this.actualUser.nick = res.data.nick;
        this.actualUser.email = res.data.email;
      })
      .catch(err => console.log(err));
  },

  methods: {
    logout() {
      axios
        .get("http://localhost:8081/auth/logout")
        .then(res => resolve(res))
        .catch(err => console.log(err));

      VueCookie.remove("SESS");
      location.reload();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/master.scss";

.general {
  width: 300px;
  height: auto;
  position: fixed;
  top: 81px;
  right: 0;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

header {
  height: 85px;
  width: 100%;

  span {
    float: left;
    clear: both;
    margin-left: 30px;
    margin-top: 5px;

    &:first-child {
      font-size: 20px;
      margin-top: 15px;
      font-weight: 500;
    }
  }
}

a {
  @include transition(0s, color 0.3s);
  text-decoration: none;
  color: $grey;

  &:hover {
    @include transition(0s, color 0.3s);
    color: $main;
    cursor: pointer;
  }
}

ul {
  padding-left: 0 !important;
}
li {
  float: left;
  clear: both;
  @include transition(0s, color 0.3s);
  list-style-type: none;
  // width: 100%;

  &:hover {
    @include transition(0s, color 0.3s);
    color: $main;
    cursor: pointer;
  }

  // space for divider
  &:first-child {
    margin-top: 15px;
  }
  &:last-child {
    margin: 50px 0 15px 0;
  }

  span {
    line-height: 50px;
    font-size: 16px;
    vertical-align: middle;
    // font-weight: 500;
  }
  .dark-mode--switch {
    float: right;
    margin-left: 70px;
    margin-top: 8px;
    vertical-align: middle;
  }
  .icon {
    margin: 0 30px;
    vertical-align: middle;
  }
}
</style>