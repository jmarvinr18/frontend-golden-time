

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
    min-height: 70vh;
    border-radius: 0 0 30px 30px;
    background: url('/images/bg-2.png') no-repeat center center;
    background-size: cover;
    box-shadow: 0px 10px 5px -6px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 10px 5px -6px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 10px 5px -6px rgba(0,0,0,0.75);
}
</style>