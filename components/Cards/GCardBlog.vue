<template>
    <div class="card-blog-item is-desktop bg-white rounded-lg g-shadow">
        <div class="g-card-head">
            <div class="g-card-image">
                <img :src="blog?.feature_image" class="object-fit-cover" />
            </div>
            <div class="g-card-info">
                <div class="h5"> {{ useTruncateText(blog?.title, 45) }}</div>
                <div class="d-flex align-items-center">
                    <div class="text-muted f12">{{ $formatTime(blog?.created_at) }}</div>
                    <NuxtLink :to="`/users/${blog?.user_id}`" class="text-decoration-none text-dark">
                    <div class="d-flex ms-3 align-items-center">
                        <div v-if="isContentOwner" class="ms-2 d-flex" > 
                            <img v-if="blog?.user_image" :src="blog?.user_image" style="height: 20px; width: 20px;"  class="object-fit-cover rounded-pill" />
                            <i v-else-if="blog?.user_image && isContentOwner" class="bi bi-person-circle h5 mb-0"></i>
                            <div v-if="isContentOwner" class="ms-2 f12 text-muted"> {{ blog?.author }} </div>
                        </div>
                        
                    </div>
                    </NuxtLink>
                </div>
                <div class="d-flex mt-1">
                    <i class="bi bi-chat-square-text me-2 text-primary"></i>
                    <i class="bi bi-heart-fill text-primary"></i>

                </div>
            </div>
        </div>
        <div class="g-card-body p-3">
            <div class="g-card-content text-muted" v-html="useTruncateText(blog?.short_description, truncateCount)"></div>
            <div class="g-card-more text-light bottom-2">
                <a :href="`/blog/read/${blog?.id}`" class="text-decoration-none text-light bg-dark text-center rounded-pill py-3 me-2">
                    {{ $t("ReadMoreLabel") }} <i class="ms-2 bi bi-chevron-down rounded-pill"></i>
                </a>
                <a v-if="!isNotContentOwner"  :href="`/blog/edit/${blog?.id}`" class="text-decoration-none text-light bg-dark text-center rounded-pill py-3 me-2">
                    {{ $t("UpdateLabel") }} <strong class="bi bi-arrow-up me-2 fw-bold"></strong>
                </a>
            </div>
        </div>
    </div>
    <div class="is-mobile g-card-blog bg-white w-100 rounded-lg g-shadow overflow-hidden">
        <a :href="`/blog/read/${blog?.id}`" class="text-decoration-none text-dark">
            <div class="g-card-head w-100 border overflow-hidden">
                <div class="g-card-image rounded me-2 w-100" style="position: relative;">
                    <img :src="blog?.feature_image" class="w-100 object-fit-cover" />

                        <div class="g-card-info p-3 overlay" style="position: absolute; top: 0;">
                            <div class="h5 text-light">{{ useTruncateText(blog?.title, 45) }}</div>
                            <div class="d-flex align-items-center ">
                                <NuxtLink :to="`/users/${blog?.user_id}`" class="text-decoration-none text-dark">
                                <div class="d-flex align-items-center">
                                    <img v-if="blog?.user_image" :src="blog?.user_image" style="height: 20px; width: 20px;"  class="object-fit-cover rounded-pill f14" />
                                    <i v-else class="bi bi-person-circle h5 mb-0"></i>                                    
                                    <div class="ms-2 f12 text-light">{{ blog?.user_id }} </div>
                                </div>
                                </NuxtLink>
                            </div>
                            <div class="mt-3 f14 text-light">
                                <div v-html="useTruncateText(blog?.short_description,150)"></div>
                            </div>                            

                        </div>               
                </div>

            </div>
        </a>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useTruncateText from '~/composables/useTruncateText'

export default defineComponent({
    props: {
        blog: Object
    },
    setup(props) {
        var authStore = useAuthStore()
        var { userData } = storeToRefs(authStore)
        var route = useRoute()
        var truncateCount = ref(70)

        var isContentOwner = computed(() => {
            return userData.value.id === props.blog?.user_id
        })        

        var isNotContentOwner = computed(() => {
            return route.params.id === props.blog?.user_id
        })     

        onMounted(() => {
            window.addEventListener('resize', () => {
                
                if(window.innerWidth < 1160){
                    truncateCount.value = 50
                    console.log("TRUNCATE: ADD")
                }
                if(window.innerWidth > 1160 && truncateCount.value < 70){
                    truncateCount.value = 70
                    console.log("TRUNCATE: MINUS")
                }           
                if(window.innerWidth <= 500){
                    truncateCount.value = 30
                    console.log("TRUNCATE: MINUS")
                }                       
            })               
        })        
        return {
            useTruncateText,
            isContentOwner,
            isNotContentOwner,
            truncateCount
        }
    },
})
</script>

<style>

.card-blog-item{
    width: 40rem;
}
.g-card-body {
    min-height: 150px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
.g-card-head{
    display: flex;
    gap: 1rem;
    padding: 1rem;
}
.g-card-head > .g-card-image > img {
    height: 100px; 
    width: 100px;        
}
.g-card-more {
    bottom: 25px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    width: 100%;
}
.g-card-more > a {
    width: 10rem;
}

.overlay{
    background: rgb(0,0,0);
    background: linear-gradient(164deg, rgba(0,0,0,1) 0%, rgba(133,133,133,0.8099614845938375) 53%, rgba(255,255,255,0) 100%);
    height: 100%;
}

@media only screen and (max-width:1400px)  {
    .card-blog-item{
        width: 100%;
    }
    .g-card-more > a {
        width: 8rem;
    }        
}
@media only screen and (max-width:800px)  {
    .g-card-more {
        bottom: 25px;
        font-size: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 1rem;
    }    
    .g-card-more > a {
        width: 10rem;
    }    
}

@media only screen and (max-width:500px)  {
    
    .g-card-head{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 0rem;
    }
    .g-card-head > .g-card-image > img {
        height: 11rem; 
        width: 14rem;        
    }
    .g-card-blog .g-card-info {
        width: 100%;

    }
    .g-card-info{
        padding: 1rem;
    }
    .g-card-blog .g-card-image {
        width: 45%;
        height: 250px;
    }

    .g-card-blog .g-card-image img{
        height: 100%;
    }
    .g-card-blog {
        min-width: 360px;
    }

    .g-card-content{
        display: none;
    }
    /* .g-card-body {
        height: 60vh;
    } */
}
</style>