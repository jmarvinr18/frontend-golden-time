<template>
    <div class="g-blog-form w-100 position-absolute overflow-visible ">
        <div class="bg-white mx-auto rounded-lg w-75 py-5 px-5 position-relative g-shadow" style="min-height:500px">
            <div class="mb-4">
                <input type="text" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Add title">
            </div>
            <div class="mb-3">
                <div id="editor-container" class=" border rounded-3"></div>
            </div>

            <div class="position-absolute bg-primary text-light py-0 px-0 rounded cursor-pointer" style="top:100px; right:40px">
                
                <div class="d-inline-flex gap-1">
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" @click="toolShow=!toolShow">
                        <i v-if="!toolShow" class="bi bi-plus-lg h4"></i>
                        <i v-else class="bi bi-dash-lg  h4"></i>
                    </a>
                </div>
                <div class="collapse bg-light text-dark rounded-bottom" id="collapseExample">
                    <ul class="g-blog-form-menu lh-5" id="toolbar">
                        <li class="py-2">
                            <button class="dropdown-item h2 mb-0 ql-image" data-bs-toggle="modal" data-bs-target="#tool-modal" @click="selectText('image')">
                                <i class="bi bi-camera"></i>
                            </button>
                        </li>
                        <li class="py-2 ql-bold">
                            <button class="dropdown-item h2 mb-0 ql-link" data-bs-toggle="modal" data-bs-target="#tool-modal" @click="selectText('link')">
                                <i class="bi bi-link-45deg"></i>
                            </button>
                        </li>
                        
                        <li class="py-2">
                            <button class="dropdown-item h2 mb-0" data-bs-toggle="modal" data-bs-target="#tool-modal" @click="selectText('gif')">
                                <i class="bi bi-filetype-gif"></i>
                            </button>
                        </li>
                        
                        <li class="py-2">
                            <a class="dropdown-item h2 mb-0" href="#">
                                <i class="bi bi-fonts"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- ACTION BUTTONS -->
            <div class="d-flex w-100 mt-4 mx-auto justify-content-center align-items-center">
                <div class="mx-auto w-75 d-flex align-items-center justify-content-end">
                    <button class="btn btn-outline-secondary rounded-pill w-25 me-3">Save draft</button>
                    <button class="btn btn-primary rounded-pill w-25 me-3">Post</button>
                    <button class="btn border-0 bg-none">
                        <i class="bi bi-trash me-1"></i>
                        delete
                    </button>
                </div>
                <div class="w-25 text-end">
                    <div>Release</div>
                    <div class="form-check form-switch form-check-reverse">
                        <input class="form-check-input form-check-input-success py-3 px-4" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- INSERT OBJECT MODAL -->
    <div class="modal fade" id="tool-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Insert {{ modalType }}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div v-if="modalType=='link'" class="mb-4">
                    <input type="text" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="https://mydomain.com" v-model="textLink">
                </div>
                <UtilsGMediaImageUpload v-else-if="modalType=='image'" @on-get-file="selectObj" ref="gMediaUpload"></UtilsGMediaImageUpload>

                <UtilsGMediaGifLibrary v-else-if="modalType=='gif'" @on-pick="selectObj" ref="gMediaGifLibrary"></UtilsGMediaGifLibrary>
            </div>
            <div class="modal-footer">
                <button type="button" class="f14 btn btn-outline-secondary rounded-pill" data-bs-dismiss="modal">Close</button>
                <button type="button" class="f14 btn btn-primary rounded-pill" data-bs-dismiss="modal" @click="insertLink">Insert</button>
            </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent,ref } from 'vue';
export default defineComponent({
    setup() {
        const modalType = ref<String>("link"); // link, image, gif, format
        const toolShow = ref<Boolean>(false);
        const textLink:any = ref<String>();
        const gMediaUpload:any = ref(null);
        const gMediaGifLibrary:any = ref(null);
        let textPos = {
            index:0,
            length:0
        };
        let quill:any;

        const selectText = (type:any) => {
            modalType.value = type;
        }

        const selectObj = (src:any) => {
            textLink.value = src;
        }

        let insertLink = () => {
            console.log(textPos.index, textPos.length);
            if (quill) {
                const range = quill.getSelection();
                console.log(range);
                if (modalType.value === 'link') {
                    quill.formatText(textPos.index, textPos.length, 'link', textLink.value)
                } else if (modalType.value === 'image' || modalType.value === 'gif') {
                    quill.insertEmbed(textPos.index, 'image', textLink.value);

                    if (modalType.value == 'image') {
                        gMediaUpload.value.clearFile();
                    } else {
                        gMediaGifLibrary.value.clearSearch();
                    }
                }
            }
            setTimeout(() => {
                textLink.value = "";
            },500);
        };

        onMounted(() => {
            
            quill = new Quill('#editor-container', {
                modules: {
                    toolbar: [
                        [{ header: [1, 2, false] }],
                        ['bold', 'italic', 'underline'],
                        [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }]
                    ]
                },
                placeholder: "Let's write down the contents of today's training!",
                theme: "bubble"
            });

            quill.on('selection-change', function(range:any, oldRange:any, source:any) {
                if (range) {
                    textPos = {
                        index: range.index,
                        length: range.length
                    }
                }
            });

            
        });

        return {
            textLink,
            modalType,
            toolShow,
            gMediaUpload,
            gMediaGifLibrary,
            selectObj,
            selectText,
            insertLink,
        }
    }
})
</script>
<style scoped>
.g-blog-form {
    top: 20%;
}
.g-blog-form-menu {
    /* min-width: unset !important;
    transform: translate3d(-8px, 55.5px, 0) !important;
    opacity:0 !important; */
    list-style: none;
    padding: 0;
    text-align: center;
    margin-bottom: 0;
}

.g-blog-form-menu.show {
    transition: opacity 1s ease-in;
    opacity: 1 !important;
}
</style>
<style>
#editor-container {
    min-height:400px;
    max-height: 600px;
    overflow-y: scroll;
}
#editor-container .ql-editor {
  font-size: 18px !important;
  overflow-y: visible;
  font-family: 'Noto Sans', sans-serif;
}

.ql-editor img {
    max-width: 100%;
    border-radius: 10px;
}

#editor-container .ql-toolbar{
    background: var(--bs-primary) !important;
    border-radius: 20px;
}
</style>