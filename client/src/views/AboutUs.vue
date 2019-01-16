<template>
	<div>
		About us
		<div
			v-for="post in posts"
			:key="post"
		>{{ post }}</div>
	</div>
</template>

<script>
	
import axios from 'axios'

export default {
	data () {
		return {
			posts: []
		}
	},
	mounted() {
		axios.get('http://localhost:8081/about-us').then(res => {
			this.posts = res.data
		})
	}
}
</script>

<style lang="scss" scoped>

@import '@/stylesheets/master.scss';

</style>