<template>
    <div class="is-desktop">
        <div class="container w-100 text-center position-relative cursor-pointer" style="margin-bottom:-120px" data-bs-toggle="modal" data-bs-target="#photo-modal">
            <button class="btn position-absolute top-0 rounded-pill py-2" style="right:30%">
                <span class="bg-secondary text-center rounded-circle text-black fw-bold me-2 py-1 px-2">
                    <i class="bi bi-camera "></i>
                </span>
                {{ avatarImg? $t('ChangeImage'): $t('AddImage') }}
            </button>
            <img :src="avatarImg?avatarImg:'/images/no-avatar.jpeg'" style="height: 180px; width: 180px;" class="bg-white object-fit-contain rounded-circle mx-auto g-shadow" />
        </div>
        <div class="w-100 rounded-lg py-5 mt-4 bg-white border border-2">
            <!-- SIGN UP FORM -->
            <div class="container py-4 w-50 mx-auto">
                <AuthGAuthSignupForm></AuthGAuthSignupForm>
            </div>
        </div>
    </div>
    <div class="is-mobile">
        <div class="container w-100 text-center position-relative mt-5 cursor-pointer" style="margin-bottom:-60px" data-bs-toggle="modal" data-bs-target="#photo-modal">
            <img :src="avatarImg?avatarImg:'/images/no-avatar.jpeg'" style="height: 110px; width: 110px;"  class="bg-white object-fit-contain rounded-circle mx-auto g-shadow" />
            <button class="btn position-absolute bottom-0 rounded-pill py-2" style="right:0%">
                <span class="bg-secondary text-center rounded-circle text-black fw-bold me-2 py-1 px-2">
                    <i class="bi bi-camera "></i>
                </span>
                {{ avatarImg? $t('ChangeImage'): $t('AddImage') }}
            </button>
        </div>
        <div class="w-100 rounded-lg py-5 mt-1 bg-white border border-2">
            <!-- SIGN UP FORM -->
            <div class="container py-4 w-100 mx-auto">
                <AuthGAuthSignupForm></AuthGAuthSignupForm>
            </div>
        </div>
    </div>
    <!-- PROFILE AVATAR MODAL -->
    <ModalsGModalImageUpload id="photo-modal" :title="$t('InsertProfilePhoto')" @on-get-file="setPhoto"></ModalsGModalImageUpload>
</template>
<script lang="ts">
export default defineComponent({
    setup() {
        const avatarImg = ref("");
        const setPhoto = ((src:any) => {
            avatarImg.value = src.src;
        });

        return  {
            avatarImg,
            setPhoto
        }
    }
})
</script>