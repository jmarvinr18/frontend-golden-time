<template>
    <div class="g-blog-like me-3 cursor-pointer" @click="like()">
        <i class="bi bi-heart"></i>
    </div>
</template>
<script lang="ts">
export default defineComponent({
    props: {
        id: String
    },
    setup(props) {
        const isLiked = ref(false);
        const blogStore = useBlogStore();

        const like = () => {
            blogStore.likeBlog(props.id);
        };

        return {
            like,
        }
    }
})
</script>