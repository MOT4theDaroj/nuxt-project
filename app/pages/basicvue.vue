<template>
    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 1080px;">
        <Demoprops title="this is title" style="margin-bottom: 10px;"/>
        <h1 style="margin-bottom: 10px;" class="font-bold">{{ greeting }}</h1>    
        <a :href=" link " style="margin-bottom: 10px;">google</a>
        <el-button type="info" plain  class="w-[100px]" @click="increment()" style="margin-bottom: 10px;">click me {{count}}</el-button>
        {{ html }}
        <div v-html="html" class="font-bold"></div>
         <div class="w-[200px]">
            <el-input v-model="input" />
            <input type="text" @input="onInput">
        </div>
        <div>{{ input }}</div>
    </div>
</template>

<script setup lang="ts">
    let greeting = 'Hello World !!!';
    let link = 'https://www.google.com';
    let count = ref(0);
    let html = ref('<h1>Hello</h1>')
    let input = ref("");

    function increment() {
        count.value++;
        console.log(count);
    }

    function onInput(event: Event) {
        input.value = (event.target as HTMLInputElement).value;    
    }
</script>

<style scoped>

</style>