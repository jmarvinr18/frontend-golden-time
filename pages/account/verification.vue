<template>
    <GSection>
        <div class="is-desktop">
            <div class="d-flex align-items-center justify-content-center">
                <img src="/images/img-login.svg" class="w-25" />
            </div>

            <div class="container w-25 mx-auto mt-5 mb-4">

                <div class="text-center">
                    <h5>{{ $t('VerifyingYourAccount') }}</h5>
                </div>
            </div>
        </div>
        <div class="is-mobile">
            <div class="d-flex align-items-center justify-content-center">
                <img src="/images/img-login.svg" class="w-75" />
            </div>

            <div class="container w-100 mx-auto mt-5 mb-4">
                <div class="text-center">
                    <h5>{{ $t('VerifyingYourAccount') }}</h5>
                </div>
            </div>
        </div>
    </GSection>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        var authStore = useAuthStore()
        var route = useRoute();
        var router = useRouter();
        onMounted(() => {
            if (route.query.signature != undefined && route.query.expires != undefined && route.query.token != undefined && route.query.request_id != undefined) {
                const obj = {
                    signature: route.query.signature,
                    expires: route.query.expires
                }
                authStore.verifyEmail(route.query.signature)
            } else {
                router.push({ name: 'login' });
            }
        })
    },
})
</script>
