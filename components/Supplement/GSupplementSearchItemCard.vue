<template>
    <NuxtLink :to="`/supplement/review/${supplement?.id}`" class="text-decoration-none text-dark">
        <div class="is-desktop g-supplement-item-card d-flex rounded-lg gap-4 g-shadow">
            <div class="g-supplement-item-media">
                <img :src="supplement?.image" class="object-fit-cover" />
            </div>
            <div class="g-supplement-item-content py-2 px-3 f14">
                <div class="h4 w-100"> {{ supplement?.name? supplement.name:'&nbsp;' }} </div>
                <div class="sup-description"> {{ useTruncateText(supplement?.description) }} </div>
                <div class="g-supplement-item-ratings d-flex justify-content-around mt-4 w-100 mx-auto">
                    <div class="g-supplement-item-rating text-center">
                        <div class="g-rating-caption">{{ $t('TasteSupplementLabel') }}</div>
                        <div class="g-rating-stars text-center mb-2 mt-1" style="letter-spacing:.4em">
                            <i v-for="(rate, i) in useSupplementRating(supplement?.ratings.avg_taste)" :key="i" :class="rate" class="bi h3 text-grad-1"></i>
                        </div>
                    </div>
                    <div class="g-supplement-item-rating text-center">
                        <div class="g-rating-caption">{{ $t('EffectSupplementLabel') }}</div>
                        <div class="g-rating-stars text-center mb-2 mt-1" style="letter-spacing:.4em">
                            <i v-for="(rate, k) in useSupplementRating(supplement?.ratings.avg_effect)" :key="k" :class="rate" class="bi h3 text-grad-2"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="is-mobile g-supplement-item-card d-flex rounded-lg gap-1 g-shadow">
            <div class="g-supplement-item-media">
                <img :src="supplement?.image" class="object-fit-cover" style="max-height: 150px; width: 100px; object-fit: cover;" />
            </div>
            <div class="g-supplement-item-content  px-3 f14">
                <div class=" w-100 mt-1 fw-bold">{{ supplement?.name? supplement.name:'&nbsp;' }}</div>
                <div class="f12 mb-2 sup-description text-truncate mt-2">{{ useTruncateText(supplement?.description) }}</div>
                <div class="g-supplement-item-ratings d-flex justify-content-around mt-3 w-100 mx-auto">
                    <div class="g-supplement-item-rating text-center">
                        <div class="g-rating-caption f12">{{ $t('TasteSupplementLabel') }}</div>
                        <div class="g-rating-stars text-center mb-2 mt-1" style="letter-spacing:.4em">
                            <i v-for="(rate, i) in useSupplementRating(supplement?.ratings.avg_taste)" :key="i" :class="rate" class="bi  text-grad-1"></i>
                        </div>
                    </div>
                    <div class="g-supplement-item-rating text-center">
                        <div class="g-rating-caption f12">{{ $t('EffectSupplementLabel') }}</div>
                        <div class="g-rating-stars text-center mb-2 mt-1" style="letter-spacing:.4em">
                            <i v-for="(rate, k) in useSupplementRating(supplement?.ratings.avg_effect)" :key="k" :class="rate" class="bi  text-grad-2"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useTruncateText from '~/composables/useTruncateText'

export default defineComponent({
    props: {
        supplement: Object
    },
    setup() {
        return {
            useTruncateText,
            useSupplementRating,
        }
    },
})
</script>
<style scoped>
.g-supplement-item-media img{
    width: 250px;
    height: 210px;
}

.sup-description {
    overflow-wrap: break-word;
    line-break: anywhere;
}

@media only screen and (max-width:1009px) {
    .g-supplement-item-media img{
        width: auto;
        height: 120px;
    }
    .sup-description {
        line-break: anywhere;
        height: 20px;
        white-space: inherit;
    }

}
</style>