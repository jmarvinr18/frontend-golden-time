<template>
    <div class="g-blog-comment me-3 cursor-pointer" data-bs-toggle="modal" data-bs-target="#modal-comment">
        <i class="bi bi-chat"></i>
    </div>
    
    <BlogFeaturesGBlogCommentModal :id="id" class="text-black"></BlogFeaturesGBlogCommentModal>
</template>
<script lang="ts">
export default defineComponent({
    props: {
        id: {
            type:String,
            default() {
                return "";
            }
        }
    }
})
</script>