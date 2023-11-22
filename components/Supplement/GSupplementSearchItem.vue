<template>
    <div class="row justify-content-between align-items-center my-5">
        <div class="col-md-7">
            <SupplementGSupplementSearchItemCard></SupplementGSupplementSearchItemCard>
        </div>
        <div class="is-desktop col-md-4 px-4">
            <button class="btn btn-primary btn-sm rounded-pill py-2 f14">
                <i class="bi bi-people me-2"></i>
                My Supplement Registration 146 people
            </button>
            <button class="btn btn-outline-secondary btn-sm rounded-pill py-2 mt-3 f14">
                <i class="bi bi-person-heart me-2"></i>
                300 people who want to drink
            </button>
        </div>
        <GContainerSlider>
            <button class="g-search-item-extra btn btn-primary btn-sm rounded-pill py-2 f12">
                <i class="bi bi-people me-2"></i>
                My Supplement Registration 146 people
            </button>
            <button class="g-search-item-extra btn btn-outline-secondary btn-sm rounded-pill py-2 f12">
                <i class="bi bi-person-heart me-2"></i>
                300 people who want to drink
            </button>
        </GContainerSlider>
    </div>
</template>
<style scoped>
.g-search-item-extra {
    min-width: 280px;
}
</style>