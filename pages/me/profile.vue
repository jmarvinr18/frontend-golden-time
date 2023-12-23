<template>
    <ProfileGProfileSection :obj-data="userData"></ProfileGProfileSection>
    <div class="is-desktop">
      <div class="container pt-2 pb-4">
        <GSectionTitle title="My Supplement" icon="bi-capsule"></GSectionTitle>

        <div class="row">
          <div class="col-md-4 col-xs-12">
            <CardsGCardSuplement :update-mode="true"></CardsGCardSuplement>
          </div>
          <div class="col-md-4 col-xs-12">
            <CardsGCardSuplement :update-mode="true"></CardsGCardSuplement>
          </div>
          <div class="col-md-4 col-xs-12">
            <CardsGCardSuplement :update-mode="true"></CardsGCardSuplement>
          </div>
          <UtilsGLoadMore></UtilsGLoadMore>
        </div>
      </div>
      <div class="container pt-2 pb-4">
        <GSectionTitle title="Drink List" icon="bi-bookmark-heart"></GSectionTitle>

        <div class="row">
          <div class="col-md-4 col-xs-12">
            <CardsGCardSuplement></CardsGCardSuplement>
          </div>
          <div class="col-md-4 col-xs-12">
            <CardsGCardSuplement></CardsGCardSuplement>
          </div>
          <div class="col-md-4 col-xs-12">
            <CardsGCardSuplement></CardsGCardSuplement>
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
      <div class="container pt-2 pb-4">
        <GSectionTitle title="comments" icon="bi-chat"></GSectionTitle>

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
      <div class="container pt-2 pb-4">
        <GSectionTitle title="notification" icon="bi-bell"></GSectionTitle>

        <div class="row">
          <div class="col-md-12 col-xs-12">
            <UtilsGNotifContainer></UtilsGNotifContainer>
          </div>
          <UtilsGLoadMore></UtilsGLoadMore>
        </div>
      </div>
    </div>
    <div class="is-mobile">
      <div class="container pt-2 pb-4">
        <GSectionTitle title="My Supplement" icon="bi-capsule"></GSectionTitle>

        <GContainerSlider>
          <CardsGCardSuplement :update-mode="true"></CardsGCardSuplement>
          <CardsGCardSuplement :update-mode="true"></CardsGCardSuplement>
          <CardsGCardSuplement :update-mode="true"></CardsGCardSuplement>
          <CardsGCardSuplement :update-mode="true"></CardsGCardSuplement>
        </GContainerSlider>
      </div>
      <div class="container pt-2 pb-4">
        <GSectionTitle title="Drink List" icon="bi-bookmark-heart"></GSectionTitle>

        <GContainerSlider>
          <CardsGCardSuplement></CardsGCardSuplement>
          <CardsGCardSuplement></CardsGCardSuplement>
          <CardsGCardSuplement></CardsGCardSuplement>
          <CardsGCardSuplement></CardsGCardSuplement>
        </GContainerSlider>
      </div>
      <div class="container pt-2 pb-4">
        <GSectionTitle title="blog" icon="bi-journals"></GSectionTitle>

        <GContainerSlider>
          <CardsGCardFeature></CardsGCardFeature>
          <CardsGCardFeature></CardsGCardFeature>
        </GContainerSlider>
      </div>
      <div class="container pt-2 pb-4">
        <GSectionTitle title="comments" icon="bi-chat"></GSectionTitle>

        <GContainerSlider>
          <CardsGCardFeature></CardsGCardFeature>
          <CardsGCardFeature></CardsGCardFeature>
        </GContainerSlider>
      </div>
      <div class="container pt-2 pb-4">
        <GSectionTitle title="notification" icon="bi-bell"></GSectionTitle>

        <UtilsGNotifContainer></UtilsGNotifContainer>
      </div>
    </div>
</template>
<script lang="ts">
import { useAuthStore } from "~/stores/GStoreAuth";

export default defineComponent({
  name: 'PageProfile',
  setup() {
   const authStore = useAuthStore();
   var { userData } = storeToRefs(authStore)

   onMounted(() => {
      authStore.getProfile(userData.value.id)
   });

   return {
    userData,
   }
  }
})
</script>