<template>
    <GSection>
        <div class="d-flex align-items-center justify-content-center">
            <img src="/images/img-forgot.svg" width="20%" />
        </div>
        <div class="container w-25 text-center mx-auto mt-5">
            <div class="h3">Change Password</div>
        </div>
        <div class="container w-25 mx-auto mt-5 mb-4">
            <div class="mb-2 f12">Please enter your registered email address.</div>
            <div class="input-group input-group-md bg-white mb-3 w-100 mx-auto border rounded border-secondary">
                <span class="input-group-text bg-none border-0" id="basic-addon1">
                    <i class="bi bi-envelope"></i>
                </span>
                <input type="text" class="form-control border-0" placeholder="Email address" aria-label="Username" aria-describedby="basic-addon1">
            </div>
            
            <div class="mb-3 mt-5 mx-auto text-center">
                <button class="btn btn-primary rounded-pill g-shadow px-5 py-2 f14">
                    Send password reset email
                    <i class="bi bi-send-fill ms-2"></i>
                </button>
            </div>
        </div>
    </GSection>
</template>
<script>
</script>