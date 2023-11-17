
<template>
    <div class="g-supplement-review-form w-100 position-absolute overflow-visible ">
        <div class="bg-white mx-auto rounded-lg w-75 position-relative g-shadow" style="min-height:500px">
            <div class="w-75 mx-auto pt-4 pb-2">
                <SupplementGSupplementReviewItem class="mb-5"></SupplementGSupplementReviewItem>

                <div class="d-flex justify-content-center gap-4" style="margin-bottom:80px; margin-top:100px">
                    <div class="w-25">
                        <SupplementGSupplementRatingCard></SupplementGSupplementRatingCard>
                    </div>
                    <div class="w-25">
                        <SupplementGSupplementRatingCard type="effect"></SupplementGSupplementRatingCard>
                    </div>
                </div>
            </div>

            <div class="w-75 mx-auto py-2">
                <SupplementGSupplementDetailTable></SupplementGSupplementDetailTable>
            </div>

            <hr class="border-dashed w-75 mx-auto my-5" />

            <div class="w-50 mx-auto">
                <SupplementGSupplementReviewCard></SupplementGSupplementReviewCard>
            </div>

            <div class="mt-5 bg-light py-5 w-100 text-center">
                <div class="mb-3 w-50 mx-auto">
                    <textarea class="g-shadow rounded-3 border-dark form-control" placeholder="write a comment" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <button class="rounded-pill px-4 shadow mt-3 mx-auto btn btn-primary">Post a comment <i class="bi bi-arrow-up fw-bold"></i></button>
            </div>
        </div>
    </div>
</template>
<style scoped>
.form-check-input:checked {
    border-color: var(--bs-success);
    background-color: var(--bs-success);
}
.g-supplement-review-form {
    top: 15%;
}
.g-blog-form-menu {
    /* min-width: unset !important;
    transform: translate3d(-8px, 55.5px, 0) !important;
    opacity:0 !important; */
    list-style: none;
    padding: 0;
    text-align: center;
    margin-bottom: 0;
}

.g-blog-form-menu.show {
    transition: opacity 1s ease-in;
    opacity: 1 !important;
}
</style>