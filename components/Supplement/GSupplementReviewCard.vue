<template>
    <div class="is-desktop g-supplement-review-card d-flex gap-2">
        <div class="g-supplement-review-media">
            <img class="object-fit-cover rounded-circle" src="https://picsum.photos/200/200" width="40" height="40" />
        </div>
        <div class="g-supplement-review bg-white border border-secondary rounded-3 p-3">
            <div class="d-flex justify-content-between text-muted">
                <div class="f10">Proteinlover234</div>
                <div class="f10">
                    2 days ago
                </div>
            </div>
            <div class="mt-2 f14">Very impressive fat burner!</div>
            <div class="mt-2 d-flex gap-2 text-primary">
                <i class="bi bi-arrow-90deg-left"></i>
                <i class="bi bi-heart-fill"></i>
                <i class="bi bi-person-plus"></i>
            </div>
        </div>
    </div>
    <div class="is-mobile g-supplement-review-card">
        <div class="g-supplement-review w-100 d-flex gap-2 bg-white border border-secondary rounded-lg py-1 px-3">
            <div class="g-supplement-review-media">
                <img class="object-fit-cover rounded-circle" src="https://picsum.photos/200/200" width="40" height="40" />
            </div>
            <div class="w-75">
                <div class="d-flex justify-content-between text-muted w-100">
                    <div class="f10">Proteinlover234</div>
                    <div class="f10">
                        2 days ago
                    </div>
                </div>
                <div class="mt-1 f12">Very impressive fat burner!</div>
                <hr class="my-1" />
                <div class="mt-1 d-flex gap-2 text-primary">
                    <i class="bi bi-arrow-90deg-left"></i>
                    <i class="bi bi-heart-fill"></i>
                    <i class="bi bi-person-plus"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.g-supplement-review {
    width: 85%;
}
</style>