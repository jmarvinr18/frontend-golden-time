<template>
    <div class="g-blog-repost cursor-pointer me-3" data-bs-toggle="modal" :data-bs-target="'#'+id">
        <i class="bi bi-arrow-repeat"></i>
    </div>
    <BlogFeaturesGBlogShareModal :id="id" :objData="objData" class="text-dark"></BlogFeaturesGBlogShareModal>
</template>
<script>
export default defineComponent({
    props: {
        id: "",
        objData:{}
    }
})
</script>