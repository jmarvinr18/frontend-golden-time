<template>
    <footer class="is-desktop bg-dark">
        <div class="container-xs py-5 text-light">
            <div class="logo">
                <NuxtLink to="/">
                    <img src="/images/logo.png" style="width: 120px;" />
                </NuxtLink>
            </div>

            <div class="row lh-lg mt-4">
                <div class="col-md-4 col-xs-12">
                    <h5>{{ $t("Home") }}</h5>
                    <div>
                        <NuxtLink to="/news">{{ $t("MuscleNews") }}</NuxtLink>
                    </div>
                    <div>
                        <NuxtLink to="/event">{{ $t("TournamentInformation") }}</NuxtLink>
                    </div>
                    <div>
                        <NuxtLink to="/supplement/search">{{ $t("FindSupplements") }}</NuxtLink>
                    </div>
                    <div>
                        <NuxtLink to="/blog">{{ $t("Blog") }}</NuxtLink>
                    </div>
                </div>
                <div class="col-md-4 col-xs-12">
                    <h5>{{ $t("Member") }}</h5>
                    <div>
                        <NuxtLink to="/login">
                            {{ $t("Login") }}
                        </NuxtLink>
                    </div>
                    <div>
                        <NuxtLink to="/signup">
                            {{ $t("SignUp") }}
                        </NuxtLink>
                    </div>
                </div>
                <div class="col-md-4 col-xs-12">
                    <h5>{{ $t("FollowUs") }}</h5>
                    <div class="d-flex gap-3 h4">
                        <a href="" class="text-light">
                            <i class="bi bi-envelope"></i>
                        </a>
                        <a href="" class="text-light">
                            <i class="bi bi-twitter"></i>
                        </a>
                        <a href="" class="text-light">
                            <i class="bi bi-instagram"></i>
                        </a>
                        <a href="" class="text-light">
                            <i class="bi bi-facebook"></i>
                        </a>
                    </div>
                </div>
            </div>

            

            <div class="fw-light mt-4">&copy; {{ year }} Golden Time | All rights reserved.</div>
        </div>
    </footer>
    <div class="is-mobile position-fixed w-100 bottom-0 start-0 bg-dark p-0">
        <div class="w-100 py-4 px-4 d-flex h3 mb-0 text-light text-center justify-content-between align-items-center">
            <div v-if="isAuthenticated">
                <NuxtLink to="/" class="text-light">
                    <i class="bi bi-house-fill"></i>
                </NuxtLink>
            </div>
            <div v-if="isAuthenticated">
                <NuxtLink to="/supplement/search" class="text-light">
                    <i class="bi bi-search"></i>
                </NuxtLink>
            </div>
            <div v-if="isAuthenticated">
                <NuxtLink to="/blog/post" class="text-light">
                    <i class="bi bi-pencil"></i>
                </NuxtLink>
            </div>
            <div v-if="isAuthenticated">
                <NuxtLink to="/supplement/add" class="text-light">
                    <i class="bi bi-capsule"></i>
                </NuxtLink>
            </div>
            <div v-if="isAuthenticated">
                <NuxtLink to="/supplement/search" class="text-light">
                    <i class="bi bi-chat-square-text"></i>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        const authStore = useAuthStore();
        const { isAuthenticated } = storeToRefs(authStore)
        const year = new Date().getFullYear();

        return {
            isAuthenticated,
            year
        }
                
    },
})
</script>
<style scoped>
footer a {
    text-decoration: none !important;
    color: white;
}
</style>
