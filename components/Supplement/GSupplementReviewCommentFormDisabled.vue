<template>
    <div v-if="isReplay" class="position-absolute w-100 h-100 d-flex align-items-center justify-content-center left-0 top-0" style="background: rgba(255, 255, 255, 0.9);z-index: 100;">
        <div>
            Please do signing in to add a comment.&nbsp;&nbsp;<NuxtLink to="/login" class="text-primary">Login now</NuxtLink>
        </div>
    </div>
    <div v-else>
        <div class="is-desktop">
            <div class="position-absolute w-100 h-100 d-flex align-items-center justify-content-center left-0 top-0" style="background: rgba(255, 255, 255, 0.8);z-index: 100;">
                <div>
                    Please do signing in to add a comment.&nbsp;&nbsp;<NuxtLink to="/login" class="text-primary">Login now</NuxtLink>
                </div>
            </div>
        </div>
        <div class="is-mobile">
            <div class="position-absolute w-100 h-100 d-flex align-items-center justify-content-center left-0 top-0 w-75" style="background: rgba(255, 255, 255, 0.8);z-index: 1;">
                <div>
                    Please do signing in to add a comment.
                    <br><NuxtLink to="/login" class="text-primary">Login now</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
export default defineComponent({
    props: {
        isReplay:String,
    },
});
</script>