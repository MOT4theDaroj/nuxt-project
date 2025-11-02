<template>
    <div>
        <h1>TRIP HOME</h1>
        <Banner />
        <BaseBanner />
        <h1>{{ $route.query.idx }}</h1>
        <h1>{{ $route.query.name }}</h1>
        <el-button type="success" class="w-[300px]">Success</el-button>
    </div>
</template>

<script setup lang="ts">
    const route = useRoute();
    console.log(route.query.idx);
    console.log(route.query.name);
</script>

<style scoped>

</style>