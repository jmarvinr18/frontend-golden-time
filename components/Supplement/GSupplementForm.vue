<template>
    <div class="is-desktop g-auth-signup-title w-100 mt-5">
        <div class="h3 mt-5">Register your supplement</div>
        <div class="text-danger mt-5">* Required input</div>
    </div>
    <div class="is-mobile g-auth-signup-title w-100 mt-5">
        <div class="h5 mt-5 text-center">Register your supplement</div>
        <div class="text-danger mt-5 f14">* Required input</div>
    </div>
    <div class="is-mobile g-auth-signup-form mt-2">
        <div class="g-form-group pb-2">
            <div class="mb-4 g-form-input w-75">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">brand*</label>
                <input type="text" class="form-control " id="g-auth-form-1" placeholder="sample">
            </div>
            <div class="mb-4 g-form-input w-75">
                <label for="g-auth-form-2" class="form-label bg-white ms-2 px-2">Product name*</label>
                <input type="text" class="form-control " id="g-auth-form-2" placeholder="samples">
            </div>
            <div class="mb-4 g-form-input w-75">
                <div class="mb-4 g-form-input">
                    <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Kinds*</label>
                    <select class="form-select" aria-label="Default select example">
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
                <input type="text" class="form-control " id="g-auth-form-1" placeholder="200gr">
            </div>
            <div class="mb-4 g-form-input w-75">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Type of protein</label>
                <input type="text" class="form-control " id="g-auth-form-1" placeholder="sample">
            </div>
            <div class="mb-4 g-form-input w-75">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Taste</label>
                <input type="text" class="form-control " id="g-auth-form-1" placeholder="sample">
            </div>
            <div class="mb-4 g-form-input w-75">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Price</label>
                <input type="text" class="form-control " id="g-auth-form-1" placeholder="sample">
            </div>
            <div class="mb-4 g-form-input w-75">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Component</label>
                <input type="text" class="form-control " id="g-auth-form-1" placeholder="sample">
            </div>
            <div class="mb-4 g-form-input w-75">
                <div class="mb-4 g-form-input">
                    <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Shape*</label>
                    <select class="form-select " aria-label="Default select example">
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
                <input type="text" class="form-control " id="g-auth-form-1" placeholder="www.sample.com">
            </div>
            <div class="w-100 mb-4 g-form-input">
                <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Product features</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="12"></textarea>
            </div>
        </div>
        <div class="w-100 py-3 d-flex justify-content-center text-center gap-2">
            <button class="w-50 btn btn-outline-secondary py-2 rounded-pill px-4">
                Cancel
            </button>
            <button class="w-50 btn btn-primary rounded-pill py-2 px-4">
                Registration
            </button>
        </div>
    </div>
    <div class="is-desktop g-auth-signup-form mt-2">
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

@media only screen and (max-width:1009px)  {
    .g-form-input input, .g-form-input select, .g-form-input textarea{
        padding: 8px 10px !important;
    }
}
</style>