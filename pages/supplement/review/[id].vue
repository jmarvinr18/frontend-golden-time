<template>
    <SupplementGSupplementReviewSection></SupplementGSupplementReviewSection>
    <ModalsGModalSupplementRating type="taste"></ModalsGModalSupplementRating>
    <ModalsGModalSupplementRating type="effect"></ModalsGModalSupplementRating>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        var route = useRoute()
        var authStore = useAuthStore()
        var { isAuthenticated } = storeToRefs(authStore)
        var supplementStore = isAuthenticated.value ? useSupplementStore() : usePublicContentStore()        

        onMounted(() => {
            supplementStore.getSupplement(route.params.id)
        })

    },
})
</script>
