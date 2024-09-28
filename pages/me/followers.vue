<template>
    <GSection>
        <div class="container pt-2 pb-4">
            <GSectionTitle icon="bi-person-up" :title="$t('TraineesFollowingYou')"></GSectionTitle>
            <div v-if="followers?.length > 0" class="row bg-white overflow-hidden rounded px-4">
                <CardsGCardPerson :followData="follower" v-for="(follower) in  followers"></CardsGCardPerson>
            </div>
            <div v-else class="d-flex bg-white justify-content-center">
                    <div class="p-5">
                        {{ $t("NoFollowers") }}
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
        var { followers } = storeToRefs(followStore)

        onMounted(() => {
            followStore.getFollows('followers')
        })

        return {
            followers
        }
    },
})
</script>
