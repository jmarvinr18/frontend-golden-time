<template>
    <div class="is-desktop g-review-item d-flex">
        <div class="g-review-item-media w-25 px-4">
            <img class="g-review-item-image g-shadow w-100 rounded object-fit-cover" :src="supplement?.image" style="height: 190px;" />
        </div>
        <div class="g-review-item-description w-75">
            <div class="g-review-item-head d-flex justify-content-between">

                <div class="h4"> {{ supplement?.name }}</div>
                <nuxt-link v-if="isContentOwner" :to="`/supplement/edit/${supplement?.id}`" class="btn bg-none btn-sm rounded-pill w-50 f12">
                    <i class="bi bi-pencil me-2"></i>
                    {{ $t('EditInformation') }}
                </nuxt-link>
            </div>
            <hr />
            <div class="g-review-item-head d-flex justify-content-between position-relative flex-wrap">
                <div class="w-50 f14 lh-lg">
                    <div>{{ $t('TasteLabel') }}: {{ supplement?.flavor }}</div>
                    <div>{{ $t('PriceLabel') }}: {{ price }} </div>
                    
                </div>
                <div class="w-50">
                    <button v-if="isAuthenticated" @click="toggleHasDrank(supplement?.id)" class="btn btn-primary btn-sm rounded-pill py-2 f14 d-flex justify-content-center gap-3">
                        <i v-if="supplement?.has_user_drank_the_supplement" class="bi bi-hand-thumbs-up-fill"></i>
                        <span class="align-self-center">
                            <i class="bi bi-people me-2"></i>
                            {{ $t('MySupplementRegistration', { count: supplement?.users_who_drank_the_supplement_count}) }}
                        </span>
                    </button>
                    <div v-else>
                        <NuxtLink to="/login?ref=supplement" class="btn btn-primary btn-sm rounded-pill py-2 f14">{{ $t("Login") }}</NuxtLink>
                        <button @click="toggleDrinkWish(supplement?.id)" class="btn btn-outline-secondary btn-sm rounded-pill py-2 mt-3 f14 d-flex justify-content-center gap-3">
                            <i v-if="supplement?.on_users_wishlist" class="bi bi-hand-thumbs-up-fill"></i>
                            <span class="align-self-center">
                                <i class="bi bi-person-heart me-2"></i>
                                {{ $t('PeopleWhoWantToDrink', { count: supplement?.user_supplement_wish_count}) }}
                            </span>                         
                        </button>
                    </div>
                </div>
                <div class="g-review-item-owner w-100 d-flex align-items-center position-absolute">
                    <img class="rounded-circle me-2" :src="getProfileImage" style="height: 30px; width: 30px;" />
                    <div class="f12">{{ supplement?.user?.name }}</div>
                </div>
            </div>
            
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
            <img class="g-review-item-image g-shadow w-100 rounded object-fit-cover" :src="supplement?.image" />
        </div>
        <div class="g-review-item-description w-100 px-2 mt-5">
            <div class="g-review-item-head d-flex justify-content-between">
                <div class="h4 fw-bold">{{ supplement?.name }}</div>
            </div>
            <hr />
            <div class="w-100 g-review-item-head d-flex justify-content-between position-relative flex-wrap">
                <div class="d-flex flex-column w-100 f14 lh-lg">
                    <div class="align-self-start">{{ $t('TasteLabel') }}: {{ supplement?.flavor }}</div>
                    <div class="align-self-start">{{ $t('PriceLabel') }}: {{ price }}</div>
                </div>
            </div>
            
        </div>
        <div class="px-2 mt-4 g-review-item-owner w-100 d-flex align-items-center">
            <img class="rounded-circle me-2" :src="getProfileImage" style="height: 25px; width: 25px;" />
            <div class="f12">{{ supplement?.user?.name }}</div>
        </div>        
        <div class="w-100 px-2 mt-4">
            <button v-if="isAuthenticated" @click="toggleHasDrank(supplement?.id)" class="btn btn-primary btn-sm rounded-pill py-2 f12 d-flex justify-content-center gap-3" style="width: 60%;">
                <i v-if="supplement?.has_user_drank_the_supplement" class="bi bi-hand-thumbs-up-fill"></i>
                <span class="align-self-center">
                    <i class="bi bi-people me-2"></i>
                            {{ $t('MySupplementRegistration', { count: supplement?.users_who_drank_the_supplement_count}) }}
                    </span>                   
            </button>
            <NuxtLink v-else to="/login?ref=supplement" class="btn btn-primary btn-sm rounded-pill py-2 f12">{{ $t("Login") }}</NuxtLink>
            <button @click="toggleDrinkWish(supplement?.id)" class="btn btn-outline-secondary btn-sm rounded-pill py-2 mt-3 f14 d-flex justify-content-center gap-3" style="width: 60%;">
                        <i v-if="supplement?.on_users_wishlist" class="bi bi-hand-thumbs-up-fill"></i>
                        <span class="align-self-center">
                             <i class="bi bi-person-heart me-2"></i>
                            {{ $t('PeopleWhoWantToDrink', { count: supplement?.user_supplement_wish_count}) }}
                        </span>                 
            </button>
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
        var authStore = useAuthStore()
        var { userData, isAuthenticated } = storeToRefs(authStore)
        var supplementStore = useSupplementStore()
        var price = ref()

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
            // if(typeof)
            // return n(parseFloat(price), 'currency', 'ja')
        }
        
        return {
            isAuthenticated,
            isContentOwner,
            getProfileImage,
            toggleDrinkWish,
            toggleHasDrank,
            convertToCurrency,
            price
        }
    }  
})
</script>
<style scoped>
.g-review-item-owner  {
    bottom:-22px
}
</style>