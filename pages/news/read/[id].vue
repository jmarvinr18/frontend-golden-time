<template>
    <GSection>
        <div class="container">
            <img :src="blog?.feature_image" class="rounded-lg mt-3" width="100%" />
            <div class="g-blog-date text-secondary f12 mt-2">
                <i class="bi bi-clock me-2 f14"></i>
                {{blog.created_at}}
            </div>
            <GSectionTitle class="fw-bold" :title="blog.title" :icon-hide="true"></GSectionTitle>
            <div class="d-flex align-items-center mt-4 h4 text-primary">
                <div class="g-blog-like me-3">
                    <i class="bi bi-heart"></i>
                </div>
                <div class="g-blog-comment me-3">
                    <i class="bi bi-chat"></i>
                </div>
                <div class="g-blog-repost me-3">
                    <i class="bi bi-arrow-repeat"></i>
                </div>
            </div>
            <hr class="my-3" />
            <div class="g-blog-body mt-5 lh-lg" v-html=" blog.content">
            </div>
            <GSectionTitle class="mt-lg" title="More news" :icon-hide="true"></GSectionTitle>
            <div class="row mt-3">
                <div class="col-md-4 col-xs-12">
                    <img src="https://picsum.photos/1000/1000" width="100%" class="rounded-lg" />
                </div>
                <div class="col-md-4 col-xs-12">
                    <img src="https://picsum.photos/1000/1000" width="100%" class="rounded-lg" />
                </div>
                <div class="col-md-4 col-xs-12">
                    <img src="https://picsum.photos/1000/1000" width="100%" class="rounded-lg" />
                </div>
            </div>
            
        </div>
        
    </GSection>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'NewsDetail',
    setup() {
        const route = useRoute();
        const blogStore = useBlogStore(); 
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
