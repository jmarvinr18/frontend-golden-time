<template>
    <section id="section-hero" class="is-desktop w-100 g-auth-hero overflow-hidden d-flex align-items-center border-bottom border-3 border-dark">
        <div class="display-4 fw-bold d-flex align-items-center g-title text-light h-25 ms-5 flex-wrap">
            <div class="g-title-spot position-relative me-3">
                {{ $t('InTheEnd') }}
                <div class="g-title-spot-box position-absolute rounded border border-3 border-light"></div>
            </div>
            <div class="text-border-black fw-bold">{{ $t('WhatShouldIDrink') }}</div>
            <div class="text-border-black fw-bold h1 w-100">
                {{ $t('CheckItNow') }}
            </div>
            <div class="mt-4 btn-group rounded-pill overflow-hidden bg-white border border-primary w-25 ms-1" role="group" aria-label="Basic example">
                <NuxtLink to="/login" type="button" class="f12 btn text-primary fw-bold">{{ $t('Login') }} <i class="bi bi-arrow-right mb-0 ms-1"></i></NuxtLink>
                <button type="button" class="f12 btn btn-primary fw-bold">{{ $t('SignUp') }} <i class="bi bi-plus-lg mb-0 ms-1"></i></button>
            </div>
        </div>
    </section>
    <section id="section-hero" class="is-mobile w-100 g-auth-hero overflow-hidden d-flex align-items-center border-bottom border-3 border-dark">
        <div class="fw-bold d-flex align-items-center g-title text-light h-25 px-3 flex-wrap">
            <div class="g-title-spot position-relative me-3">
                {{ $t('InTheEnd') }}
                <div class="g-title-spot-box position-absolute rounded border border-3 border-light"></div>
            </div>
            <div class="text-border-black fw-bold h4">{{ $t('WhatShouldIDrink') }}</div>
            <div class="text-border-black fw-bold h6 w-100">
                {{ $t('CheckItNow') }}
            </div>
            <div class="mt-3 btn-group rounded-pill overflow-hidden bg-white border border-primary w-100 ms-1" role="group" aria-label="Basic example">
                <NuxtLink to="/login" type="button" class="f12 btn text-primary fw-bold">Login <i class="bi bi-arrow-right mb-0 ms-1"></i></NuxtLink>
                <button type="button" class="f12 btn btn-primary fw-bold">Sign Up <i class="bi bi-plus-lg mb-0 ms-1"></i></button>
            </div>
        </div>
    </section>
</template>
<style scope>
.g-auth-hero {
    height: 70vh;
    border-radius: 0 0 30px 30px;
    background: url('/images/bg-3.jpeg') no-repeat center center;
    background-size: cover;
    box-shadow: 0px 10px 5px -6px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 10px 5px -6px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 10px 5px -6px rgba(0,0,0,0.75);
}

.g-title {
    margin-bottom: 1%;

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

@media only screen and (max-width:450px)  {
    .g-auth-hero {
        height: 40vh;
        background-size: 210%;
    }
}
</style>