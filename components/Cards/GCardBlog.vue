<template>
    <div class="bg-white w-100 rounded-lg g-shadow">
        <div class="g-card-head d-flex gap-4 p-3 border border-bottom border-2 border-light">
            <div class="g-card-image rounded">
                <img src="https://img.freepik.com/free-photo/tall-stylish-shirtless-bodybuilder-dressed-sports-shorts-doing-exercise-bicep-with-barbell-standing-studio-isolated-dark-background_613910-18341.jpg" width="80" height="80" class="object-fit-cover rounded-lg" />
            </div>
            <div class="g-card-info">
                <div class="h5">Today's training</div>
                <div class="d-flex align-items-center">
                    <div class="text-muted f10">30 seconds ago</div>
                    <NuxtLink to="/users/detail" class="text-decoration-none text-dark">
                    <div class="d-flex ms-3 align-items-center">
                        <img src="https://i.pinimg.com/236x/8d/b7/e3/8db7e3866bc0821fd92ffa5edece1c3f.jpg" width="20" height="20" class="object-fit-cover rounded-pill" />
                        <div class="ms-2">Alex Martin</div>
                    </div>
                    </NuxtLink>
                </div>
                <div class="d-flex mt-1">
                    <i class="bi bi-chat-square-text me-2 text-primary"></i>
                    <i class="bi bi-heart-fill text-primary"></i>

                </div>
            </div>
        </div>
        <div class="g-card-body p-3 position-relative">
            <div>I want to go to gym tomorrow!</div>
            <NuxtLink to="/blog/read">
                <div class="g-card-more w-100 text-light position-absolute bottom-2 d-flex justify-content-center">
                    <div class="bg-dark text-center rounded-pill py-3 w-25">
                        read more <i class="ms-2 bi bi-chevron-down rounded-pill"></i>
                    </div>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>
<style>
.g-card-body {
    height: 40vh;
}

.g-card-more {
    bottom: 25px;
    font-size: 12px;
}
</style>