<template>
    <div class="g-review-item d-flex">
        <div class="g-review-item-media w-25 px-4">
            <img class="g-review-item-image g-shadow w-100 rounded object-fit-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOiR4THbHbNY2RPFSvwxCPKTyqk-8KFufsVQ&usqp=CAU" height="190" />
        </div>
        <div class="g-review-item-description w-75">
            <div class="g-review-item-head d-flex justify-content-between">
                <div class="h4">HMB EX supplement</div>
                <button class="btn bg-none btn-sm rounded-pill w-50 f12">
                    <i class="bi bi-pencil me-2"></i>
                    Information correction
                </button>
            </div>
            <hr />
            <div class="g-review-item-head d-flex justify-content-between position-relative flex-wrap">
                <div class="w-50 f14 lh-lg">
                    Taste: No flavor and easy to drink<br>
                    Reference price: 1,860 yen
                </div>
                <div class="w-50">
                    <button class="btn btn-primary btn-sm rounded-pill py-2 f14">
                        <i class="bi bi-people me-2"></i>
                        My Supplement Registration 146 people
                    </button>
                    <button class="btn btn-outline-secondary btn-sm rounded-pill py-2 mt-3 f14">
                        <i class="bi bi-person-heart me-2"></i>
                        300 people who want to drink
                    </button>
                </div>
                <div class="g-review-item-owner w-100 d-flex align-items-center position-absolute">
                    <img class="rounded-circle me-3" src="https://picsum.photos/seed/picsum/300/300" height="25" />
                    <div class="f12">Fernando Ilgai</div>
                </div>
            </div>
            
        </div>
    </div>
</template>
<style scoped>
.g-review-item-owner  {
    bottom:-22px
}
</style>