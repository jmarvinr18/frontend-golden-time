<template>
    <div class="is-desktop bg-white w-100 rounded-lg g-shadow">
        <div class="g-card-head d-flex gap-4 p-3 border border-bottom border-2 border-light">
            <div class="g-card-image rounded">
                <img :src="blog?.feature_image" style="height: 80px; width: 80px;" class="object-fit-cover rounded-lg" />
            </div>
            <div class="g-card-info">
                <div class="g-card-title h5"> {{ useTruncateText(blog?.title, 45) }}</div>
                <div class="d-flex align-items-center">
                    <div class="text-muted f10">{{ $formatTime(blog?.created_at) }}</div>
                    <NuxtLink :to="`/users/${blog?.user_id}`" class="text-decoration-none text-dark">
                    <div class="d-flex ms-3 align-items-center">
                        <!-- <img src="https://i.pinimg.com/236x/8d/b7/e3/8db7e3866bc0821fd92ffa5edece1c3f.jpg" style="height: 20px; width: 20px;"  class="object-fit-cover rounded-pill" /> -->
                        <i class="bi bi-person-circle h5 mb-0"></i>
                        <div class="ms-2" v-if="blog.users"> {{ blog?.users?.name }} </div>
                        <div class="ms-2" v-else> {{ blog?.author }} </div>
                    </div>
                    </NuxtLink>
                </div>
                <div class="d-flex mt-1">
                    <i class="bi bi-chat-square-text me-2 text-primary"></i>
                    <i class="bi bi-heart-fill text-primary"></i>

                </div>
            </div>
        </div>
        <div class="g-card-body p-3 position-relative">
            <div v-html="useTruncateText(blog?.content,200)"></div>
            <div class="g-card-more w-100 text-light position-absolute bottom-2 d-flex justify-content-center">
                <a :href="`/blog/read/${blog?.id}`" class="text-decoration-none text-light bg-dark text-center rounded-pill py-3 w-25 me-2">
                    {{ $t("ReadMoreLabel") }} <i class="ms-2 bi bi-chevron-down rounded-pill"></i>
                </a>
                <a v-if="isContentOwner"  :href="`/blog/edit/${blog?.id}`" class="text-decoration-none text-light bg-dark text-center rounded-pill py-3 w-25 me-2">
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
                                <NuxtLink to="/users/detail" class="text-decoration-none text-dark">
                                <div class="d-flex align-items-center">
                                    <img src="https://i.pinimg.com/236x/8d/b7/e3/8db7e3866bc0821fd92ffa5edece1c3f.jpg" style="width: 20px; height: 20px;" class="object-fit-cover rounded-pill f14" />
                                    <div class="ms-2 f12 text-light">{{ blog?.user }} </div>
                                </div>
                                </NuxtLink>
                            </div>
                            <div class="mt-3 f14 text-light">
                                <div v-html="useTruncateText(blog?.content,50)"></div>
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

        var isContentOwner = computed(() => {
            return userData.value.id === props.blog?.user_id
        })        
        return {
            useTruncateText,
            isContentOwner
        }
    },
})
</script>

<style>
.g-card-body {
    height: 190px;

}

.g-card-more {
    bottom: 25px;
    font-size: 12px;
}

.g-card-title {
    height: 48px;
}
.overlay{
    background: rgb(0,0,0);
    background: linear-gradient(164deg, rgba(0,0,0,1) 0%, rgba(133,133,133,0.8099614845938375) 53%, rgba(255,255,255,0) 100%);
    height: 100%;
}

@media only screen and (max-width:1009px)  {
    .g-card-blog .g-card-info {
        width: 100%;
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

    .g-card-body {
        height: 60vh;
    }
}
</style>