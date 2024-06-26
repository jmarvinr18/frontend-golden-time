<template>
    <div class="row justify-content-between align-items-center my-5">
        <div class="col-md-7">
            <SupplementGSupplementSearchItemCard :supplement="supplement"></SupplementGSupplementSearchItemCard>
        </div>
        <div class="is-desktop col-md-4 px-4">
            <div class="d-flex flex-column gap-2 py-2 mt-3">
                <button v-if="isAuthenticated" @click="toggleHasDrank(supplement?.id)" class="btn btn-primary btn-sm rounded-pill py-2 f14 d-flex justify-content-center gap-3">
                    <i v-if="supplement?.has_user_drank_the_supplement" class="bi bi-hand-thumbs-up-fill"></i>
                    <span class="align-self-center">
                          <i class="bi bi-people me-2"></i>
                           {{ $t('MySupplementRegistration', { count: supplement?.users_who_drank_the_supplement_count}) }}
                    </span>
                   
                </button>
                <button to="/login?ref=search" v-else class="btn btn-primary btn-sm rounded-pill py-2 f14" @click="askLogin">{{ $t("MySupplementRegistration") }}</button>
                <button @click="toggleDrinkWish(supplement?.id)" class="btn btn-outline-secondary btn-sm rounded-pill py-2 mt-3 f14 d-flex justify-content-center gap-3">
                    <i v-if="supplement?.on_users_wishlist" class="bi bi-hand-thumbs-up-fill"></i>
                    <span class="align-self-center">
                          <i  class="bi bi-people me-2"></i>
                            {{ $t('PeopleWhoWantToDrink', { count: supplement?.user_supplement_wish_count}) }}
                    </span>                    
                </button>
            </div>

        </div>

        <div class="mw-100 is-mobile">
            <div class="d-flex flex-column gap-2 py-2 mt-3">
                <button v-if="isAuthenticated" @click="toggleHasDrank(supplement?.id)" class="g-search-item-extra btn btn-primary btn-sm rounded-pill py-2 f12 d-flex justify-content-center gap-3">
                    <i v-if="supplement?.has_user_drank_the_supplement" class="bi bi-hand-thumbs-up-fill"></i>
                    <span class="align-self-center">
                        <i class="bi bi-people me-2"></i>
                        {{ $t('MySupplementRegistration', { count: supplement?.users_who_drank_the_supplement_count}) }}
                    </span>                  
                
                </button>
                <button to="/login?ref=search" v-else class="g-search-item-extra btn btn-primary btn-sm rounded-pill py-2 f12" @click="askLogin">{{ $t("MySupplementRegistration") }}</button>
                <button @click="toggleDrinkWish(supplement?.id)" class="g-search-item-extra btn btn-outline-secondary btn-sm rounded-pill py-2 f12 d-flex justify-content-center gap-3">
                    <i v-if="supplement?.on_users_wishlist" class="bi bi-hand-thumbs-up-fill"></i>
                    <span class="align-self-center">
                        <i class="bi bi-person-heart me-2"></i>
                         {{ $t('PeopleWhoWantToDrink', { count: supplement?.user_supplement_wish_count}) }}
                    </span>                       
                </button>
            </div> 
        </div>
      
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Swal from 'sweetalert2';
import { useI18n } from "vue-i18n";

export default defineComponent({

    props: {
        supplement: Object
    },
    setup() {
        var authStore = useAuthStore();
        var router = useRouter();
        var { isAuthenticated } = storeToRefs(authStore);
        var supplementStore = useSupplementStore();
        const {t} = useI18n();
        var toggleDrinkWish = (id: string) => {
            supplementStore.toggleDrinkWish(id)
        }
        var toggleHasDrank = (id: string) => {
            supplementStore.toggleHasDrank(id)
        }

        var askLogin = () => {
            Swal.fire({
                icon: 'info',
                title: t("LoginRequired"),
                text: t("LoginRequiredBody"),
                showCancelButton: true,
                confirmButtonText: `${t("Login")}&nbsp;<i class="bi bi-arrow-right"></i>`,
                cancelButtonText: t("CancelButton"),
                reverseButtons: true
            }).then((res) => {
                if(res.isConfirmed) {
                    router.push('/login?ref=search')
                }
            })
        }

        return {
            isAuthenticated,
            askLogin,
            toggleDrinkWish,
            toggleHasDrank
        }
    },
})
</script>

<style scoped>
.g-search-item-extra {
    min-width: 280px;
}
</style>