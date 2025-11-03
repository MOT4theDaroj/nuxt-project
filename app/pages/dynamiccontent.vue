<template>
    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 1080px;">
        <h1>Dynamic Content</h1>
        <el-input v-model="idx" style="width: 240px; margin-bottom: 10px;"/>
        <el-button type="info" plain  class="w-[100px]" @click="show()">show</el-button>

        <div v-for="(person, i) in people">
            <div v-if="i == idx">
                {{ i+1 }}.{{ person.name }} {{ person.age }}
            </div>
        </div>

        <!-- <div v-for="person in people">
            <div>
                {{ person.name }} {{ person.age }}
            </div>
        </div> -->
    </div>
</template>

<script setup lang="ts">

interface Person {
    name: string;
    age: number;
}

const people = ref<Person[]>([
    { name: 'John Doe', age: 30 },
    { name: 'Jane Smith', age: 25 },
]);

 let idx = ref(0);

    function show(){
        let id = idx.value;
        console.log(people.value[id]?.name);
    }


</script>

<style scoped>

</style>