<template>
    <div v-if="isReplay" class="ms-5 text-right  w-100">
        <textarea class="g-shadow rounded-3 border-dark form-control" :placeholder="$t('WriteAComment')" id="commentInput1" rows="3" v-model="comment"></textarea>

       <div class="text-end d-flex align-items-center justify-content-end">
        <button class="btn f12 text-dark mt-3" data-bs-toggle="collapse" :data-bs-target="`#reply-${commentId}`">Close</button>
        <button class="is-desktop rounded-pill px-4 shadow mt-3 btn f12" :class="comment? 'btn-primary shadow':'btn-dark opacity-50'" :disabled="!comment.length" @click="submitComment">{{ $t("PostCommentLabel") }} <i class="bi bi-arrow-up fw-bold"></i></button>
        <button class="is-mobile rounded-pill px-4 shadow mt-3 btn f12" :class="comment? 'btn-primary shadow':'btn-dark opacity-50'" :disabled="!comment.length" @click="submitComment">{{ $t("PostLabel") }} <i class="bi bi-arrow-up fw-bold"></i></button>
       </div>
    </div>
    <div v-else>
        <div class="is-desktop mt-5 bg-light py-5 w-100 text-center">
            <div class="mb-3 w-50 mx-auto position-relative">
                <textarea class="g-shadow rounded-3 border-dark form-control" :placeholder="$t('WriteAComment')" id="commentInput1" rows="3" v-model="comment"></textarea>
            </div>

            <button class="rounded-pill px-4 mt-3 mx-auto btn btn-primary" :class="comment? 'btn-primary shadow':'btn-dark opacity-50'" :disabled="!comment.length" @click="submitComment">{{ $t("PostCommentLabel") }} <i class="bi bi-arrow-up fw-bold"></i></button>
        </div>
        <div class="is-mobile mt-2 bg-light py-3 w-100 text-center pb-3">
            <div class="mb-3 w-75 mx-auto">
                <textarea class="g-shadow rounded-3 border-dark form-control" :placeholder="$t('WriteAComment')" id="commentInput2" rows="2" v-model="comment"></textarea>
            </div>

            <button class="rounded-pill px-4 shadow mt-3 mx-auto btn" :class="comment? 'btn-primary shadow':'btn-dark opacity-50'" @click="submitComment"> {{ $t("PostCommentLabel") }} <i class="bi bi-arrow-up fw-bold"></i></button>
        </div>
    </div>
</template>
<script lang="ts">
export default defineComponent({
    props: {
        isReplay:String || Boolean,
        commentId: Number,
    },
    setup(props) {
        const comment = ref("");
        const blogStore = useBlogStore();
        const authStore = useAuthStore();
        const { userData } = storeToRefs(authStore);
        const route = useRoute();

        const submitComment = () => {
            let objData;
            if (props.isReplay === 'true') {
                objData = {
                    comment: comment.value,
                    blog_id: route.params.id,
                    is_reply: true,
                    reply_to: props.commentId
                }
            } else {
                objData = {
                    comment: comment.value,
                    supplement_id: route.params.id,
                    is_reply: false,
                }
            }

            blogStore.createBlogComment(objData).then(()=>{
                comment.value = "";
            });
        }

        return {
            comment,
            userData,
            submitComment
        }
    }
});
</script>