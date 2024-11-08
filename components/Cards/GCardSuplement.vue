<template>
    <div class="is-desktop g-card-supplement card g-shadow rounded-lg">
        <div class="g-card-supplement-image-wrapper">
            <NuxtLink :to="`/supplement/review/${supplement?.id}`">
                <img :src="supplement?.image" class="card-img-top" alt="...">
            </NuxtLink>
        </div>

        <div class="p-2 g-card-supplement-title">
            <div class="p-1">{{ supplement?.name }}</div>
        </div>
        
        <div v-if="updateMode" class="g-card-supplement-actions card-body text-center d-block">
            <div class="w-100" >
                <div class="btn-group rounded-pill overflow-hidden bg-light" role="group" aria-label="Basic mixed styles example">
                    <NuxtLink :to="`/supplement/edit/${supplement?.id}`"  class="btn btn-dark rounded-pill px-3">
                        Update <strong class="bi bi-arrow-up me-2 fw-bold"></strong>
                    </NuxtLink>
                </div>
            </div>
            <button @click="remove(supplement?.id)" class="btn btn-outline-secondary rounded-pill mt-3 w-50"><i class="bi bi-trash me-2"></i>{{ $t("DeleteButton") }}</button>
        </div>
        <div v-else class="card-body text-center d-flex align-items-center">
            <div :class="updateMode? 'w-75':'w-100'">
                <div class="g-supplement-item-rating text-center">
                    <div class="g-rating-caption f14">{{ $t('TasteSupplementLabel') }}</div>
                    <div class="g-rating-stars text-center mb-2 mt-1" style="letter-spacing:.4em">
                        <i v-for="(rate, i) in useSupplementRating(supplement?.ratings.avg_taste)" :key="i" :class="rate" class="bi h3 text-grad-1"></i>
                    </div>
                </div>
                <div class="g-supplement-item-rating text-center">
                    <div class="g-rating-caption f14">{{ $t('EffectSupplementLabel') }}</div>
                    <div class="g-rating-stars text-center mb-2 mt-1" style="letter-spacing:.4em">
                        <i v-for="(rate, k) in useSupplementRating(supplement?.ratings.avg_effect)" :key="k" :class="rate" class="bi h3 text-grad-2"></i>
                    </div>
                </div>
            </div>
            <div v-if="updateMode">
                <button type="button" class="btn f12 btn-light px-3 rounded-pill g-shadow">20 g/day</button>
            </div>
        </div>
    </div>
    <div class="is-mobile g-card-supplement card w-100 g-shadow rounded-lg">

        <div class="g-card-supplement-image-wrapper">
            <NuxtLink :to="`/supplement/review/${supplement?.id}`">
                <img :src="supplement?.image" class="card-img-top" alt="...">
            </NuxtLink>
        </div>        
        <div class="p-2 g-card-supplement-title">
            <div class="p-1">{{ supplement?.name }}</div>
        </div>        
        <div v-if="updateMode" class="card-body text-center d-block">
            <div class="w-100">
                <div class="btn-group rounded-pill overflow-hidden bg-light" role="group" aria-label="Basic mixed styles example">
                    <NuxtLink :to="`/supplement/edit/${supplement?.id}`"  class="btn btn-dark rounded-pill px-3">
                        Update <strong class="bi bi-arrow-up me-2 fw-bold"></strong>
                    </NuxtLink>
                </div>
            </div>
            <button class="w-100 btn btn-outline-secondary rounded-pill mt-3 w-50 f10"><i class="bi bi-trash me-2"></i>{{ $t("DeleteButton") }}</button>
        </div>
        <div v-else class="card-body text-center p-1 align-items-center">
            <div class="d-flex justify-between w-100">
                <div class="g-supplement-item-rating text-center w-50">
                    <div class="g-rating-caption">{{ $t('TasteSupplementLabel') }}</div>
                    <div class="g-rating-stars text-center mb-2 mt-1" >
                        <i v-for="(rate, i) in useSupplementRating(supplement?.ratings.avg_taste)" :key="i" :class="rate" class="bi h3 text-grad-1"></i>
                    </div>
                </div>
                <div class="g-supplement-item-rating text-center w-50">
                    <div class="g-rating-caption">{{ $t('EffectSupplementLabel') }}</div>
                    <div class="g-rating-stars text-center mb-2 mt-1" >
                        <i v-for="(rate, k) in useSupplementRating(supplement?.ratings.avg_effect)" :key="k" :class="rate" class="bi h3 text-grad-2"></i>
                    </div>
                </div>
            </div>
            <div v-if="updateMode">
                <button type="button" class="btn f12 btn-light px-3 rounded-pill g-shadow">20 g/day</button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Swal from 'sweetalert2';
import { useI18n } from "vue-i18n";
export default defineComponent({
    props: {
        updateMode: {
            type: Boolean,
            default: false
        },
        mode: {
            type: String,
            default: 'me', // other
        },
        supplement: Object

    },
    setup(props) {
        const {t} = useI18n();
        var supplementStore = useSupplementStore()
        var router = useRouter()
        var remove = (id: string) => {
             
            Swal.fire({
                icon: 'info',
                title: t("SupplementRemovalTitle"),
                text: t("SupplementWishRemovalQuestion"),
                showCancelButton: true,
                confirmButtonText: `${t("Yes")}&nbsp;<i class="bi bi-arrow-right"></i>`,
                cancelButtonText: t("CancelButton"),
                reverseButtons: true
            }).then((res) => {
                if(res.isConfirmed) {
                    supplementStore.removeDrinkWish(id, "drink_wish").then(() => {
                        setTimeout(() => {
                            location.reload()
                        }, 1000);
                    })

                }
            })            
        }

        return {
            router,
            remove,
            useSupplementRating
        }
    }
})
</script>
<style scoped>
    .g-card-supplement {
        width: 15rem !important;
    }
    .g-card-supplement > .g-card-supplement-title {
        height: 5rem;
        font-size: 1rem;
        font-weight: bolder;
    }
    .g-card-supplement > .g-card-supplement-image-wrapper {
        height: 10rem;
    }
    .g-card-supplement-actions{
        height: 8rem;
    }
    .g-card-supplement-actions > div > .btn-group > a, .g-card-supplement-actions > button {
        font-size: 12px;
    }     

@media only screen and (max-width:600px)  {
    .g-card-supplement {
        width: 13rem !important;
    }
    .g-card-supplement-actions{
        height: 7rem;
        font-size: 12px;
    }   

}
@media only screen and (max-width:450px)  {
    .g-card-supplement {
        min-width: 190px !important;
    }

    .g-card-supplement .btn-group button{
        font-size: 9px !important;
    }
    .g-rating-caption{
        font-size: 11px;
    }

    .g-rating-stars i{
        font-size: 10px !important;
        margin-right: 5px;
    }
}
</style>