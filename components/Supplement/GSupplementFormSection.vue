<template>
    <div class="is-desktop container w-100 text-center position-relative" style="margin-bottom:-120px">
        <button class="btn position-absolute top-0 rounded-pill py-2" style="right:30%" data-bs-toggle="modal" data-bs-target="#photo-modal">
            <span class="bg-secondary text-center rounded-circle text-black fw-bold me-2 py-1 px-2">
                <i class="bi bi-camera "></i>
            </span>
            {{ prodImage? $t('ChangeImage'): $t('AddImage') }}
        </button>
        <img :src="prodImage? prodImage:'/images/no-image.jpeg'" style="width: 180px; height: 180px;" class="cursor-pointer object-fit-cover rounded-circle mx-auto g-shadow" data-bs-toggle="modal" data-bs-target="#photo-modal" />
    </div>
    <div class="is-mobile container w-100 text-center position-relative" style="margin-bottom:-100px">
        <button class="f12 btn position-absolute top-0 rounded-pill py-2" style="right:10%" data-bs-toggle="modal" data-bs-target="#photo-modal">
            <span class="bg-secondary text-center rounded-circle text-black fw-bold me-2 py-1 px-2">
                <i class="bi bi-camera "></i>
            </span>
            {{ $t('AddImage') }}
        </button>
        <img :src="prodImage? prodImage:'/images/no-image.jpeg'" style="width: 120px; height: 120px;" class="cursor-pointer object-fit-cover rounded-circle mx-auto g-shadow" data-bs-toggle="modal" data-bs-target="#photo-modal" />
    </div>
    <div class="w-100 rounded-lg py-5 mt-4 bg-white border border-2">
        <!-- ADD / EDIT FORM -->
        <div class="is-desktop container py-4 w-50 mx-auto">
            <SupplementGSupplementForm :img="prodImage"></SupplementGSupplementForm>
        </div>
        <div class="is-mobile container py-4 w-100 mx-auto">
            <SupplementGSupplementForm :img="prodImage"></SupplementGSupplementForm>
        </div>
    </div>

    <!-- SUPPLEMENT IMAGE MODAL -->
    <ModalsGModalImageUpload id="photo-modal" :title="$t('InsertPhoto')" @on-get-file="setPhoto"></ModalsGModalImageUpload>

</template>
<script lang="ts">
export default defineComponent({
    setup() {
        const prodImage = ref("");
        const setPhoto = ((data:any) => {
            prodImage.value = data.src;
        });

        return  {
            prodImage,
            setPhoto
        }
    }
})
</script>