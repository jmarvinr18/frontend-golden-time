<template>
    <a :href="`/event/read/${event?.id}`" class="text-decoration-none">
        <div class="g-card-news card w-100 g-shadow rounded-lg">
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