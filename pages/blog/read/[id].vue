<template>
    <GSection>
        <div class="container">
            <GSectionTitle :title="objData.title" :icon-hide="true"></GSectionTitle>
            <hr class="my-3" />
            <BlogGBlogAuthor :objData="objData"></BlogGBlogAuthor>
            <div class="g-blog-date text-secondary f12 mt-3">
                <i class="bi bi-clock me-2 f14"></i>
                {{ $formatTime(objData.created_at) }}
            </div>
            <img src="https://picsum.photos/1000/400" class="rounded-lg mt-3" width="100%" />
            <div class="g-blog-body mt-5 lh-lg" v-html="objData.content"></div>

            <GSectionTitle class="mt-lg" title="More blogs" :icon-hide="true"></GSectionTitle>
            <div class="row mt-3">
                <div class="col-md-3 col-xs-12">
                    <img src="https://picsum.photos/1000/1000" width="100%" class="rounded-lg" />
                </div>
                <div class="col-md-3 col-xs-12">
                    <img src="https://picsum.photos/1000/1000" width="100%" class="rounded-lg" />
                </div>
                <div class="col-md-3 col-xs-12">
                    <img src="https://picsum.photos/1000/1000" width="100%" class="rounded-lg" />
                </div>
                <div class="col-md-3 col-xs-12">
                    <img src="https://picsum.photos/1000/1000" width="100%" class="rounded-lg" />
                </div>
            </div>
            <hr class="mt-5 mb-3" />
            <div class="d-flex align-items-center justify-content-end h4 text-primary">
                <BlogFeaturesGBlogLike :id="objData.id"></BlogFeaturesGBlogLike>
                <BlogFeaturesGBlogComment :id="objData.id"></BlogFeaturesGBlogComment>
                <div class="g-blog-repost me-3">
                    <i class="bi bi-arrow-repeat"></i>
                </div>
            </div>
        </div>
        
    </GSection>
</template>
<script lang="ts">
export default defineComponent({
    name: 'BlogDetail',
    setup() {
        const route = useRoute();
        const blogStore = useBlogStore();
        const objData:any = ref({});
        

        onMounted(() => {
            blogStore.getBlog(route.params.id).then((res:any) => {
                objData.value = res;
            });
        });

        return {
            objData,
        }
    }
})
</script>
<style>
.g-blog-body img{
    width: 100% !important;
}
</style>