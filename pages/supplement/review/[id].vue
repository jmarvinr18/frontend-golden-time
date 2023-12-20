<template>
    <SupplementGSupplementReviewSection></SupplementGSupplementReviewSection>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        var route = useRoute()
        var supplementStore = useSupplementStore()


        onMounted(() => {
            supplementStore.getSupplement(route.params.id)
        })
        return {}
    },
})
</script>
