<template>
    <ais-instant-search :on-state-change="onStateChange" index-name="supplements" :search-client="search" class="is-desktop w-100 rounded-lg py-5 mt-4 bg-white border border-2">
        <!-- SEARCH BOX AND FILTER -->
        <ais-configure :attributesToSnippet="['description']"/>

        <div class="search-bar container py-4">
            <div class="d-flex w-75 mx-auto ">
                <div class="input-group mb-3 w-100 mx-auto border border-dark overflow-hidden p-0" style="border-radius: 20px 0 0 20px;">

                    <input type="text" v-model="searchKeyword" class="form-control form-control-lg border-0 rounded-0" placeholder="Search here" />

                    <!-- <span class="input-group-text bg-dark text-light px-4 border-0" id="basic-addon2" style="border-radius:0 0 0 30px">
                        <i class="bi bi-sort-up"></i>
                    </span> -->
                </div>
                    <!-- SEARCH BOX AND FILTER -->
                <div class="dropdown">
                    <button class="btn btn-secondary bg-dark dropdown-toggle px-3 py-1 border-2 border-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false" style="border-radius:0 0 20px 0">
                        <i class="bi bi-sort-up h2"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><h6 class="dropdown-header">Sort Supplements</h6></li>
                        <li><a class="dropdown-item" href="#">Lowest Price</a></li>
                        <li><a class="dropdown-item" href="#">Most Registration</a></li>
                        <li><a class="dropdown-item" href="#">High effective Rate</a></li>
                        <li><a class="dropdown-item" href="#">High easy to consume Rate</a></li>
                    </ul>
                </div>
            </div>
            <div class="gl-search-filter-category d-flex justify-content-between w-50 mx-auto">
                <UtilsGButtonFilter v-for="(opt,index) in filterOpts" :title="opt.title" :checked="filters.type.includes(opt.value)" @on-click="toggleFilter(opt.value)"></UtilsGButtonFilter>
            </div>
        </div>
        <!-- SEARCH RESULT -->
        <div class="container mx-auto mt-5">
            <SupplementGSupplementSearchItem :supplement="supplement" v-for="(supplement, i) in allSupplements" :key="supplement.id"></SupplementGSupplementSearchItem>
        </div>

    </ais-instant-search>   
    
    <ais-instant-search :on-state-change="onStateChange" index-name="supplements" :search-client="search">
        
        <div class="is-mobile container search-bar" style="margin-bottom:-90px">
            <ais-configure :attributesToSnippet="['description']"/>
            <div class="d-flex w-100 mx-auto ">
                <div class="input-group mb-3 w-100 mx-auto border border-dark overflow-hidden p-0" style="border-radius: 20px 0 0 20px;">

                    <input type="text" v-model="searchKeyword" class="form-control form-control-lg border-0 rounded-0 f16" placeholder="Search here" />

                    <span class="input-group-text px-4 border-0" id="basic-addon2" >
                        <i class="bi bi-search"></i>
                    </span>
                </div>
                    <!-- SEARCH BOX AND FILTER -->
                <div class="dropdown">
                    <button class="btn btn-secondary bg-dark dropdown-toggle px-3 py-1 border-3 border-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false" style="border-radius:0 0 20px 0">
                        <i class="bi bi-sort-up h2"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><h6 class="dropdown-header">Sort Supplements</h6></li>
                        <li><a class="dropdown-item" href="#">Lowest Price</a></li>
                        <li><a class="dropdown-item" href="#">Most Registration</a></li>
                        <li><a class="dropdown-item" href="#">High effective Rate</a></li>
                        <li><a class="dropdown-item" href="#">High easy to consume Rate</a></li>
                    </ul>
                </div>
            </div>
            <div class="gl-search-filter-category d-flex justify-content-between w-100 mx-auto px-4">
                <UtilsGButtonFilter v-for="(opt,index) in filterOpts" :title="opt.title" :checked="filters.type.includes(opt.value)" @on-click="toggleFilter(opt.value)"></UtilsGButtonFilter>
            </div>         
        </div>
        <div class="is-mobile w-100 rounded-lg py-5 mt-4 bg-white border border-2">
            <!-- SEARCH RESULTs -->
            <div class="container mx-auto mt-5">
                <SupplementGSupplementSearchItem :supplement="supplement" v-for="(supplement, i) in allSupplements" :key="supplement.id"></SupplementGSupplementSearchItem>
            </div>
        </div>
    </ais-instant-search>

   
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { 
    AisInstantSearch, 
    AisSearchBox, 
    AisHits, 
    AisHighlight, 
    AisSnippet, 
    AisConfigure, 
    AisStateResults,
    AisClearRefinements
} from 'vue-instantsearch/vue3/es'
import 'instantsearch.css/themes/algolia-min.css';
import 'instantsearch.css/themes/reset.css';


export default defineComponent({
    components:{
        AisInstantSearch,
        AisSearchBox,
        AisHits,
        AisHighlight,
        AisSnippet,
        AisConfigure,
        AisStateResults,
        AisClearRefinements
    },
    setup() {
        var searchKeyword =ref<any>("")
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

        var route = useRoute()

        const filters = ref({
            type: [],
        })
        var authStore = useAuthStore()
        var { isAuthenticated } = storeToRefs(authStore)
        var supplementStore = isAuthenticated.value ? useSupplementStore() : usePublicContentStore()
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
            searchKeyword.value = route.query.kw
            supplementStore.getAllSupplement()
        })

        var searchBox = ref()

        var onStateChange = ({ uiState, setUiState }: any) => {
            searchBox.value = uiState.supplements.query
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
            onActiveSearch,
            searchKeyword
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