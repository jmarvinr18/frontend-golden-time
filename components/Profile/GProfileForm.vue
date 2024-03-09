<template>
    <div class="is-desktop">
        <div class="g-auth-signup-title w-100 mt-5">
            <div class="h3 mt-5">{{ $t('ProfileChange') }}</div>
            <div class="text-danger mt-5">* {{ $t('RequiredInput') }}</div>
        </div>
        <AuthGUserForm :edit="true"></AuthGUserForm>
    </div>
    <div class="is-mobile">
        <div class="g-auth-signup-title w-100 mt-2">
            <div class="h4 mt-2 text-center">{{ $t('ProfileChange') }}</div>
            <div class="text-danger mt-5">* {{ $t('RequiredInput') }}</div>
        </div>
        <AuthGUserForm :edit="true"></AuthGUserForm>
    </div>
</template>
<style scoped>
.g-form-input input, .g-form-input select, .g-form-input textarea{
    margin-top:-16px;
    padding: 16px 13px !important;
}

.g-form-input input::placeholder {
    color:#e4e4e4;
}


</style>