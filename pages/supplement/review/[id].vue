<template>
    <SupplementGSupplementReviewSection></SupplementGSupplementReviewSection>
    <ModalsGModalSupplementRating type="taste" @after-rate="loadSupplement"></ModalsGModalSupplementRating>
    <ModalsGModalSupplementRating type="effect" @after-rate="loadSupplement"></ModalsGModalSupplementRating>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        var route = useRoute()
        var authStore = useAuthStore()
        var { isAuthenticated } = storeToRefs(authStore)
        var supplementStore = isAuthenticated.value ? useSupplementStore() : usePublicContentStore();
        const loadSupplement = () => {
            supplementStore.getSupplement(route.params.id)
        }
        
        onMounted(() => {
            loadSupplement();
        })

        return {
            loadSupplement
        }
    },
})
</script>
