<template>
    <div class="g-notif-item d-flex py-3 px-3 bg-light cursor-pointer">
        <div class="w-75">
            <i class="bi bi-bell"></i>
            <span class="ms-3 ">notification title</span>
        </div>
        <div class="w-25 text-secondary f14 text-end">2 days ago</div>
    </div>
</template>
<style>
.g-notif-item:hover, .g-notif-item.active {
    background: var(--bs-primary-soft) !important;
}
</style>