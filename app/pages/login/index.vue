<template>
    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 1000px;">
        <h1 style="margin-bottom: 20px; font-size: 50px;">LOGIN</h1>
        <el-input v-model="ID" style="width: 240px; margin-bottom: 10px;" placeholder="ID" />
        <el-input v-model="PASS" style="width: 240px; margin-bottom: 10px;" placeholder="PASSWORD" />
        <el-button type="info" plain  class="w-[100px]" >LOGIN</el-button>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    const ID = ref('')
    const PASS = ref('')
    
</script>

<style scoped>

</style>