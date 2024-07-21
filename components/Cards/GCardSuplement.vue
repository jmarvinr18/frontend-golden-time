<template>
    <div class="is-desktop g-card-supplement card g-shadow rounded-lg" >
        <div style="height: 13rem; overflow: hidden;">
            <NuxtLink :to="`/supplement/review/${supplement?.id}`">
                <img :src="supplement?.image" class="card-img-top" alt="...">
            </NuxtLink>
        </div>

        <div class="p-2">
            <h5 class="p-1"> {{ supplement?.name }}</h5>
        </div>
        
        <div v-if="mode=='me'" class="card-body text-center d-block">
            <div class="w-100" v-if="updateMode">
                <div class="btn-group g-shadow rounded-pill overflow-hidden bg-light" role="group" aria-label="Basic mixed styles example">
                    <!-- <button type="button" class="btn btn-light px-3">{{supplement?.protein_content}} g/day</button> -->
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
                    <div class="g-rating-caption f14">Taste/drinkability</div>
                    <div class="g-rating-stars text-center mb-2 mt-1" style="letter-spacing:.4em">
                        <i class="bi bi-star-fill h4 text-grad-1"></i>
                        <i class="bi bi-star-fill h4 text-grad-1"></i>
                        <i class="bi bi-star-fill h4 text-grad-1"></i>
                        <i class="bi bi-star-fill h4 text-light"></i>
                        <i class="bi bi-star-fill h4 text-light"></i>
                    </div>
                </div>
                <div class="g-supplement-item-rating text-center">
                    <div class="g-rating-caption f14">Effect</div>
                    <div class="g-rating-stars text-center mb-2 mt-1" style="letter-spacing:.4em">
                        <i class="bi bi-star-fill h4 text-grad-2"></i>
                        <i class="bi bi-star-fill h4 text-grad-2"></i>
                        <i class="bi bi-star-fill h4 text-grad-2"></i>
                        <i class="bi bi-star-fill h4 text-grad-2"></i>
                        <i class="bi bi-star-fill h4 text-light"></i>
                    </div>
                </div>
            </div>
            <div v-if="updateMode">
                <button type="button" class="btn f12 btn-light px-3 rounded-pill g-shadow">20 g/day</button>
            </div>
        </div>
    </div>
    <div class="is-mobile g-card-supplement card w-100 g-shadow rounded-lg">
        <img :src="supplement?.image" class="card-img-top" alt="...">
        <div v-if="mode=='me'" class="card-body text-center d-block">
            <div class="w-100" v-if="updateMode">
                <div class="w-100 btn-group g-shadow rounded-pill overflow-hidden bg-light" role="group" aria-label="Basic mixed styles example">
                    <!-- <button type="button" class="btn btn-light px-3 ">20 g/day</button> -->
                    <button @click="router.push(`/supplement/edit/${supplement?.id}`)" type="button" class="btn btn-dark rounded-pill px-3 ">
                        <strong class="bi bi-arrow-up me-2 fw-bold"></strong>Update
                    </button>
                </div>
            </div>
            <button class="w-100 btn btn-outline-secondary rounded-pill mt-3 w-50 f10"><i class="bi bi-trash me-2"></i>削除する</button>
        </div>
        <div v-else class="card-body text-center p-1 align-items-center">
            <div class="d-flex justify-between w-100">
                <div class="g-supplement-item-rating text-center w-50">
                    <div class="g-rating-caption">Taste/drinkability</div>
                    <div class="g-rating-stars text-center mb-2 mt-1" >
                        <i class="bi bi-star-fill text-grad-1"></i>
                        <i class="bi bi-star-fill text-grad-1"></i>
                        <i class="bi bi-star-fill text-grad-1"></i>
                        <i class="bi bi-star-fill text-light"></i>
                        <i class="bi bi-star-fill text-light"></i>
                    </div>
                </div>
                <div class="g-supplement-item-rating text-center w-50">
                    <div class="g-rating-caption">Effect</div>
                    <div class="g-rating-stars text-center mb-2 mt-1" >
                        <i class="bi bi-star-fill text-grad-2"></i>
                        <i class="bi bi-star-fill text-grad-2"></i>
                        <i class="bi bi-star-fill text-grad-2"></i>
                        <i class="bi bi-star-fill text-grad-2"></i>
                        <i class="bi bi-star-fill text-light"></i>
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
            remove
        }
    }
})
</script>
<style scoped>

@media only screen and (max-width:1009px)  {
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