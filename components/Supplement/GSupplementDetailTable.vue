<template>
    <div class="is-desktop">
        <div class="w-100 text-center mb-5">
            <a :href="supplement?.url" class="mx-auto mx-auto btn btn-primary rounded-pill" target="_blank">
                {{ $t('ViewSupplementLabel') }}
            </a>
        </div>
        <div class="supplement-detail-body row f12 lh-lg">
            <div class="col-md-6 col-xs-12 d-flex gap-3 my-2">
                <div class="w-25 me-2 text-muted">
                {{ $t('BrandLabel') }}
                </div>
                <div class="w-50 border-bottom">
                    {{supplement?.brand}}
                </div>
            </div>
            <div class="col-md-6 col-xs-12 d-flex gap-3 my-2">
                <div class="w-25 me-2 text-muted">
                {{ $t('ShapeLabel') }}
                </div>
                <div class="w-50 border-bottom">
                     {{supplement?.serving_type}}
                </div>
            </div>
            <div class="col-md-6 col-xs-12 d-flex gap-3 my-2">
                <div class="w-25 me-2 text-muted">
                {{ $t('ProductNameLabel') }}
                </div>
                <div class="w-50 border-bottom">
                 {{supplement?.name}}
                </div>
            </div>
            <!-- <div class="col-md-6 col-xs-12 d-flex gap-3 my-2">
                <div class="w-25 me-2 text-muted">
                {{ $t('UrlLabel') }}
                </div>
                <div class="w-50 border-bottom">
                   {{supplement?.url}}
                </div>
            </div> -->
            <div class="col-md-6 col-xs-12 d-flex gap-3 my-2">
                <div class="w-25 me-2 text-muted">
                {{ $t('KindsLabel') }}
                </div>
                <div class="w-50 border-bottom">
                {{supplement?.supplement_type}}
                </div>
            </div>

            <div class="col-md-6 col-xs-12 d-flex gap-3 my-2">
                <div class="w-25 me-2 text-muted">
                {{ $t('ComponentLabel') }}
                </div>
                <div class="w-50 border-bottom">
                {{supplement?.ingredients}}
                </div>
            </div>
        </div>
        <div class="supplement-detail-body lh-lg">
            <div class="d-flex gap-3">
                <div class="supplement-detail-label me-2 text-muted">
                {{ $t('FeatureLabel') }}
                </div>
                <div class="supplement-detail-content border-bottom f12 line-break-anywhere">
                    {{supplement?.description}} asdfasdfasdfsefwrwe werwerwerwe
                </div>
            </div>            
        </div>
    </div>
    <div class="is-mobile">
        <div class="w-100 text-center mb-5">
            <a :href="supplement?.url" class="mx-auto w-75 btn-lg mx-auto btn btn-primary rounded-pill" target="_blank">
                {{ $t('ViewSupplementLabel') }}
            </a>
        </div>
        <div class="row f12 lh-lg justify-content-between">
            <div class="col-md-6 col-xs-12 d-flex gap-3">
                <div class="w-25 me-2 text-muted">
                {{ $t('BrandLabel') }}
                </div>
                <div class="w-75 border-bottom">
                    {{supplement?.brand}}
                </div>
            </div>
            <div class="col-md-6 col-xs-12 d-flex gap-3">
                <div class="w-25 me-2 text-muted">
                {{ $t('ShapeLabel') }}
                </div>
                <div class="w-75 border-bottom">
                    {{supplement?.serving_type}}
                </div>
            </div>
            <div class="col-md-6 col-xs-12 d-flex gap-3">
                <div class="w-25 me-2 text-muted">
                {{ $t('ProductNameLabel') }}
                </div>
                <div class="w-75 border-bottom">
                    {{supplement?.name}}
                </div>
            </div>
            <!-- <div class="col-md-6 col-xs-12 d-flex gap-3">
                <div class="w-25 me-2 text-muted">
                {{ $t('UrlLabel') }}
                </div>
                <div class="w-75 border-bottom">
                    {{supplement?.url}}
                </div>
            </div> -->
            <div class="col-md-6 col-xs-12 d-flex gap-3">
                <div class="w-25 me-2 text-muted">
                    {{ $t('KindsLabel') }}
                </div>
                <div class="w-75 border-bottom">
                    {{supplement?.supplement_type}}
                </div>
            </div>
            <div class="col-md-6 col-xs-12 d-flex gap-3 ">
                <div class="w-25 me-2 text-muted f10">
                    {{ $t('FeatureLabel') }}
                </div>
                <div class="w-75 border-bottom line-break-anywhere">
                    {{supplement?.description}}
                </div>
            </div>
            <div class="col-md-6 col-xs-12 d-flex gap-3 ">
                <div class="w-25 me-2 text-muted">
                    {{ $t('ComponentLabel') }}
                </div>
                <div class="w-75 border-bottom">
                    {{supplement?.ingredients}}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        supplement: Object
    }
})
</script>

<style scoped>
.supplement-detail-body{
    padding: 0 3rem;
}
.supplement-detail-body > div > .supplement-detail-label {
    width: 6rem;
}
.supplement-detail-body > div > .supplement-detail-content {
    width: 100%;
}

@media only screen and (max-width: 767px) {
    .supplement-detail-body > div > .supplement-detail-label {
        width: 35%;
    }
}
</style>