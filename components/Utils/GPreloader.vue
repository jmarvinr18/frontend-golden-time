<template>
    <div class="g-preloader position-fixed top-10 w-100">
        <div class="g-preloader-container h-100 top-0 d-flex align-items-center justify-content-center">
            <div class="g-preloader-content bg-white px-3 py-4 rounded-5 w-25 text-center">
                <img class="is-desktop w-50" src="/images/loading.gif" />
                <img class="is-mobile w-100" src="/images/loading.gif" />
                <div class="is-desktop fw-bold h4">{{ $t('HangOn') }}</div>
                <!-- <div class="mt-3">Lorem ipsum dolor, sit amet consectetur </div> -->
            </div>
            <div class="g-preloader-bg bg-black w-100 h-100 position-absolute opacity-50"></div>
        </div>
    </div>
</template>
<style scoped>
.g-preloader {
    z-index: 9999000;
    height: 100vh;
    top:0;
    left: 0;
}

.g-preloader-content {
    z-index: 11000;
    max-width: 250px;
}

.g-preloader-content img {
    margin: 0 auto;
}

@media only screen and (max-width: 1009px){
    .g-preloader-content {
        z-index: 11000;
        max-width: 50%;
        width: 37% !important
    }

}
</style>