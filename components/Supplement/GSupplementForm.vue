<template>
    <div class="is-desktop g-auth-signup-title w-100 mt-5">
        <div class="h3 mt-5">{{ $t('RegisterYourSupplement') }}</div>
        <div class="text-danger mt-5">* {{ $t('RequiredInput') }}</div>
    </div>
    <div class="is-desktop g-auth-signup-form mt-2">
        <div class="g-form-group pb-5">
            <div class="mb-4 g-form-input">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t(`BrandLabel`) }}*</label>
                <input type="text" class="form-control form-control-lg" id="g-auth-form-1" :placeholder="$t('BrandPlaceholder')" v-model="supplementForm.brand" maxlength="25">
            </div>
            <div class="mb-4 g-form-input">
                <label for="g-auth-form-2" class="form-label bg-white ms-2 px-2">{{ $t(`ProductNameLabel`) }}*</label>
                <input type="text" class="form-control form-control-lg" id="g-auth-form-2" :placeholder="$t('ProductNamePlaceholder')" v-model="supplementForm.name" maxlength="25">
            </div>
            <div class="mb-4 g-form-input">
                <div class="mb-4 g-form-input">
                    <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t(`KindsLabel`) }}*</label>
                    <select class="form-select form-select-lg" aria-label="Default select example" v-model="supplementForm.supplement_type">
                    <option v-for="(opt,key) in typeOpt" :value="opt.value">{{ opt.label }}</option>
                    </select>
                </div>
            </div>
            <!-- <div v-show="!route.params.id" class="mb-4 g-form-input">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t(`TasteLabel`) }}*</label>
                <input type="text" class="form-control form-control-lg" id="g-auth-form-1" :placeholder="$t('FlavourPlaceholder')" v-model="supplementForm.flavor" maxlength="25" :disabled="route.params.id!==undefined">
            </div> -->
            <div class="mb-4 g-form-input">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t(`PriceLabel`) }}*</label>
                <input type="number" class="form-control form-control-lg" id="g-auth-form-1" :placeholder="$t('PricePlaceholder')" v-model="supplementForm.price">
            </div>
            <div class="mb-4 g-form-input">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t(`ComponentLabel`) }}*</label>
                <input type="text" class="form-control form-control-lg" id="g-auth-form-1" :placeholder="$t('IngredientsPlaceholder')" maxlength="25" v-model="supplementForm.ingredients">
            </div>
            <div class="mb-4 g-form-input">
                <div class="mb-4 g-form-input">
                    <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t(`ShapeLabel`) }}*</label>
                    <select class="form-select form-select-lg" aria-label="Default select example" v-model="supplementForm.serving_type">
                    <option v-for="(opt,key) in shapeOpt" :value="opt.value">{{ opt.label }}</option>
                    </select>
                </div>
            </div>
            <div class="mb-4 g-form-input">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t(`UrlLabel`) }}*</label>
                <input type="text" class="form-control form-control-lg" id="g-auth-form-1" :placeholder="$t('UrlPlaceholder')" v-model="supplementForm.url">
            </div>
            <div class="w-100 mb-4 g-form-input">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t(`FeatureLabel`) }}</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="12" v-model="supplementForm.description" maxlength="1000" :placeholder="$t('DescriptionPlaceholder')"></textarea>
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
                <input type="text" class="form-control " id="g-auth-form-1" :placeholder="$t('BrandPlaceholder')" maxlength="25" v-model="supplementForm.brand">
            </div>
            <div class="mb-4 g-form-input w-75">
                <label for="g-auth-form-2" class="form-label bg-white ms-2 px-2">{{ $t('ProductNameLabel') }}*</label>
                <input type="text" class="form-control " id="g-auth-form-2" :placeholder="$t('ProductNamePlaceholder')" maxlength="25" v-model="supplementForm.name">
            </div>
            <div class="mb-4 g-form-input w-75">
                <div class="mb-4 g-form-input">
                    <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t('KindsLabel') }}*</label>
                    <select class="form-select" aria-label="Default select example" v-model="supplementForm.supplement_type">
                        <option v-for="(opt,key) in typeOpt" :value="opt.value">{{ opt.label }}</option>
                    </select>
                </div>
            </div>
            <!-- <div v-show="!route.params.id" class="mb-4 g-form-input w-75">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t('TasteLabel') }}*</label>
                <input type="text" class="form-control " id="g-auth-form-1" :placeholder="$t('FlavourPlaceholder')" maxlength="25" v-model="supplementForm.flavor" :disabled="route.params.id!==undefined">
            </div> -->
            <div class="mb-4 g-form-input w-75">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t('PriceLabel') }}*</label>
                <input type="number" class="form-control " id="g-auth-form-1" :placeholder="$t('PricePlaceholder')" maxlength="25" v-model="supplementForm.price">
            </div>
            <div class="mb-4 g-form-input w-75">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t('ComponentLabel') }}*</label>
                <input type="text" class="form-control " id="g-auth-form-1" :placeholder="$t('IngredientsPlaceholder')" maxlength="25" v-model="supplementForm.ingredients">
            </div>
            <div class="mb-4 g-form-input w-75">
                <div class="mb-4 g-form-input">
                    <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t('ShapeLabel') }}*</label>
                    <select class="form-select " aria-label="Default select example" v-model="supplementForm.serving_type">
                        <option v-for="(opt,key) in shapeOpt" :value="opt.value">{{ opt.label }}</option>
                    </select>
                </div>
            </div>
            <div class="mb-4 g-form-input w-75">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t('UrlLabel') }}*</label>
                <input type="text" class="form-control " maxlength="25" id="g-auth-form-1" :placeholder="$t('UrlPlaceholder')" v-model="supplementForm.url">
            </div>
            <div class="w-100 mb-4 g-form-input">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">{{ $t('FeatureLabel') }}</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="12" v-model="supplementForm.description" :placeholder="$t('DescriptionPlaceholder')"></textarea>
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
import { supplementType, servingType } from "~/composables/configSupplement";
import { i18n } from "~/plugins/i18n";

export default defineComponent({
    setup(props) {
        const supplementStore = useSupplementStore();
        const { supplementForm } = storeToRefs(supplementStore);
        const generalStore = useGeneralStore();
        const route = useRoute();
        const router = useRouter();
        const shapeOpt = servingType();
        const typeOpt = supplementType();
        
        supplementForm.value.supplement_type="protein";
        supplementForm.value.serving_type="powder";

        const checkUrl = computed(() => {
            const regex = /^((https|ftp|smtp):\/\/)(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
            return regex.test(supplementForm.value.url)
        })

        const submitNow = () => {
            if (supplementForm.value.name && supplementForm.value.supplement_type && supplementForm.value.serving_type && supplementForm.value.price && supplementForm.value.ingredients && supplementForm.value.url && supplementForm.value.brand) {
                if (checkUrl.value) {
                    submitSupplement();
                } else {
                    generalStore.setError(true, i18n.global.t("ProperURL"))
                }
            } else {
                generalStore.setError(true, i18n.global.t("MakeSureAllFieldsHasBeenFilled"))
            }
        };

        const submitSupplement = async () => {
            if (route.params.id) {
                await supplementStore.updateSupplement(supplementForm.value).then((res) => {
                    setTimeout(() => {
                        location.href = `/supplement/review/${route.params.id}`
                    }, 2000)
                });
            } else {
                await supplementStore.createSupplement(supplementForm.value).then((res) => {
                    setTimeout(() => {
                        location.href = `/supplement/review/${res.data.id}`
                    }, 2000)                    

                }) ;
            }
            
        }

        return {
            supplementForm,
            route,
            router,
            shapeOpt,
            typeOpt,
            submitNow
        }
    }
})
</script>
<style>
.g-form-input input,
.g-form-input select,
.g-form-input textarea {
  margin-top: -16px;
  padding: 16px 13px !important;
}

.g-form-input input::placeholder {
  color: #e4e4e4;
}

@media only screen and (max-width: 1009px) {
  .g-form-input input,
  .g-form-input select,
  .g-form-input textarea {
    padding: 8px 10px !important;
  }
}
</style>
