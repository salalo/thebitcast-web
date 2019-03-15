<template>
	<v-toolbar
		light
		color="#fff"
		class="topbar-logged"
		height=80
	>
		<!-- COMPONENT -->
		<player></player>

    <v-spacer></v-spacer>

		<v-toolbar-items class="hidden-sm-and-down">
			<v-btn flat><i class="material-icons">volume_up</i></v-btn>
			<v-btn flat><i class="material-icons">timer</i></v-btn>
			<v-btn flat><i class="material-icons">bookmark_outline</i></v-btn>
		</v-toolbar-items>

    <v-spacer></v-spacer>
		
    <v-toolbar-items class="hidden-sm-and-down">
     
			<v-text-field
				height=36
				append-icon="search"
				class="search"
				value=""
				outline
				label="Search"
				color="#F44336"
      ></v-text-field>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import Player from './Player.vue';

export default {
	components: {
		'player': Player
	}
}
</script>

<style lang="scss" scoped>
	
@import '@/stylesheets/master.scss';

.container {
	background-color: #fff;
	height: 80px;
	box-shadow: 0 0 10px rgba(0, 0, 0, .3);
}

// HAS TO BE CHANGED
.search-input {
	font-size: 15px;
	color: $grey;
	float: right;
	height: 50px;
	margin: 5px 0 0 150px;
}

// child components
.playing-info { margin-left: 50px; }
.player { margin-left: 50px; }

@media (max-width: 1700px) {
	.search-input { margin: 5px 0 0 50px; }
}

</style>
