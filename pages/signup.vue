<template>
    <section class="is-desktop">
        <AuthGAuthHero></AuthGAuthHero>
        <GSection>
            <AuthGAuthSignupSection></AuthGAuthSignupSection>
        </GSection>
    </section>
    <section class="is-mobile">
        <AuthGAuthHero></AuthGAuthHero>
        <AuthGAuthSignupSection class="mt-5"></AuthGAuthSignupSection>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        var authStore = useAuthStore()
        onBeforeRouteLeave(() => {
            authStore.purgeRegistrationForm()
        })
    },
})
</script>
