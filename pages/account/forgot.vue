<template>
    <GSection>
        <div class="is-desktop">
            <div class="d-flex align-items-center justify-content-center">
                <img src="/images/img-forgot.svg" width="20%" />
            </div>
            <div class="container w-25 text-center mx-auto mt-5">
                <div class="h3">{{ $t('ChangePasswordHeader') }}</div>
            </div>
            <div class="container w-25 mx-auto mt-5 mb-4">
                <div class="mb-2 f12"> {{ $t('PleaseEnterYourRegisteredEmail') }} </div>
                <div class="input-group input-group-md bg-white mb-3 w-100 mx-auto border rounded border-secondary">
                    <span class="input-group-text bg-none border-0" id="basic-addon1">
                        <i class="bi bi-envelope"></i>
                    </span>
                    <input v-model="email" type="text" class="form-control border-0" :placeholder="$t('EmailPlaceholder')" aria-label="email" aria-describedby="basic-addon1">
                </div>
                
                <div class="mb-3 mt-5 mx-auto text-center">
                    <button @click="submit" class="btn btn-primary rounded-pill g-shadow px-5 py-2 f14">
                        {{ $t('SendPasswordResetEmail') }}
                        <i class="bi bi-send-fill ms-2"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="is-mobile">
            <div class="d-flex align-items-center justify-content-center">
                <img src="/images/img-forgot.svg" width="50%" />
            </div>
            <div class="container w-100 text-center mx-auto mt-3">
                <div class="h3">{{ $t('ChangePasswordHeader') }}</div>
            </div>
            <div class="container w-75 mx-auto mt-5 mb-4">
                <div class="mb-2 f12">{{ $t('PleaseEnterYourRegisteredEmail') }} </div>
                <div class="input-group input-group-md bg-white mb-3 w-100 mx-auto border rounded border-secondary">
                    <span class="input-group-text bg-none border-0" id="basic-addon1">
                        <i class="bi bi-envelope"></i>
                    </span>
                    <input v-model="email" type="text" class="form-control border-0" :placeholder="$t('EmailPlaceholder')" aria-label="email" aria-describedby="basic-addon1">
                </div>
            </div>
            <div class="w-100 mb-3 mt-4 mx-auto text-center px-4">
                <button class="w-100 btn btn-primary rounded-pill g-shadow py-2 f14 mx-auto">
                    {{ $t('SendPasswordResetEmail') }}
                    <i class="bi bi-send-fill ms-2"></i>
                </button>
            </div>
        </div>
    </GSection>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        var email = ref("")
        var authStore = useAuthStore()

        var submit = () => {
            authStore.sendForgotPasswordRequest(email.value)
        }

        return {
            email,
            submit
        }
        
    },
})
</script>
