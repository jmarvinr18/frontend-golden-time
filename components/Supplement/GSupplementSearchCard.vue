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
                <UtilsGButtonFilter v-for="(opt,index) in filterOpts" :title="opt.title" :checked="filters.type.includes(opt.value)" @on-click="toggleFilter(opt.value)"></UtilsGButtonFilter>
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
            <UtilsGButtonFilter v-for="(opt,index) in filterOpts" :title="opt.title" :checked="filters.type.includes(opt.value)" @on-click="toggleFilter(opt.value)"></UtilsGButtonFilter>
        </div>
    </div>
    <div class="is-mobile w-100 rounded-lg py-5 mt-4 bg-white border border-2">
        <!-- SEARCH RESULT -->
        <div class="container mx-auto mt-5">
            <SupplementGSupplementSearchItem :supplement="supplement" v-for="(supplement, i) in allSupplements" :key="supplement.id"></SupplementGSupplementSearchItem>
            <UtilsGLoadMore></UtilsGLoadMore>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        const filterOpts = ref([
            {
                title:"Protein",
                value:"protein"
            },
            {
                title:"EAA",
                value:"eaa"
            },
            {
                title:"Creatine",
                value:"creatine"
            },
            {
                title:"Glutamine",
                value:"glutamine"
            },
            {
                title:"HMB",
                value:"hmb"
            }
        ])

        const filters = ref({
            type: [],
        })
        var supplementStore = useSupplementStore()
        var { allSupplements } = storeToRefs(supplementStore)

        const toggleFilter = (val:any) => {
            if (filters.value.type.includes(val)) {
                const getIdx = filters.value.type.indexOf(val);
                filters.value.type.splice(getIdx, 1);
            } else {
                filters.value.type.push(val);
            }
        }

        onMounted(() => {
            supplementStore.getAllSupplement()
        })

        return {
            allSupplements,
            filterOpts,
            filters,
            toggleFilter
        }
    },
})
</script>
