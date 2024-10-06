<template>
    <div class="is-desktop w-100 d-flex py-4 align-items-center border-bottom">
        <img :src="followDetails?.profile_details.image" style="height: 120px; width: 120px;" class="rounded-circle" />
        <div class="w-75 ms-4">
            <NuxtLink :to="`/users/${followDetails.id}`" class="g-person-name h5 mb-0 text-decoration-none">{{ followDetails.name }}</NuxtLink>
            <div class="g-person-short mt-3 w-75">
                {{ followDetails?.profile_details.description }}
            </div>
        </div>
        <div v-if="route.name == 'me-following'" class="g-person-action text-end w-25 pull-right">
            <button @click="unFollow(followDetails.id)" class="btn btn-primary rounded-pill">
                <i class="bi bi-check-lg me-2"></i>
                {{ $t('Unfollow')  }}
            </button>
        </div>
    </div>
    <div class="is-mobile">
        <div class="w-100 d-flex py-4 align-items-center border-bottom">
            <img :src="followDetails?.profile_details.image" style="height: 40px; width: 40px;" class=" rounded-circle" />
            <div class="ms-2 w-50">
                <div class="g-person-name mb-0">{{ followDetails?.name }}</div>
                <div class="g-person-short mt-1 w-100 f10">
                    {{ followDetails?.profile_details.description }}
                </div>
            </div>
            <div class="g-person-action text-end pull-right">
                <button class="btn btn-primary btn-lg py-3 f12 rounded-pill">
                    <i class="bi bi-check-lg me-1"></i>
                    {{ route.name == "me-following" ? "Following" : "follower"}}
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        followData: Object
    },

    setup(props) {
        var route = useRoute()
        var followStore = useFollowStore();
        var { followers } = storeToRefs(followStore)
        var unFollow = (id: string) => {
            followStore.unFollow(id)
        }
        var followDetails = computed(() => {
            switch (route.name) {
                case "users-id-following":
                    return props.followData?.following_details
                case "users-id-followers":
                    return props.followData?.follower_details                               
                case "me-following":
                    return props.followData?.following_details
                case "me-followers":
                    return props.followData?.follower_details
            }
        })
        return {
            unFollow,
            followDetails,
            route,
            followers
            
        }
    }
})
</script>

<style scoped>
@media only screen and (max-width:450px)  {
    .g-person-action {
        width: 30%;
    }

    .g-person-action .btn {
        width: 127%;
    }

}
</style>