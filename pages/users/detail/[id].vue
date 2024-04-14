<template>
    <ProfileGProfileSection mode="other"></ProfileGProfileSection>
    <div class="is-desktop">
        <div class="container pt-2 pb-4">
            <GSectionTitle title="My Supplement" icon="bi-capsule"></GSectionTitle>

            <div class="row">
                <div class="col-md-4 col-xs-12">
                    <CardsGCardSuplement :update-mode="true" mode="other"></CardsGCardSuplement>
                </div>
                <div class="col-md-4 col-xs-12">
                    <CardsGCardSuplement :update-mode="true" mode="other"></CardsGCardSuplement>
                </div>
                <div class="col-md-4 col-xs-12">
                    <CardsGCardSuplement :update-mode="true" mode="other"></CardsGCardSuplement>
                </div>
                    <UtilsGLoadMore></UtilsGLoadMore>
            </div>
        </div>
        <div class="container pt-2 pb-4">
            <GSectionTitle title="Drink List" icon="bi-bookmark-heart"></GSectionTitle>

            <div class="row">
                <div class="col-md-4 col-xs-12">
                    <CardsGCardSuplement mode="other"></CardsGCardSuplement>
                </div>
                <div class="col-md-4 col-xs-12">
                    <CardsGCardSuplement mode="other"></CardsGCardSuplement>
                </div>
                <div class="col-md-4 col-xs-12">
                    <CardsGCardSuplement mode="other"></CardsGCardSuplement>
                </div>
                    <UtilsGLoadMore></UtilsGLoadMore>
            </div>
        </div>
        <div class="container pt-2 pb-4">
            <GSectionTitle title="blog" icon="bi-journals"></GSectionTitle>

            <div class="row">
                <div class="col-md-12 col-xs-12">
                <CardsGCardFeature></CardsGCardFeature>
                </div>
                <div class="col-md-12 col-xs-12">
                <CardsGCardFeature></CardsGCardFeature>
                </div>
                <UtilsGLoadMore></UtilsGLoadMore>
            </div>
        </div>
    </div>
    <div class="is-mobile">
        <div class="container pt-2 pb-4">
            <GSectionTitle title="My Supplement" icon="bi-capsule"></GSectionTitle>

            <GContainerSlider>
                <CardsGCardSuplement :update-mode="true" mode="other"></CardsGCardSuplement>
                <CardsGCardSuplement :update-mode="true" mode="other"></CardsGCardSuplement>
                <CardsGCardSuplement :update-mode="true" mode="other"></CardsGCardSuplement>
            </GContainerSlider>
        </div>
        <div class="container pt-2 pb-4">
            <GSectionTitle title="Drink List" icon="bi-bookmark-heart"></GSectionTitle>

            <GContainerSlider>
                <CardsGCardSuplement mode="other"></CardsGCardSuplement>
                <CardsGCardSuplement mode="other"></CardsGCardSuplement>
                <CardsGCardSuplement mode="other"></CardsGCardSuplement>
            </GContainerSlider>
        </div>
        <div class="container pt-2 pb-4">
            <GSectionTitle title="blog" icon="bi-journals"></GSectionTitle>

            <GContainerSlider>
            <CardsGCardFeature></CardsGCardFeature>
            <CardsGCardFeature></CardsGCardFeature>
            </GContainerSlider>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useRoute } from 'vue-router';

export default defineComponent({
    setup() {
        const route = useRoute();

        onMounted(() =>{
            console.log(route)
        })

        return {

        }
    }
})
</script>
