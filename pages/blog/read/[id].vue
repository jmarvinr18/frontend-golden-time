<template>
    <GSection>
        <div class="container">
            <GSectionTitle :title="blog.title" :icon-hide="true"></GSectionTitle>
            <hr class="my-3" />
            <BlogGBlogAuthor :blog="blog"></BlogGBlogAuthor>
            <div class="g-blog-date text-secondary f12 mt-3">
                <i class="bi bi-clock me-2 f14"></i>
                {{ $formatTime(blog.created_at) }}
            </div>
            <img :src="blog.feature_image" class="rounded-lg mt-3 w-100" />
            <div class="g-blog-body mt-5 lh-lg" v-html="blog.content"></div>

            <GSectionTitle class="mt-lg" title="More blogs" :icon-hide="true"></GSectionTitle>
            <div class="row mt-3">
                <div class="col-md-3 col-xs-12">
                    <img src="https://picsum.photos/1000/1000" class="rounded-lg w-100" />
                </div>
                <div class="col-md-3 col-xs-12">
                    <img src="https://picsum.photos/1000/1000"  class="rounded-lg w-100" />
                </div>
                <div class="col-md-3 col-xs-12">
                    <img src="https://picsum.photos/1000/1000" class="rounded-lg w-100" />
                </div>
                <div class="col-md-3 col-xs-12">
                    <img src="https://picsum.photos/1000/1000"  class="rounded-lg w-100" />
                </div>
            </div>
            <hr class="mt-5 mb-3" />
            <div class="d-flex align-items-center justify-content-end h4 text-primary">
                <BlogFeaturesGBlogLike :id="blog.id"></BlogFeaturesGBlogLike>
                <BlogFeaturesGBlogComment :id="blog.id"></BlogFeaturesGBlogComment>
                <BlogFeaturesGBlogShare :objData="blog" id="share-modal"></BlogFeaturesGBlogShare>
            </div>
        </div>
        
    </GSection>
</template>
<script lang="ts">
export default defineComponent({
    name: 'BlogDetail',
    setup() {
        const route = useRoute();
        const blogStore = usePublicContentStore(); 
        const { blog }  = storeToRefs(blogStore); 

        onMounted(() => {
            blogStore.getBlog(route.params.id);
        });

        return {
            blog,
        }
    }
})
</script>
<style>
.g-blog-body img{
    width: 100% !important;
}
</style>