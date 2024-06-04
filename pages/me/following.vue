<template>
    <GSection>
        <div class="container pt-2 pb-4">
            <GSectionTitle icon="bi-person-down" title="Trainees you are following"></GSectionTitle>
            <div class="row bg-white overflow-hidden rounded px-4">
                <CardsGCardPerson :followData="following" v-for="(following) in  followings"></CardsGCardPerson>
            </div>
        </div>
    </GSection>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        var followStore = useFollowStore();
        var { followings } = storeToRefs(followStore)

        onMounted(() => {
            followStore.getFollows('following')
        })

        return {
            followings
        }
    },
})
</script>