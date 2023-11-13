<template>
    <div class="card w-100 g-shadow rounded-lg">
        <img src="https://img.freepik.com/free-photo/smiling-athlete-with-earphones-holding-thumbs-up-ready-training_342744-652.jpg" class="card-img-top" alt="...">
        <div class="card-body text-center d-block">
            <div class="w-100" v-if="updateMode">
                <div class="btn-group g-shadow rounded-pill overflow-hidden bg-light" role="group" aria-label="Basic mixed styles example">
                    <button type="button" class="btn btn-light px-3">20 g/day</button>
                    <button type="button" class="btn btn-dark rounded-pill px-3">
                        <strong class="bi bi-arrow-up me-2 fw-bold"></strong>Update
                    </button>
                </div>
            </div>
            <button class="btn btn-outline-secondary rounded-pill mt-3 w-50"><i class="bi bi-trash me-2"></i>Exclusion</button>
        </div>
    </div>
</template>
<script lang="ts">
export default defineComponent({
    props: {
        updateMode: {
            type: Boolean,
            default: false
        },
    },
})
</script>