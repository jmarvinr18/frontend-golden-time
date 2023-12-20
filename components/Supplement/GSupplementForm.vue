<template>
    <div class="is-desktop g-auth-signup-title w-100 mt-5">
        <div class="h3 mt-5">Register your supplement</div>
        <div class="text-danger mt-5">* Required input</div>
    </div>
    <div class="is-desktop g-auth-signup-form mt-2">
        <div class="g-form-group pb-5">
            <div class="mb-4 g-form-input">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">brand*</label>
                <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="sample" v-model="formData.brand">
            </div>
            <div class="mb-4 g-form-input">
                <label for="g-auth-form-2" class="form-label bg-white ms-2 px-2">Product name*</label>
                <input type="text" class="form-control form-control-lg" id="g-auth-form-2" placeholder="samples" v-model="formData.name">
            </div>
            <div class="mb-4 g-form-input">
                <div class="mb-4 g-form-input">
                    <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Kinds*</label>
                    <select class="form-select form-select-lg" aria-label="Default select example" v-model="formData.kind">
                    <option selected>Select</option>
                    <option value="1">powder</option>
                    <option value="2">tablet</option>
                    <option value="3">capsules</option>
                    <option value="3">others</option>
                    </select>
                </div>
            </div>
            <div class="mb-4 g-form-input">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Protein content per 100gr*</label>
                <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="200gr" v-model="formData.protein_content">
            </div>
            <div class="mb-4 g-form-input">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Type of protein</label>
                <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="sample" v-model="formData.protein_type">
            </div>
            <div class="mb-4 g-form-input">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Taste</label>
                <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="sample" v-model="formData.taste">
            </div>
            <div class="mb-4 g-form-input">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Price</label>
                <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="sample" v-model="formData.price">
            </div>
            <div class="mb-4 g-form-input">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Component</label>
                <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="sample" v-model="formData.component">
            </div>
            <div class="mb-4 g-form-input">
                <div class="mb-4 g-form-input">
                    <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Shape*</label>
                    <select class="form-select form-select-lg" aria-label="Default select example" v-model="formData.shape">
                    <option selected>Select</option>
                    <option value="1">powder</option>
                    <option value="2">tablet</option>
                    <option value="3">capsules</option>
                    <option value="3">others</option>
                    </select>
                </div>
            </div>
            <div class="mb-4 g-form-input">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">URL</label>
                <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="www.sample.com" v-model="formData.url">
            </div>
            <div class="w-100 mb-4 g-form-input">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Product features</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="12" v-model="formData.features"></textarea>
            </div>
        </div>
        <div class="w-100 py-3 d-flex justify-content-center text-center gap-3">
            <button class="btn btn-outline-secondary g-shadow rounded-pill px-4" @click="router.back()">
                Cancel
            </button>
            <button class="btn btn-primary g-shadow rounded-pill px-4" @click="submitNow">
                Registration
            </button>
        </div>
    </div>
    <div class="is-mobile g-auth-signup-title w-100 mt-5">
        <div class="h5 mt-5 text-center">Register your supplement</div>
        <div class="text-danger mt-5 f14">* Required input</div>
    </div>
    <div class="is-mobile g-auth-signup-form mt-2">
        <div class="g-form-group pb-2">
            <div class="mb-4 g-form-input w-75">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">brand*</label>
                <input type="text" class="form-control " id="g-auth-form-1" placeholder="sample" v-model="formData.brand">
            </div>
            <div class="mb-4 g-form-input w-75">
                <label for="g-auth-form-2" class="form-label bg-white ms-2 px-2">Product name*</label>
                <input type="text" class="form-control " id="g-auth-form-2" placeholder="samples" v-model="formData.name">
            </div>
            <div class="mb-4 g-form-input w-75">
                <div class="mb-4 g-form-input">
                    <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Kinds*</label>
                    <select class="form-select" aria-label="Default select example" v-model="formData.kind">
                    <option selected>Select</option>
                    <option value="1">powder</option>
                    <option value="2">tablet</option>
                    <option value="3">capsules</option>
                    <option value="3">others</option>
                    </select>
                </div>
            </div>
            <div class="mb-4 g-form-input w-75">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Protein content per 100gr*</label>
                <input type="text" class="form-control " id="g-auth-form-1" placeholder="200gr" v-model="formData.protein_content">
            </div>
            <div class="mb-4 g-form-input w-75">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Type of protein</label>
                <input type="text" class="form-control " id="g-auth-form-1" placeholder="sample" v-model="formData.protein_type">
            </div>
            <div class="mb-4 g-form-input w-75">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Taste</label>
                <input type="text" class="form-control " id="g-auth-form-1" placeholder="sample" v-model="formData.taste">
            </div>
            <div class="mb-4 g-form-input w-75">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Price</label>
                <input type="text" class="form-control " id="g-auth-form-1" placeholder="sample" v-model="formData.price">
            </div>
            <div class="mb-4 g-form-input w-75">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Component</label>
                <input type="text" class="form-control " id="g-auth-form-1" placeholder="sample" v-model="formData.component">
            </div>
            <div class="mb-4 g-form-input w-75">
                <div class="mb-4 g-form-input">
                    <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Shape*</label>
                    <select class="form-select " aria-label="Default select example" v-model="formData.shape">
                    <option selected>Select</option>
                    <option value="1">powder</option>
                    <option value="2">tablet</option>
                    <option value="3">capsules</option>
                    <option value="3">others</option>
                    </select>
                </div>
            </div>
            <div class="mb-4 g-form-input w-75">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">URL</label>
                <input type="text" class="form-control " id="g-auth-form-1" placeholder="www.sample.com" v-model="formData.url">
            </div>
            <div class="w-100 mb-4 g-form-input">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Product features</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="12" v-model="formData.features"></textarea>
            </div>
        </div>
        <div class="w-100 py-3 d-flex justify-content-center text-center gap-2">
            <button class="w-50 btn btn-outline-secondary py-2 rounded-pill px-4" @click="router.back()">
                Cancel
            </button>
            <button class="w-50 btn btn-primary rounded-pill py-2 px-4" @click="submitNow">
                Registration
            </button>
        </div>
    </div>
</template>
<script lang="ts">
import { useSupplementStore } from "~/stores/GStoreSupplement";
import { useGeneralStore } from "~/stores/GStoreGeneral";

export default defineComponent({
    props: {
        img: {
            required: true,
            default() {
                return ""
            }
        },
    },
    setup(props) {
        const supplementStore = useSupplementStore();
        const generalStore = useGeneralStore();
        const route = useRoute();
        const router = useRouter();
        const formData = ref({
            brand: "",
            name:"",
            image: "",
            kind: "",
            protein_content: "",
            protein_type: "",
            component: "",
            taste: "",
            price: "",
            shape: "",
            url: "",
            features: ""
        });

        const submitNow = () => {
            formData.value.image = props.img;
            formData.value.price = formData.value.price + ".00"
            if (formData.value.name && formData.value.kind && formData.value.protein_content && formData.value.shape) {
                submitSupplement();
            } else {
                generalStore.setError(true, "Please make sure all required fields has been filled.")
            }
        };

        const submitSupplement = () => {
            if (route.query.id) {
                supplementStore.updateSupplement(formData.value);
            } else {
                supplementStore.createSupplement(formData.value);
            }
            
        }

        return {
            formData,
            router,
            submitNow
        }
    }
})
</script>
<style>
.g-form-input input, .g-form-input select, .g-form-input textarea{
    margin-top:-16px;
    padding: 16px 13px !important;
}

.g-form-input input::placeholder {
    color:#e4e4e4;
}

@media only screen and (max-width:1009px)  {
    .g-form-input input, .g-form-input select, .g-form-input textarea{
        padding: 8px 10px !important;
    }
}
</style>