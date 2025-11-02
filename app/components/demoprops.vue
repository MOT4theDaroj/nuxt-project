<template>
    <div>
        <h1>Demo props</h1>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        title : {
            type : String,
            required : true
        },
        idx : {
            type : Number,
        }
    })
    console.log(props.title);
    
</script>

<style scoped>

</style>