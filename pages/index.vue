<template>
    <GHero></GHero>
    <div class="is-desktop">
        <div class="container pt-2 pb-4">
            <GSectionTitle :title="$t('Blog')" icon="bi-journals"></GSectionTitle>

            <div class="blog-item-cards">
                <div class="blog-item-cards-each"  v-for="(blog, i) in contents?.blog">
                    <CardsGCardBlog :blog="blog" ></CardsGCardBlog>
                </div>
                <UtilsGLoadMore v-if="contents?.blog?.length > 3" @on-click="viewAll('/blog')"></UtilsGLoadMore>
            </div>
        </div>
        <div class="container pt-2 pb-4">
            <GSectionTitle :title="$t('MuscleNews')" icon="bi-newspaper"></GSectionTitle>

            <div class="row">
                <div v-for="(news, i) in contents?.news" class="col-md-4 col-xs-12 mb-3">
                    <CardsGCardNews :news="news"></CardsGCardNews>
                </div>

                <!-- {{ contents?.news.length }} -->
                <UtilsGLoadMore v-if="contents?.news?.length > 3" @on-click="viewAll('/news')"></UtilsGLoadMore>
            </div>
        </div>
        <!-- <div class="container pt-2 pb-4">
            <GSectionTitle :title="$t('TournamentInformation')" icon="bi-calendar-check"></GSectionTitle>

            <div class="row">
                <div v-for="(event, i) in contents?.event" class="col-md-4 col-xs-12">
                    <CardsGCardEvent :event="event"></CardsGCardEvent>
                </div>
                <UtilsGLoadMore @on-click="viewAll('/event')"></UtilsGLoadMore>
            </div>
        </div> -->

    </div>

    <div class="is-mobile">
        <div class="container pt-2 pb-4">
            <GSectionTitle :title="$t('Blog')" icon="bi-journals"></GSectionTitle>
            <!-- <CardsGCardBlog></CardsGCardBlog> -->

            <GContainerSlider>
                <CardsGCardBlog v-for="(blog, i) in contents?.blog" :blog="blog"></CardsGCardBlog>
            </GContainerSlider>            
        </div>
        <div class="container pt-2 pb-4">
            <GSectionTitle :title="$t('MuscleNews')" icon="bi-newspaper"></GSectionTitle>
            
            <GContainerSlider>
                <CardsGCardNews v-for="(news, i) in contents?.news" :news="news"></CardsGCardNews>
            </GContainerSlider>
        </div>
        <!-- <div class="container pt-2 pb-4">
            <GSectionTitle :title="$t('TournamentInformation')" icon="bi-calendar-check"></GSectionTitle>
            
            
            <GContainerSlider>
                <CardsGCardEvent v-for="(event, i) in contents?.event" :event="event" ></CardsGCardEvent>
            </GContainerSlider>
        </div> -->
        <!-- <div class="container pt-2 pb-4">
            <GSectionTitle :title="$t('FeaturedPlayers')" icon="bi-stars"></GSectionTitle>
            <GContainerSlider>
                <CardsGCardFeature></CardsGCardFeature>
                <CardsGCardFeature></CardsGCardFeature>
            </GContainerSlider>
        </div> -->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { usePublicContentStore } from '~/stores/GStorePublicContent'

export default defineComponent({
    setup() {
        var publicContentStore = usePublicContentStore()
        var { contents } = storeToRefs(publicContentStore)
        const router = useRouter();

        onMounted(() => {
          publicContentStore.getHomeContents("?blog_limit=2&news_limit=3&event_limit=3")  
        })

        const viewAll = (str:any) => {
            router.push(str);
        }

        return {
            contents,
            viewAll
        }
    },
})
</script>

<style>
 .blog-item-cards{
    display: flex;
    flex-direction: row;
    gap: 1rem;
 }

 @media only screen and (max-width:800px)  {
    .blog-item-cards{
        display: flex;
        flex-direction: row;
        gap: 1rem;
        flex-wrap: wrap;
    }
    .blog-item-cards-each{
        width: 100%;
    }
 }
</style>