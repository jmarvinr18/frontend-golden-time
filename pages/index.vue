<template>
    <GHero></GHero>
    <div class="is-desktop">
        <div class="container pt-2 pb-4">
            <GSectionTitle title="Blog" icon="bi-journals"></GSectionTitle>
            <div class="row">
                <div class="col-md-6 col-xs-12">
                    <CardsGCardBlog></CardsGCardBlog>
                </div>
                <div class="col-md-6 col-xs-12">
                    <CardsGCardBlog></CardsGCardBlog>
                </div>
                <UtilsGLoadMore></UtilsGLoadMore>
            </div>
        </div>
        <div class="container pt-2 pb-4">
            <GSectionTitle title="Muscle News" icon="bi-newspaper"></GSectionTitle>

            <div class="row">
                <div class="col-md-4 col-xs-12">
                <CardsGCardNews></CardsGCardNews>
                </div>
                <div class="col-md-4 col-xs-12">
                <CardsGCardNews></CardsGCardNews>
                </div>
                <div class="col-md-4 col-xs-12">
                <CardsGCardNews></CardsGCardNews>
                </div>
                <UtilsGLoadMore></UtilsGLoadMore>
            </div>
        </div>
        <div class="container pt-2 pb-4">
            <GSectionTitle title="Tournament Information" icon="bi-calendar-check"></GSectionTitle>

            <div class="row">
                <div class="col-md-4 col-xs-12">
                <CardsGCardNews
                    type="agenda"
                    start-time="09:00"
                    open-time="07:00"
                    player-gathering="08:00"
                    location-name="Spanish Cultural Center">
                </CardsGCardNews>
                </div>
                <div class="col-md-4 col-xs-12">
                <CardsGCardNews
                    type="agenda"
                    start-time="09:00"
                    open-time="07:00"
                    player-gathering="08:00"
                    location-name="Spanish Cultural Center">
                </CardsGCardNews>
                </div>
                <div class="col-md-4 col-xs-12">
                <CardsGCardNews
                    type="agenda"
                    start-time="09:00"
                    open-time="07:00"
                    player-gathering="08:00"
                    location-name="Spanish Cultural Center">
                </CardsGCardNews>
                </div>
                <UtilsGLoadMore></UtilsGLoadMore>
            </div>
        </div>
        <div class="container pt-2 pb-4">
            <GSectionTitle title="Featured players" icon="bi-stars"></GSectionTitle>

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
        </div>
    </div>

    <div class="is-mobile">
        <div class="container pt-2 pb-4">
            <GSectionTitle title="Blog" icon="bi-journals"></GSectionTitle>
            <CardsGCardBlog></CardsGCardBlog>
        </div>
        <div class="container pt-2 pb-4">
            <GSectionTitle title="Muscle News" icon="bi-newspaper"></GSectionTitle>
            
            <GContainerSlider>
                <CardsGCardNews></CardsGCardNews>
                <CardsGCardNews></CardsGCardNews>
                <CardsGCardNews></CardsGCardNews>
            </GContainerSlider>
        </div>
        <div class="container pt-2 pb-4">
            <GSectionTitle title="Tournament information" icon="bi-calendar-check"></GSectionTitle>
            
            
            <GContainerSlider>
                <CardsGCardNews type="schedule"></CardsGCardNews>
                <CardsGCardNews type="schedule"></CardsGCardNews>
                <CardsGCardNews type="schedule"></CardsGCardNews>
            </GContainerSlider>
        </div>
        <div class="container pt-2 pb-4">
            <GSectionTitle title="Featured players" icon="bi-stars"></GSectionTitle>
            <GContainerSlider>
                <CardsGCardFeature></CardsGCardFeature>
                <CardsGCardFeature></CardsGCardFeature>
            </GContainerSlider>
        </div>
    </div>
</template>
  