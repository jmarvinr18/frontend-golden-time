
<template>
    <div class="is-desktop g-supplement-review-form w-100 position-relative overflow-visible ">
        <div class="bg-white mx-auto rounded-lg w-75 position-relative g-shadow" style="min-height:500px">
            <div class="w-75 mx-auto pt-4 pb-2">
                <SupplementGSupplementReviewItem :supplement="supplement" class="mt-4 mb-5"></SupplementGSupplementReviewItem>

                <div class="d-flex justify-content-center gap-4" style="margin-bottom:80px; margin-top:100px">
                    <div class="w-25">
                        <SupplementGSupplementRatingCard :supplement="supplement"></SupplementGSupplementRatingCard>
                    </div>
                    <div class="w-25">
                        <SupplementGSupplementRatingCard :supplement="supplement" type="effect"></SupplementGSupplementRatingCard>
                    </div>
                </div>
            </div>

            <div class="w-75 mx-auto py-2">
                <SupplementGSupplementDetailTable :supplement="supplement"></SupplementGSupplementDetailTable>
            </div>

            <hr class="border-dashed w-75 mx-auto my-5" />

            <div class="w-50 mx-auto">
                <div v-for="(comment, i) in comments" :key="i">
                    <SupplementGSupplementReviewCard class="mb-1" :comment="comment"></SupplementGSupplementReviewCard>
                    <div class="w-100 text-center mt-1 mb-4">
                        <!-- <a class="text-decoration-none text-primary text-end" v-if="comment?.replies?.length && !comment.view_replies" href="javascript:void(0)" @click="comment.view_replies=true">View {{ comment?.replies?.length }} Replies</a> -->
                        <UtilsGLoadMore class="mt-1" v-if="comment?.replies?.length && !comment.view_replies" :button-mode="true" :label-btn="`${ comment?.replies?.length } ${$t('Replies')}`" @on-click="comment.view_replies=true"></UtilsGLoadMore>
                    </div>
                    <div class="w-100 m-5" v-if="comment.view_replies">
                        <SupplementGSupplementReviewCard v-for="(reply, i) in comment?.replies" :key="i" :comment="reply"></SupplementGSupplementReviewCard>
                    </div>
                </div>
            </div>
            <SupplementGSupplementReviewCommentForm></SupplementGSupplementReviewCommentForm>
        </div>
    </div>
    <div class="is-mobile g-supplement-review-form w-100 position-relative overflow-visible ">
        <div class="bg-white rounded-lg w-100 position-relative g-shadow" >
            <div class="w-100 px-2 pt-4 pb-2">
                <SupplementGSupplementReviewItem :supplement="supplement" class="mt-4 mb-5"></SupplementGSupplementReviewItem>

                <div class="d-flex justify-content-center gap-3 px-3" style="margin-bottom:80px; margin-top:100px">
                    <div class="w-50 px-2">
                        <SupplementGSupplementRatingCard :supplement="supplement"></SupplementGSupplementRatingCard>
                    </div>
                    <div class="w-50 px-2">
                        <SupplementGSupplementRatingCard :supplement="supplement" type="effect"></SupplementGSupplementRatingCard>
                    </div>
                </div>
            </div>

            <div class="w-100 px-3 mx-auto">
                <SupplementGSupplementDetailTable :supplement="supplement"></SupplementGSupplementDetailTable>
            </div>

            <hr class="border-dashed w-75 mx-auto my-4" />

            <div class="w-75 px-3 mx-auto mb-4">
                <div v-for="(comment, i) in comments" :key="i">
                    <SupplementGSupplementReviewCard class="mb-1" :comment="comment"></SupplementGSupplementReviewCard>
                    <div class="w-100 text-center mt-1 mb-4">
                        <UtilsGLoadMore class="mt-1" v-if="comment?.replies?.length && !comment.view_replies" :button-mode="true" :label-btn="`${ comment?.replies?.length } ${$t('Replies')}`" @on-click="comment.view_replies=true"></UtilsGLoadMore>
                    </div>
                    <div class="w-100 m-3" v-if="comment.view_replies">
                        <!-- <div ref="container"></div> -->
                        <SupplementGSupplementReviewCard v-for="(reply, i) in comment?.replies" :key="i" :comment="reply" class="my-2"></SupplementGSupplementReviewCard>
                    </div>
                </div>
            </div>

            <SupplementGSupplementReviewCommentForm></SupplementGSupplementReviewCommentForm>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        var authStore = useAuthStore()
        var { isAuthenticated } = storeToRefs(authStore)
        var supplementStore = isAuthenticated.value ? useSupplementStore() : usePublicContentStore()     
        
        var { supplement } = storeToRefs(supplementStore);

        var comments = computed(() => {
            return supplement.value.comments
        })

        watch(comments, (val) => {
            if (val.length) {
                val.map((item:any) => {
                    item.view_replies = false;
                });
            }
        })

        const viewReplies = ref(false);
        
        return {
            comments,
            viewReplies,
            supplement
        }
    },
})
</script>

<style scoped>
.form-check-input:checked {
    border-color: var(--bs-success);
    background-color: var(--bs-success);
}
.g-supplement-review-form {
    margin-bottom: 20%;
}
.g-blog-form-menu {
    /* min-width: unset !important;
    transform: translate3d(-8px, 55.5px, 0) !important;
    opacity:0 !important; */
    list-style: none;
    padding: 0;
    text-align: center;
    margin-bottom: 0;
}

.g-blog-form-menu.show {
    transition: opacity 1s ease-in;
    opacity: 1 !important;
}

@media only screen and (max-width: 800px) {
    .g-supplement-review-form {
        margin-top: -140%
    }
}
</style>
<style>
.g-profile-section {
    /* margin-bottom: -28% !important; */
}
</style>