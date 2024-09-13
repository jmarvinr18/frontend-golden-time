<template>
    <div v-if="blog?.users" class="w-100 py-2 d-flex align-items-center align-item-center gap-3">
        <div class="g-blog-date text-secondary f12">
                <i class="bi bi-clock f12"></i>
                {{ $formatTime(blog?.created_at) }}
        </div>        
        <div class="g-author-name">
            <NuxtLink :to="`/users/${blog?.users.id}`" class="text-decoration-none text-dark f12 d-flex gap-2">
                <img :src="blog?.users.profile_details.image" style="height: 20px; width: 20px;" class="rounded-circle" /> 
                 <div>
                    {{ blog?.users.name }}
                 </div>

            </NuxtLink>
            </div>
        <div class="g-person-action text-end pull-right">
            <button @click="toggleFollow(blog?.id)" class="btn btn-primary rounded-pill px-3">
                <i class="bi bi-person-plus"></i>
                {{ blog?.is_following_me ? "Unfollow" : "Follow"}}
            </button>           
        </div>
    </div>
</template>
<script lang="ts">
export default defineComponent({
    props: {
        blog: {
            type: Object,
            default() {
                return {
                    name: "(no name)"
                };
            }
        }
    },
    setup() {
        var followStore = useFollowStore();
        var { followers } = storeToRefs(followStore)

        var toggleFollow = (id: string | undefined) => {
            followStore.toggleFollow({ user_id: id})
        }        
        return {
            toggleFollow            
        }
    },
})
</script>

<style scoped>
.g-person-action button {
    height: 30px;
    width: 90px;
    font-size: 10px;    
}
</style>
