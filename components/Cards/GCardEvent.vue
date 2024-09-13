<template>
    <a :href="`/event/read/${event?.id}`" class="text-decoration-none">
        <div class="g-card-event card w-100 g-shadow rounded-lg">
            <img :src="event?.feature_image" class="card-img-top" alt="...">
            <div class="card-body">
                <div class="h5">
                    {{ event?.title }}
                </div>
                <div class="card-created-time f12 text-secondary">

                    <div v-html="useTruncateText(event?.content,250)"></div>
                </div>
                <hr class="border-secondary mb-1" />
        
                <p  class="card-text-schedule f12 text-secondary d-flex align-items-center justify-content-between">
                    <div class="card-time lh-lg">
                        <div>{{ event?.meta[0]?.key }} : {{ event?.meta[0]?.value }}</div>
                        <div>{{ event?.meta[1]?.key }} : {{ event?.meta[1]?.value }}</div>
                        <div>{{ event?.meta[2]?.key }} : {{ event?.meta[2]?.value }}</div>
                    </div>
                    <div class="card-button">
                        <button class="btn btn-outline-primary btn-sm border-2">detail</button>
                    </div>
                </p>
            </div>
        </div>
    </a>
</template>
<script lang="ts">
export default defineComponent({
    props: {
        event: Object,
    },
    

    setup(props) {
        
        return {

        }
    }
})
</script>
<style scoped>
.g-card-event img {
    height: 240px;
    object-fit: cover;
}

.g-card-event .card-created-time {
    height: 70px;
}
@media only screen and (max-width:1009px)  {
    .g-card-event .card-created-time {
        height: 30px;
        overflow: hidden;
    }
    .g-card-event .g-card-title {
        height: 50px;
    }
    .g-card-event {
        width: 190px !important;
    }

    .g-card-event img{
        height: 85px;
        object-fit: cover;
    }
    .g-card-event .h5 {
        font-size: 12px;
        margin-bottom:2px;
    }

    .g-card-event .card-text {
        height: 32px !important;
        overflow: hidden;
        font-size: 11px;
    }

    .g-card-event .card-text-schedule {
        padding: 0;
        margin-bottom: 0;
    }

    .g-card-event .card-created-time {
        font-size: 9px;
        margin-top: 2px;
    }

    .g-card-event .card-body {
        padding:6px 10px;
    }

    .g-card-event hr {
        margin: 5px 0;
    }

    .g-card-event .btn{
        padding: 2px 5px;
        font-size: 12px;
    }

    .g-card-event .player-gathering {
        display: none;
    }

    .g-card-event .card-time {
        font-size: 10px;
    }
}
</style>