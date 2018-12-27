<template>
	<div class="user-logged row">
    <div class="avatar"></div>
    <span>Joe Rogannnnnnn</span>
   
    <font-awesome-icon
      :icon="['fas', 'chevron-down']"
      class="icon alt drop-down-icon"
    />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

@import '@/stylesheets/master.scss';

.user-logged {
  max-height: 100px;

  span {
    line-height: 60px;
    vertical-align: middle;
    margin: 0 30px; 
  }
}

.avatar {
  height: 65px;
  width: 65px;
  border-radius: 100%;
  background-image: url('../assets/creatorsAvatar.jpg');
  background-size: cover;
  border: 2px solid $main;
  @include transition(0s, border .15s ease);

  &:hover {
    cursor: pointer;
    border: 4px solid $main;
  }
}

.drop-down-icon {
	color: $main;
  margin-top: 20px;

	&:hover {
		color: $lighter-main;
		cursor: pointer;
	}
}

</style>
