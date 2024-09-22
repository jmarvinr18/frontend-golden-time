<template>
    <GSection>
        <div class="is-desktop">
            <div class="container w-100 text-center position-relative cursor-pointer" style="margin-bottom:-120px" data-bs-toggle="modal" data-bs-target="#photo-modal">
                <button class="change-img-btn btn position-absolute top-0 rounded-pill py-2">
                    <span class="bg-secondary text-center rounded-circle text-black fw-bold me-2 py-1 px-2">
                        <i class="bi bi-camera "></i>
                    </span>
                    {{ avatarImg? $t('ChangeImage'): $t('AddImage') }}
                </button>
                <img :src="avatarImg" class="bg-white object-fit-cover rounded-circle mx-auto g-shadow" style="height:180px; width:180px;" />
            </div>
            <div class="w-100 rounded-lg py-5 mt-4 bg-white border border-2">
                <!-- SIGN UP FORM -->
                <div class="container profile-form-wrapper mx-auto">
                    <ProfileGProfileForm :edit="true" />
                </div>
            </div>
        </div>
        <div class="is-mobile">
            <div class="container w-100 text-center position-relative mt-5 cursor-pointer" style="margin-bottom:-60px" data-bs-toggle="modal" data-bs-target="#photo-modal">
                <img :src="avatarImg"  class="bg-white object-fit-cover rounded-circle mx-auto g-shadow" style="height:10rem; width:10rem;"/>
                <button class="btn position-absolute bottom-0 rounded-pill py-2 change-img-btn-mobile">
                    <span class="bg-secondary text-center rounded-circle text-black fw-bold me-2 py-1 px-2">
                        <i class="bi bi-camera "></i>
                    </span>
                    {{ avatarImg? $t('ChangeImage'): $t('AddImage') }}
                </button>
            </div>
            <div class="w-100 rounded-lg py-5 mt-1 bg-white border border-2">
                <!-- SIGN UP FORM -->
                <div class="container profile-form-wrapper  mx-auto">
                    <ProfileGProfileForm/>
                </div>
            </div>
        </div>
    </GSection>
    <!-- PROFILE AVATAR MODAL -->
    <ModalsGModalImageUpload id="photo-modal" :title="$t('InsertProfilePhoto')" @on-get-file="setPhoto"></ModalsGModalImageUpload>
</template>
<script lang="ts">
export default defineComponent({
    props: {
        mode: {
            type: String,
            default: 'signup', // or edit
        }
    },
    setup() {
        var authStore = useAuthStore()
        const avatarImg = ref('/images/no-avatar.jpeg');
        var { userData } = storeToRefs(authStore)

        var route = useRoute()

        const setPhoto = ((data:any) => {
            avatarImg.value = data.src;
            userData.value.profile_details.image = data.src;
        });

        useHead({
            title: "Edit Profile | Golden Time"
        });

        onBeforeMount(async () => {
            if (userData.value.profile_details.image) {
                avatarImg.value = userData.value.profile_details.image
            }
        })

        return  {
            avatarImg,
            setPhoto
        }
    }
})
</script>

<style scoped>
.profile-form-wrapper{
    width: 50%;
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
    margin-top: 4rem;
}

@media only screen and (max-width: 800px)  {
    .profile-form-wrapper{
        width: 100%;
        padding-top: 1.5rem !important;
        padding-bottom: 1.5rem !important;
    }
}
@media only screen and (max-width: 650px)  {
    .profile-form-wrapper{
        width: 100%;
        padding-top: 1.5rem !important;
        padding-bottom: 1.5rem !important;
    }
}
</style>