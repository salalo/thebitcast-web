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
			<v-btn
				flat
				color="#F44336"
			><i class="material-icons">volume_up</i></v-btn>

			<v-btn
				flat
				color="#F44336"
			><i class="material-icons">timer</i></v-btn>

			<v-btn 
				flat
				color="#F44336"
				@click="addBookmark()"
			><i class="material-icons">{{ bmIcon }}</i></v-btn>
		</v-toolbar-items>

    <v-spacer></v-spacer>
		
    <v-toolbar-items class="hidden-sm-and-down">
     
			<v-text-field
				height=36
				append-icon="search"
				class="search"
				value=""
				label="Search"
				color="#F44336"
      ></v-text-field>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import Player from '../Player.vue';

export default {
	data(){
		return{
			bmIcon: 'bookmark_outline'
		}
	},

	components: {
		'player': Player
	},

	methods: {
		addBookmark() {
			// if added
			if (this.bmIcon === 'bookmark_outline'){
				this.bmIcon = 'bookmark'
				// get title, ID or URL of podcast
				// post to users db
			}
			// if removed
			else{
				this.bmIcon = 'bookmark_outline'
				// get title, ID or URL of podcast
				// find in db and remove
			}
		}
	}
}
</script>

<style lang="scss" scoped>
	
@import '@/stylesheets/master.scss';

.search { margin-top: 10px !important; }
.topbar-logged {
	width: calc(100vw - 640px);
	float: left;
	box-shadow: 0 0 10px rgba(0, 0, 0, .3);
}

</style>
