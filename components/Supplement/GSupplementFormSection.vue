<template>
    <div class="is-desktop container w-100 text-center position-relative" style="margin-bottom:-120px">
        <button class="btn position-absolute top-0 rounded-pill py-2" style="right:30%">
            <span class="bg-secondary text-center rounded-circle text-black fw-bold me-2 py-1 px-2">
                <i class="bi bi-camera "></i>
            </span>
            add image
        </button>
        <img src="https://www.muscleandfitness.com/wp-content/uploads/2019/01/man-tire-pull-1109.jpg?quality=86&strip=all" height="180" width="180" class="object-fit-cover rounded-circle mx-auto g-shadow" />
    </div>
    <div class="is-mobile container w-100 text-center position-relative" style="margin-bottom:-100px">
        <button class="f12 btn position-absolute top-0 rounded-pill py-2" style="right:10%">
            <span class="bg-secondary text-center rounded-circle text-black fw-bold me-2 py-1 px-2">
                <i class="bi bi-camera "></i>
            </span>
            add image
        </button>
        <img src="https://www.muscleandfitness.com/wp-content/uploads/2019/01/man-tire-pull-1109.jpg?quality=86&strip=all" height="120" width="120" class="object-fit-cover rounded-circle mx-auto g-shadow" />
    </div>
    <div class="w-100 rounded-lg py-5 mt-4 bg-white border border-2">
        <!-- ADD / EDIT FORM -->
        <div class="is-desktop container py-4 w-50 mx-auto">
            <SupplementGSupplementForm></SupplementGSupplementForm>
        </div>
        <div class="is-mobile container py-4 w-100 mx-auto">
            <SupplementGSupplementForm></SupplementGSupplementForm>
        </div>
    </div>
</template>