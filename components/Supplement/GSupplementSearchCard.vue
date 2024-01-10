<template>
    <ais-instant-search :on-state-change="onStateChange" index-name="supplements" :search-client="search" class="is-desktop w-100 rounded-lg py-5 mt-4 bg-white border border-2">
        <!-- SEARCH BOX AND FILTER -->
        <ais-configure :attributesToSnippet="['features']"/>

        <div class="search-bar container py-4">
            <div class="input-group mb-3 rounded-lg border border-dark w-75 mx-auto">

                <ais-search-box :class-names="{'ais-SearchBox-input': 'search_box'}" class="form-control form-control-lg border-0" placeholder="Search here" />
        
                <span class="input-group-text bg-dark text-light px-4 border-0" id="basic-addon2" style="border-radius:0 0 0 30px">
                    <i class="bi bi-sort-up"></i>
                </span>
              
            </div>
            <div class="gl-search-filter-category d-flex justify-content-between w-50 mx-auto">
                <UtilsGButtonFilter v-for="(opt,index) in filterOpts" :title="opt.title" :checked="filters.type.includes(opt.value)" @on-click="toggleFilter(opt.value)"></UtilsGButtonFilter>
            </div>

                <div v-if="onActiveSearch" class="search-result">
                    <ais-hits :class-names="{'ais-Hits-item': 'searchHitItems'}">
                        <template v-slot:item="{ item }">
                            <a :href="`/supplement/review/${item.id}`" class="text-decoration-none d-flex gap-2">
                                <div class="text-center"><i class="bi bi-capsule-pill w-50" style="font-size: 30px;"></i></div>
                                <div class="search-hit-item-body">
                                    <h6 class="fw-bold">
                                        <ais-highlight
                                            attribute="name"
                                            :hit="item"
                                            highlighted-tag-name="em"
                                        />                                       
                                       
                                    </h6>

                                    <div class="fs-12">
                                        <ais-snippet
                                            attribute="features"
                                            :hit="item"
                                            highlighted-tag-name="em"
                                        />                                        
                                    </div>                                    
                                </div>
                            </a>

                        </template>
                    </ais-hits>                     
                </div>  
        </div>
        <!-- SEARCH RESULT -->
        <div class="container mx-auto mt-5">
            <SupplementGSupplementSearchItem :supplement="supplement" v-for="(supplement, i) in allSupplements" :key="supplement.id"></SupplementGSupplementSearchItem>
        </div>

     </ais-instant-search>   
     <!-- SEARCH BOX AND FILTER -->

     <ais-instant-search :on-state-change="onStateChange" index-name="supplements" :search-client="search">
        
        <div class="is-mobile container search-bar" style="margin-bottom:-90px">
            <ais-configure :attributesToSnippet="['features']"/>
            <div class="input-group mb-3 rounded-pill overflow-hidden border border-dark w-100 mx-auto gl-shadow" >
                
                <ais-search-box :class-names="{'ais-SearchBox-input': 'search_box'}" class="form-control border-0" placeholder="Search here" />
                <span class="input-group-text bg-dark text-light px-4 border-0" id="basic-addon2" style="border-radius:0 0 0 30px">
                    <i class="bi bi-sort-up"></i>
                </span>
            </div>
            <div class="gl-search-filter-category d-flex justify-content-between w-100 mx-auto px-4">
                <UtilsGButtonFilter v-for="(opt,index) in filterOpts" :title="opt.title" :checked="filters.type.includes(opt.value)" @on-click="toggleFilter(opt.value)"></UtilsGButtonFilter>
            </div>
            <!-- v-if="onActiveSearch" -->
                <div v-if="onActiveSearch" class="search-result-mobile">
                    <ais-hits :class-names="{'ais-Hits-item': 'searchHitItems'}">
                        <template v-slot:item="{ item }">
                            <a :href="`/supplement/review/${item.id}`" class="text-decoration-none d-flex gap-2">
                                <div class="text-center"><i class="bi bi-capsule-pill w-50" style="font-size: 30px;"></i></div>
                                <div class="search-hit-item-body">
                                    <h6 class="fw-bold">
                                        <ais-highlight
                                            attribute="name"
                                            :hit="item"
                                            highlighted-tag-name="em"
                                        >  {{ item.name }}</ais-highlight>                                       
                                       
                                    </h6>
                                    <div class="fs-12">
                                        <ais-snippet
                                            attribute="features"
                                            :hit="item"
                                            highlighted-tag-name="em"
                                        /> 
                                    </div>                                    
                                </div>
                            </a>

                        </template>
                    </ais-hits>                     
                </div>            
        </div>
        <div class="is-mobile w-100 rounded-lg py-5 mt-4 bg-white border border-2">
            <!-- SEARCH RESULT -->
            <div class="container mx-auto mt-5">
                <SupplementGSupplementSearchItem :supplement="supplement" v-for="(supplement, i) in allSupplements" :key="supplement.id"></SupplementGSupplementSearchItem>
            </div>
        </div>
    </ais-instant-search>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { AisInstantSearch, AisSearchBox, AisHits, AisHighlight, AisSnippet, AisConfigure} from 'vue-instantsearch/vue3/es'
import 'instantsearch.css/themes/algolia-min.css';
import 'instantsearch.css/themes/reset.css';


export default defineComponent({
    components:{
        AisInstantSearch,
        AisSearchBox,
        AisHits,
        AisHighlight,
        AisSnippet,
        AisConfigure
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

        const search = useAlgoliaRef()
        onMounted(async() => {
            supplementStore.getAllSupplement()
        })
        var searchBox = ref()

        var onStateChange = ({ uiState, setUiState }: any) => {

            searchBox.value = uiState.supplements.query
            console.log("uiState", uiState)
            console.log("searchBox: ", searchBox.value)

            setUiState(uiState);
        }
        var onActiveSearch = computed(() => {

            return searchBox.value == undefined ? false : true
        })

        return {
            onStateChange,
            search,
            allSupplements,
            filterOpts,
            filters,
            toggleFilter,
            onActiveSearch
        }
    }
})


</script>
<style scoped>
    .search-bar {
        position: relative;
    }
    .search-result {
        position: absolute;
        background-color:  #ffff;
        width: 73.5%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 5%);
        border-radius: 5px;
        box-shadow: 0 2px 5px 0px #e3e5ec;
        padding: 0.5rem;
    }
    .search-result-mobile{
        position: absolute;
        background-color:  #ffff;
        width: 90%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 5%);
        border-radius: 5px;
        box-shadow: 0 2px 5px 0px #e3e5ec;
        padding: 0.5rem;        
    }
    .search-hit-item-body {
        overflow-wrap: anywhere;
    }
</style>