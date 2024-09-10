<template>
    <GSection>
        <div class="is-desktop">
            <div class="container w-100 text-center position-relative cursor-pointer" style="margin-bottom:-120px" data-bs-toggle="modal" data-bs-target="#photo-modal">
                <button class="btn position-absolute top-0 rounded-pill py-2" style="right:30%">
                    <span class="bg-secondary text-center rounded-circle text-black fw-bold me-2 py-1 px-2">
                        <i class="bi bi-camera "></i>
                    </span>
                    {{ avatarImg? $t('ChangeImage'): $t('AddImage') }}
                </button>
                <img :src="avatarImg" class="bg-white object-fit-cover rounded-circle mx-auto g-shadow" style="height:180px; width:180px;" />
            </div>
            <div class="w-100 rounded-lg py-5 mt-4 bg-white border border-2">
                <!-- SIGN UP FORM -->
                <div class="container py-4 w-50 mx-auto">
                    <ProfileGProfileForm :edit="true" />
                </div>
            </div>
        </div>
        <div class="is-mobile">
            <div class="container w-100 text-center position-relative mt-5 cursor-pointer" style="margin-bottom:-60px" data-bs-toggle="modal" data-bs-target="#photo-modal">
                <img :src="avatarImg"  class="bg-white object-fit-cover rounded-circle mx-auto g-shadow" style="height:10rem; width:10rem;"/>
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
            authStore.getProfile(userData.value.id, "?action=edit").then(() => {
                if (userData.value.profile_details.image) {
                    avatarImg.value = userData.value.profile_details.image
                }
            })
        })

        return  {
            avatarImg,
            setPhoto
        }
    }
})
</script>