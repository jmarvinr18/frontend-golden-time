<template>
    <div class="card w-100 g-shadow rounded-lg">
        <img src="https://img.freepik.com/free-photo/smiling-athlete-with-earphones-holding-thumbs-up-ready-training_342744-652.jpg" class="card-img-top" alt="...">
        <div v-if="mode=='me'" class="card-body text-center d-block">
            <div class="w-100" v-if="updateMode">
                <div class="btn-group g-shadow rounded-pill overflow-hidden bg-light" role="group" aria-label="Basic mixed styles example">
                    <button type="button" class="btn btn-light px-3">20 g/day</button>
                    <button type="button" class="btn btn-dark rounded-pill px-3">
                        <strong class="bi bi-arrow-up me-2 fw-bold"></strong>Update
                    </button>
                </div>
            </div>
            <button class="btn btn-outline-secondary rounded-pill mt-3 w-50"><i class="bi bi-trash me-2"></i>Exclusion</button>
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
</template>
<script lang="ts">
export default defineComponent({
    props: {
        updateMode: {
            type: Boolean,
            default: false
        },
        mode: {
            type: String,
            default: 'me', // other
        }
    },
})
</script>