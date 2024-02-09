<template>
    <GSection>
        <div class="is-desktop">
            <div class="d-flex align-items-center justify-content-center">
                <img src="/images/img-login.svg" class="w-25" />
            </div>

            <div class="container w-25 mx-auto mt-5 mb-4">

                <div class="text-center">
                    <h5>{{ $t('YourAccountHasBeenVerified') }}</h5>
                </div>

                <div class="mb-3 w-75 mt-5 mx-auto text-center">
                    <nuxt-link to="/login" class="btn btn-primary rounded-pill g-shadow px-5 py-2 f14">{{ $t('Login') }}</nuxt-link>
                </div>
            </div>
        </div>
        <div class="is-mobile">
            <div class="d-flex align-items-center justify-content-center">
                <img src="/images/img-login.svg" class="w-75" />
            </div>

            <div class="container w-100 mx-auto mt-5 mb-4">
                <div class="text-center">
                    <h5>{{ $t('YourAccountHasBeenVerified') }}</h5>
                </div>
                <div class="mb-3 w-100 mt-5 mx-auto text-center">
                    <nuxt-link to="/login" class="btn btn-primary rounded-pill g-shadow px-5 py-2 f14">{{ $t('Login') }}</nuxt-link>
                </div>
            </div>
        </div>
    </GSection>
</template>
