<template>
	<v-toolbar
		light
		color="#fff"
		class="topbar-logged"
		height=80
	>
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
    <v-toolbar-title>Bitcast</v-toolbar-title>

    <v-spacer></v-spacer>

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

    <v-spacer></v-spacer>
		
		<!-- COMPONENT -->
    <user-logged></user-logged>
  </v-toolbar>
</template>

<script>
import UserLogged from './User-logged.vue'
import Player from './Player.vue'

export default {
	components: {
		'user-logged': UserLogged,
		'player': Player
	}
}
</script>

<style lang="scss" scoped>
	
@import '@/stylesheets/master.scss';

.search {
	margin-top: 10px !important;
}

</style>
