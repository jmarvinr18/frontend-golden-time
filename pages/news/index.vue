<template>
    <GSection>
        <div class="container">
            <div class="row">
                <GSectionTitle :title="$t('MuscleNews')" icon="bi-newspaper" class="mb-4"></GSectionTitle>
                <div class="col-md-6 col-xs-12 mb-4" v-for="blog in blogList">
                    <CardsGCardNews :blog="blog"></CardsGCardNews>
                </div>
            </div>
        </div>
    </GSection>
</template>
<script lang="ts">
import { useBlogStore } from '~/stores/GStoreBlog';

export default defineComponent({
    name: 'GNews',
    setup() {
        const blogStore = useBlogStore();
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