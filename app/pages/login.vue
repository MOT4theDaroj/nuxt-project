<template>
    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 1000px;">
        <h1 style="margin-bottom: 20px; font-size: 40px;" >LOGIN</h1>
        <el-input v-model="ID" style="width: 240px; margin-bottom: 10px;" placeholder="ID" />
        <el-input v-model="PASS" style="width: 240px; margin-bottom: 10px;" placeholder="PASSWORD" />
        <el-button type="info" plain  class="w-[100px]" @click="login()">LOGIN</el-button>
        
        <h1>INPUT ID : {{ ID }}</h1>
        <h1>INPUT PASS : {{ PASS }}</h1>

        {{ text }}
    </div>
</template>

<script setup lang="ts">
    definePageMeta(
        {
            layout : false
        }
)

    import { ref } from 'vue'

    let ID = ref("")
    let PASS = ref("")

    const realId = "user";
    const realPass = "1234";

    let text = ref("");

    function login(){
        console.log("ID : " + ID.value);
        console.log("PASS : " + PASS.value);
        if(ID.value === realId && PASS.value === realPass){
            text.value = "login success"
        }else{
             text.value = "login fail"
        }
    }
    
</script>

<style scoped>

</style>