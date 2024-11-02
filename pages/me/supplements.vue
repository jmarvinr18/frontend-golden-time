<template>
    <GSection>
        <div class="container">
            <div class="row">
                <GSectionTitle :title="$t('Blog')" icon="bi-journals" class="mb-4"></GSectionTitle>
                <div class="col-md-6 col-xs-12 mb-4" v-for="blog in blogList">
                    <CardsGCardBlog :blog="blog"></CardsGCardBlog>
                </div>
            </div>
        </div>
    </GSection>
</template>