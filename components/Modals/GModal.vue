<template>
    <div class="modal fade" :id="id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" :class="'modal-'+size">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">{{ title }}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <slot></slot>
            </div>
            <div class="modal-footer">
                <button type="button" class="f14 btn btn-outline-secondary rounded-pill" data-bs-dismiss="modal">Close</button>
                <button type="button" class="f14 btn btn-primary rounded-pill" data-bs-dismiss="modal" @click="onSubmit">Submit</button>
            </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
export default defineComponent({
    props: {
        id: "cover-modal",
        title: "Insert Cover Image",
        size: {
            type: String,
            default() {
                return "lg"
            }
        },
        submitBtn: false,
    },
    emits: ["on-submit"],
    setup({}, {emit}) {
        const onSubmit = (arg:any) => {
            emit("on-submit", arg);
        }

        return {
            onSubmit,
        }
    },
})
</script>