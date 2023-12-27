<template>
    <div class="w-100 g-upload-media d-flex align-items-center justify-content-center border border-muted rounded border-dashed" style="min-height:20vh">
        <div v-if="!uploadedFile" class="w-100 text-center ">
            <label for="g-file-input" class="g-upload-media-container cursor-pointer">
                <i class="bi bi-cloud-upload-fill text-muted display-3"></i>
                <div class="mt-3">Upload your file</div>
                <div class="mt-1 text-muted f12">Click here to start upload</div>
            </label>
            <input type="file" id="g-file-input" style="width: 0;" @change="getFile" />
        </div>
        <div v-else class="text-center w-100">
            <img v-if="uploadedFile" :src="uploadedFile" class="w-100 object-fit-contain bg-dark" height="210" />
            <div class="my-3 text-primary f12 cursor-pointer" @click="uploadedFile=''">
                <i class="bi bi-trash me-2"></i>
                Change file...
            </div>
        </div>
    </div>
</template>
<script lang="ts">
export default defineComponent({
    emits: ['on-get-file'],
    expose: ['clearFile'],
    setup(props,{emit}) {
        const uploadedFile:any = ref<String>("");
        const getFile = (event:any) => {
            var thisFile = event.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(thisFile);
            reader.onload = () => {
                uploadedFile.value = reader.result;
                emit("on-get-file", {
                    file: event.target.files[0],
                    src: reader.result
                });
            };
        };

        const clearFile = () => {
            uploadedFile.value = "";
        }

        return {
            uploadedFile,
            getFile,
            clearFile
        }
    }
})
</script>