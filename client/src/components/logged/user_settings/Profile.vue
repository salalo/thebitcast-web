<template>
	<div class="profile">
		<header>
			<router-link to="/">
				<i class="material-icons icon">arrow_back</i>
			</router-link>
			<span>Edit profile</span>	
		</header>

		<v-divider></v-divider>

		<section>
			<div class="avatar">
				<span>Avatar</span>
				<img src="../../../assets/crAvatar.jpg" alt="avatar">
			</div>

			<div class="description">
				<span>Description</span>
				<span>{{  }}</span>
			</div>

			<div class="social">
				<span>Social media</span>
				<i class="material-icons icon">arrow_back</i>
				<i class="material-icons icon">arrow_back</i>
				<i class="material-icons icon">arrow_back</i>
			</div>

			<div class="gender">
				<span>Gender</span>
				 <v-overflow-btn
          :items="genders"
          label="GET ACTUAL GENDER"
          class="gender-dropdown"
        ></v-overflow-btn>
			</div>
		</section>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	data() {
		return {
			genders: ['Male', 'Female', 'Other']
		}
	}

}
</script>

<style lang="scss" scoped>

@import '@/stylesheets/master.scss';

.profile {
	width: 300px;
	height: auto;
	background-color: #fff;
	position: fixed;
	top: 81px;
	right: 0;
	text-align: left;
	box-shadow: 0 0 10px rgba(0, 0, 0, .3);
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
  	@include transition(0s, color .3s);

		&:hover {
			cursor: pointer;
  		@include transition(0s, color .3s);
  		color: $main;
		}
	}

	span {
		margin-left: 30px;
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

	img {
		&:hover{ cursor: pointer; }
		object-fit: cover;
		object-position: center;
		width: 80px;
		height: 80px;
		float: left;
		clear: both;
	}

	.icon {
		float: left;
		clear: both;
	}

	.gender-dropdown {
		float: left;
		clear: both;
	}
}


</style>