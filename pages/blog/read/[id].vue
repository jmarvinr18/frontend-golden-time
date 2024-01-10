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
                    <img src="https://picsum.photos/1000/1000" class="w-100 rounded-lg" />
                </div>
                <div class="col-md-3 col-xs-12">
                    <img src="https://picsum.photos/1000/1000" class="w-100 rounded-lg" />
                </div>
                <div class="col-md-3 col-xs-12">
                    <img src="https://picsum.photos/1000/1000" class="w-100 rounded-lg" />
                </div>
                <div class="col-md-3 col-xs-12">
                    <img src="https://picsum.photos/1000/1000" class="w-100 rounded-lg" />
                </div>
            </div>
            <hr class="mt-5 mb-3" />
            <div class="d-flex align-items-center justify-content-end h4 text-primary">
                <BlogFeaturesGBlogLike :is-liked="isLiked" :id="blog.id"></BlogFeaturesGBlogLike>
                <BlogFeaturesGBlogComment :id="blog.id"></BlogFeaturesGBlogComment>
                <BlogFeaturesGBlogShare :objData="blog" id="share-modal"></BlogFeaturesGBlogShare>
            </div>

            <!-- COMMENT SECTIONS -->
            <div class="w-75 mx-auto">
                <GSectionTitle class="mt-2 mb-4" title="Comments" :icon-hide="true"></GSectionTitle>
                <div v-for="(comment,key) in commentList">
                    <BlogFeaturesGBlogCommentCard :comment="comment" v-if="!comment.is_reply" class="my-3"></BlogFeaturesGBlogCommentCard>
                    
                    
                    <div class="w-100 ms-5 my-4" >
                        <!-- <div ref="container"></div> -->
                        <BlogFeaturesGBlogCommentCard v-for="(reply, i) in comment?.replies" :key="i" :comment="reply" class="my-2"></BlogFeaturesGBlogCommentCard>
                    </div>
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
        const authStore = useAuthStore();
        const { userData } = storeToRefs(authStore);
        const { blog }  = storeToRefs(blogStore);

        const isLiked = computed(() => {
            const checkLike = blog.value.likes?.filter((a:any) => a.user_id == userData.value.id);
            return checkLike?.length? true:false;
        });

        const commentList = computed(() => {
            const checkCommentReplies = blog.value.comments?.filter((a:any) => a.is_reply == true);
            checkCommentReplies?.map((com:any, idx:number) => {
                blog.value.comments?.map((item:any, id:number) => {
                    if (item.id == com.reply_to) {
                        if (item.replies) {
                            item.replies.push(com);
                        } else {
                            item.replies = [com];
                        }

                        if (!item.view_replies) {
                            item.view_replies = false;
                        } else {
                            item.view_replies = true;
                        }
                    }
                })
            });

            return blog.value.comments;
        });

        onMounted(() => {
            blogStore.getBlog(route.params.id);
        });

        useHead({
            title: `${blog.value.title} | Golden Time`
        });

        return {
            blog,
            isLiked,
            commentList
        }
    }
})
</script>
<style>
.g-blog-body img{
    width: 100% !important;
}
</style>