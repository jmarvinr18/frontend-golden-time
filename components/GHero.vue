<template>
    <section id="section-hero" class="is-desktop w-100 g-hero overflow-hidden d-flex align-items-end justify-content-center border-bottom border-3 border-dark">
        <div class="display-4 fw-bold d-flex align-items-center g-title text-light justify-content-center h-25">
            <div class="g-title-spot position-relative me-3">
                In the end
                <div class="g-title-spot-box position-absolute rounded border border-3 border-light"></div>
            </div>
            <div class="text-border-black fw-bold">What should I drink?</div>
        </div>
    </section>
    <section id="section-hero" class="is-mobile w-100 g-hero overflow-hidden d-flex align-items-end justify-content-center border-bottom border-3 border-dark position-relative">
        <div class="h4 fw-bold d-flex align-items-center g-title text-light h-25 position-absolute bottom-0 w-100">
            <div class="g-title-spot position-relative me-3">
                In the end
                <div class="g-title-spot-box position-absolute rounded border border-3 border-light"></div>
            </div>
            <div class="g-title-display text-border-black fw-bold h1">What should I drink?</div>
        </div>
    </section>
    <div class="is-desktop g-hero-search w-100 d-flex justify-content-center">
        <div class="w-25">
            <div class="input-group mb-3 border border-4 g-shadow rounded-pill overflow-hidden border-dark">
                <input type="text" class="form-control border-0 p-4" :placeholder="$t('FindSupplements')" aria-label="Recipient's username" aria-describedby="basic-addon2">
                <NuxtLink to="/supplement/search" class="input-group-text border-0 bg-white" id="basic-addon2">
                    <i class="bi bi-search me-3"></i>
                </NuxtLink>
            </div>
        </div>
    </div>
    <div class="is-mobile g-hero-search w-100 d-flex justify-content-center">
        <div class="w-100 px-3">
            <div class="input-group mb-3 border border-4 g-shadow rounded-pill overflow-hidden border-dark">
                <input type="text" class="form-control border-0 p-3" :placeholder="$t('FindSupplements')" aria-label="Recipient's username" aria-describedby="basic-addon2">
                <NuxtLink to="/supplement/search" class="input-group-text border-0 bg-white" id="basic-addon2">
                    <i class="bi bi-search me-3"></i>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
<style>
.g-hero {
    height: 70vh;
    border-radius: 0 0 30px 30px;
    background: url('/images/bg-1.png') no-repeat center center;
    background-size: cover;
    box-shadow: 0px 10px 5px -6px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 10px 5px -6px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 10px 5px -6px rgba(0,0,0,0.75);
}

.g-title {
    margin-bottom: 5%;

}

.g-title-spot {
    font-size: 40px;
}

.g-title-spot-box {
    width: 100px;
    height: 48px;
    top: 0px;
    left: 24%;
}

.g-hero-search {
    margin-top:-30px;
}

.g-hero-search input {
    border:1px solid #333000;
}

@media only screen and (max-width:1009px)  {
    .g-hero {
        height: 40vh;
    }

    .g-title-display {
        width: 74%;
    }

    .g-title-spot {
        font-size: 16px;
        width: 24%;
        text-align: center;
    }
    
    .g-title-spot-box {
        width: 40px;
        height: 25px;
        top: -3px;
        left: 35%;
    }

    .text-border-black {
        -webkit-text-stroke-width: 1px;
    }
}
</style>