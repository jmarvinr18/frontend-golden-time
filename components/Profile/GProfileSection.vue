

<template>
    <section id="section-hero" class="g-profile-section position-relative">
    </section>
    <GProfileCard :user-data="userData" :mode="mode"></GProfileCard>
</template>
<script lang="ts">
import GProfileCard from './GProfileCard.vue';

export default defineComponent({
    name: 'GProfileSection',
    props: {
        userData: {
            type: Object,
            default: {}
        },
        mode: {
            type: String,
            default: 'me' // me or other
        }
    },
    components: {
        GProfileCard
    }
})
</script>
<style scoped>
.g-profile-section {
    min-height: 600px;
    border-radius: 0 0 30px 30px;
    background: url('/images/bg-2.png');
    background-size: cover;
}

@media only screen and (min-height:800px) {
    .g-profile-section {
        /* padding-top:40rem; */
    }
}
</style>