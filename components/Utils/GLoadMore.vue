<template>
    <div class="is-desktop w-100 text-center py-3 h2 mt-4 cursor-pointer" @click="onClick">
        <button v-if="buttonMode" class="btn btn-primary rounded-pill px-4">
            {{ labelBtn }}
            <i class="ms-2 bi bi-chevron-down"></i>
        </button>
        <i v-else class="bi bi-chevron-down" />
    </div>
    <div class="is-mobile w-100 text-center py-3 h2 mt-2 cursor-pointer" @click="onClick">
        <button v-if="buttonMode" class="btn btn-primary rounded-pill px-4 w-100">
            {{ labelBtn }}
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
        },
        labelBtn: "Load more"
    },
    emits: ['on-click'],
    methods: {
        onClick() {
            this.$emit('on-click');
        }
    }
})
</script>