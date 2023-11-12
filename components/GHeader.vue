<template>
    <section class="g-header position-fixed top-0 start-0 w-100 py-3" :class="colorChange? 'active':''">
        <div class="container">
            <div class="d-flex align-items-center justify-content-between">
                <div class="left-side d-flex align-items-center">
                    <div class="me-5">
                        <img src="logo.png" width="80" />
                    </div>
                    <div class="border rounded-pill px-3 py-1 text-light"><span class="me-2">+</span>Suplemen registration</div>
                </div>
                <div class="right-side d-flex align-items-center">
                    <button class="btn btn-outline btn-outline-light py-1 rounded-pill px-3 me-3">Login</button>
                    <button class="btn btn-light py-1 rounded-pill px-3 me-2">Signup</button>
                    <div class="dropdown p-0 ">
                        <button class="btn btn-secondary dropdown-toggle p-0 m-0 bg-none border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-list h1 mb-0 text-light fw-bold"></i>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-end f14 lh-lg">
                            <li>
                                <a class="dropdown-item text-end" href="#">
                                    <i class="bi bi-x h4 mt-2 mb-0 me-2"></i>
                                </a>
                            </li>
                            <li><hr class="dropdown-divider"></li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    <i class="bi bi-plus-lg mt-2 mb-0 me-2"></i>Supplement registration
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    <i class="bi bi-search mt-2 mb-0 me-2"></i>Supplement search
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    <i class="bi bi-chat-right-text mb-0 me-2"></i>Supplement review
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    <i class="bi bi-pencil mb-0 me-2"></i>Blog post
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    <i class="bi bi-person mb-0 me-2"></i>Edit profile
                                </a>
                            </li>
                            <li><hr class="dropdown-divider"></li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    <i class="bi bi-gear mb-0 me-2"></i>Settings
                                </a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    <i class="bi bi-box-arrow-right me-2"></i>Log out
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts">
export default defineComponent({
    setup() {
        const colorChange = ref(false);
        const initScroll = () => {
            const windowTop:any = window.top.scrollY;
            const spotlight:any = document.getElementById('section-hero');
            const spotlightTop = spotlight.offsetHeight + spotlight.offsetTop - 500;
            if (windowTop >= spotlightTop)
            {
                colorChange.value = true;
            } else {
                colorChange.value = false;
            }
        }

        onMounted(() => {
            window.addEventListener('scroll', initScroll)
        });

        return {
            colorChange
        }
    }
})
</script>
<style scoped>
.dropdown-toggle::after {
    display: none !important;
}

.g-header {
    z-index: 10000;
    animation: bg-fade-reverse forwards linear .5s 1;
}

.g-header.active {
    animation:forwards linear .5s bg-fade;
}

@keyframes bg-fade {
    0% {
        background-color: rgba(0,0,0,0);
    }
    100% {
        background-color: rgba(0,0,0,1);
    }
}

@keyframes bg-fade-reverse {
    0% {
        background-color: rgba(0,0,0,1);
    }
    100% {
        background-color: rgba(0,0,0,0);
    }
}
</style>