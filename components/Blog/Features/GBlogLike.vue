<template>
    <div v-if="isAuthenticated" class="g-blog-like me-3 cursor-pointer" @click="like()">
        <i v-if="isLiked" class="bi bi-heart-fill"></i>
        <i v-else class="bi bi-heart"></i>
    </div>
    <NuxtLink v-else class="g-blog-like me-3 cursor-pointer text-primary" to="/login">
        <i class="bi bi-heart"></i>
    </NuxtLink>
</template>
<script lang="ts">
export default defineComponent({
    props: {
        isLiked: Boolean,
        id: String
    },
    setup(props) {
        const blogStore = useBlogStore();
        const authStore = useAuthStore();
        const { isAuthenticated } = storeToRefs(authStore);

        const like = () => {
            blogStore.likeBlog(props?.id);
        };

        return {
            like,
            isAuthenticated
        }
    }
})
</script>