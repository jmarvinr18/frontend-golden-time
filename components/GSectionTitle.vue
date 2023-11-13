<template>
    <div class="d-flex w-100 h4 my-3">
        <i class="bi me-2" :class="icon"></i>
        {{ title }}
        <button v-for="(btn,id) in buttons" class="ms-2 btn rounded-pill f14" :class="'btn-'+btn.variant">
            <i class="bi me-1" :class="btn.icon"></i>
            {{ btn.label }}
        </button>
    </div>
</template>
<script lang="ts">
export default defineComponent({
    props: {
        title: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: false,
            default: 'bi-eye'
        },
        buttons: {
            default: [
                {   
                    label:'Click me',
                    icon: 'bi-plus-lg',
                    action: '',
                    variant:'primary'
                }
            ]
        }
    }
})
</script>