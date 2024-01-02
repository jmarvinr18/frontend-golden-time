<template>
    <div class="is-desktop g-review-item d-flex">
        <div class="g-review-item-media w-25 px-4">
            <img class="g-review-item-image g-shadow w-100 rounded object-fit-cover" :src="supplement?.image" height="190" />
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
                    <div>{{ $t('TasteLabel') }}: {{ supplement?.taste }}</div>
                    <div>{{ $t('PriceLabel') }}: {{ supplement?.price }}</div>
                    
                </div>
                <div class="w-50">
                    <button class="btn btn-primary btn-sm rounded-pill py-2 f14">
                        <i class="bi bi-people me-2"></i>
                        {{ $t('MySupplementRegistration') }} 146 {{ $t('People') }}
                    </button>
                    <button class="btn btn-outline-secondary btn-sm rounded-pill py-2 mt-3 f14">
                        <i class="bi bi-person-heart me-2"></i>
                        300 {{ $t('PeopleWhoWantToDrink') }}
                    </button>
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
            <nuxt-link :to="`/supplement/edit/${supplement?.id}`" class="btn bg-none btn-sm rounded-pill w-50 f12">
                <i class="bi bi-pencil me-2"></i>
                {{ $t('EditInformation') }}
            </nuxt-link>
        </div>
        <div class="g-review-item-media w-100 px-2">
            <img class="g-review-item-image g-shadow w-50 rounded object-fit-cover" :src="supplement?.image" />
        </div>
        <div class="g-review-item-description w-100 px-2 mt-5">
            <div class="g-review-item-head d-flex justify-content-between">
                <div class="h4 fw-bold">{{ supplement?.name }}</div>
            </div>
            <hr />
            <div class="w-100 g-review-item-head d-flex justify-content-between position-relative flex-wrap">
                <div class="w-50 f14 lh-lg">
                    <div>{{ $t('TasteLabel') }}: {{ supplement?.taste }}</div>
                    <div>{{ $t('PriceLabel') }}: {{ supplement?.price }}</div>
                </div>
            </div>
            
        </div>
        <div class="w-100 px-2 mt-4">
            <button class="btn btn-primary btn-sm rounded-pill py-2 f14">
                <i class="bi bi-people me-2"></i>
                {{ $t('MySupplementRegistration') }} 146 {{ $t('People') }}
            </button>
            <button class="btn btn-outline-secondary btn-sm rounded-pill py-2 mt-3 f14">
                <i class="bi bi-person-heart me-2"></i>
                300 {{ $t('PeopleWhoWantToDrink') }}
            </button>
        </div>
        <div class="px-2 mt-4 g-review-item-owner w-100 d-flex align-items-center">
            <img class="rounded-circle me-2" :src="getProfileImage" style="height: 25px; width: 25px;" />
            <div class="f12">{{ supplement?.user?.name }}</div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        supplement: Object
    },
    setup(props) {
        var authStore = useAuthStore()
        var { userData } = storeToRefs(authStore)
        var isContentOwner = computed(() => {
            return userData.value.id === props.supplement?.user_id
        })

        var getProfileImage = computed(() => {
            return props.supplement?.user?.profile_details?.image ?? "/images/no-avatar.jpeg"
        })
        
        return {
            isContentOwner,
            getProfileImage
        }
    }  
})
</script>
<style scoped>
.g-review-item-owner  {
    bottom:-22px
}
</style>