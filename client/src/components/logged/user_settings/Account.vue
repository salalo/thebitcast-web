<template>
  <div class="account">
    <header>
      <router-link to="/">
        <i class="material-icons icon">arrow_back</i>
      </router-link>
      <span>Account settings</span>
    </header>

    <v-divider></v-divider>

    <section>
      <div class="email">
        <span>Email</span>
        <span>{{ actualUser.email }}</span>
      </div>

      <div class="username">
        <span>Username</span>
        <span>{{ actualUser.nick }}</span>
      </div>

      <div class="password">
        <span>Password</span>
        <span>{{ }}</span>
      </div>

      <div class="language">
        <span>Language</span>
        <span>{{ actualUser.language }}</span>
      </div>

      <div class="location">
        <span>Location</span>
        <span>{{ actualUser.location }}</span>
      </div>

      <div class="btn">
        <v-btn outline color="red" class="del-acc--btn">Delete account</v-btn>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      actualUser: {
        nick: "",
        email: "",
        password: "",
        language: "",
        location: ""
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
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/master.scss";

.account {
  width: 300px;
  height: auto;
  background-color: #fff;
  position: fixed;
  top: 81px;
  right: 0;
  text-align: left;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

header {
  padding: 15px 0 15px 27px;
  width: 100%;

  a {
    color: $grey;
    text-decoration: none;
  }

  i {
    vertical-align: middle;
    margin-bottom: 5px;
    @include transition(0s, color 0.3s);

    &:hover {
      cursor: pointer;
      @include transition(0s, color 0.3s);
      color: $main;
    }
  }

  span {
    margin-left: 20px;
    font-size: 20px;
    font-weight: 500;
  }
}

section {
  div {
    float: left;
    clear: both;
    margin: 30px 0 0 30px;

    span {
      font-size: 16px;
      margin-bottom: 10px;
      font-weight: 500;
      float: left;
      clear: both;
    }
  }

  .btn {
    margin: 50px 0 20px 25px;
  }

  .del-acc--btn {
    margin: 0 !important;
    width: 250px !important;
    border-radius: 5px;
    text-transform: capitalize;
  }
}
</style>