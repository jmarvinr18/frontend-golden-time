<template>
    <ModalsGModal title="Login" :submitBtn="true" size="sm">
        <div class="">
            <div class="h4">You need to login to proceed this activity.</div>
            <div class="login-modal-form">
                <div class="input-group input-group-md bg-white mb-3 w-100 mx-auto border rounded border-secondary">
                    <span class="input-group-text bg-none border-0" id="basic-addon1">
                        <i class="bi bi-envelope"></i>
                    </span>
                    <input v-model="authData.email" type="text" class="form-control border-0" :placeholder="$t('EmailPlaceholder')" aria-label="email" aria-describedby="basic-addon1">
                </div>
                <div class="input-group input-group-md bg-white mb-3 w-100 mx-auto border rounded border-secondary">
                    <span class="input-group-text bg-none border-0" id="basic-addon1">
                        <i class="bi bi-lock"></i>
                    </span>
                    <input v-model="authData.password" :type="viewPassword? 'text':'password'" class="form-control border-0" :placeholder="$t('PasswordPlaceholder')" aria-label="password" aria-describedby="basic-addon1">
                    <span class="input-group-text bg-none border-0" @click="viewPassword=!viewPassword">
                        <i v-if="!viewPassword" class="bi bi-eye"></i>
                        <i v-if="viewPassword" class="bi bi-eye-slash"></i>
                    </span>
                </div>
            </div>
        </div>
    </ModalsGModal>
</template>
<script lang="ts">
export default defineComponent({
    setup() {
        const authData = ref({
            email:"",
            password: ""
        });
        const viewPassword = ref(false);

        return {
            authData,
            viewPassword
        }
    }
})
</script>