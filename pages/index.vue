<template>
    <GHero></GHero>
    <div class="is-desktop">
        <div class="container pt-2 pb-4">
            <GSectionTitle :title="$t('Blog')asdfsdfsdf" icon="bi-journals"></GSectionTitle>

            <div class="row">
                <div v-for="(blog, i) in contents?.blog" class="col-md-6 col-xs-12 mb-5">
                    <CardsGCardBlog :blog="blog" ></CardsGCardBlog>
                </div>
                <UtilsGLoadMore @on-click="viewAll('/blog')"></UtilsGLoadMore>
            </div>
        </div>
        <div class="container pt-2 pb-4">
            <GSectionTitle :title="$t('MuscleNews')" icon="bi-newspaper"></GSectionTitle>

            <div class="row">
                <div v-for="(news, i) in contents?.news" class="col-md-4 col-xs-12">
                    <CardsGCardNews :news="news"></CardsGCardNews>
                </div>
                <UtilsGLoadMore @on-click="viewAll('/news')"></UtilsGLoadMore>
            </div>
        </div>
        <div class="container pt-2 pb-4">
            <GSectionTitle :title="$t('TournamentInformation')" icon="bi-calendar-check"></GSectionTitle>

            <div class="row">
                <div v-for="(event, i) in contents?.event" class="col-md-4 col-xs-12">
                    <CardsGCardEvent :event="event"></CardsGCardEvent>
                </div>
                <UtilsGLoadMore @on-click="viewAll('/event')"></UtilsGLoadMore>
            </div>
        </div>
        <!-- <div class="container pt-2 pb-4">
            <GSectionTitle :title="$t('FeaturedPlayers')" icon="bi-stars"></GSectionTitle>

            <div class="row">
                <div class="col-md-6 col-xs-12">
                <CardsGCardFeature></CardsGCardFeature>
                </div>
                <div class="col-md-6 col-xs-12">
                <CardsGCardFeature></CardsGCardFeature>
                </div>
                <div class="col-md-6 col-xs-12">
                <CardsGCardFeature></CardsGCardFeature>
                </div>
                <div class="col-md-6 col-xs-12">
                <CardsGCardFeature></CardsGCardFeature>
                </div>
                <UtilsGLoadMore></UtilsGLoadMore>
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
        <div class="container pt-2 pb-4">
            <GSectionTitle :title="$t('TournamentInformation')" icon="bi-calendar-check"></GSectionTitle>
            
            
            <GContainerSlider>
                <CardsGCardEvent v-for="(event, i) in contents?.event" :event="event" ></CardsGCardEvent>
            </GContainerSlider>
        </div>
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

  