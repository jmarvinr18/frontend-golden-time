<template>
    <GSection>
        <div class="container pt-2 pb-4">
            <GSectionTitle icon="bi-person-down" title="Trainees you are following"></GSectionTitle>
            <div v-if="followings?.length > 0" class="row bg-white overflow-hidden rounded px-4">
                <CardsGCardPerson :followData="following" v-for="(following) in followings"></CardsGCardPerson>
            </div>
            <div v-else class="d-flex bg-white justify-content-center">
                    <div class="p-5">
                        {{ $t("NoFollowings") }}
                    </div>
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
            followStore.getFollows('followings')
        })

        return {
            followings
        }
    },
})
</script>