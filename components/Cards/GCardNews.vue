<template>
    <div class="is-desktop">
        <a :href="`/news/read/${news?.id}`" class="text-decoration-none">
            <div class="g-card-news card w-100 g-shadow rounded-lg">
                <img :src="news?.feature_image" class="card-img-top" alt="...">
                <div class="card-body">
                    <div class="h5 g-card-title">
                        {{ useTruncateText(news?.title, 35) }}
                    </div>
                    <div class="card-created-time f12 text-secondary">
                        <div>
                            2 seconds ago
                        </div>
                    </div>
                    <hr class="border-secondary mb-1" />
                    <p class="card-text f12 text-secondary">{{ useTruncateText(news?.content, 100) }}</p>
                </div>
            </div>
        </a>
    </div>
    <div class="is-mobile g-card-blog bg-white w-100 rounded-lg g-shadow overflow-hidden">
        <a :href="`/blog/read/${news?.id}`" class="text-decoration-none text-dark">
            <div class="g-card-head w-100 border overflow-hidden">
                <div class="g-card-image rounded me-2 w-100" style="position: relative;">
                    <img :src="news?.feature_image" class="w-100 object-fit-cover">
                        <div class="g-card-info p-3 overlay" style="position: absolute; top: 0;">
                            <div class="h5 text-light">{{ useTruncateText(news?.title, 45) }}</div>
                            <div class="d-flex align-items-center ">
                                <NuxtLink to="/users/detail" class="text-decoration-none text-dark">
                                <div class="d-flex align-items-center">
                                    <img src="https://i.pinimg.com/236x/8d/b7/e3/8db7e3866bc0821fd92ffa5edece1c3f.jpg" style="width: 20px; height: 20px;" class="object-fit-cover rounded-pill f14" />
                                    <div class="ms-2 f12 text-light">{{ news?.user }}</div>
                                </div>
                                </NuxtLink>
                            </div>
                            <div class="mt-3 f14 text-light">
                                <div v-html="useTruncateText(news?.content,50)"></div>
                            </div>                            

                        </div>               
                </div>

            </div>
        </a>
    </div>

</template>
<script lang="ts">
export default defineComponent({
    props: {
        news: Object
    },
    setup() {
        return {
            useTruncateText
        }
    },
})
</script>
<style scoped>
.g-card-news img{
    height: 200px;
    object-fit: cover;
}
.g-card-title {
    height: 68px;
}
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