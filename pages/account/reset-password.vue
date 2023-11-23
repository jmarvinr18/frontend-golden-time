<template>
    <GSection>
        <div class="is-desktop">
            <div class="container w-25 text-center mx-auto mt-5">
                <div class="h3">Password reset</div>
            </div>
            <div class="container w-25 mx-auto mt-5 mb-4">
                <div class="mb-2 f12">Please enter the password to reset.</div>
                <div class="input-group input-group-md bg-white mb-3 w-100 mx-auto border rounded border-secondary">
                    <span class="input-group-text bg-none border-0" id="basic-addon1">
                        <i class="bi bi-lock"></i>
                    </span>
                    <input type="text" class="form-control border-0" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1">
                </div>
                <div class="input-group input-group-md bg-white mb-3 w-100 mx-auto border rounded border-secondary">
                    <span class="input-group-text bg-none border-0" id="basic-addon1">
                        <i class="bi bi-lock"></i>
                    </span>
                    <input type="text" class="form-control border-0" placeholder="Password confirmation" aria-label="Username" aria-describedby="basic-addon1">
                </div>
                
                <div class="mb-3 mt-5 mx-auto text-center">
                    <button class="btn btn-primary rounded-pill g-shadow px-5 py-2 f14">
                        Send password reset email
                        <i class="bi bi-send-fill ms-2"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="is-mobile">
            <div class="container w-75 text-center mx-auto mt-5">
                <div class="h3">Password reset</div>
            </div>
            <div class="container w-75 mx-auto mt-5 mb-4">
                <div class="mb-2 f12">Please enter the password to reset.</div>
                <div class="input-group input-group-md bg-white mb-3 w-100 mx-auto border rounded border-secondary">
                    <span class="input-group-text bg-none border-0" id="basic-addon1">
                        <i class="bi bi-lock"></i>
                    </span>
                    <input type="text" class="form-control border-0" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1">
                </div>
                <div class="input-group input-group-md bg-white mb-3 w-100 mx-auto border rounded border-secondary">
                    <span class="input-group-text bg-none border-0" id="basic-addon1">
                        <i class="bi bi-lock"></i>
                    </span>
                    <input type="text" class="form-control border-0" placeholder="Password confirmation" aria-label="Username" aria-describedby="basic-addon1">
                </div>
            </div>
            <div class="w-100 mb-3 mt-5 mx-auto text-center px-3">
                <button class="btn btn-primary rounded-pill g-shadow py-2 f14 w-100">
                    Send password reset email
                    <i class="bi bi-send-fill ms-2"></i>
                </button>
            </div>
        </div>
    </GSection>
</template>
<script>
</script>