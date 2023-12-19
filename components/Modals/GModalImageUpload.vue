<template>
    <ModalsGModal :id="id" :title="title" :size="size">
        <UtilsGMediaImageUpload @on-get-file="ongetfile" ref="gMediaUpload"></UtilsGMediaImageUpload>
    </ModalsGModal>
</template>
<script lang="ts">
export default defineComponent({
    props: {
        id: "cover-modal",
        title: "Insert Cover Image",
        size: "lg" //sm (small), md (modal)
    },
    emits: ['on-get-file'],
    setup({}, {emit}) {
        const ongetfile = (src) => {
            emit("on-get-file", src);
        };

        return {
            ongetfile,
        }
    }
})
</script>