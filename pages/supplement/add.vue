<template>
    <GSection>
    <div class="is-desktop container w-100 text-center position-relative" style="margin-bottom:-120px">
        <button class="change-img-btn btn position-absolute top-0 rounded-pill py-2"  data-bs-toggle="modal" data-bs-target="#photo-modal">
            <span class="bg-secondary text-center rounded-circle text-black fw-bold me-2 py-1 px-2">
                <i class="bi bi-camera "></i>
            </span>
            {{ prodImage? $t('ChangeImage'): $t('AddImage') }}
        </button>
        <img :src="prodImage" style="width: 180px; height: 180px;" class="cursor-pointer object-fit-cover rounded-circle mx-auto g-shadow" data-bs-toggle="modal" data-bs-target="#photo-modal" />
    </div>
    <div class="is-mobile">
        <div class="container w-100 text-center position-relative mt-5 cursor-pointer" style="margin-bottom:-80px">
            <img :src="prodImage" style="height:10rem; width:10rem;" class="cursor-pointer object-fit-cover rounded-circle mx-auto g-shadow" data-bs-toggle="modal" data-bs-target="#photo-modal" />            
            <button class="btn position-absolute bottom-0 rounded-pill py-2 change-img-btn-mobile" data-bs-toggle="modal" data-bs-target="#photo-modal">
                <span class="bg-secondary text-center rounded-circle text-black fw-bold me-2 py-1 px-2">
                    <i class="bi bi-camera "></i>
                </span>
                {{ $t('AddImage') }}
            </button>
        </div>

    </div>
    <div class="w-100 rounded-lg py-5 mt-4 bg-white border border-2">
        <!-- ADD / EDIT FORM -->
        <div class="is-desktop container py-4 mx-auto supplement-add-form">
            <SupplementGSupplementForm></SupplementGSupplementForm>
        </div>
        <div class="is-mobile container mt-1 py-4 w-100 mx-auto">
            <SupplementGSupplementForm></SupplementGSupplementForm>
        </div>
    </div>
        <!-- SUPPLEMENT IMAGE MODAL -->
    <ModalsGModalImageUpload id="photo-modal" :title="$t('InsertPhoto')" @on-get-file="setPhoto"></ModalsGModalImageUpload>

    </GSection>
</template>

<script lang="ts">
export default defineComponent({
    setup() {
        const prodImage = ref("/images/no-image.jpeg");
        var supplementStore = useSupplementStore()
        var { supplementForm } = storeToRefs(supplementStore)

        const setPhoto = ((data:any) => {
            prodImage.value = data.src;
            supplementForm.value.image = data.file;
        });

        onBeforeUnmount(() => {
            supplementStore.purgeFormContent()
        })        
        return  {
            prodImage,
            setPhoto
        }
    }
})
</script>

<style scoped>
.supplement-add-form{
    width: 50%;
    margin-top: 4rem;
}
.change-img-btn-mobile {
    top: 0 !important;
    left: 0;
    transform: translate(92%, 68%);
}

@media only screen and (max-width: 900px) {
    .supplement-add-form{
        width: 100%;
    }
}
</style>