<template>
    <ModalsGModal title="Add comment" :submitBtn="true" id="modal-comment" @on-submit="submitNow" >
        <div class="mb-3">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" v-model="comment"></textarea>
        </div>
    </ModalsGModal>
</template>
<script lang="ts">
export default defineComponent({
    props: {
        id: String || Number,
        is_reply: Boolean,
        reply_to: {
            type: String || Number,
            default() {
                return 0;
            }
        },
    },
    setup(props) {
        const blogStore = useBlogStore();
        const generalStore = useGeneralStore();
        const comment = ref("");
        const submitComment = () => {
            console.log(props.id)
            const formData:any = {
                blog_id: props.id,
                comment: comment.value,
                reply_to: props.reply_to,
                is_reply: props.reply_to? true:false
            };
            blogStore.createBlogComment(formData).then(() => {
                comment.value = "";
            });
        };

        const submitNow = () => {
            if (comment.value) {
                submitComment();
            } else {
                generalStore.setError(true, "Please make sure that the comment field isn't empty")
            }
        }

        return {
            comment,
            submitNow
        }
    }
});
</script>