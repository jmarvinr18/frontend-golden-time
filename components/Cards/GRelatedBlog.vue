<template>
  <div>
    <GSectionTitle class="mt-lg py-3" :title="sectionHeader" :icon-hide="true"></GSectionTitle>
            <div class="is-desktop w-100">
                <div class="more-content-card-wrapper">
                    <div class="more-content-card-item" v-for="(b,s) in blogs">
                    <a class="text-decoration-none" :href="`/${getLink}/read/${b.id}`">
                        <div class="card">
                            <img :src="b?.feature_image" class="card-img-top" />
                            <div class="card-body">
                                <h5 class="card-title"> {{ useTruncateText(b?.title,30) }} </h5>

                                <div class="d-flex gap-3">
                                    <p class="f12"> <i class="bi bi-clock f12"></i> {{ $formatTime(b?.created_at) }}</p>
                                    <img :src="b.author_image != null ? b.author_image :'/images/no-avatar.jpeg'" style="height: 20px; width: 20px;" class="rounded-circle"/>
                                    <p class="f12"> {{ useTruncateText(b?.author, 10) }}</p>
                                </div>
                                <p class="card-text">{{ useTruncateText(b?.short_description,50) }}</p>
                            </div>
                        </div>                    
                    
                    </a>
                </div>
                </div>

            </div>    
  </div>
</template>

<script lang="ts">

export default defineComponent({

    props: {
      blogs: Object,
      sectionHeader: String,
      type: String
    },

    setup(props) {

      var getLink = computed(() => {
          if(props.type == 'blog') return 'blog'
          if(props.type == 'news') return 'news'
      })

      return {
        getLink
      }
    }

})


</script>

<style>
.more-content-card-wrapper {
    display: flex;
    gap: 1rem;
    /* flex-wrap: nowrap; */
    overflow-x:scroll;
    margin-bottom: 5rem;
    min-height: 25rem;
    
}
.more-content-card-item{
    height: 14rem;
    width: 18rem;
    margin-bottom: 7rem;
}
.more-content-card-item > a > .card{
    width: 100%; 
    height: 22rem;
}
.more-content-card-item > a > .card > .card-body{
    width: 18rem; 
    min-height: 5rem;
}
.more-content-card-item > a > .card > img{
    object-fit: cover; 
    height: 10rem !important;
    width: 18rem;
}
::-webkit-scrollbar-corner {background-color: transparent;}


</style>