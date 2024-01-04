<template>
    <div v-if="isAuthenticated" class="g-blog-comment me-3 cursor-pointer" data-bs-toggle="modal" data-bs-target="#modal-comment">
        <i class="bi bi-chat"></i>
    </div>
    <NuxtLink v-else class="g-blog-comment me-3 cursor-pointer text-primary" to="/login">
        <i class="bi bi-chat"></i>
    </NuxtLink>
    
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
    },
    setup() {
        const authStore = useAuthStore();
        const { isAuthenticated } = storeToRefs(authStore);

        return {
            isAuthenticated
        }
    }
})
</script>