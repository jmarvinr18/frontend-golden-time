<template>
    <div v-if="userData && userData.profile_details" class="g-profile-card w-100 overflow-visible">
        <div class="is-desktop g-profile-card-main bg-white mx-auto p-3 g-shadow position-relative" style="min-height:500px">

            <div class="g-profile-card-wrapper">
                <div class="mb-5 position-relative">
                    <div class="g-profile-dp top-10 w-100">
                        <img :src="userImage? userImage:'/images/no-image.jpeg'" style="height: 270px; width: 270px;" class="object-fit-cover rounded-circle mx-auto g-shadow" />
                    </div>
                    <div class="text-center mt-5">
                        <div class="h2 mt-4 fw-bold mt-5">{{ userData.name }}</div>
                        <div v-if="mode=='me'" class="d-flex justify-content-center mb-3">
                            <div class="mx-2">
                                <NuxtLink to="/me/following" class="text-decoration-none text-dark">
                                    <i class="bi bi-person-up me-2"></i><span>{{ userData?.followings_count }}</span>
                                </NuxtLink>
                            </div>
                            <div class="mx-2">
                                <NuxtLink to="/me/followers" class="text-decoration-none text-dark">
                                    <i class="bi bi-person-down me-2"></i><span>{{ userData?.followers_count }}</span>
                                </NuxtLink>
                            </div>
                            <div class="mx-2">
                                <i class="bi bi-instagram me-2"></i>
                            </div>
                            <div class="mx-2">
                                <i class="bi bi-facebook me-2"></i>
                            </div>
                        </div>
                        <div v-else class="d-flex justify-content-center mb-3">
                            <div class="mx-2">
                                <i class="bi bi-person-up me-2"></i><span>{{ userData?.followings_count }}</span>
                                <!-- <NuxtLink :to="`/users/${userData?.id}/followers`" class="text-decoration-none text-dark">
                                    <i class="bi bi-person-up me-2"></i><span>{{ userData?.followings_count }}</span>
                                </NuxtLink> -->
                            </div>
                            <div class="mx-2">
                                <i class="bi bi-person-down me-2"></i><span>{{ userData?.followers_count}}</span>                        
                                <!-- <NuxtLink :to="`/users/${userData.id}/following`" class="text-decoration-none text-dark">
                                    <i class="bi bi-person-down me-2"></i><span>{{ userData?.followers_count}}</span>
                                </NuxtLink> -->
                            </div>
                            <div class="mx-2">
                                <i class="bi bi-instagram me-2"></i>
                            </div>
                            <div class="mx-2">
                                <i class="bi bi-facebook me-2"></i>
                            </div>
                        </div>
                    </div>
                    <div class="g-profile-action">
                            <button v-if="mode=='me'" @click="router.replace('/me/edit-profile')" class="btn btn-outline-primary btn-sm rounded-pill pull-right py-2 f10">
                                <i class="bi bi-pencil me-1"></i>
                                {{$t('EditProfile')}}
                            </button>
                            <button @click="toggleFollow(userData?.id)" v-else class="btn btn-primary btn-sm rounded-pill f12 pull-right py-2">
                                <i class="bi bi-person-plus me-1"></i>
                                {{ userData?.is_following_me ? "Unfollow" : "Follow"}}
                            </button>
                    </div>                    
                </div>

                  
            <div class="border border-light p-2 rounded border-2 mt-5 mb-2 g-profile-details">
                <div class="my-1 fw-bold">
                    {{ $t("ProfileDetails") }}
                </div>
                <hr style="opacity: 0.10;">                
                <div class="row w-100">
                    <div class="col-md-6 d-flex flex-wrap align-items-center g-profile-container">
                        <div class="w-100 g-profile-content">
                            <div class="rounded px-2 py-1 f14 my-2 w-fit-content" >
                                <i class="bi bi-person-raised-hand me-1 text-primary"></i> 
                                <span>{{ $t("DeadliftLabel") }}:</span>  
                                <span v-if="userData.profile_details.deadlift">{{ userData.profile_details.deadlift }}</span>
                                <span class="fs-bold font-italic text-muted" v-else> {{ $t("DataNotAvailable") }} </span>
                            </div>
                            <div class="rounded px-2 py-1 f14 my-2 w-fit-content" >
                                <i class="bi bi-bezier2 me-1 text-primary"></i> 
                                <span> {{ $t("YearIStartedTrainingLabel") }}: </span> 
                                <span v-if="userData.profile_details.my_training"> {{ userData.profile_details.year_attended_training }}</span>
                                <span class="fs-bold font-italic text-muted" v-else>{{ $t("DataNotAvailable") }} </span>
                            </div>
                            <div class="rounded px-2 py-1 f14 my-2 w-fit-content">
                                <i class="bi bi-person-heart me-1 text-primary"></i>
                                <span>{{ $t("RespectedTraineeLabel") }}: </span>
                                <span v-if="userData.profile_details.respected_trainee"> {{ userData.profile_details.respected_trainee }}</span>
                                <span class="fs-bold font-italic text-muted" v-else>  {{ $t("DataNotAvailable") }} </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 d-flex flex-wrap align-items-center g-profile-container ps-3 ">
                   
                        <div class="w-100 g-profile-content">
                            <div class="rounded px-2 py-1 f14 my-2 w-fit-content w-100">
                              <span>{{ $t("BirthDateLabel") }}: </span> 
                              <span class="ml-5" v-if="userData.profile_details.birth_date"> {{ $formatTime(userData.profile_details.birth_date) }}</span> 
                              <span class="fs-bold font-italic text-muted" v-else>  {{ $t("DataNotAvailable") }} </span>
                            </div>
                            <div class="rounded px-2 py-1 f14 my-2 w-fit-content">
                                <span>{{ $t("HeightLabel") }}: </span> 
                                <span v-if="userData.profile_details.height"> {{ userData.profile_details.height }} cm</span> 
                                <span class="fs-bold font-italic text-muted" v-else>  {{ $t("DataNotAvailable") }} </span>
                            </div>
                            <div class="rounded px-2 py-1 f14 my-2 w-fit-content">
                               <span> {{ $t("BodyWeightLabel") }}: </span>
                               <span v-if="userData.profile_details.body_weight">{{ userData.profile_details.body_weight }} kg</span> 
                               <span class="fs-bold font-italic text-muted" v-else>  {{ $t("DataNotAvailable") }} </span>
                            </div>
                            <div class="rounded px-2 py-1 f14 my-2 w-fit-content">
                                <span>{{ $t("BodyFatPercentageLabel") }}: </span> 
                                <span v-if="userData.profile_details.body_fat_percentage != null">{{ userData.profile_details.body_fat_percentage }}</span> 
                                <span class="fs-bold font-italic text-muted" v-else>  {{ $t("DataNotAvailable") }} </span>
                            </div>
                        </div>
                    </div>
            </div>                   
            </div>

            <div class="g-profile-text border border-light p-2 rounded border-2">
                <div class="my-1 fw-bold">
                    {{ $t("SelfIntroduction") }}
                </div>
                <hr style="opacity: 0.10;">
               <div class="mb-5">
                     {{ userData.profile_details.description }}
               </div>                
            </div>
            <div class="d-flex flex-column mt-3 border border-light p-2 rounded border-2">
                <div class="my-1 fw-bold">
                    {{ $t("MyTraining") }}
                </div>
                <hr style="opacity: 0.10;">
               <div class="mb-5">
                     {{ userData.profile_details.my_training }}
               </div>
            </div>   
            </div>
  

        </div>
        <div class="is-mobile g-profile-card-main bg-white mx-auto g-shadow p-3 position-relative">

            <div class="g-profile-card-wrapper">
                <div class="w-100 g-profile-dp">
                <img :src="userImage? userImage:'/images/no-image.jpeg'" style="height: 170px; width: 170px;" class="object-fit-cover rounded-circle mx-auto g-shadow user__image" />
                <div class="h2 mt-4 fw-bold">{{ userData.name }}</div>
                <div class="d-flex justify-content-center mb-3">
                    <div class="mx-2">
                        <NuxtLink to="/me/followers" class="text-decoration-none text-dark">
                            <i class="bi bi-person-up me-2"></i>
                            {{ userData.followers_count }}
                        </NuxtLink>
                    </div>
                    <div class="mx-2">
                        <NuxtLink to="/me/following" class="text-decoration-none text-dark">
                            <i class="bi bi-person-down me-2"></i>
                            {{ userData.followings_count }}
                        </NuxtLink>
                    </div>
                    <div class="mx-2">
                        <i class="bi bi-instagram me-2"></i>
                    </div>
                    <div class="mx-2">
                        <i class="bi bi-facebook me-2"></i>
                    </div>
                </div>
            </div>            
            <div class="row align-items-center justify-content-between mt-5">
                <div class="col-xs-12 position-relative" style="z-index: 100;">
                    <NuxtLink v-if="mode=='me'" to="/me/edit-profile" class="btn btn-outline-primary btn-sm rounded-pill f12 pull-right ">
                        <i class="bi bi-pencil me-1"></i>
                        {{$t('EditProfile')}}
                    </NuxtLink>
                    <ProfileGProfileFollowBtn v-else></ProfileGProfileFollowBtn>
                </div>
                <div class="col-sm-6 d-flex flex-wrap align-items-center g-profile-container" v-if="userData.profile_details">
                    <div class="w-100 g-profile-content g-profile-content-first d-flex flex-wrap">
                        <div class="rounded shadow-sm px-2 py-1 f14 my-2 w-fit-content">
                            <i class="bi bi-person-raised-hand me-1 text-primary"></i> {{ $t("BenchPressLabel") }}: {{ userData.profile_details.bench_press }}
                        </div>
                        <!-- <div class="rounded shadow-sm px-2 py-1 f14 my-2 w-fit-content" v-if="userData.profile_details.my_training">
                            <i class="bi bi-bezier2 me-1 text-primary"></i> Training experience: {{ userData.profile_details.my_training }} years
                        </div> -->
                        <div class="rounded shadow-sm px-2 py-1 f14 my-2 w-fit-content">
                            <i class="bi bi-person-heart me-1 text-primary"></i> {{ $t("RespectedTraineeLabel") }}: {{ userData.profile_details.respected_trainee }}
                        </div>
                    </div>
                </div>
                <div class="col-xs-6 d-flex flex-wrap align-items-center g-profile-container ps-3">
                    <div class="mw-100 g-profile-content overflow-x-scroll">
                        <div class="d-flex align-items-center gap-2">
                            <div class="rounded shadow-sm px-2 py-1 f14 my-2">
                                {{ $t("BirthDateLabel") }}: {{ $formatTime(userData.profile_details.birth_date) }}
                            </div>
                            <div class="rounded shadow-sm px-2 py-1 f14 my-2">
                                {{ $t("HeightLabel") }}: {{ userData.profile_details.height }} cm
                            </div>
                            <div class="rounded shadow-sm px-2 py-1 f14 my-2">
                                {{ $t("BodyWeightLabel") }}: {{ userData.profile_details.body_weight }} kg
                            </div>
                            <div class="rounded shadow-sm px-2 py-1 f14 my-2">
                                {{ $t("BodyFatPercentageLabel") }}: {{ userData.profile_details.body_fat_percentage }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
            <div class="mt-3 border border-light p-2 rounded border-2">
                <div class="my-1 fw-bold">
                    {{ $t("SelfIntroduction") }}
                </div>
                <hr style="opacity: 0.10;">
               <div class="mb-5">
                     {{ userData.profile_details.description }}
               </div>    
            </div>
            <div class="mt-3 mb-5 border border-light p-2 rounded border-2">
                <div class="my-1 fw-bold">
                    {{ $t("MyTraining") }}
                </div>
                <hr style="opacity: 0.10;">
               <div class="mb-5">
                     {{ userData.profile_details.my_training }}
               </div>
            </div>
            </div>

        </div>
    </div>
</template>
<script lang="ts">
export default defineComponent({
  props: {
    userData: Object,    
    mode: {
      type: String,
      default: "me", // me or other
    },
  },
  setup(props) {
    var userImage = ref("");
    var router = useRouter()
    var followStore = useFollowStore()
    var toggleFollow = (id: string | undefined) => {
        followStore.toggleFollow({ user_id: id})
    }

    var editProfile = (param: string) => {
        window.location.href = param
    }    

    onBeforeUpdate(() => {
      userImage.value = props.userData?.profile_details.image;
    });

    return {
      userImage,
      toggleFollow,
      router,
      editProfile
    };
  },
});
</script>
<style scoped>
.g-profile-card {
  margin-top: -360px;
  position: relative;
  margin-bottom: 10%;
}

.g-profile-card-main{
    height: 67rem;
    border-radius: 15px;
    width: 50rem;
}

.g-profile-details {
  min-height: 250px;
}

.g-profile-card-wrapper {
    position: absolute;
    width: 100%;
    top: -120px;
    left: 0;
    padding: 10px;
}

.g-profile-container {
  height: 20vh;
}
.g-profile-action {
  z-index: 900;
  /* align-self: flex-start; */
    position: absolute;
    top: 100%;
    width: 100%;
    right: 0%;
    height: 100%;
}

.g-profile-action > button {
    width: 140px;
}
.g-profile-content {
  z-index: 900;
  align-self: flex-start;
}
.g-profile-text {
  margin-top: 50px;
}
.g-profile-dp {

  /* top: -90px; */
  /* left: 0; */
  /* z-index: 100; */
  text-align: center;
}

.g-profile-dp img {
  border: 5px solid white;
}

@media only screen and (max-width: 500px) {
    .g-profile-card-main{
        height: 67rem;
        border-radius: 15px;
        width: 50rem;
    }

 }

@media only screen and (max-width: 800px) {
  .g-profile-card {
    /* margin-top: -92%; */
  }

.g-profile-card-wrapper {
    position: absolute;
    width: 100%;
    top: -120px;
    left: 0;
    padding: 10px;
}
.g-profile-card-main{
    height: 67rem;
    border-radius: 15px;
    width: 100%;
}  


  .g-profile-container {
    height: auto;
  }
  .g-profile-content-first {
    margin-top: 10px !important;
  }
  .g-profile-content div {
    min-width: 60px;
    font-size: 12px !important;
  }

  .g-profile-content-slide > * {
    width: fit-content;
    min-width: 120px !important;
  }
}
</style>
