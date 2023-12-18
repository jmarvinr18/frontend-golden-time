<template>
    <footer class="is-desktop bg-dark">
        <div class="container-xs py-5 text-light">
            <div class="logo">
                <NuxtLink to="/">
                    <img src="/logo.png" width="60" />
                </NuxtLink>
            </div>

            <div class="row lh-lg mt-4">
                <div class="col-md-4 col-xs-12">
                    <h5>Home</h5>
                    <div>news</div>
                    <div>tournament</div>
                    <div>feature</div>
                    <div>players</div>
                </div>
                <div class="col-md-4 col-xs-12">
                    <h5>About</h5>
                    <div>operating</div>
                    <div>terms condition</div>
                    <div>company information</div>
                    <div>privacy policy</div>
                </div>
                <div class="col-md-4 col-xs-12">
                    <h5>Support</h5>
                    <div>inquiry</div>
                    <div>press room</div>
                    <div>description based on specified transaction law</div>
                </div>
            </div>

            <div class="d-flex gap-3 h4">
                <a href="" class="text-light">
                    <i class="bi bi-envelope"></i>
                </a>
                <a href="" class="text-light">
                    <i class="bi bi-twitter"></i>
                </a>
                <a href="" class="text-light">
                    <i class="bi bi-instagram"></i>
                </a>
                <a href="" class="text-light">
                    <i class="bi bi-facebook"></i>
                </a>
            </div>

            <div class="fw-light mt-4">&copy; 2023 Golden Time | All rights reserved.</div>
        </div>
    </footer>
    <div class="is-mobile position-fixed w-100 bottom-0 start-0 bg-dark p-0">
        <div class="w-100 py-4 px-4 d-flex h3 mb-0 text-light text-center justify-content-between align-items-center">
            <div>
                <NuxtLink to="/" class="text-light">
                    <i class="bi bi-house-fill"></i>
                </NuxtLink>
            </div>
            <div>
                <NuxtLink to="/supplement/search" class="text-light">
                    <i class="bi bi-search"></i>
                </NuxtLink>
            </div>
            <div>
                <NuxtLink to="/blog/post" class="text-light">
                    <i class="bi bi-pencil"></i>
                </NuxtLink>
            </div>
            <div>
                <NuxtLink to="/supplement/add" class="text-light">
                    <i class="bi bi-capsule"></i>
                </NuxtLink>
            </div>
            <div>
                <NuxtLink to="/supplement/review/post" class="text-light">
                    <i class="bi bi-chat-square-text"></i>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>