<template>
    <div class="w-100 text-center py-3 h2 mt-4 cursor-pointer">
        <button v-if="buttonMode" class="btn btn-primary rounded-pill px-4">
            Load more
            <i class="ms-2 bi bi-chevron-down"></i>
        </button>
        <i v-else class="bi bi-chevron-down" />
    </div>
</template>
<script lang="ts">
export default defineComponent({
    props: {
        buttonMode: {
            type: Boolean,
            default: false,
        }
    }
})
</script>