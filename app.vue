<template>
  <div class="main-frame">
    <UtilsGPreloader v-if="isLoading"></UtilsGPreloader>
    <GHeader></GHeader>
    <NuxtPage></NuxtPage>
    <GFooter></GFooter>
    <!-- <ModalsGModalLogin></ModalsGModalLogin> -->
  </div>
</template>
<script lang="ts">
import { useGeneralStore } from "~/stores/GStoreGeneral";

export default defineComponent({
  setup() {
    const generalStore = useGeneralStore();
    const authStore = useAuthStore();
    const generalRef = storeToRefs(generalStore);
    const isLoading = ref(generalRef.isLoading);

    onMounted(() => {
      if (window.screen.width <= 1009) {
        var elems = document.querySelectorAll(".is-desktop");

        [].forEach.call(elems, (el:any) => {
          el.remove();
        });

        generalStore.setMobile(true);
      } else {
        var elems = document.querySelectorAll(".is-mobile");

        [].forEach.call(elems, (el:any) => {
          el.remove();
        });

        generalStore.setMobile(false);
      }
    });

    return {
      isLoading
    }
  }
})
</script>