<template>
    <ProfileGProfileSection :obj-data="userData"></ProfileGProfileSection>
    <div class="is-desktop">
      <div class="container pt-2 pb-4">
        <GSectionTitle title="My Supplement" icon="bi-capsule"></GSectionTitle>

        <div class="row">
          <div v-for="(supplement) in userData.supplements" class="col-md-4 col-xs-12">
            <CardsGCardSuplement :supplement="supplement" :update-mode="true"></CardsGCardSuplement>
          </div>
          <UtilsGLoadMore></UtilsGLoadMore>
        </div>
      </div>
      <div class="container pt-2 pb-4">
        <GSectionTitle title="Drink List" icon="bi-bookmark-heart"></GSectionTitle>

        <div class="row">
          <div v-for="(supplement) in userData.supplement_wishes" class="col-md-3 col-xs-12">
            <CardsGCardSuplement :supplement="supplement?.supplement_details"></CardsGCardSuplement>
          </div>
          <UtilsGLoadMore></UtilsGLoadMore>          
        </div>
      </div>
      <div class="container pt-2 pb-4">
        <GSectionTitle title="blog" icon="bi-journals"></GSectionTitle>

        <div class="row">
          <div v-for="(blog) in userData.blogs" class="col-md-6 col-xs-12 mb-5">
            <CardsGCardBlog :blog="blog"></CardsGCardBlog>
          </div>
          <UtilsGLoadMore></UtilsGLoadMore>
        </div>
      </div>
      <!-- <div class="container pt-2 pb-4">
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
      </div> -->
      <!-- <div class="container pt-2 pb-4">
        <GSectionTitle title="notification" icon="bi-bell"></GSectionTitle>

        <div class="row">
          <div class="col-md-12 col-xs-12">
            <UtilsGNotifContainer></UtilsGNotifContainer>
          </div>
          <UtilsGLoadMore></UtilsGLoadMore>
        </div>
      </div> -->
    </div>
    <div class="is-mobile">
      <div class="container pt-2 pb-4">
        <GSectionTitle title="My Supplement" icon="bi-capsule"></GSectionTitle>

        <GContainerSlider>
          <CardsGCardSuplement v-for="(supplement) in userData.supplements" :supplement="supplement" :update-mode="true"></CardsGCardSuplement>
        </GContainerSlider>
      </div>
      <div class="container pt-2 pb-4">
        <GSectionTitle title="Drink List" icon="bi-bookmark-heart"></GSectionTitle>

        <GContainerSlider>
          <CardsGCardSuplement v-for="(supplement) in userData.supplement_wishes" :supplement="supplement?.supplement_details"></CardsGCardSuplement>
        </GContainerSlider>
      
      </div>
      <div class="container pt-2 pb-4">
        <GSectionTitle title="blog" icon="bi-journals"></GSectionTitle>

        <GContainerSlider>
          <CardsGCardBlog v-for="(blog) in userData.blogs" :blog="blog"></CardsGCardBlog>
        </GContainerSlider>
      </div>
      <!-- <div class="container pt-2 pb-4">
        <GSectionTitle title="comments" icon="bi-chat"></GSectionTitle>

        <GContainerSlider>
          <CardsGCardFeature></CardsGCardFeature>
          <CardsGCardFeature></CardsGCardFeature>
        </GContainerSlider>
      </div>
      <div class="container pt-2 pb-4">
        <GSectionTitle title="notification" icon="bi-bell"></GSectionTitle>

        <UtilsGNotifContainer></UtilsGNotifContainer>
      </div> -->
    </div>
</template>
<script lang="ts">
import { useAuthStore } from "~/stores/GStoreAuth";

export default defineComponent({
  name: 'PageProfile',
  setup() {
   const authStore = useAuthStore();
   var { userData } = storeToRefs(authStore);

   useHead({
    title: "My Profile | Golden Time"
   });

   onMounted(() => {
      authStore.getProfile(userData.value.id)
   });

   return {
    userData,
   }
  }
})
</script>