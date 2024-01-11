<template>
    <div class="is-desktop">
        <div class="row f14 lh-lg justify-content-between align-items-start">
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
            <div class="col-md-6 col-xs-12 d-flex gap-3 my-2">
                <div class="w-25 me-2 text-muted">
                {{ $t('UrlLabel') }}
                </div>
                <div class="w-50 border-bottom">
                   {{supplement?.url}}
                </div>
            </div>
            <div class="col-md-6 col-xs-12 d-flex gap-3 my-2">
                <div class="w-25 me-2 text-muted">
                {{ $t('KindsLabel') }}
                </div>
                <div class="w-50 border-bottom">
                {{supplement?.supplement_type}}
                </div>
            </div>
            <div class="col-md-6 col-xs-12 d-flex gap-3 my-2 f12">
                <div class="w-25 me-2 text-muted">
                {{ $t('FeatureLabel') }}
                </div>
                <div class="w-50 border-bottom f10 line-break-anywhere">
                    {{supplement?.description}}
                </div>
            </div>
            <div class="col-md-6 col-xs-12 d-flex gap-3 my-2">
                <div class="w-25 me-2 text-muted">
                {{ $t('ComponentLabel') }}
                </div>
                <div class="w-50 border-bottom">
                {{supplement?.component}}
                </div>
            </div>
        </div>
    </div>
    <div class="is-mobile">
        <div class="row f14 lh-lg justify-content-between">
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
            <div class="col-md-6 col-xs-12 d-flex gap-3">
                <div class="w-25 me-2 text-muted">
                {{ $t('UrlLabel') }}
                </div>
                <div class="w-75 border-bottom">
                    {{supplement?.url}}
                </div>
            </div>
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
                    {{supplement?.component}}
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