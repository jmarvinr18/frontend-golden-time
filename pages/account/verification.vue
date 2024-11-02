<template>
    <GSection>
        <div class="is-desktop">
            <div class="d-flex align-items-center justify-content-center">
                <img src="/images/img-login.svg" style="width: 10rem;" />
            </div>

            <div class="container auth-container mx-auto mt-5 mb-4">

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
            if (route.query.signature && route.query.expires && route.query.token) {
                const userId = route.query.user_id;
                const obj = `signature=${route.query.signature}&expires=${route.query.expires}`
                authStore.verifyEmail(obj, route.query.token, userId).then(() => {
                    
                });
            } else {
                router.push({ name: 'login' });
            }
        })
    },
})
</script>
