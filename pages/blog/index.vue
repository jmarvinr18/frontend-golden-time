<template>
    <GSection>
        <div class="container">
            <div class="row">
                <GSectionTitle :title="$t('Blog')" icon="bi-journals" class="mb-4"></GSectionTitle>
                <div class="col-md-6 col-xs-12 mb-4" v-for="blog in blogList">
                    <CardsGCardBlog :blog="blog"></CardsGCardBlog>
                </div>
            </div>
        </div>
    </GSection>
</template>
<script lang="ts">
import { useBlogStore } from '~/stores/GStoreBlog';

export default defineComponent({
    name: 'GBlog',
    setup() {
        var authStore = useAuthStore()
        var { isAuthenticated } = storeToRefs(authStore)        
        var blogStore = isAuthenticated.value ? useBlogStore() : usePublicContentStore()
        const { blogList } = storeToRefs(blogStore);

        useHead({
            title: "All Blogs | Golden Time"
        });

        onMounted(() => {
            blogStore.getAllBlogs();
        });

        return {
            blogList
        }
    }
})
</script>