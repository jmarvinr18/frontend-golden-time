<template>
    <div v-if="isDesktop" class="is-desktop">
        <div class="g-auth-signup-title w-100 mt-5">
            <div class="h3 mt-5">{{ $t('ProfileChange') }}</div>
            <div class="text-danger mt-5">* {{ $t('RequiredInput') }}</div>
        </div>
        <AuthGUserForm :edit="true"></AuthGUserForm>
    </div>
    <div v-if="isMobile" class="is-mobile">
        <div class="g-auth-signup-title w-100 mt-2">
            <div class="h4 mt-2 text-center">{{ $t('ProfileChange') }}</div>
            <div class="text-danger mt-5">* {{ $t('RequiredInput') }}</div>
        </div>
        <AuthGUserForm :edit="true"></AuthGUserForm>
    </div>
</template>

<script lang="ts">

export default defineComponent({
    setup() {

        const isMobile = computed(() => {
            return window.innerWidth <= 1009 ? true : false
        })
        const isDesktop = computed(() => {
            return window.innerWidth > 1009 ? true : false
        } )

        return {
            isMobile,
            isDesktop
        }
    }
})
</script>
<style scoped>
.g-form-input input, .g-form-input select, .g-form-input textarea{
    margin-top:-16px;
    padding: 16px 13px !important;
}

.g-form-input input::placeholder {
    color:#e4e4e4;
}


</style>