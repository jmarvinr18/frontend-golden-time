<template>
    <GSection>
        <div class="container">
            <GSectionTitle title="Blog title" :icon-hide="true"></GSectionTitle>
            <hr class="my-3" />
            <BlogGBlogAuthor></BlogGBlogAuthor>
            <div class="g-blog-date text-secondary f12 mt-3">
                <i class="bi bi-clock me-2 f14"></i>
                November 12th 20:02
            </div>
            <img src="https://picsum.photos/1000/400" class="rounded-lg mt-3" width="100%" />
            <div class="g-blog-body mt-5 lh-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fuga, repellendus asperiores earum voluptatem quis vero omnis aperiam in. Veniam itaque earum quas ut eius sequi. Molestiae debitis optio aut.

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fuga, repellendus asperiores earum voluptatem quis vero omnis aperiam in. Veniam itaque earum quas ut eius sequi. Molestiae debitis optio aut.
                <br /><br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fuga, repellendus asperiores earum voluptatem quis vero omnis aperiam in. Veniam itaque earum quas ut eius sequi. Molestiae debitis optio aut.

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fuga, repellendus asperiores earum voluptatem quis vero omnis aperiam in. Veniam itaque earum quas ut eius sequi. Molestiae debitis optio aut.
            </div>

            <GSectionTitle class="mt-lg" title="More blogs" :icon-hide="true"></GSectionTitle>
            <div class="row mt-3">
                <div class="col-md-4 col-xs-12">
                    <img src="https://picsum.photos/1000/1000" width="100%" class="rounded-lg" />
                </div>
                <div class="col-md-4 col-xs-12">
                    <img src="https://picsum.photos/1000/1000" width="100%" class="rounded-lg" />
                </div>
                <div class="col-md-4 col-xs-12">
                    <img src="https://picsum.photos/1000/1000" width="100%" class="rounded-lg" />
                </div>
            </div>
            <hr class="mt-5 mb-3" />
            <div class="d-flex align-items-center justify-content-end h4 text-primary">
                <div class="g-blog-like me-3">
                    <i class="bi bi-heart"></i>
                </div>
                <div class="g-blog-comment me-3">
                    <i class="bi bi-chat"></i>
                </div>
                <div class="g-blog-repost me-3">
                    <i class="bi bi-arrow-repeat"></i>
                </div>
            </div>
        </div>
        
    </GSection>
</template>