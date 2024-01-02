<template>
    <div class="g-blog-form w-100 overflow-visiblex pb-5">
        <div class="is-desktop bg-white mx-auto rounded-lg w-75 py-5 px-5 position-relative g-shadow" style="min-height:500px">
            <div class="mb-4">
                <input type="text" class="form-control form-control-lg" id="exampleFormControlInput1" :placeholder="$t('AddTitle')"
                v-model="blogForm.title" name="title">
            </div>
            <div class="mb-4 d-flex align-items-center flex-wrap">
                <div class="h4 me-3">{{ $t("CoverImage") }}</div>
                <button v-if="blogForm.feature_image" class="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#cover-modal" >Change ...</button>
                <div v-if="blogForm.feature_image" class="w-100 mt-2">
                    <img :src="coverImage" class="w-25 rounded object-fit-contain bg-dark" style="height: 200px;" />
                </div>
                <button v-else class="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#cover-modal" >{{ $t("Browse") }}...</button>
            </div>
            <div>
                <div class="mb-5">
                    <select @change="changedType" v-model="blogForm.type"  class="form-control form-control-lg form-select" aria-label="Default select example">
                        <option selected>Select content type</option>
                        <option value="blog">Blog</option>
                        <option value="news">News</option>
                        <option value="event">Event</option>
                    </select>
                </div>          
                <div v-if="blogForm.type == 'event'">
                    <div class="row mb-3">
                        <div class="d-flex justify-content-start">
                            <button @click="addNewField" class="btn btn-primary">Add New Field</button>
                        </div>
                    </div>
                    
                    <div v-for="(meta, i) in blogForm.meta" :key="i" class="row mb-5">
                        <div class="col-2 text-center">
                        <select v-model="meta.type" class="form-control form-control-lg form-select" placeholder="Select field type" aria-label="Default select example">
                            <option value="" selected>Select field type</option>
                            <option value="text">Text</option>
                            <option value="number">Number</option>
                            <option value="time">Time</option>
                            <option value="singledate">Single Date</option>
                            <option value="daterange">Date Range</option>
                        </select>
                        </div>                    
                        <div class="col-5">
                            <input v-model="meta.key" type="text" class="form-control form-control-lg" placeholder="Label"/>
                        </div>
                        <div class="col-5 d-flex gap-4">
                            <VueDatePicker class="form-control form-control-lg" v-if="meta.type == 'time'" placeholder="Value" v-model="meta.value" time-picker model-type="HH:mm:ss"></VueDatePicker>
                            <VueDatePicker class="form-control form-control-lg" v-if="meta.type == 'singledate'" placeholder="Value" v-model="meta.value" model-type="dd.MM.yyyy"></VueDatePicker>
                            <VueDatePicker class="form-control form-control-lg" v-if="meta.type == 'daterange'" placeholder="Value" v-model="meta.value" range multi-calendars model-type="dd.MM.yyyy"></VueDatePicker>
                            
                            <input v-if="meta.type == 'text'" v-model="meta.value" type="text" class="form-control form-control-lg" placeholder="Value"/>
                            <input v-if="meta.type == 'number'" min="0" v-model="meta.value" type="number" class="form-control form-control-lg" placeholder="Value"/>

                            <button @click="addNewField" class="btn btn-primary"><i class="bi bi-trash3"></i></button>
                        </div>      

                    </div>  
                </div>
                  
            </div>



            <div class="mb-3 position-relative">
                <div id="editor-container" class=" border rounded-3"></div>

                <!-- FLOATING TOOLS -->
                <div class="position-absolute bg-primary text-light py-0 px-0 rounded cursor-pointer" style="top:-20px; right:-20px">
                    
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
            </div>

            

            <!-- ACTION BUTTONS -->
            <div class="d-flex w-100 mt-4 mx-auto justify-content-center align-items-center">
                <div class="mx-auto w-75 d-flex align-items-center justify-content-end">
                    <button class="btn btn-outline-secondary rounded-pill w-25 me-3">{{ $t("SaveDraftButton") }}</button>
                    <button class="btn btn-primary rounded-pill w-25 me-3" @click="saveBlog()">{{ $t("PostButton") }}</button>
                    <button class="btn border-0 bg-none">
                        <i class="bi bi-trash me-1"></i>
                        {{ $t("DeleteButton") }}
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
        <div class="is-mobile bg-white mx-auto rounded-lg w-100 py-3 px-3 position-relative g-shadow" style="min-height:500px">
            <div class="mb-4">
                <input type="text" class="form-control form-control-lg" id="exampleFormControlInput1" :placeholder="$t('AddTitle')" v-model="blogForm.title">
            </div>
            <div class="mb-4 d-flex align-items-center flex-wrap">
                <div class="h4 me-3">Cover Image</div>
                <button v-if="blogForm.feature_image" class="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#cover-modal" >Change ...</button>
                <div v-if="blogForm.feature_image" class="w-100 mt-2">
                    <img :src="coverImage" class="w-100 rounded object-fit-contain bg-dark" style="height: 200px;" />
                </div>
                <button v-else class="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#cover-modal" >Browse...</button>
            </div>
            <div class="mt-5 mb-3 position-relative">
                <!-- FLOATING TOOLS -->
                <div class="position-absolute bg-primary text-light py-0 px-0 rounded cursor-pointer" style="z-index: 10; top:-18px; right:-2px">
                
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
                <div id="editor-container-mobile" class=" border rounded-3"></div>
            </div>

            <!-- ACTION BUTTONS -->
            <div class="d-flex w-100 mt-4 mx-auto justify-content-center align-items-center flex-wrap">
                <div class="mx-auto w-100 d-flex align-items-center g-blog-post-buttons">
                    <button class="btn btn-outline-secondary rounded-pill me-1">Save draft</button>
                    <button class="btn btn-primary rounded-pill me-1" @click="saveBlog">Post</button>
                    <button class="btn border-0 bg-none btn-delete text-start">
                        <i class="bi bi-trash me-1"></i>
                        delete
                    </button>
                    <div class="f10 text-end">
                        <div>Release</div>
                        <div class="form-check form-switch form-check-reverse">
                            <input class="form-check-input form-check-input-success py-3 px-4" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                        </div>
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

    <!-- COVER IMAGE MODAL -->
    <ModalsGModalImageUpload id="cover-modal" title="Insert Cover Image" @on-get-file="setCover"></ModalsGModalImageUpload>
</template>
<script lang="ts">
import { defineComponent,ref } from 'vue';
import { useI18n } from "vue-i18n";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

export default defineComponent({
    components: { VueDatePicker },    
    setup({}) {
        const { t } = useI18n();
        const modalType = ref<String>("link"); // link, image, gif, format
        const blogStore = useBlogStore();
        const { blogForm } = storeToRefs(blogStore)
        const generalStore = useGeneralStore();
        const router = useRouter();
        const route = useRoute();
        const coverImage = ref("/images/no-image.jpeg")

        const toolShow = ref<Boolean>(false);
        const textLink:any = ref<String>();
        const gMediaUpload:any = ref(null);
        const gMediaGifLibrary:any = ref(null);
        let textPos = {
            index:0,
            length:0
        };
        const time = ref({
            hours: new Date().getHours(),
            minutes: new Date().getMinutes()
        });        
        let quill:any;

        const selectText = (type:any) => {
            modalType.value = type;
        };

        const selectObj = (src:any) => {
            textLink.value = src;
        }

        const changedType = (val: any) => {
            if(val.target.value == "event"){
                blogForm.value.meta = [{
                    type: "text",
                    key: "",
                    value: "",
                }];
            } else {
                blogForm.value.meta = null;
            }

        }

        const setCover = (data:any) => {
            blogForm.value.feature_image = data.file;
            coverImage.value = data.src;
        }

        var addNewField = () => {
            blogForm.value.meta.push({
                type: "text",
                key: "",
                value: ""
            })
        }
        let insertLink = () => {
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

        const saveBlog = () => {
            const myEl:any = document.querySelector(".ql-editor");
            blogForm.value.content = myEl.innerHTML;

            if (route.name == "blog-edit-id") {
                var blogId = blogForm.value.id
                var type = blogForm.value.type
                blogStore.updateBlog(blogForm.value).then((res: any) => {
                   location.href = `/${type}/read/${blogId}`;
                });
            } else {
                blogStore.createBlog(blogForm.value).then((res: any) => {
                    location.href = `/blog/read/${res.data.id}`;
                })
            }
        }

        onMounted(() => {
            generalStore.setIsLoading(true);
            setTimeout(() => {
                initEditor();
                renderImage();
            },1000)
         
        });
      
        const renderImage = () => {
            if (route.name == "blog-edit-id"){
                coverImage.value = blogForm.value.feature_image
            }               
        }
        const loadData = () => {
            if (route.query.id) {
                blogStore.getBlog(route.query.id).then((res:any) => {
                    blogForm.value = res;
                    const myEl:any = !generalStore.isMobile? document.querySelectorAll(".ql-editor")[0]:document.querySelector(".ql-editor");
                    myEl.innerHTML = res.content;
                });
            }
        };

        const initEditor = () => {
            if (!generalStore.isMobile) {
                quill = new Quill('#editor-container', {
                    modules: {
                        toolbar: [
                            [{ header: [1, 2, false] }],
                            ['bold', 'italic', 'underline'],
                            [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }]
                        ]
                    },
                    placeholder: t('BlogContentPlaceholder'),
                    theme: "bubble"
                });
                generalStore.setIsLoading(false);
            } else {
                quill = new Quill('#editor-container-mobile', {
                    modules: {
                        toolbar: [
                            [{ header: [1, 2, false] }],
                            ['bold', 'italic', 'underline'],
                            [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }]
                        ]
                    },
                    placeholder: t('BlogContentPlaceholder'),
                    theme: "bubble"
                });
                generalStore.setIsLoading(false);
            }

            quill.on('selection-change', function(range:any, oldRange:any, source:any) {
                if (range) {
                    textPos = {
                        index: range.index,
                        length: range.length
                    }
                }
            });

            loadData();

            return {
                editor: quill,
                message: "tester"
            };
        }

        return {
            textLink,
            modalType,
            toolShow,
            gMediaUpload,
            gMediaGifLibrary,
            setCover,
            selectObj,
            selectText,
            insertLink,
            saveBlog,
            addNewField,
            blogForm,
            time,
            coverImage,
            changedType
        }
    }
})
</script>
<style scoped>
.g-blog-form {
    margin-top: -10%;
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

.g-blog-post-buttons button{
    width: 35%;
    font-size: 14px;
}

.g-blog-post-buttons .btn-delete {
    font-size: 13px;
}

@media only screen and (max-width: 1009px) {
    .g-blog-form {
       margin-top: -130%;
    }

    .g-blog-post-buttons button{
        font-size: 12px;
    }
}
</style>
<style>
#editor-container, #editor-container-mobile {
    min-height:400px;
    max-height: 600px;
    overflow-y: scroll;
}
#editor-container .ql-editor, #editor-container-mobile .ql-editor {
  font-size: 18px !important;
  overflow-y: visible;
  font-family: 'Noto Sans', sans-serif;
}

.ql-editor img {
    max-width: 100%;
    border-radius: 10px;
}

#editor-container .ql-toolbar, #editor-container-mobile .ql-toolbar{
    background: var(--bs-primary) !important;
    border-radius: 20px;
}
</style>