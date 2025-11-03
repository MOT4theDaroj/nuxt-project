<template>
    <div>
        <h1>TRIP</h1>
    </div>
</template>

<script setup lang="ts">
    /* definePageMeta(
        {
            layout : 'trip'
        }
    ) */
   
    const route = useRoute();
    console.log(route.query.email)

    const { getAllTrips, getTrip } = useTrip();
    const trips = getAllTrips();
    console.log(trips);

    const trip = getTrip(1);
    console.log(trip);

    const { $apiEndpoint } = useNuxtApp();
    console.log($apiEndpoint);

</script>

<style scoped>

</style>