<template>
    <ModalsGModal title="Share blog" :submitBtn="false" size="sm" :id="id">
        <div class="text-center my-4">
            <div class="h5 text-secondary">Select your social media</div>
            <div class="mt-3 d-flex align-items-center justify-content-between">
                <a :href="`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${objData.title}`" target="_blank" class="mx-2">
                    <i class="bi bi-facebook h2"></i>
                </a>
                <a :href="`http://twitter.com/share?text=Read ${objData.title}&url=${url}`" target="_blank" class="mx-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/X_icon_2.svg" style="width:30px" />
                </a>
                <a :href="`https://api.whatsapp.com/send?text=${objData.title} - ${url}`" target="_blank" class="mx-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" style="width:30px" />
                </a>
                <a :href="`mailto:?subject=Read ${objData.title}&body=${url}`" target="_blank" class="mx-2">
                    <i class="bi bi-envelope h2"></i>
                </a>
                <a class="mx-2 btn-copy-url" data-clipboard-target="#url">
                    <i class="bi bi-link-45deg h2"></i>
                </a>
            </div>
            <input id="url" class="bg-secondary p-1 w-100 mx-auto text-center f14 text-light mt-4" :value="url" readonly />
        </div>
    </ModalsGModal>
</template>
<script>
import Swal from "sweetalert2";
export default defineComponent({
    name: 'BlogPostShare',
    props: {
        id: "",
        objData: {},
    },
    setup() {
        const blogStore = useBlogStore();
        const blog = storeToRefs(blogStore);
        let url = ref("");
        
        onMounted(() => {
            url.value = window.location.href;
            const cb = new ClipboardJS(".btn-copy-url");
            cb.on('success', function(e) {
                Swal.fire({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    title: "URL Copied!",
                    icon: 'success',
                });
                e.clearSelection();
            });
        });

        return {
            blog,
            url
        }
    }
})
</script>