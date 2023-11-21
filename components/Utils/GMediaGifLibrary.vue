<template>
    <div class="w-100">
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Type a keyword here" aria-label="Type a keyword here" aria-describedby="basic-addon2" v-model="keywordGif" @keyup.enter="searchGif">
            <span class="input-group-text" id="basic-addon2" @click="searchGif">
                <i class="bi bi-search"></i>
            </span>
        </div>

        <div class="d-flex flex-wrap gap position-relative" style="height: 40vh; overflow-y: scroll;">
            <div class="g-preloader-screen w-100 h-100 bg-white position-absolute top-0 start-0"></div>
            <div v-for="(gif,key) in gifList" class="w-50 p-1 tenor-gif-embed cursor-pointer position-relative overflow-hidden" data-width="100%" @click="pickGif(gif.media[0].gif.url)">
                <div v-if="selectedGif==gif.media[0].gif.url" class="d-flex w-100 h-100 position-absolute justify-content-center align-items-center" style="background: rgba(0,0,0,.6);">
                    <i class="bi bi-check h1 text-light"></i>
                </div>
                <img :src="gif.media[0].gif.url" class="w-100" />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import axios from "axios";

export default defineComponent({
    name: 'GifSearch',
    emits: ['on-pick'],
    expose: ['clearSearch'],
    setup(props,{emit}) {
        const gifList = ref([]);

        const selectedGif = ref("");
        const keywordGif = ref("");

        const searchGif = () => {
            axios.get(`https://g.tenor.com/v1/search?q=${keywordGif.value}&key=LIVDSRZULELA&limit=8`).then((res:any) => {
                gifList.value = res.data.results;
            })
        }

        onMounted(() => {
            axios.get("https://g.tenor.com/v1/search?q=excited&key=LIVDSRZULELA&limit=10").then((res:any) => {
                gifList.value = res.data.results;
            });
        })

        const pickGif = (src:any) => {
            selectedGif.value = src;
            emit("on-pick", src);
        }

        const clearSearch = () => {
            keywordGif.value = "";
            axios.get("https://g.tenor.com/v1/search?q=excited&key=LIVDSRZULELA&limit=10").then((res:any) => {
                gifList.value = res.data.results;
            });
        }
        
        return {
            gifList,
            selectedGif,
            keywordGif,
            pickGif,
            searchGif,
            clearSearch
        }
    }
})
</script>