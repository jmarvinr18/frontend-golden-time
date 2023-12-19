<template>
    <GSection>
        <div class="is-desktop">
            <div class="d-flex align-items-center justify-content-center">
                <img src="/images/img-login.svg" class="w-25" />
            </div>
            <div class="container w-25 text-center mx-auto mt-5">
                <div class="btn-group rounded-pill overflow-hidden bg-white border border-primary w-75 " role="group" aria-label="Basic example">
                    <button type="button" class="f12 btn btn-primary fw-bold">{{ $t('Login')}} <i class="bi bi-arrow-right mb-0 ms-1"></i></button>
                    <NuxtLink to="/signup" type="button" class="f12 btn text-primary fw-bold rounded">{{ $t('SignUp') }} <i class="bi bi-plus-lg mb-0 ms-1"></i></NuxtLink>
                </div>
            </div>
            <div class="container w-25 mx-auto mt-5 mb-4">
                <div class="input-group input-group-md bg-white mb-3 w-100 mx-auto border rounded border-secondary">
                    <span class="input-group-text bg-none border-0" id="basic-addon1">
                        <i class="bi bi-envelope"></i>
                    </span>
                    <input type="text" class="form-control border-0" :placeholder="$t('EmailPlaceholder')" aria-label="Username" aria-describedby="basic-addon1">
                </div>
                <div class="input-group input-group-md bg-white mb-3 w-100 mx-auto border rounded border-secondary">
                    <span class="input-group-text bg-none border-0" id="basic-addon1">
                        <i class="bi bi-lock"></i>
                    </span>
                    <input type="password" class="form-control border-0" :placeholder="$t('PasswordPlaceholder')" aria-label="Username" aria-describedby="basic-addon1">
                </div>

                <NuxtLink to="/account/forgot" class="g-login-forgot-link text-decoration-none text-dark mt-3 f14 cursor-pointer w-100 mx-auto">{{ $t('DidYouForgetPassword') }}</NuxtLink>

                <div class="mb-3 w-75 mt-5 mx-auto text-center">
                    <button class="btn btn-primary rounded-pill g-shadow px-5 py-2 f14">{{ $t('Login')}}</button>
                </div>
            </div>
        </div>
        <div class="is-mobile">
            <div class="d-flex align-items-center justify-content-center">
                <img src="/images/img-login.svg" class="w-75" />
            </div>
            <div class="container w-100 text-center mx-auto mt-5">
                <div class="btn-group rounded-pill overflow-hidden bg-white border border-primary w-75 " role="group" aria-label="Basic example">
                    <button type="button" class="f12 btn btn-primary fw-bold">{{ $t('Login')}} <i class="bi bi-arrow-right mb-0 ms-1"></i></button>
                    <NuxtLink to="/signup" type="button" class="f12 btn text-primary fw-bold rounded">{{ $t('Login')}} <i class="bi bi-plus-lg mb-0 ms-1"></i></NuxtLink>
                </div>
            </div>
            <div class="container w-100 mx-auto mt-5 mb-4">
                <div class="input-group input-group-md bg-white mb-3 w-100 mx-auto border rounded border-secondary">
                    <span class="input-group-text bg-none border-0" id="basic-addon1">
                        <i class="bi bi-envelope"></i>
                    </span>
                    <input type="text" class="form-control border-0" :placeholder="$t('EmailPlaceholder')" aria-label="Username" aria-describedby="basic-addon1">
                </div>
                <div class="input-group input-group-md bg-white mb-3 w-100 mx-auto border rounded border-secondary">
                    <span class="input-group-text bg-none border-0" id="basic-addon1">
                        <i class="bi bi-lock"></i>
                    </span>
                    <input type="password" class="form-control border-0" :placeholder="$t('PasswordPlaceholder')" aria-label="Username" aria-describedby="basic-addon1">
                </div>

                <NuxtLink to="/account/forgot" class="g-login-forgot-link text-decoration-none text-dark mt-1 f14 cursor-pointer w-100 mx-auto">{{ $t('DidYouForgetPassword') }}</NuxtLink>

                <div class="mb-3 w-100 mt-5 mx-auto text-center">
                    <button class="w-100 btn btn-primary rounded-pill g-shadow px-5 py-2 f14">{{ $t('Login')}}</button>
                </div>
            </div>
        </div>
    </GSection>
</template>