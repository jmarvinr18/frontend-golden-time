<template>
    <div class="w-100 position-relative border-0 rounded-4 text-center g-shadow">
        <div class="g-rating-card-media w-100 position-absolute text-center" style="top:-40px">
            <div class="rounded-pill text-light d-flex justify-content-center align-items-center text-center mx-auto" :class=" type=='taste'? 'bg-grad-1':'bg-grad-2'" style="width:80px; height:80px;">
                <i v-if="type=='taste'" class="bi bi-emoji-smile display-2"></i>
                <i v-else class="bi bi-person-arms-up display-2"></i>
            </div>
        </div>
        <div class="is-desktop overflow-hidden rounded-lg p-1" :class="type=='taste'? 'bg-grad-1':'bg-grad-2'">
            <div class="bg-white rounded-lg">
                <div class="mt-5 text-center mb-3">
                    {{ type=='taste'? 'Taste/drinkability':'Effect' }}
                </div>
                <div class="g-rating-stars text-center mb-2" style="letter-spacing:.4em">
                    <i class="bi bi-star-fill h3" :class="type=='taste'? 'text-grad-1':'text-grad-2'"></i>
                    <i class="bi bi-star-fill h3" :class="type=='taste'? 'text-grad-1':'text-grad-2'"></i>
                    <i class="bi bi-star-fill h3" :class="type=='taste'? 'text-grad-1':'text-grad-2'"></i>
                    <i class="bi bi-star-fill h3" :class="type=='taste'? 'text-grad-1':'text-grad-2'"></i>
                    <i class="bi bi-star-fill h3" :class="type=='taste'? 'text-grad-1':'text-grad-2'"></i>
                </div>
                <button class="btn  mx-auto rounded-pill py-2 mb-3 mt-2 g-shadow" :class="type=='taste'? 'text-grad-1 btn-outline-success':'btn-outline-primary text-grad-2'">Post a rating <i class="bi bi-arrow-up ms-2"></i></button>
            </div>
        </div>
        <div class="is-mobile overflow-hidden rounded-lg p-1" :class="type=='taste'? 'bg-grad-1':'bg-grad-2'">
            <div class="bg-white rounded-lg">
                <div class="mt-5 text-center mb-3">
                    {{ type=='taste'? 'Taste/drinkability':'Effect' }}
                </div>
                <div class="g-rating-stars text-center mb-2" style="letter-spacing:.4em">
                    <i class="bi bi-star-fill h5 mb-0" :class="type=='taste'? 'text-grad-1':'text-grad-2'"></i>
                    <i class="bi bi-star-fill h5 mb-0" :class="type=='taste'? 'text-grad-1':'text-grad-2'"></i>
                    <i class="bi bi-star-fill h5 mb-0" :class="type=='taste'? 'text-grad-1':'text-grad-2'"></i>
                    <i class="bi bi-star-fill h5 mb-0" :class="type=='taste'? 'text-grad-1':'text-grad-2'"></i>
                    <i class="bi bi-star-fill h5 mb-0" :class="type=='taste'? 'text-grad-1':'text-grad-2'"></i>
                </div>
                <button style="width: 90%" class="btn rounded-pill mb-3 f10 py-2 fw-bold mt-2 g-shadow" :class="type=='taste'? 'text-grad-1 btn-outline-success':'btn-outline-primary text-grad-2'">Post a rating <i class="bi bi-arrow-up ms-1"></i></button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
export default defineComponent({
    props: {
        type: {
            type: String,
            default: "taste" // effect or taste
        }
    }
})
</script>