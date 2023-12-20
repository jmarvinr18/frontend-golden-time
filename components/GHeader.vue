<template>
    <section class="is-desktop g-header position-fixed top-0 start-0 w-100 py-3" :class="fixedMode==false? colorChange? 'active':'':'bg-dark'">
        <div class="container">
            <div class="d-flex align-items-center justify-content-between">
                <div class="left-side d-flex align-items-center">
                    <div class="me-5">
                        <NuxtLink to="/">
                            <img src="/logo.png" width="80" />
                        </NuxtLink>
                    </div>
                    <NuxtLink to="/supplement/add" class="text-decoration-none">
                        <div class="border rounded-pill px-3 py-1 text-light"><span class="me-2">+</span>{{ $t('SupplementRegistration') }}</div>
                    </NuxtLink>
                </div>
                <div class="right-side d-flex align-items-center">
                    <NuxtLink to="/login">
                        <button class="btn btn-outline btn-outline-light py-1 rounded-pill px-3 me-3 f14">{{ $t('Login') }}</button>
                    </NuxtLink>
                    <NuxtLink to="/signup">
                        <button class="btn btn-light py-1 rounded-pill px-3 me-2 f14">
                            <i class="bi bi-plus-lg"></i>
                            {{ $t('SignUp') }}
                        </button>
                    </NuxtLink>
                    <div v-if="authStore.token" class="dropdown p-0 ">
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
                                <NuxtLink to="/supplement/add" class="dropdown-item text-decoration-none">
                                    <i class="bi bi-plus-lg mt-2 mb-0 me-2"></i>{{ $t('SupplementRegistration') }}
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/supplement/search">
                                    <i class="bi bi-search mt-2 mb-0 me-2"></i>{{ $t('SupplementSearch') }}
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/supplement/review/post">
                                    <i class="bi bi-chat-right-text mb-0 me-2"></i>{{ $t('SupplementReview') }}
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/blog/post">
                                    <i class="bi bi-pencil mb-0 me-2"></i>{{ $t('BlogPost') }}
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/me/edit-profile">
                                    <i class="bi bi-person mb-0 me-2"></i>{{ $t('EditProfile') }}
                                </NuxtLink>
                            </li>
                            <li><hr class="dropdown-divider"></li>
                            <li>
                                <a class="dropdown-item" href="#">
                                    <i class="bi bi-gear mb-0 me-2"></i>{{ $t('Settings') }}
                                </a>
                            </li>
                            <li>
                                <NuxtLink class="dropdown-item" to="/login">
                                    <i class="bi bi-box-arrow-right me-2"></i>{{ $t('Logout') }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div v-else class="d-flex align-items-center">
                        <NuxtLink to="/login">
                            <button class="btn btn-outline btn-outline-light py-1 rounded-pill px-3 me-3 f14">Login</button>
                        </NuxtLink>
                        <NuxtLink to="/signup">
                            <button class="btn btn-light py-1 rounded-pill px-3 me-2 f14">
                                <i class="bi bi-plus-lg"></i>
                                Signup
                            </button>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="is-mobile g-header position-fixed top-0 start-0 w-100" :class="fixedMode==false? colorChange? 'active':'':'bg-dark'">
        <div class="d-flex align-items-center justify-content-between px-3 py-3">
            <div class="left-side d-flex align-items-center" style="width: 15%;">
                <div class="me-5">
                    <NuxtLink to="/">
                        <img src="/logo.png" width="60" />
                    </NuxtLink>
                </div>
            </div>
            <div class="middle-side w-50 text-center">
                <div class="input-group w-100 rounded-pill overflow-hidden bg-white">
                    <span class="bg-none input-group-text border-0" id="basic-addon1">
                        <i class="bi bi-search"></i>
                    </span>
                    <input type="text" class="form-control border-0 py-1" placeholder="" aria-label="Username" aria-describedby="basic-addon1">
                </div>
            </div>
            <div v-if="authStore.token" class="right-side d-flex align-items-center gap-3">
                <div>
                    <i class="bi bi-bell text-light h2 mb-0"></i>
                </div>
                <div>
                    <NuxtLink to="/me/profile">
                        <i class="bi bi-person text-light h2 mb-0"></i>
                    </NuxtLink>
                </div>
            </div>
            <div v-else class="right-side d-flex align-items-center gap-3">
                <div>
                    <NuxtLink to="/login">
                        <i class="bi bi-box-arrow-in-right text-light h2 mb-0"></i>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts">
export default defineComponent({
    async setup() {
        const colorChange = ref(false);
        const fixedMode = ref(false);
        const route:any = useRoute();
        const authStore = useAuthStore();
        

        const checkScroll = () => {
            const spotlight = document.getElementById('section-hero');
            if (spotlight) {
                fixedMode.value = false;
            } else {
                fixedMode.value = true;
            }
        }
        
        const initScroll = () => {
            const windowTop:any = window?.top?.scrollY;
            const spotlight:any = document.getElementById('section-hero');
            const spotlightTop = spotlight?.offsetHeight + spotlight?.offsetTop - 500;
            if (windowTop >= spotlightTop)
            {
                colorChange.value = true;
            } else {
                colorChange.value = false;
            }
        }

        watch(() => route.fullPath, () => {
            // console.log('change url')
            checkScroll();
        });

        onMounted(() => {
            checkScroll()
            window.addEventListener('scroll', initScroll);
        });

        return {
            fixedMode,
            authStore,
            colorChange
        }
    }
})
</script>
<style scoped>

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