<template>
  <div>
    <GHeader></GHeader>
    <GHero></GHero>
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
    <GFooter></GFooter>
  </div>
</template>
