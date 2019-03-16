<template>
	<v-avatar
		color="grey lighten-4"
	>
		<img src="../assets/crAvatar.jpg" alt="avatar">
	</v-avatar>
</template>

<script>

export default {}
</script>

<style lang="scss" scoped>

@import '@/stylesheets/master.scss';

img {
	&:hover{ cursor: pointer; }
	object-fit: cover;
	object-position: center;
}

</style>
