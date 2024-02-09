<template>
    
    <section id="section-hero" class="g-profile-section position-relative">
    </section>
    <GBlogForm></GBlogForm>
</template>
<script lang="ts">
import GBlogForm from './GBlogForm.vue';

export default defineComponent({
    name: 'GProfileSection',
    components: {
        GBlogForm
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
    margin-bottom: 26%;
}
</style>