<template>
    <div class="is-desktop">
        <div class="container w-100 text-center position-relative" style="margin-bottom:-120px">
            <button class="btn position-absolute top-0 rounded-pill py-2" style="right:30%">
                <span class="bg-secondary text-center rounded-circle text-black fw-bold me-2 py-1 px-2">
                    <i class="bi bi-camera "></i>
                </span>
                add image
            </button>
            <img src="https://www.muscleandfitness.com/wp-content/uploads/2019/01/man-tire-pull-1109.jpg?quality=86&strip=all" height="180" width="180" class="object-fit-cover rounded-circle mx-auto g-shadow" />
        </div>
        <div class="w-100 rounded-lg py-5 mt-4 bg-white border border-2">
            <!-- SIGN UP FORM -->
            <div class="container py-4 w-50 mx-auto">
                <AuthGAuthSignupForm :mode="mode"></AuthGAuthSignupForm>
            </div>
        </div>
    </div>
    <div class="is-mobile">
        <div class="container w-100 text-center position-relative mt-5" style="margin-bottom:-60px">
            <img src="https://www.muscleandfitness.com/wp-content/uploads/2019/01/man-tire-pull-1109.jpg?quality=86&strip=all" height="110  " width="110" class="object-fit-cover rounded-circle mx-auto g-shadow" />
            <button class="btn position-absolute bottom-0 rounded-pill py-2" style="right:0%">
                <span class="bg-secondary text-center rounded-circle text-black fw-bold me-2 py-1 px-2">
                    <i class="bi bi-camera "></i>
                </span>
                add image
            </button>
        </div>
        <div class="w-100 rounded-lg py-5 mt-1 bg-white border border-2">
            <!-- SIGN UP FORM -->
            <div class="container py-4 w-100 mx-auto">
                <AuthGAuthSignupForm :mode="mode"></AuthGAuthSignupForm>
            </div>
        </div>
    </div>
</template>
<script>
export default defineComponent({
    props: {
        mode: {
            type: String,
            default: 'signup', // or edit
        }
    }
})
</script>