<template>
	<div>

				<div
					v-for="post in posts"
					:key="post"
				>{{post.data}}</div>
	</div>
</template>
<!-- 
<script>
	
import userDataService from '../services/userDataService.js';

export default {
	data () {
		return {
			posts: []
		}
	},
	mounted() {
		this.getPosts()
	},
	methods: {
		async getPosts () {
			let response = await userDataService.()
			this.posts = response
		}
	}
}
</script> -->

<style lang="scss" scoped>

@import '@/stylesheets/master.scss';

</style>