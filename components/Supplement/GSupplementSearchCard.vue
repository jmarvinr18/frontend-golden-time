<template>
    <ais-instant-search index-name="supplements" :search-client="search" class="is-desktop w-100 rounded-lg py-5 mt-4 bg-white border border-2" placeholder="Type a keyword...">
                    
               
        <!-- SEARCH BOX AND FILTER -->
        <div class="container py-4">
            <div class="input-group mb-3 rounded-lg border border-dark w-75 mx-auto">


                <ais-search-box :class-names="{'ais-SearchBox-input': 'search_box'}" class="form-control form-control-lg border-0" placeholder="Search here" />
        
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
            <ais-hits :class-names="{'ais-Hits-item': 'searchHitItems'}" :escapeHTML="true">
                <template v-slot:item="{ item }">
                    <SupplementGSupplementSearchItem :supplement="item" ></SupplementGSupplementSearchItem>
                </template>

            </ais-hits> 
        </div>

     </ais-instant-search>   
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
import { AisInstantSearch, AisSearchBox, AisHits } from 'vue-instantsearch/vue3/es'
// import 'instantsearch.css/themes/algolia-min.css';
import 'instantsearch.css/themes/reset.css';


export default defineComponent({
    components:{
        AisInstantSearch,
        AisSearchBox,
        AisHits
    },
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
        var supplementStore = usePublicContentStore()
        var { allSupplements } = storeToRefs(supplementStore)

        const toggleFilter = (val:any) => {
            if (filters.value.type.includes(val)) {
                const getIdx = filters.value.type.indexOf(val);
                filters.value.type.splice(getIdx, 1);
            } else {
                filters.value.type.push(val);
            }
        }

        const search = useAlgoliaRef() // pass your index as param
        onMounted(async() => {
            supplementStore.getAllSupplement()
            // await search({ query: 'macronutrients' })
        })

        return {
            search,
            allSupplements,
            filterOpts,
            filters,
            toggleFilter
        }
    }
})


</script>
