<template>
    <div class="g-profile-card w-100 overflow-visible">
        <div class="is-desktop g-profile-card-main bg-white mx-auto rounded-lg w-50 p-3" style="min-height:500px">
            <div class="row align-items-center justify-content-between">
                <div class="col-md-4 d-flex flex-wrap align-items-center g-profile-container">
                    <div class="w-100 g-profile-content">
                        <div class="rounded shadow-sm px-2 py-1 f14 my-2 w-fit-content">
                            <i class="bi bi-person-raised-hand me-1 text-primary"></i> Big 3 total: 100kg
                        </div>
                        <div class="rounded shadow-sm px-2 py-1 f14 my-2 w-fit-content">
                            <i class="bi bi-bezier2 me-1 text-primary"></i> Training experience: 8 years
                        </div>
                        <div class="rounded shadow-sm px-2 py-1 f14 my-2 w-fit-content">
                            <i class="bi bi-person-heart me-1 text-primary"></i> Respected trainee: 8 years
                        </div>
                    </div>
                </div>
                <div class="col-md-4 d-flex flex-wrap align-items-center g-profile-container ps-3">
                    <div class="w-100 g-profile-content">
                        <NuxtLink v-if="mode=='me'" to="/me/edit-profile" class="btn btn-outline-primary btn-sm rounded-pill f12 pull-right w-50 py-2">
                            <i class="bi bi-pencil me-1"></i>
                            Edit Profile
                        </NuxtLink>
                        <button v-else class="btn btn-primary btn-sm rounded-pill f12 pull-right w-50 py-2">
                            <i class="bi bi-person-plus me-1"></i>
                            Follow
                        </button>
                        
                        <div class="rounded shadow-sm px-2 py-1 f14 my-2 w-fit-content mt-5">
                            Age: 30 years old
                        </div>
                        <div class="rounded shadow-sm px-2 py-1 f14 my-2 w-fit-content">
                            Height: 176 cm
                        </div>
                        <div class="rounded shadow-sm px-2 py-1 f14 my-2 w-fit-content">
                            Weight: 78 kg
                        </div>
                        <div class="rounded shadow-sm px-2 py-1 f14 my-2 w-fit-content">
                            Body fat percentage: 17%
                        </div>
                    </div>
                </div>
            </div>
            <div class="position-absolute w-100 g-profile-dp ">
                <img src="https://www.muscleandfitness.com/wp-content/uploads/2019/01/man-tire-pull-1109.jpg?quality=86&strip=all" height="270" width="270" class="object-fit-cover rounded-circle mx-auto g-shadow" />
                <div class="h2 mt-4 fw-bold">Jack Komboy</div>
                <div class="d-flex justify-content-center mb-3">
                    <div class="mx-2">
                        <NuxtLink to="/me/followers" class="text-decoration-none text-dark">
                            <i class="bi bi-person-up me-2"></i>23
                        </NuxtLink>
                    </div>
                    <div class="mx-2">
                        <NuxtLink to="/me/following" class="text-decoration-none text-dark">
                            <i class="bi bi-person-down me-2"></i>89
                        </NuxtLink>
                    </div>
                    <div class="mx-2">
                        <i class="bi bi-instagram me-2"></i>
                    </div>
                    <div class="mx-2">
                        <i class="bi bi-facebook me-2"></i>
                    </div>
                </div>
            </div>
            <div class="g-profile-text border border-light p-2 rounded border-2">
                Self Introduction
            </div>
            <div class="mt-3 border border-light p-2 rounded border-2">
                Training
            </div>
        </div>
        <div class="is-mobile g-profile-card-main bg-white mx-auto rounded-lg g-shadow   w-100 p-3" style="min-height:500px">
            <div class="row align-items-center justify-content-between mt-5">
                <div class="col-xs-12">
                    <NuxtLink v-if="mode=='me'" to="/me/edit-profile" class="btn btn-outline-primary btn-sm rounded-pill f12 pull-right ">
                        <i class="bi bi-pencil me-1"></i>
                        Edit Profile
                    </NuxtLink>
                    <button v-else class="btn btn-primary btn-sm rounded-pill f12 pull-right py-2">
                        <i class="bi bi-person-plus me-1"></i>
                        Follow
                    </button>
                </div>
                <div class="col-sm-6 d-flex flex-wrap align-items-center g-profile-container">
                    <div class="w-100 g-profile-content g-profile-content-first d-flex flex-wrap">
                        <div class="rounded shadow-sm px-2 py-1 f14 my-2 w-fit-content">
                            <i class="bi bi-person-raised-hand me-1 text-primary"></i> Big 3 total: 100kg
                        </div>
                        <div class="rounded shadow-sm px-2 py-1 f14 my-2 w-fit-content">
                            <i class="bi bi-bezier2 me-1 text-primary"></i> Training experience: 8 years
                        </div>
                        <div class="rounded shadow-sm px-2 py-1 f14 my-2 w-fit-content">
                            <i class="bi bi-person-heart me-1 text-primary"></i> Respected trainee: 8 years
                        </div>
                    </div>
                </div>
                <div class="col-xs-6 d-flex flex-wrap align-items-center g-profile-container ps-3">
                    <div class="mw-100 g-profile-content overflow-x-scroll">
                        <div class="d-flex g-profile-content-slide align-items-center gap-2">
                            <div class="rounded shadow-sm px-2 py-1 f14 my-2">
                                Age: 30 years old
                            </div>
                            <div class="rounded shadow-sm px-2 py-1 f14 my-2">
                                Height: 176 cm
                            </div>
                            <div class="rounded shadow-sm px-2 py-1 f14 my-2">
                                Weight: 78 kg
                            </div>
                            <div class="rounded shadow-sm px-2 py-1 f14 my-2">
                                Body fat percentage: 17%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="position-absolute w-100 g-profile-dp ">
                <img src="https://www.muscleandfitness.com/wp-content/uploads/2019/01/man-tire-pull-1109.jpg?quality=86&strip=all" height="170" width="170" class="object-fit-cover rounded-circle mx-auto g-shadow" />
                <div class="h2 mt-4 fw-bold">Jack Komboy</div>
                <div class="d-flex justify-content-center mb-3">
                    <div class="mx-2">
                        <NuxtLink to="/me/followers" class="text-decoration-none text-dark">
                            <i class="bi bi-person-up me-2"></i>23
                        </NuxtLink>
                    </div>
                    <div class="mx-2">
                        <NuxtLink to="/me/following" class="text-decoration-none text-dark">
                            <i class="bi bi-person-down me-2"></i>89
                        </NuxtLink>
                    </div>
                    <div class="mx-2">
                        <i class="bi bi-instagram me-2"></i>
                    </div>
                    <div class="mx-2">
                        <i class="bi bi-facebook me-2"></i>
                    </div>
                </div>
            </div>
            <div class="mt-3 border border-light p-2 rounded border-2">
                Self Introduction
            </div>
            <div class="mt-3 mb-5 border border-light p-2 rounded border-2">
                Training
            </div>
        </div>
    </div>
</template>
<script lang="ts">
export default defineComponent({
    props: {
        mode: {
            type: String,
            default: 'me' // me or other
        }
    },
})
</script>
<style scoped>
.g-profile-card {
    margin-top: -360px;
    position: relative;
    margin-bottom: 10%;
}

.g-profile-container {
    height: 20vh;
}
.g-profile-content {
    z-index: 900;
    position: relative;
}
.g-profile-text {
    margin-top: 120px;
}
.g-profile-dp {
    top:-90px;
    left: 0;
    /* z-index: 100; */
    text-align: center;
}

.g-profile-dp img {
    border: 5px solid white;
}

@media only screen and (max-width:1009px)  {
    .g-profile-card {
        margin-top:-92%;
    }    
    .g-profile-container {
        height: auto;
    }
    .g-profile-content-first {
        margin-top:70px !important;
    }
    .g-profile-content div{
        min-width: 60px;
        font-size: 12px !important;
    }

    .g-profile-content-slide>* {
        width: fit-content;
        min-width: 120px !important;
    }
}
</style>