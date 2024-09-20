<template>
    <div class="g-card-feature border border-secondary d-flex align-items-center g-shadow bg-light rounded-lg my-2 cursor-pointer">
        <div class="d-flex align-items-center w-75">
            <img src="https://global-uploads.webflow.com/5ca5fe687e34be0992df1fbe/62285f83261e4f952e8069d3_women%20only%20gym.jpg"  style="height: 80px;"   class="object-fit-cover" />
            <div class="g-card-info p-2 w-50 ms-2">
                <div class="g-card-name fw-bold">Elish Howard</div>
                <div class="g-card-specialty f12">Strength Focus</div>
            </div>
        </div>
        <div class="g-card-action w-25 text-end">
            <div class="h2 mb-0 pe-3">
                <i class="bi bi-chevron-right"></i>
            </div>
        </div>
    </div>
</template>
<style scoped>
@media only screen and (max-width:450px)  {
    .g-card-feature {
        min-width: 300px !important;
        max-width: 300px !important;
    }
}
</style>