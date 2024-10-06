<template>
    <div class="is-desktop g-review-item">
        <div class="g-review-item-media">
            <img class="g-review-item-image g-shadow rounded" :src="supplement?.image" />
        </div>
        <div class="g-review-item-description w-100">
            <div class="g-review-item-head">
                <div>
                    <div class="h4"> {{ supplement?.name }}</div>

                    <NuxtLink class="g-review-item-owner w-100 d-flex align-items-center text-decoration-none text-dark" :to="`/users/${supplement?.user?.id}`">
                        <img class="rounded-circle me-2" :src="getProfileImage" style="height: 20px; width: 20px;" />
                        <div class="f12">{{ supplement?.user?.name }}</div>
                    </NuxtLink>                    
                </div>
                
                <nuxt-link v-if="isContentOwner" :to="`/supplement/edit/${supplement?.id}`" class="btn bg-none btn-sm rounded-pill w-25 f12">
                    <i class="bi bi-pencil me-2"></i>
                    {{ $t('EditInformation') }}
                </nuxt-link>
            </div>
            <hr />
            <div class="g-review-item-head">
                <div class="w-100 f14 lh-lg">
                    <div>{{ $t('TasteLabel') }}: {{ supplement?.flavor }}</div>
                    <div>{{ $t('PriceLabel') }}: {{ price }} </div>
                </div>
                <div v-if="isDesktop" class="g-review-item-actions">
                    <div v-if="isAuthenticated">
                        <button @click="toggleHasDrank(supplement?.id)" class="btn btn-primary btn-sm rounded-pill py-2 f12 d-flex justify-content-center gap-2">
                            <i v-if="supplement?.has_user_drank_the_supplement" class="bi bi-hand-thumbs-up-fill"></i>
                            <span class="align-self-center">
                                <i class="bi bi-people me-2"></i>
                                {{ $t('MySupplementRegistration', { count: supplement?.users_who_drank_the_supplement_count}) }}
                            </span>
                        </button>

                        <!-- /*** Hidden for now, will not show on release timing*/ -->
                        <!-- <button @click="toggleDrinkWish(supplement?.id)" class="btn btn-outline-secondary btn-sm rounded-pill py-2 f12 d-flex justify-content-center gap-3">
                            <i v-if="supplement?.on_users_wishlist" class="bi bi-hand-thumbs-up-fill"></i>
                            <span class="align-self-center">
                                <i class="bi bi-person-heart me-2"></i>
                                {{ $t('PeopleWhoWantToDrink', { count: supplement?.user_supplement_wish_count}) }}
                            </span>                         
                        </button> -->
                    </div>
                    <div v-else>
                        <NuxtLink :to="`/login?ref=${route.fullPath}`" class="btn btn-primary btn-sm rounded-pill py-2 f12 d-flex justify-content-center gap-3">{{ $t("MySupplementRegistration", { count: supplement?.users_who_drank_the_supplement_count}) }} </NuxtLink>
                    </div>
                </div>                   
            </div>
        </div>
    </div>
    <div v-if="!isDesktop" class="is-desktop g-review-item-actions">
                    <div class="d-flex gap-3 mt-4" v-if="isAuthenticated">
                        <button @click="toggleHasDrank(supplement?.id)" class="btn btn-primary btn-sm rounded-pill py-2 f12 d-flex justify-content-center gap-2">
                            <i v-if="supplement?.has_user_drank_the_supplement" class="bi bi-hand-thumbs-up-fill"></i>
                            <span class="align-self-center">
                                <i class="bi bi-people me-2"></i>
                                {{ $t('MySupplementRegistration', { count: supplement?.users_who_drank_the_supplement_count}) }}
                            </span>
                        </button>
                        <!-- /*** Hidden for now, will not show on release timing*/ -->
                        <!-- <button @click="toggleDrinkWish(supplement?.id)" class="btn btn-outline-secondary btn-sm rounded-pill py-2 f12 d-flex justify-content-center gap-1">
                            <i v-if="supplement?.on_users_wishlist" class="bi bi-hand-thumbs-up-fill"></i>
                            <span class="align-self-center">
                                <i class="bi bi-person-heart me-2"></i>
                                {{ $t('PeopleWhoWantToDrink', { count: supplement?.user_supplement_wish_count}) }}
                            </span>                         
                        </button> -->
                    </div>
                    <div v-else>
                        <NuxtLink :to="`/login?ref=${route.fullPath}`" class="btn btn-primary btn-sm rounded-pill py-2 f14">{{ $t("MySupplementRegistration", { count: supplement?.users_who_drank_the_supplement_count}) }} </NuxtLink>
                    </div>
        </div>
    <div class="is-mobile g-review-item d-flex flex-wrap">
        <div class="w-100 text-end">
            <nuxt-link v-if="isContentOwner" :to="`/supplement/edit/${supplement?.id}`" class="btn bg-none btn-sm rounded-pill w-50 f12">
                <i class="bi bi-pencil me-2"></i>
                {{ $t('EditInformation') }}
            </nuxt-link>
        </div>
        <div class="g-review-item-media w-100 px-2">
            <img class="g-review-item-image rounded" :src="supplement?.image" />
        </div>
        <div class="g-review-item-description w-100 px-2 mt-5">
            <div class="g-review-item-head d-flex flex-column">
                <div class="h4 fw-bold">{{ supplement?.name }}</div>

                <NuxtLink class="g-review-item-owner w-100 d-flex align-items-center text-decoration-none text-dark" :to="`/users/${supplement?.user?.id}`">
                        <img class="rounded-circle me-2" :src="getProfileImage" style="height: 25px; width: 25px;" />
                        <div class="f12">{{ supplement?.user?.name }}</div>
                </NuxtLink>                
            </div>
            <hr />
            <div class="w-100 g-review-item-head d-flex justify-content-between position-relative flex-wrap">
                <div class="d-flex flex-column w-100 f14 lh-lg">
                    <div class="align-self-start">{{ $t('TasteLabel') }}: {{ supplement?.flavor }}</div>
                    <div class="align-self-start">{{ $t('PriceLabel') }}: {{ price }}</div>
                </div>
            </div>
            
        </div>      
        <div class="w-100 px-2 mt-4">
            <div class="d-flex flex-column" v-if="isAuthenticated">
                <button @click="toggleHasDrank(supplement?.id)" class="btn btn-primary btn-sm rounded-pill py-2 f12 d-flex justify-content-center gap-1" >
                    <i v-if="supplement?.has_user_drank_the_supplement" class="bi bi-hand-thumbs-up-fill"></i>
                    <span class="align-self-center">
                        <i class="bi bi-people me-2"></i>
                                {{ $t('MySupplementRegistration', { count: supplement?.users_who_drank_the_supplement_count}) }}
                        </span>                   
                </button>
                <!-- /*** Hidden for now, will not show on release timing*/ -->
                <!-- <button @click="toggleDrinkWish(supplement?.id)" class="btn btn-outline-secondary btn-sm rounded-pill py-2 mt-3 f14 d-flex justify-content-center gap-1" >
                            <i v-if="supplement?.on_users_wishlist" class="bi bi-hand-thumbs-up-fill"></i>
                            <span class="align-self-center">
                                <i class="bi bi-person-heart me-2"></i>
                                {{ $t('PeopleWhoWantToDrink', { count: supplement?.user_supplement_wish_count}) }}
                            </span>                 
                </button> -->
            </div>
            <NuxtLink v-else :to="`/login?ref=${route.fullPath}`" class="btn btn-primary btn-sm rounded-pill py-2 f12 d-flex justify-content-center gap-1">{{ $t("MySupplementRegistration", { count: supplement?.users_who_drank_the_supplement_count}) }}</NuxtLink>
            
        </div>

    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from "vue-i18n";

export default defineComponent({
    props: {
        supplement: Object
    },
    setup(props) {
        const {n} = useI18n();
        var authStore = useAuthStore();
        var route = useRoute();
        var { userData, isAuthenticated } = storeToRefs(authStore)
        var supplementStore = useSupplementStore()
        var price = ref()
        var isDesktop = ref(false)

        var toggleDrinkWish = (id: string) => {
            supplementStore.toggleDrinkWish(id, false)
        }

        var toggleHasDrank = (id: string) => {
            supplementStore.toggleHasDrank(id, false)
        }

        var isContentOwner = computed(() => {
            return userData.value.id === props.supplement?.user_id
        })

        var getProfileImage = computed(() => {
            return props.supplement?.user?.profile_details?.image ?? "/images/no-avatar.jpeg"
        })

        onBeforeUpdate(() => {
            price.value = n(parseFloat(props.supplement?.price), 'currency', 'ja') 
        })

        var convertToCurrency = (price: string) => {
            console.log("TYPE_OF: ", typeof(parseFloat(price)))
        }

        onMounted(() => {
            isDesktop.value = window.innerWidth > 600 ? true : false
            window.addEventListener('resize', () => {
                console.log("SCREEN WIDTH: ", window.innerWidth > 600 ? true : false)
                isDesktop.value = window.innerWidth > 600 ? true : false
            })               
        })
        
        return {
            route,
            isAuthenticated,
            isContentOwner,
            getProfileImage,
            toggleDrinkWish,
            toggleHasDrank,
            convertToCurrency,
            price,
            isDesktop
        }
    }  
})
</script>
<style scoped>
.g-review-item-owner  {
    bottom:-22px
}
.g-review-item{
    display: flex;
    gap: 1rem;
    padding: 0 2rem;
}
.g-review-item-head{
    display: flex;
    justify-content: space-between;
}
.g-review-item-actions{
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
}
.g-review-item-actions > div > button, .g-review-item-actions > div > a {
    width: 13rem;
}
.g-review-item-actions > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center
}
.g-review-item-image{
    height: 11rem;
    width: 11rem;
    object-fit: cover
}
.g-review-item-media{
    display: flex;
    justify-content: center;
    background-color: #00000005;
}

@media only screen and (max-width: 600px) {
    .g-review-item-actions > div > button {
        width: 14rem;
    }    
    .g-review-item-actions > div > button, .g-review-item-actions > div > a {
        width: 14rem;
    }
    .g-review-item-actions > div {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        justify-content: center
    }    
}
</style>