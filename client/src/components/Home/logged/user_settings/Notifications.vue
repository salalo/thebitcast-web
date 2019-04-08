<template>
  <div class="notifications">
    <header>
      <router-link to="/">
        <i class="material-icons icon">arrow_back</i>
      </router-link>
      <span>Notifications</span>
    </header>

    <v-divider></v-divider>

    <ul>
      <li>
        <i class="material-icons icon">notifications_active</i>
        <span>Push notifications</span>
        <p>
          Let us notify you about
          <br>last following activity.
        </p>

        <v-switch v-model="allowPushNotifs" class="push_notifs--switch" color="red"></v-switch>
      </li>

      <li>
        <i class="material-icons icon">email</i>
        <span>Email notifications</span>
        <p>
          Newsletter messeges we
          <br>send to your email.
        </p>

        <v-switch v-model="allowEmailNotifs" class="email-notifs--switch" color="red"></v-switch>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      genders: ["Male", "Female", "Other"],
      allowPushNotifs: true,
      allowEmailNotifs: true
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/stylesheets/master.scss";

.notifications {
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
    margin-left: 30px;
    font-size: 20px;
    font-weight: 500;
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
  width: 100%;

  &:hover {
    @include transition(0s, color 0.3s);
    color: $main;
    cursor: pointer;
  }

  // space for divider
  &:first-child {
    margin: 20px 0;
  }

  span {
    line-height: 40px;
    font-size: 16px;
    vertical-align: middle;
    font-weight: 500;
  }
  .push_notifs--switch,
  .email-notifs--switch {
    float: right;
    margin-top: -90px;
    margin-right: 20px;
    vertical-align: middle;
  }
  .icon {
    margin: 0 20px;
    vertical-align: middle;
  }
}
p {
  color: $light-grey;
  margin-left: 65px;
  font-size: 12px;
}
</style>