<template>
    <div class="w-100 py-2 d-flex align-items-center">
        <div class="g-author-img me-3">
            <NuxtLink to="/users/detail" class="text-decoration-none">
                <img src="https://picsum.photos/seed/picsum/300/300" width="80" height="80" class="rounded-circle" />
            </NuxtLink>
        </div>
        <div class="g-author-name me-3">
            <NuxtLink to="/users/detail" class="text-decoration-none text-dark">
                Kazuya Mishima
            </NuxtLink>
            </div>
        <div class="g-person-action text-end pull-right">
            <button class="btn btn-primary rounded-pill px-3">
                <i class="bi bi-person-plus me-2"></i>
                Follow
            </button>
        </div>
    </div>
</template>