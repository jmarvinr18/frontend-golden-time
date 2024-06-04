<template>
    <GSection>
        <div class="container pt-2 pb-4">
            <GSectionTitle icon="bi-person-up" title="Trainees following you"></GSectionTitle>
            <div class="row bg-white overflow-hidden rounded px-4">
                <!-- {{  userData }} -->
                <CardsGCardPerson :followData="follower" v-for="(follower) in  userData[0].followers"></CardsGCardPerson>
            </div>
        </div>
    </GSection>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        var userStore = useUserStore();
        var { userData } = storeToRefs(userStore)

        return {
            userData
        }
    },
})
</script>
