<template>
  <div>
    <GHeader></GHeader>
    <NuxtPage></NuxtPage>
    <GFooter></GFooter>
  </div>
</template>
<script lang="ts">
export default defineComponent({
  setup() {
    onMounted(() => {

      if (window.screen.width <= 1009) {
        var elems = document.querySelectorAll(".is-desktop");

        [].forEach.call(elems, (el:any) => {
          el.remove();
        });
      } else {
        var elems = document.querySelectorAll(".is-mobile");

        [].forEach.call(elems, (el:any) => {
          el.remove();
        });
      }
    })
  }
})
</script>