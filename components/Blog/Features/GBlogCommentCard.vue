<template>
    <div class="is-desktop g-supplement-review-card d-flex flex-wrap gap-2" :class="comment?.replies?.length? '':'mb-4'">

        <NuxtLink :to="`/users/${comment?.user_id}`" class="g-supplement-review-media">
            <img class="object-fit-cover rounded-circle" :src="avatarImg" style="height: 40px; width: 40px;" />
        </NuxtLink>
        <div class="g-supplement-review bg-white border border-secondary rounded-3 p-3" :style="comment?.is_reply? 'width:92%;':''">
            <div class="d-flex justify-content-between text-muted">
                <!-- <div class="f10">{{ comment?.sender.name }}</div> -->
                <div class="f10">
                    {{ $formatTime(comment?.created_date) }}
                </div>
            </div>
            <div class="mt-2 f14">{{ comment?.comment }}</div>
            <div class="mt-2 d-flex gap-2 text-primary">
                <i v-if="comment?.is_reply" class="bi bi-arrow-90deg-left cursor-pointer" data-bs-toggle="collapse" :data-bs-target="`#reply-${comment?.reply_to}`" aria-expanded="false" :aria-controls="`reply-${comment?.reply_to}`"></i>
                <i v-else class="bi bi-arrow-90deg-left cursor-pointer" data-bs-toggle="collapse" :data-bs-target="`#reply-${comment?.id}`" aria-expanded="false" :aria-controls="`reply-${comment?.id}`"></i>
                <!-- <i class="bi bi-heart-fill"></i>
                <i class="bi bi-person-plus"></i> -->
            </div>
        </div>
    </div>
    <div class="is-mobile g-supplement-review-card my-2" :class="comment?.is_reply? 'my-3':''">
        <div class="g-supplement-review w-100 d-flex gap-2 bg-white border border-secondary rounded-lg py-1 px-3">
            <NuxtLink :to="`/users/${comment?.user_id}`" class="g-supplement-review-media">
                <img class="object-fit-cover rounded-circle" :src="avatarImg" style="height: 40px; width: 40px;" />
            </NuxtLink>
            <div class="w-75">
                <div class="d-flex justify-content-between text-muted w-100">
                    <!-- <div class="f10">{{ comment?.sender.name }}</div> -->
                    <div class="f10">
                        {{ $formatTime(comment?.created_date) }}
                    </div>
                </div>
                <div class="mt-1 f12">{{ comment?.comment }}</div>
                <hr class="my-1" />
                <div class="mt-1 d-flex gap-2 text-primary">
                    <i v-if="comment?.is_reply" class="bi bi-arrow-90deg-left cursor-pointer" data-bs-toggle="collapse" :data-bs-target="`#reply-${comment?.reply_to}`" aria-expanded="false" :aria-controls="`reply-${comment?.reply_to}`"></i>
                    <i v-else class="bi bi-arrow-90deg-left cursor-pointer" data-bs-toggle="collapse" :data-bs-target="`#reply-${comment?.id}`" aria-expanded="false" :aria-controls="`reply-${comment?.id}`"></i>
                    <!-- <i class="bi bi-heart-fill"></i>
                    <i class="bi bi-person-plus"></i> -->
                </div>
            </div>
        </div>
    </div>
    <div class="collapse mt-2 mb-5 ml-4" :id="`reply-${comment?.id}`" style="width: 94%;">
        <div class="card card-body bg-none p-0 border-0">
            <BlogFeaturesGBlogCommentForm is-replay="true" :comment-id="comment?.id"></BlogFeaturesGBlogCommentForm>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        comment: Object
    },
    setup({comment}) {
        const avatarImg = computed(() => {
            return comment?.sender?.profile_details?.image? comment?.sender?.profile_details?.image:'/images/no-avatar.jpeg'
        })

        return {
            avatarImg
        }
    },
})
</script>

<style>
.g-supplement-review {
    width: 94%;
}
</style>