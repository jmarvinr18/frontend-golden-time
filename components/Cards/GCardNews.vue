<template>
    <NuxtLink to="/news/read" class="text-decoration-none">
        <div class="g-card-news card w-100 g-shadow rounded-lg">
            <img src="https://img.freepik.com/free-photo/smiling-athlete-with-earphones-holding-thumbs-up-ready-training_342744-652.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <div class="h5">
                    24 Hours gym open
                </div>
                <div class="card-created-time f12 text-secondary">
                    <div v-if="type=='news'">
                        2 seconds ago
                    </div>
                    <div v-else>
                        Monday to Friday 6:30 AM - 7:30 PM <span class="ms-2 text-black">{{ locationName }}</span>
                    </div>
                </div>
                <hr class="border-secondary mb-1" />
                <p v-if="type == 'news'" class="card-text f12 text-secondary">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <p v-else class="card-text-schedule f12 text-secondary d-flex align-items-center justify-content-between">
                    <div class="card-time lh-lg">
                        <div>OPEN : {{ openTime }}</div>
                        <div>START : {{ startTime }}</div>
                        <div class="player-gathering">Player gathering : {{ playerGathering }}</div>
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
<style scoped>
@media only screen and (max-width:1009px)  {
    .g-card-news {
        width: 190px !important;
    }

    .g-card-news img{
        height: 85px;
        object-fit: cover;
    }
    .g-card-news .h5 {
        font-size: 12px;
        margin-bottom:2px;
    }

    .g-card-news .card-text {
        height: 32px !important;
        overflow: hidden;
        font-size: 11px;
    }

    .g-card-news .card-text-schedule {
        padding: 0;
        margin-bottom: 0;
    }

    .g-card-news .card-created-time {
        font-size: 9px;
        margin-top: 2px;
    }

    .g-card-news .card-body {
        padding:6px 10px;
    }

    .g-card-news hr {
        margin: 5px 0;
    }

    .g-card-news .btn{
        padding: 2px 5px;
        font-size: 12px;
    }

    .g-card-news .player-gathering {
        display: none;
    }

    .g-card-news .card-time {
        font-size: 10px;
    }
}
</style>