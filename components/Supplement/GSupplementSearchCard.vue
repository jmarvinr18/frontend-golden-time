<template>
    <div class="is-desktop w-100 rounded-lg py-5 mt-4 bg-white border border-2">
        <!-- SEARCH BOX AND FILTER -->
        <div class="container py-4">
            <div class="input-group mb-3 rounded-lg border border-dark w-75 mx-auto">
                <input type="text" class="form-control form-control-lg border-0" placeholder="Type a keyword..." aria-label="Recipient's username" aria-describedby="basic-addon2">
                <span class="input-group-text bg-dark text-light px-4 border-0" id="basic-addon2" style="border-radius:0 0 0 30px">
                    <i class="bi bi-sort-up"></i>
                </span>
            </div>
            <div class="gl-search-filter-category d-flex justify-content-between w-50 mx-auto">
                <button class="btn btn-primary-soft">
                    <i class="bi bi-check-lg text-primary"></i>
                    Protein
                </button>
                <button class="btn">
                    EAA
                </button>
                <button class="btn">
                    creatine
                </button>
                <button class="btn btn-primary-soft">
                    <i class="bi bi-check-lg text-primary"></i>
                    glutamine
                </button>
                <button class="btn">
                    HMB
                </button>
            </div>
        </div>

        <!-- SEARCH RESULT -->
        <div class="container mx-auto mt-5">
            <!-- {{ allSupplements }} -->
            <SupplementGSupplementSearchItem :supplement="supplement" v-for="(supplement, i) in allSupplements" :key="supplement.id"></SupplementGSupplementSearchItem>
            <!-- <SupplementGSupplementSearchItem></SupplementGSupplementSearchItem>
            <SupplementGSupplementSearchItem></SupplementGSupplementSearchItem>
            <SupplementGSupplementSearchItem></SupplementGSupplementSearchItem> -->
            <UtilsGLoadMore></UtilsGLoadMore>
        </div>
    </div>
     <!-- SEARCH BOX AND FILTER -->
     <div class="is-mobile container" style="margin-bottom:-90px">
        <div class="input-group mb-3 rounded-pill overflow-hidden border border-dark w-100 mx-auto gl-shadow" >
            <input type="text" class="form-control border-0" placeholder="Type a keyword..." aria-label="Recipient's username" aria-describedby="basic-addon2">
            <span class="input-group-text bg-dark text-light px-4 border-0" id="basic-addon2" style="border-radius:0 0 0 30px">
                <i class="bi bi-sort-up"></i>
            </span>
        </div>
        <div class="gl-search-filter-category d-flex justify-content-between w-100 mx-auto px-4">
            <button class="btn btn-primary-soft f10">
                <i class="bi bi-check-lg text-primary"></i>
                Protein
            </button>
            <button class="btn f10">
                EAA
            </button>
            <button class="btn f10">
                creatine
            </button>
            <button class="btn btn-primary-soft f10">
                <i class="bi bi-check-lg text-primary"></i>
                glutamine
            </button>
            <button class="btn f10">
                HMB
            </button>
        </div>
    </div>
    <div class="is-mobile w-100 rounded-lg py-5 mt-4 bg-white border border-2">
        <!-- SEARCH RESULT -->
        <div class="container mx-auto mt-5">
            <SupplementGSupplementSearchItem></SupplementGSupplementSearchItem>
            <SupplementGSupplementSearchItem></SupplementGSupplementSearchItem>
            <SupplementGSupplementSearchItem></SupplementGSupplementSearchItem>
            <SupplementGSupplementSearchItem></SupplementGSupplementSearchItem>
            <UtilsGLoadMore></UtilsGLoadMore>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
        var supplementStore = useSupplementStore()
        var { allSupplements } = storeToRefs(supplementStore)

        onMounted(() => {
            supplementStore.getAllSupplement()
        })

        return {
            allSupplements
        }
    },
})
</script>
