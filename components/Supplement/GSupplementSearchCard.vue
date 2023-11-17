<template>
    <div class="w-100 rounded-lg py-5 mt-4 bg-white border border-2">
        <!-- SEARCH BOX AND FILTER -->
        <div class="container py-4">
            <div class="input-group mb-3 rounded-lg border border-dark w-75 mx-auto">
                <input type="text" class="form-control form-control-lg border-0" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
                <span class="input-group-text bg-dark text-light px-4 border-0" id="basic-addon2" style="border-radius:0 0 0 30px">
                    <i class="bi bi-sort-up"></i>
                </span>
            </div>
            <div class="gl-search-filter-category d-flex justify-content-between w-50 mx-auto">
                <button class="btn btn-primary-soft">
                    <i class="bi bi-check-lg text-primary"></i>
                    Protein
                </button>
                <button class="btn">
                    EAA
                </button>
                <button class="btn">
                    creatine
                </button>
                <button class="btn btn-primary-soft">
                    <i class="bi bi-check-lg text-primary"></i>
                    glutamine
                </button>
                <button class="btn">
                    HMB
                </button>
            </div>
        </div>

        <!-- SEARCH RESULT -->
        <div class="container mx-auto mt-5">
            <SupplementGSupplementSearchItem></SupplementGSupplementSearchItem>
            <SupplementGSupplementSearchItem></SupplementGSupplementSearchItem>
            <SupplementGSupplementSearchItem></SupplementGSupplementSearchItem>
            <SupplementGSupplementSearchItem></SupplementGSupplementSearchItem>
            <UtilsGLoadMore></UtilsGLoadMore>
        </div>
    </div>
</template>