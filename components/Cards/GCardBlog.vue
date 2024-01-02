<template>
    <div class="is-desktop bg-white w-100 rounded-lg g-shadow">
        <div class="g-card-head d-flex gap-4 p-3 border border-bottom border-2 border-light">
            <div class="g-card-image rounded">
                <img :src="blog?.feature_image" width="80" height="80" class="object-fit-cover rounded-lg" />
            </div>
            <div class="g-card-info">
                <div class="h5"> {{ useTruncateText(blog?.title, 45) }}</div>
                <div class="d-flex align-items-center">
                    <div class="text-muted f10">30 seconds ago</div>
                    <NuxtLink to="/users/detail" class="text-decoration-none text-dark">
                    <div class="d-flex ms-3 align-items-center">
                        <img src="https://i.pinimg.com/236x/8d/b7/e3/8db7e3866bc0821fd92ffa5edece1c3f.jpg" width="20" height="20" class="object-fit-cover rounded-pill" />
                        <div class="ms-2"> {{ blog?.author }} </div>
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
            <div>{{ useTruncateText(blog?.content,200) }}</div>
                <div class="g-card-more w-100 text-light position-absolute bottom-2 d-flex justify-content-center">
                    <a :href="`/blog/read/${blog?.id}`" class="text-decoration-none text-light bg-dark text-center rounded-pill py-3 w-25 me-2">
                        read more <i class="ms-2 bi bi-chevron-down rounded-pill"></i>
                    </a>
                    <a v-if="isContentOwner"  :href="`/blog/edit/${blog?.id}`" class="text-decoration-none text-light bg-dark text-center rounded-pill py-3 w-25 me-2">
                        Update <strong class="bi bi-arrow-up me-2 fw-bold"></strong>
                    </a>
                </div>
          
        </div>
    </div>
    <div class="is-mobile bg-white w-100 rounded-lg g-shadow">
        <div class="g-card-head d-flex w-100 border">
            <div class="g-card-image rounded h-100 me-2" style="width: 35%;">
                <img src="https://img.freepik.com/free-photo/tall-stylish-shirtless-bodybuilder-dressed-sports-shorts-doing-exercise-bicep-with-barbell-standing-studio-isolated-dark-background_613910-18341.jpg" height="200" class="w-100 object-fit-cover" />
            </div>
            <div class="g-card-info p-2">
                <div class="h5">{{ useTruncateText(blog?.title, 45) }}</div>
                <div class="d-flex align-items-center">
                    <div class="text-muted f10">30 seconds ago</div>
                    <NuxtLink to="/users/detail" class="text-decoration-none text-dark">
                    <div class="d-flex ms-3 align-items-center">
                        <img src="https://i.pinimg.com/236x/8d/b7/e3/8db7e3866bc0821fd92ffa5edece1c3f.jpg" width="20" height="20" class="object-fit-cover rounded-pill f14" />
                        <div class="ms-2 f12">{{ blog?.author }}</div>
                    </div>
                    </NuxtLink>
                </div>
                <div class="d-flex mt-1">
                    <i class="bi bi-chat-square-text me-2 text-primary"></i>
                    <i class="bi bi-heart-fill text-primary"></i>
                </div>

                <div class="mt-3 f14">
                    <div>{{ useTruncateText(blog?.content,200) }}</div>
                </div>
            </div>
        </div>
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
    min-height: 200px;

}

.g-card-more {
    bottom: 25px;
    font-size: 12px;
}

@media only screen and (max-width:1009px)  {
    .g-card-body {
        height: 60vh;
    }
}
</style>