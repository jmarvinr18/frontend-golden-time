<template>
    <div id="section-hero" class="w-100 h4 my-3">
        <i class="bi me-2" :class="icon"></i>
        {{ title }}
    </div>
</template>
<script lang="ts">
export default defineComponent({
    props: {
        title: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: false,
            default: 'bi-eye'
        }
    }
})
</script>