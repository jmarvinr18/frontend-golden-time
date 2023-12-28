<template>
    <div class="is-desktop g-auth-signup-title w-100 mt-5">
        <div class="h3 mt-5">{{ $t('RegisterYourSupplement') }}</div>
        <div class="text-danger mt-5">* {{ $t('RequiredInput') }}</div>
    </div>
    <div class="is-desktop g-auth-signup-form mt-2">
        <div class="g-form-group pb-5">
            <div class="mb-4 g-form-input">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t(`BrandLabel`) }}*</label>
                <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="sample" v-model="supplementForm.brand">
            </div>
            <div class="mb-4 g-form-input">
                <label for="g-auth-form-2" class="form-label bg-white ms-2 px-2">{{ $t(`ProductNameLabel`) }}*</label>
                <input type="text" class="form-control form-control-lg" id="g-auth-form-2" placeholder="samples" v-model="supplementForm.name">
            </div>
            <div class="mb-4 g-form-input">
                <div class="mb-4 g-form-input">
                    <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t(`KindsLabel`) }}*</label>
                    <select class="form-select form-select-lg" aria-label="Default select example" v-model="supplementForm.kind">
                        <option value="" selected>{{ $t('SelectLabel') }}</option>
                        <option v-for="(opt,key) in shapeOpt" :value="opt.value">{{ opt.label }}</option>
                    </select>
                </div>
            </div>
            <div class="mb-4 g-form-input">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t(`ProteinContentLabel`) }}*</label>
                <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="200gr" v-model="supplementForm.protein_content">
            </div>
            <div class="mb-4 g-form-input">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t(`TypeProteinLabel`) }}</label>
                <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="sample" v-model="supplementForm.protein_type">
            </div>
            <div class="mb-4 g-form-input">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t(`TypeProteinLabel`) }}</label>
                <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="sample" v-model="supplementForm.taste">
            </div>
            <div class="mb-4 g-form-input">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t(`PriceLabel`) }}</label>
                <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="sample" v-model="supplementForm.price">
            </div>
            <div class="mb-4 g-form-input">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t(`ComponentLabel`) }}</label>
                <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="sample" v-model="supplementForm.component">
            </div>
            <div class="mb-4 g-form-input">
                <div class="mb-4 g-form-input">
                    <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t(`ShapeLabel`) }}*</label>
                    <select class="form-select form-select-lg" aria-label="Default select example" v-model="supplementForm.shape">
                    <option value="" selected>{{ $t('SelectLabel') }}</option>
                    <option v-for="(opt,key) in shapeOpt" :value="opt.value">{{ opt.label }}</option>
                    </select>
                </div>
            </div>
            <div class="mb-4 g-form-input">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t(`UrlLabel`) }}</label>
                <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="www.sample.com" v-model="supplementForm.url">
            </div>
            <div class="w-100 mb-4 g-form-input">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t(`FeatureLabel`) }}</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="12" v-model="supplementForm.features"></textarea>
            </div>
        </div>
        <div class="w-100 py-3 d-flex justify-content-center text-center gap-3">
            <button class="btn btn-outline-secondary g-shadow rounded-pill px-4" @click="router.back()">
                {{ $t('CancelButton') }}
            </button>
            <button class="btn btn-primary g-shadow rounded-pill px-4" @click="submitNow">
                {{ $t('RegisterButton') }}
            </button>
        </div>
    </div>
    <div class="is-mobile g-auth-signup-title w-100 mt-5">
        <div class="h5 mt-5 text-center">{{ $t('RegisterYourSupplement') }}</div>
        <div class="text-danger mt-5 f14">* {{ $t('RequiredInput') }}</div>
    </div>
    <div class="is-mobile g-auth-signup-form mt-2">
        <div class="g-form-group pb-2">
            <div class="mb-4 g-form-input w-75">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t('BrandLabel') }}*</label>
                <input type="text" class="form-control " id="g-auth-form-1" placeholder="sample" v-model="supplementForm.brand">
            </div>
            <div class="mb-4 g-form-input w-75">
                <label for="g-auth-form-2" class="form-label bg-white ms-2 px-2">{{ $t('ProductNameLabel') }}*</label>
                <input type="text" class="form-control " id="g-auth-form-2" placeholder="samples" v-model="supplementForm.name">
            </div>
            <div class="mb-4 g-form-input w-75">
                <div class="mb-4 g-form-input">
                    <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t('KindsLabel') }}*</label>
                    <select class="form-select" aria-label="Default select example" v-model="supplementForm.kind">
                        <option value="" selected>{{ $t('SelectLabel') }}</option>
                        <option v-for="(opt,key) in shapeOpt" :value="opt.value">{{ opt.label }}</option>
                    </select>
                </div>
            </div>
            <div class="mb-4 g-form-input w-75">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t('ProteinContentLabel') }}*</label>
                <input type="text" class="form-control " id="g-auth-form-1" placeholder="200gr" v-model="supplementForm.protein_content">
            </div>
            <div class="mb-4 g-form-input w-75">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t('TypeProteinLabel') }}</label>
                <input type="text" class="form-control " id="g-auth-form-1" placeholder="sample" v-model="supplementForm.protein_type">
            </div>
            <div class="mb-4 g-form-input w-75">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t('TasteLabel') }}</label>
                <input type="text" class="form-control " id="g-auth-form-1" placeholder="sample" v-model="supplementForm.taste">
            </div>
            <div class="mb-4 g-form-input w-75">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t('PriceLabel') }}</label>
                <input type="text" class="form-control " id="g-auth-form-1" placeholder="sample" v-model="supplementForm.price">
            </div>
            <div class="mb-4 g-form-input w-75">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t('ComponentLabel') }}</label>
                <input type="text" class="form-control " id="g-auth-form-1" placeholder="sample" v-model="supplementForm.component">
            </div>
            <div class="mb-4 g-form-input w-75">
                <div class="mb-4 g-form-input">
                    <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t('ShapeLabel') }}*</label>
                    <select class="form-select " aria-label="Default select example" v-model="supplementForm.shape">
                        <option value="" selected>{{ $t('SelectLabel') }}</option>
                        <option v-for="(opt,key) in shapeOpt" :value="opt.value">{{ opt.label }}</option>
                    </select>
                </div>
            </div>
            <div class="mb-4 g-form-input w-75">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t('UrlLabel') }}</label>
                <input type="text" class="form-control " id="g-auth-form-1" placeholder="www.sample.com" v-model="supplementForm.url">
            </div>
            <div class="w-100 mb-4 g-form-input">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t('FeatureLabel') }}</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="12" v-model="supplementForm.features"></textarea>
            </div>
        </div>
        <div class="w-100 py-3 d-flex justify-content-center text-center gap-2">
            <button class="w-50 btn btn-outline-secondary py-2 rounded-pill px-4" @click="router.back()">
                {{ $t('CancelButton') }}
            </button>
            <button class="w-50 btn btn-primary rounded-pill py-2 px-4" @click="submitNow">
                {{ $t('RegisterButton') }}
            </button>
        </div>
    </div>
</template>
<script lang="ts">
import { useSupplementStore } from "~/stores/GStoreSupplement";
import { useGeneralStore } from "~/stores/GStoreGeneral";
import { useI18n } from "vue-i18n";

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
        const {t} = useI18n();
        const supplementStore = useSupplementStore();
        const { supplementForm } = storeToRefs(supplementStore);
        const generalStore = useGeneralStore();
        const route = useRoute();
        const router = useRouter();
        const shapeOpt = ref([
            {
                label: t("TabletOption"),
                value: "tablet",
            },
            {
                label: t("PowderOption"),
                value: "powder",
            },
            {
                label: t("CapsuleOption"),
                value: "capsule",
            },
            {
                label: t("OthersOption"),
                value: "others",
            },
        ])
        


        const submitNow = () => {
            supplementForm.value.image = props.img;
            supplementForm.value.price = supplementForm.value.price + ".00"
            if (supplementForm.value.name && supplementForm.value.kind && supplementForm.value.protein_content && supplementForm.value.shape) {
                submitSupplement();
            } else {
                generalStore.setError(true, "Please make sure all required fields has been filled.")
            }
        };

        const submitSupplement = () => {
            if (route.query.id) {
                supplementStore.updateSupplement(supplementForm.value);
            } else {
                supplementStore.createSupplement(supplementForm.value);
            }
            
        }

        return {
            supplementForm,
            router,
            shapeOpt,
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