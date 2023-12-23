<template>
    <ModalsGModal title="Post a rating" :id="`rating-modal-${type}`" :submitBtn="true" @on-submit="submitNow" size="md">
        <div class="text-center">
            <div class="h5 mb-4">Rate the {{ type }}</div>
            <label v-for="star in 5" class="cursor-pointer mx-1" :for="'star-'+type+'-'+star">
                <i v-if="type=='taste'" class="bi h3 text-grad-1" :class="rates >= star? 'bi-star-fill '+ type:'bi-star '+ type"></i>
                <i v-else class="bi h2 text-grad-2" :class="rates >= star? 'bi-star-fill '+ type:'bi-star '+ type"></i>
                <input :id="'star-'+type+'-'+star" :value="star" :name="`star-rating-${type}`" type="radio" class="radio-star visibility-hidden" v-model="rates" />
            </label>

            <div class="text-muted text-italic mt-3">{{ msg }}</div>
        </div>
    </ModalsGModal>
</template>
<script lang="ts">
export default defineComponent({
    name: "RatingForm",
    props: {
        type: String, // taste or effect
    },
    setup(props) {
        const supplementStore = useSupplementStore();
        const generalStore = useGeneralStore();
        const route = useRoute();
        const rates = ref(0);
        const msg = ref("");

        watch(rates, (val) => {
            switch(val) {
                case 1:
                    msg.value = `Poor ${props.type}`;
                break;
                case 2:
                    msg.value = `Dislike`;
                break;
                case 3:
                    msg.value = `Neutral`;
                break;
                case 4:
                    msg.value = `Good`;
                break;
                case 5:
                    msg.value = `Excellent!`;
                break;
                default:
                    msg.value = "";
            }
        });

        const submitRating = () => {
            let formData;
            if (props.type == 'effect') {
                formData = {
                    effect: rates.value,
                    id: route.params.id
                };
            } else {
                formData = {
                    taste_drinkability: rates.value,
                    id: route.params.id
                }
            }

            supplementStore.ratingSupplement(formData);
        }

        const submitNow = () => {
            if (rates.value > 0) {
                submitRating();
            } else {
                msg.value = "Please give some ratings.";
                generalStore.setError(true, "Please give some ratings.");
            }
        }

        return {
            rates,
            msg,
            submitNow
        }
    },
})
</script>
<style>
.g-rating-stars .bi:hover {
    cursor: pointer;
}

.radio-star {
    width: 0;
    height: 0;
}
</style>