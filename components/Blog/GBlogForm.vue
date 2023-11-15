<template>
    <div class="g-blog-form w-100 position-absolute overflow-visible ">
        <div class="bg-white mx-auto rounded-lg w-75 py-5 px-5 position-relative g-shadow" style="min-height:500px">
            <div class="mb-4">
                <input type="text" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Add title">
            </div>
            <div class="mb-3">
                <textarea class="form-control form-control-lg" id="exampleFormControlTextarea1" rows="20" placeholder="Let's write down the contents of today's training!"></textarea>
            </div>

            <div class="position-absolute bg-primary text-light py-0 px-0 rounded cursor-pointer" style="top:100px; right:40px">
                
                <!-- <div class="dropdown">
                    <a class="btn bg-none dropdown-toggle text-light outline-none" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-plus-lg h4"></i>
                    </a>

                    <ul class="dropdown-menu g-blog-form-menu">
                        <li>
                            <a class="dropdown-item h2 mb-0" href="#">
                                <i class="bi bi-camera"></i>
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item h2 mb-0" href="#">
                                <i class="bi bi-link"></i>
                            </a>
                        </li>
                        
                        <li>
                            <a class="dropdown-item h2 mb-0" href="#">
                                <i class="bi bi-filetype-gif"></i>
                            </a>
                        </li>
                        
                        <li>
                            <a class="dropdown-item h2 mb-0" href="#">
                                <i class="bi bi-fonts"></i>
                            </a>
                        </li>
                    </ul>
                </div> -->

                <div class="d-inline-flex gap-1">
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <i class="bi bi-plus-lg h4"></i>
                    </a>
                </div>
                <div class="collapse bg-light text-dark rounded-bottom" id="collapseExample">
                    <ul class="g-blog-form-menu lh-5">
                        <li class="py-2">
                            <a class="dropdown-item h2 mb-0" href="#">
                                <i class="bi bi-camera"></i>
                            </a>
                        </li>
                        <li class="py-2">
                            <a class="dropdown-item h2 mb-0" href="#">
                                <i class="bi bi-link-45deg"></i>
                            </a>
                        </li>
                        
                        <li class="py-2">
                            <a class="dropdown-item h2 mb-0" href="#">
                                <i class="bi bi-filetype-gif"></i>
                            </a>
                        </li>
                        
                        <li class="py-2">
                            <a class="dropdown-item h2 mb-0" href="#">
                                <i class="bi bi-fonts"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="d-flex w-100 mt-4 mx-auto justify-content-center align-items-center">
                <div class="mx-auto w-75 d-flex align-items-center justify-content-end">
                    <button class="btn btn-outline-secondary rounded-pill w-25 me-3">Save draft</button>
                    <button class="btn btn-primary rounded-pill w-25 me-3">Post</button>
                    <button class="btn border-0 bg-none">
                        <i class="bi bi-trash me-1"></i>
                        delete
                    </button>
                </div>
                <div class="w-25 text-end">
                    <div>Release</div>
                    <div class="form-check form-switch form-check-reverse">
                        <input class="form-check-input py-3 px-4" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.form-check-input:checked {
    border-color: var(--bs-success);
    background-color: var(--bs-success);
}
.g-blog-form {
    top: 20%;
}
.g-blog-form-menu {
    /* min-width: unset !important;
    transform: translate3d(-8px, 55.5px, 0) !important;
    opacity:0 !important; */
    list-style: none;
    padding: 0;
    text-align: center;
    margin-bottom: 0;
}

.g-blog-form-menu.show {
    transition: opacity 1s ease-in;
    opacity: 1 !important;
}
</style>