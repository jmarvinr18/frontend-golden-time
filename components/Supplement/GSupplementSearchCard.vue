<template>
    <ais-instant-search :future="{preserveSharedStateOnUnmount: true}" :insights="true" :on-state-change="onStateChange" index-name="supplements" :search-client="search" class="is-desktop w-100 rounded-lg py-5 mt-4 bg-white border border-2">
        <!-- SEARCH BOX AND FILTER -->
        <ais-configure :attributesToSnippet="['description']"/>
        
        <div>
            <div v-if="!hasSearchFromHome" class="d-flex gap-5 mx-auto mb-3 search-bar">   
                <div class="f20">
                    <span>{{ searchData.data.length }} </span>
                    <span> {{ $t("SearchResultFor") }} </span>
                    <span>{{ searchFromHome }}...</span>
                </div>
                <button @click="searchAgain" class="btn btn-primary btn-sm rounded-pill py-2 px-4 f12">
                    <i class="bi bi-search"></i>
                    {{ $t("SearchAgain") }}
                </button>
                
            </div>
            <!-- <hr class="dropdown-divider"> -->
            
            <div v-if="hasSearchFromHome" class="d-flex mx-auto search-bar">
                
                <div  class="input-group w-100 mx-auto border border-dark overflow-hidden p-0" style="border-radius: 20px 0 0 20px;">

                    <!-- <input id="tes" type="text" v-model="searchKeyword" class="form-control form-control-lg border-0 rounded-0" placeholder="Search here" /> -->
                    <ais-search-box :class-names="{'ais-SearchBox-input': 'search_box'}" class="form-control form-control-lg border-0" placeholder="Search here" />                
      
                </div>
                    <!-- SEARCH BOX AND FILTER -->
                <div class="dropdown">
                    <button class="btn btn-secondary bg-dark dropdown-toggle px-3 py-1 border-2 border-dark h-100" type="button" data-bs-toggle="dropdown" aria-expanded="false" style="border-radius:0 0 20px 0">
                        <i class="bi bi-sort-up h2"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><h6 class="dropdown-header">{{ $t("SortLabel") }}</h6></li>
                        <li><span @click="sortAction('lowest_price')" class="dropdown-item">{{ $t("SortLowestPrice") }}</span></li>
                        <li><span @click="sortAction('most_registration')" class="dropdown-item">{{ $t("SortMostRegistration") }}</span></li>
                        <li><span @click="sortAction('effect_rate')" class="dropdown-item">{{ $t("SortHighEffectiveRate") }}</span></li>
                        <li><span @click="sortAction('taste_rate')" class="dropdown-item">{{ $t("SortHighEasyToConsume") }}</span></li>
                    </ul>
                </div>
                <div v-if="onActiveSearch" class="search-result border-dark mx-auto">
                    <ais-state-results>
                    <template v-slot="{ state: { query }, results: { hits } }">
                        <ais-hits v-if="hits.length > 0" :class-names="{'ais-Hits-item': 'searchHitItems'}">
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
                                                attribute="description"
                                                :hit="item"
                                                highlighted-tag-name="em"
                                            />                                        
                                        </div>                                    
                                    </div>
                                </a>

                            </template>
                        </ais-hits>                              
                        <div class="p-2 text-center searchHitItems" v-else>
                            {{ $t('NoResultsFound', { query: query })  }}.
                            <ais-clear-refinements :excluded-attributes="[]">
                                <template v-slot:resetLabel>
                                    <span class="text-danger fs-8">{{ $t('ClearRefinements') }}</span>
                                </template>
                            </ais-clear-refinements>
                        </div>
                    </template>
                    </ais-state-results>                                      
                </div>                    
            </div>
            <div v-if="hasSearchFromHome" class="gl-search-filter-category d-flex justify-content-between mx-auto mt-3">
                <UtilsGButtonFilter v-for="(opt,index) in filterOpts" :title="opt.title" :checked="filters.type.includes(opt.value)" @on-click="toggleFilter(opt.value)"></UtilsGButtonFilter>
            </div>
        </div>
        <!-- SEARCH RESULT -->
        <div class="container mx-auto supplement-search-items">
            <SupplementGSupplementSearchItem :supplement="supplement" v-for="(supplement, i) in searchData.data" :key="i"></SupplementGSupplementSearchItem>

        </div>
        <div class="container pagination-wrapper">
            <div class="d-flex justify-content-between align-items-center mt-5">
                <div class="w-25">
                    <select id="pager" class="form-select" aria-label="Default select example" v-model="searchData.meta.per_page" @change="searchNow">
                        <option value="">Supplements Per Page</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>

                    <!-- {{ searchData.meta.links }} -->
                </div>
                <nav aria-label="Page navigation example">
                    <ul class="pagination mb-0">
                        <li v-for="(link, idx) in searchData.meta.links" class="page-item" :class="{ 'active':link.active, 'disabled':idx==0 && !checkPrev || idx==(searchData.meta.links.length-1) && !checkNext }"><a class="page-link"  v-html="link.label" @click="searchNow(link.label)"></a></li>
                    </ul>
                </nav>
            </div>            
        </div>        

    </ais-instant-search>   
    
    <ais-instant-search class="is-mobile" :future="{preserveSharedStateOnUnmount: true}" :insights="true" :on-state-change="onStateChange" index-name="supplements" :search-client="search">
        <ais-configure :attributesToSnippet="['description']"/>
        <div class="container" >      
            <div v-if="!hasSearchFromHome" class="d-flex gap-5 w-100 mx-auto mb-3 search-bar">   
                <div class="f20">
                    <span>{{ searchData.data.length }} </span>
                    <span> {{ $t("SearchResultFor") }} </span>
                    <span>{{ searchFromHome }}...</span>
                </div>
                <button @click="searchAgain" class="btn btn-primary btn-sm" >
                    <i class="bi bi-search"></i>
                    {{ $t("SearchAgain") }}
                </button>
                
            </div>            
            <div v-if="hasSearchFromHome" class="d-flex w-100 mx-auto search-bar mb-3">
                <div class="input-group w-100 mx-auto border border-dark overflow-hidden p-0" style="border-radius: 20px 0 0 20px;">
                    <ais-search-box v-model="searchKeyword" :class-names="{'ais-SearchBox-input': 'search_box'}" class="form-control form-control-lg border-0 rounded-0 f16" placeholder="Search here" />
                </div>
                    <!-- SEARCH BOX AND FILTER -->
                <div class="dropdown">
                    <button class="btn btn-secondary bg-dark dropdown-toggle px-3 py-1 border-3 border-dark h-100" type="button" data-bs-toggle="dropdown" aria-expanded="false" style="border-radius:0 0 20px 0">
                        <i class="bi bi-sort-up h2"></i>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><h6 class="dropdown-header">{{ $t("SortLabel") }}</h6></li>
                        <li><span @click="sortAction('lowest_price')" class="dropdown-item">{{ $t("SortLowestPrice") }}</span></li>
                        <li><span @click="sortAction('most_registration')" class="dropdown-item">{{ $t("SortMostRegistration") }}</span></li>
                        <li><span @click="sortAction('effect_rate')" class="dropdown-item">{{ $t("SortHighEffectiveRate") }}</span></li>
                        <li><span @click="sortAction('taste_rate')" class="dropdown-item">{{ $t("SortHighEasyToConsume") }}</span></li>
                    </ul>
                </div>
                <div v-if="onActiveSearch" class="search-result-mobile">
                    <ais-state-results>
                        <template v-slot="{ state: { query }, results: { hits } }">
                        <ais-hits v-if="hits.length > 0" :class-names="{'ais-Hits-item': 'searchHitItems'}">
                            <template v-slot:item="{ item }">
                                <a :href="`/supplement/review/${item.id}`" class="text-decoration-none d-flex gap-2">
                                    <div class="text-center"><i class="bi bi-capsule-pill w-50" style="font-size: 30px;"></i></div>
                                    <div class="search-hit-item-body">
                                        <h6 class="fw-bold">
                                            <ais-highlight
                                                attribute="name"
                                                :hit="item"
                                                highlighted-tag-name="em"/>                               
                                        
                                        </h6>
                                        <div class="fs-12">
                                            <ais-snippet
                                                attribute="description"
                                                :hit="item"
                                                highlighted-tag-name="em"
                                            /> 
                                        </div>                                    
                                    </div>
                                </a>

                            </template>
                        </ais-hits>  
                        <div class="p-2 text-center searchHitItems" v-else>
                                {{ $t('NoResultsFound', { query: query })  }}.
                                <ais-clear-refinements :excluded-attributes="[]">
                                    <template v-slot:resetLabel>
                                        <span class="text-danger fs-8">{{ $t('ClearRefinements') }}</span>
                                    </template>
                                </ais-clear-refinements>
                            </div>                                  
                    </template>                     
                    </ais-state-results>
                </div>                   
            </div>
            <div v-if="hasSearchFromHome" class="gl-search-filter-category d-flex justify-content-between w-100 mx-auto px-4">
                <UtilsGButtonFilter v-for="(opt,index) in filterOpts" :title="opt.title" :checked="filters.type.includes(opt.value)" @on-click="toggleFilter(opt.value)"></UtilsGButtonFilter>
            </div>
                        
        </div>
        <div class="w-100 rounded-lg mt-4 pb-5 px-2 bg-white border border-2">
            <!-- SEARCH RESULTs -->
            <div class="container mx-auto mt-3">
                <SupplementGSupplementSearchItem :supplement="supplement" v-for="(supplement, i) in searchData.data" :key="supplement.id"></SupplementGSupplementSearchItem>
                <div class="d-flex gap-3 flex-wrap justify-content-between align-items-center mt-5">
                <div class="w-25">
                    <select id="pager" class="form-select" aria-label="Default select example" v-model="searchData.meta.per_page" @change="searchNow">
                        <option value="">Supplements Per Page</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>

                    <!-- {{ searchData.meta.links }} -->
                </div>
                <nav aria-label="Page navigation example">
                    <ul class="pagination mb-0">
                        <li v-for="(link, idx) in searchData.meta.links" class="page-item" :class="{ 'active':link.active, 'disabled':idx==0 && !checkPrev || idx==(searchData.meta.links.length-1) && !checkNext }"><a class="page-link"  v-html="link.label" @click="searchNow(link.label)"></a></li>
                    </ul>
                </nav>
            </div>            
            
            </div>
        </div>
    </ais-instant-search>


   
</template>

<script lang="ts">
// import { defineComponent, computed } from 'vue'
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
        const router = useRouter();

        const filters = ref({
            type: [],
        })
        var authStore = useAuthStore()
        var { isAuthenticated } = storeToRefs(authStore)
        var supplementStore = isAuthenticated.value ? useSupplementStore() : usePublicContentStore()
        var { allSupplements } = storeToRefs(supplementStore);
        var sorter = ref("")
        var searchFromHome = ref("")
        var q = ref("?")
        var searchData = ref({
            data: [],
            meta:{
                links:[],
                per_page: 10,
                current_page: 1,
                last_page: 1
            }
        });
        var checkPrev = computed(() => {
            return searchData.value.meta.current_page > 1;
        });
        var checkNext = computed(() => {
            return searchData.value.meta.current_page < searchData.value.meta.last_page;
        });

        const toggleFilter = (val:any) => {
            if (filters.value.type.includes(val)) {
                const getIdx = filters.value.type.indexOf(val);
                filters.value.type.splice(getIdx, 1);
            } else {
                filters.value.type.push(val);
            }

            searchNow();
        }

        const search = useAlgoliaRef();

        const searchNow = (page:any = searchData.value.meta.current_page) => {
            let q = "?";
            q = q + `page_size=${searchData.value.meta.per_page}&`;

            if (page.length > 0) {
                if (page.toLowerCase().includes('next') || page.toLowerCase().includes('previous')) {
                    if (page.toLowerCase().includes('next')) {
                        q = q + `page=${searchData.value.meta.current_page + 1}&`;
                    } else {
                        q = q + `page=${searchData.value.meta.current_page - 1}&`;
                    }
                } else {
                    q = q + `page=${page}&`;
                }
            };

            if (route.query.kw) {
                q = `?keyword=${route.query.kw}&`;
            }

            if (filters.value.type.length > 0) {
                q = q + `supplement_type=${filters.value.type}&`;
            }

            if (sorter.value != null) {
                q = q + 'sort=' + sorter.value;
            }

            
            useSupplementStore().searchSupplement(q).then((res:any) => {
                
                searchData.value.data = res.data;
                searchData.value.meta = res.meta;

                console.log("WITH PARAMS: ", searchData.value.data)
            })
        }

        const initSearch = (page:any = "") => {
           
            q.value = `${q.value}page_size=${searchData.value.meta.per_page}&`;

            

            if (page) {
                q.value = q.value + `page=${page}&`;
            };
            if (route.query.k != undefined) {
                q.value =  `${q.value}keyword=${route.query.k}&`;
            }
            
            if (route.query.supplement_type) {
                const supp_type = route.query.supplement_type.split(",");
                supp_type.map((item:any) => {
                    toggleFilter(item);
                })
            }

            q.value = `${q.value}supplement_type=${filters.value.type}`;

            useSupplementStore().searchSupplement(q.value).then((res:any) => {
                searchData.value.data = res.data;
                searchData.value.meta = res.meta;

                console.log(searchData.value.data)
            })
        }

        var hasSearchFromHome = computed(() => {
            return route.query.k == undefined
        })


        onMounted(async() => {
            console.log("SEARCH: ", route.query.k == undefined)
            searchFromHome.value = route.query.k
            initSearch();
        })

        var searchBox = ref();

        var onStateChange = ({ uiState, setUiState }: any) => {
            searchBox.value = uiState.supplements.query
            setUiState(uiState);
        }
        var onActiveSearch = computed(() => {
            return searchBox.value == undefined ? false : true
        })

        var sortAction = (val: string) => {
            sorter.value = val
            searchNow(searchData.value.meta.current_page, sorter.value);
        }
        var searchAgain = () => {
            q.value = `?page_size=${searchData.value.meta.per_page}&`
            router.replace({ query: undefined })

            useSupplementStore().searchSupplement(q.value).then((res:any) => {
                searchData.value.data = res.data;
                searchData.value.meta = res.meta;

                console.log(searchData.value.data)
            })
        }

        return {
            onStateChange,
            searchNow,
            checkNext,
            checkPrev,
            search,
            searchData,
            allSupplements,
            filterOpts,
            filters,
            toggleFilter,
            onActiveSearch,
            searchKeyword,
            sortAction,
            hasSearchFromHome,
            searchAgain,
            searchFromHome
        }
    },
})


</script>
<style scoped>
    .search-bar {
        width: 60rem;
        position: relative;
    }
    .gl-search-filter-category{
        width: 35rem;
    }    
    .search-result {
        position: absolute;
        background-color:  #ffff;
        width: 100%;
        top: 100%;
        left: -50%;
        transform: translate(50%, 0%);
        border-radius: 5px;
        box-shadow: 0 2px 5px 0px #e3e5ec;
        padding: 0.5rem;
    }
    .search-result-mobile{
        position: absolute;
        background-color:  #ffff;
        width: 100%;
        top: 100%;
        left: -50%;
        transform: translate(50%, 0%);
        border-radius: 5px;
        box-shadow: 0 2px 5px 0px #e3e5ec;
        padding: 0.5rem;       
    }
    .search-hit-item-body {
        overflow-wrap: anywhere;
    }
    .dropdown-divider {
        border: 0.1rem solid #0202021f;
        margin-bottom: 16px;
    }

    .active>.page-link, .page-link.active{
        background-color: #6739ff;
        border-color: #6739ff;
        color: #ffffff;
    }
    .page-link{
        color: #6739ff;
    }

    .pagination-wrapper{
        max-width: 968px;
    }

@media only screen and (max-width:1050px)  {
    .gl-search-filter-category{
        width: 40rem;
    }
    .supplement-search-items {
        width: 40rem;
        display: flex;
        flex-direction: column;
    }
    .search-bar {
        width: 40rem;
    }
    .pagination-wrapper{
        max-width: 670px;
    }    
}    

@media only screen and (max-width:700px)  {

    .supplement-search-items {
        width: 30rem;
        display: flex;
        flex-direction: column;
    }
    .search-bar {
        width: 30rem;
    }
    .gl-search-filter-category{
        width: 30rem;
    }

    .is-mobile > div > .gl-search-filter-category {
        /* overflow: scroll; */
    }
}  
</style>