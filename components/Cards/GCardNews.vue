<template>
    <NuxtLink to="/news/read" class="text-decoration-none">
        <div class="card w-100 g-shadow rounded-lg">
            <img src="https://img.freepik.com/free-photo/smiling-athlete-with-earphones-holding-thumbs-up-ready-training_342744-652.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <div class="h5">
                    24 Hours gym open
                </div>
                <div class="f12 text-secondary">
                    Monday to Friday 6:30 AM - 7:30 PM <span class="ms-2 text-black">{{ locationName }}</span>
                </div>
                <hr class="border-secondary mb-1" />
                <p v-if="type == 'news'" class="card-text f12 text-secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p v-else class="card-text f12 text-secondary d-flex align-items-center justify-content-between">
                    <div class="card-time lh-lg">
                        <div>OPEN : {{ openTime }}</div>
                        <div>START : {{ startTime }}</div>
                        <div>Player gathering : {{ playerGathering }}</div>
                    </div>
                    <div class="card-button">
                        <button class="btn btn-outline-primary btn-sm border-2">detail</button>
                    </div>
                </p>
            </div>
        </div>
    </NuxtLink>
</template>
<script lang="ts">
export default defineComponent({
    props: {
        type: {
            type: String as PropType<string>,
            default: 'news' // 'agenda'
        },
        openTime: {
            type: String,
        },
        startTime:  {
            type: String,
        },
        playerGathering: {
            type: String,
        },
        locationName: {
            type: String
        }
    },
})
</script>