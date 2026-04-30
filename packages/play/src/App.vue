<script setup lang="ts">
import { ref } from 'vue';

const buttonLoading = ref(false);
const handleClick = () => {
	buttonLoading.value = true;
	setTimeout(() => {
		buttonLoading.value = false;
	}, 1000);
};
</script>

<template>
	<er-button @click="handleClick" size="small" type="primary" :loading="buttonLoading" icon="search"
		>你好呀</er-button
	>
</template>

<style scoped></style>
