<template>
    <div>
         <h1>Trip {{ $route.params.idx }}</h1>
    </div>
</template>

<script setup lang="ts">
    const route = useRoute();
    console.log(route.params.idx);
</script>

<style scoped>

</style>