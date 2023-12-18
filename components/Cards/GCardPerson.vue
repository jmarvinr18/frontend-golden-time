<template>
    <div class="is-desktop w-100 d-flex py-4 align-items-center border-bottom">
        <img src="https://picsum.photos/seed/picsum/300/300" width="120" height="120" class=" rounded-circle" />
        <div class="w-75 ms-4">
            <div class="g-person-name h5 mb-0">Kazuki Myogi</div>
            <div class="g-person-short mt-3 w-75">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to
            </div>
        </div>
        <div class="g-person-action text-end w-25 pull-right">
            <button class="btn btn-primary rounded-pill">
                <i class="bi bi-check-lg me-2"></i>
                Following
            </button>
        </div>
    </div>
    <div class="is-mobile">
        <div class="w-100 d-flex py-4 align-items-center border-bottom">
            <img src="https://picsum.photos/seed/picsum/300/300" width="40" height="40" class=" rounded-circle" />
            <div class="ms-2 w-50">
                <div class="g-person-name mb-0">Kazuki Myogi</div>
                <div class="g-person-short mt-1 w-100 f10">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to
                </div>
            </div>
            <div class="g-person-action text-end pull-right">
                <button class="btn btn-primary btn-lg py-3 f12 rounded-pill">
                    <i class="bi bi-check-lg me-1"></i>
                    Following
                </button>
            </div>
        </div>
    </div>
</template>
<style scoped>
@media only screen and (max-width:1009px)  {
    .g-person-action {
        width: 30%;
    }

    .g-person-action .btn {
        width: 127%;
    }

}
</style>