<template>
    <GSection>
        <div class="is-desktop">
            <div class="container w-25 text-center mx-auto mt-5">
                <div class="h3">{{ $t('ResetPasswordTitle') }}</div>
            </div>
            <div class="container w-25 mx-auto mt-5 mb-4">
                <div class="mb-2 f12">{{ $t('PleaseEnterNewPassword') }}</div>
                <div class="input-group input-group-md bg-white mb-3 w-100 mx-auto border rounded border-secondary">
                    <span class="input-group-text bg-none border-0" id="basic-addon1">
                        <i class="bi bi-lock"></i>
                    </span>
                    <input v-model="authData.password" type="password" class="form-control border-0" :placeholder="`${$t('NewPassword')}*`" aria-label="Password" aria-describedby="basic-addon1">
                </div>
                <div class="input-group input-group-md bg-white mb-3 w-100 mx-auto border rounded border-secondary">
                    <span class="input-group-text bg-none border-0" id="basic-addon1">
                        <i class="bi bi-lock"></i>
                    </span>
                    <input v-model="authData.password_confirmation" type="password" class="form-control border-0" :placeholder="`${$t('PasswordConfirmationLabel')}*`" aria-label="Password" aria-describedby="basic-addon1">
                </div>
                
                <div class="mb-3 mt-5 mx-auto text-center">
                    <button @click="submit" class="btn btn-primary rounded-pill g-shadow px-5 py-2 f14">
                        {{ $t('SubmitButton') }}
                        <i class="bi bi-send-fill ms-2"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="is-mobile">
            <div class="container w-75 text-center mx-auto mt-5">
                <div class="h3">{{ $t('ResetPasswordTitle') }}</div>
            </div>
            <div class="container w-75 mx-auto mt-5 mb-4">
                <div class="mb-2 f12">{{ $t('PleaseEnterNewPassword') }}</div>
                <div class="input-group input-group-md bg-white mb-3 w-100 mx-auto border rounded border-secondary">
                    <span class="input-group-text bg-none border-0" id="basic-addon1">
                        <i class="bi bi-lock"></i>
                    </span>
                    <input v-model="authData.password" type="password" class="form-control border-0" :placeholder="`${$t('NewPassword')}*`" aria-label="Username" aria-describedby="basic-addon1">
                </div>
                <div class="input-group input-group-md bg-white mb-3 w-100 mx-auto border rounded border-secondary">
                    <span class="input-group-text bg-none border-0" id="basic-addon1">
                        <i class="bi bi-lock"></i>
                    </span>
                    <input v-model="authData.password_confirmation" type="password" class="form-control border-0" :placeholder="`${$t('PasswordConfirmationLabel')}*`" aria-label="Username" aria-describedby="basic-addon1">
                </div>
            </div>
            <div class="w-100 mb-3 mt-5 mx-auto text-center px-3">
                <button @click="submit" class="btn btn-primary rounded-pill g-shadow py-2 f14 w-100">
                    {{ $t('SubmitButton') }}
                    <i class="bi bi-send-fill ms-2"></i>
                </button>
            </div>
        </div>
    </GSection>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
// import { type UserAuth } from '@/stores/GStoreAuth'

type UserAuth = {
    email: any,
    password: String,
    password_confirmation: String,
    token: String | String[]
}
export default defineComponent({
    setup() {
        var authStore = useAuthStore()
        var route = useRoute()
        var authData = ref<UserAuth>({
            password: "",
            password_confirmation: "",
            email: route.query.email,
            token: route.query.token
        });

        console.log(route.query.email)


        var submit = () => {
            console.log(route.query)
            // authStore.resetPassword(authData.value)
        }

        
        return {
            authData,
            submit
        }
    },
})
</script>
