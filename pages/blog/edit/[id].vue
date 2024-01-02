<template>
    <BlogGBlogSection></BlogGBlogSection>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        var route = useRoute()
        var blogStore = useBlogStore()
        var { blogForm } = storeToRefs(blogStore)

        onMounted(async () => {
            await blogStore.getBlog(route.params.id).then((res) => {
                blogForm.value = res
                blogForm.value.meta = JSON.parse(res.meta)
            })
        })
    },
})
</script>
