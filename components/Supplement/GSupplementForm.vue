<template>
    <div class="g-auth-signup-title w-100 mt-5">
        <div class="h3 mt-5">Register your supplement</div>
        <div class="text-danger mt-5">* Required input</div>
    </div>
    <div class="g-auth-signup-form mt-5">
        <div class="g-form-group pb-5">
            <div class="mb-4 g-form-input">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">brand*</label>
                <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="sample">
            </div>
            <div class="mb-4 g-form-input">
                <label for="g-auth-form-2" class="form-label bg-white ms-2 px-2">Product name*</label>
                <input type="text" class="form-control form-control-lg" id="g-auth-form-2" placeholder="samples">
            </div>
            <div class="mb-4 g-form-input">
                <div class="mb-4 g-form-input">
                    <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Kinds*</label>
                    <select class="form-select form-select-lg" aria-label="Default select example">
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
                <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="200gr">
            </div>
            <div class="mb-4 g-form-input">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Type of protein</label>
                <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="sample">
            </div>
            <div class="mb-4 g-form-input">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Taste</label>
                <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="sample">
            </div>
            <div class="mb-4 g-form-input">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Price</label>
                <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="sample">
            </div>
            <div class="mb-4 g-form-input">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Component</label>
                <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="sample">
            </div>
            <div class="mb-4 g-form-input">
                <div class="mb-4 g-form-input">
                    <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Shape*</label>
                    <select class="form-select form-select-lg" aria-label="Default select example">
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
                <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="www.sample.com">
            </div>
            <div class="w-100 mb-4 g-form-input">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Product features</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="12"></textarea>
            </div>
        </div>
        <div class="w-100 py-3 d-flex justify-content-center text-center gap-3">
            <button class="btn btn-outline-secondary g-shadow rounded-pill px-4">
                Cancel
            </button>
            <button class="btn btn-primary g-shadow rounded-pill px-4">
                Registration
            </button>
        </div>
    </div>
</template>
<style>
.g-form-input input, .g-form-input select, .g-form-input textarea{
    margin-top:-16px;
    padding: 16px 13px !important;
}

.g-form-input input::placeholder {
    color:#e4e4e4;
}


</style>