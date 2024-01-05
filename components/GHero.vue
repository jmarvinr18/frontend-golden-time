<template>
    <section id="section-hero" class="is-desktop w-100 g-hero overflow-hidden d-flex align-items-end justify-content-center border-bottom border-3 border-dark">
        <div class="display-4 fw-bold d-flex align-items-center g-title text-light justify-content-center h-25">
            <div class="g-title-spot position-relative me-3 rounded border border-3 border-light p-1">
                {{ $t('InTheEnd') }}
                <div class="g-title-spot-box position-absolute "></div>
            </div>
            <div class="text-border-black fw-bolder"> <strong>{{ $t('WhatShouldIDrink') }}</strong></div>
        </div>
    </section>
    <section id="section-hero" class="is-mobile w-100 g-hero overflow-hidden d-flex align-items-end justify-content-center border-bottom border-3 border-dark position-relative">
        <div class="h4 fw-bold d-flex align-items-center g-title text-light h-25 position-absolute bottom-0 w-100">
            <div class="g-title-spot position-relative me-3 rounded border border-3 border-light">
                 {{ $t('InTheEnd') }}
                <div class="g-title-spot-box position-absolute"></div>
            </div>
            <div class="g-title-display text-border-black fw-bold h1">{{ $t('WhatShouldIDrink') }}</div>
        </div>
    </section>

    <ais-instant-search :on-state-change="onStateChange" index-name="supplements" :search-client="search" class="is-desktop g-hero-search w-100 d-flex justify-content-center" >
        <ais-configure :attributesToSnippet="['features']"/>
        <div class="w-50 search-bar">
            <div class="input-group mb-3 border border-4 g-shadow rounded-pill overflow-hidden border-dark">
                <ais-search-box :class-names="{'ais-SearchBox-input': 'search_box'}" class="form-control border-0 p-4" :placeholder="$t('FindSupplements')" />
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
    </ais-instant-search>    
    
    <ais-instant-search :on-state-change="onStateChange" index-name="supplements" :search-client="search" class="is-mobile g-hero-search w-100 d-flex justify-content-center" >
        <ais-configure :attributesToSnippet="['features']"/>
        <div class="w-100 px-3 search-bar">
            <div class="input-group mb-3 border border-4 g-shadow rounded-pill overflow-hidden border-dark">
                <ais-search-box :class-names="{'ais-SearchBox-input': 'search_box'}" class="form-control border-0 p-4" :placeholder="$t('FindSupplements')" />
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

                        
                        {{ item.length }}
                        
                        </template>


                    </ais-hits>                     
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
        const search = useAlgoliaRef()

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
            search,
            searchBox,
            onStateChange,
            onActiveSearch
        }
    },
})
</script>

<style>
.no-result{
    height: 100px;
    top: 80%;
}
.search-bar {
        position: relative;
    }
    .search-result {
        position: absolute;
        background-color:  #ffff;
        width: 95%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 15%);
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
.g-hero {
    height: 70vh;
    border-radius: 0 0 30px 30px;
    background: url('/images/bg-1.png') no-repeat center center;
    background-size: cover;
    box-shadow: 0px 10px 5px -6px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 10px 5px -6px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 10px 5px -6px rgba(0,0,0,0.75);
}

.g-title {
    margin-bottom: 5%;

}

.g-title-spot {
    font-size: 40px;
}

.g-title-spot-box {
    width: 100px;
    height: 48px;
    top: 0px;
    left: 24%;
}

.g-hero-search {
    margin-top:-30px;
}

.g-hero-search input {
    border:1px solid #333000;
}

@media only screen and (max-width:1009px)  {
    .g-hero {
        height: 40vh;
    }

    .g-title-display {
        width: 74%;
    }

    .g-title-spot {
        font-size: 16px;
        width: 24%;
        text-align: center;
    }
    
    .g-title-spot-box {
        width: 40px;
        height: 25px;
        top: -3px;
        left: 35%;
    }

    .text-border-black {
        -webkit-text-stroke-width: 1px;
    }
}
</style>