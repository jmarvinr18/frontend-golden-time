<template>
    <div class="is-desktop">
        <button class="btn d-flex align-items-center" :class="checked? 'btn-primary-soft':''" @click="onClick">
            <i v-if="checked" class="bi bi-check-lg text-primary me-1"></i>
            {{ title }}
        </button>
    </div>
    <div class="is-mobile">
        <button class="btn" :class="checked? 'btn-primary-soft':''" @click="onClick">
            <i v-if="checked" class="bi bi-check-lg text-primary"></i>
            {{ title }}
        </button>
    </div>
</template>
<script lang="ts">
export default defineComponent({
    props: {
        title: String,
        checked: false,
    },
    emits: ['on-click'],
    methods: {
        onClick() {
            this.$emit("on-click");
        }
    }
});
</script>

<style scoped>
.is-desktop button {
    font-size: 12px !important;
}
.is-mobile > .btn {
    font-size: 11px !important;
}
.btn-primary-soft{
    margin: 0.2rem;
}
</style>