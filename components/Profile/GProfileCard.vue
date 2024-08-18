<template>
    <div v-if="userData && userData.profile_details" class="g-profile-card w-100 overflow-visible">
        <div class="is-desktop g-profile-card-main bg-white mx-auto rounded-lg w-50 p-3 g-shadow" style="min-height:500px">
            <div class="row align-items-center justify-content-between">
                <div class="col-md-4 d-flex flex-wrap align-items-center g-profile-container">
                    <div class="w-100 g-profile-content" v-if="userData.profile_details">
                        <div class="rounded shadow-sm px-2 py-1 f14 my-2 w-fit-content">
                            <i class="bi bi-person-arms-up me-1 text-primary"></i> {{ $t("DeadliftLabel") }}: {{ userData.profile_details.deadlift? userData.profile_details.deadlift:0 }}
                        </div>
                        <div class="rounded shadow-sm px-2 py-1 f14 my-2 w-fit-content">
                            <i class="bi bi-person-raised-hand me-1 text-primary"></i> {{ $t("BenchPressLabel") }}: {{ userData.profile_details.bench_press? userData.profile_details.bench_press:0 }}
                        </div>
                        <!-- <div class="rounded shadow-sm px-2 py-1 f14 my-2 w-fit-content">
                            <i class="bi bi-bezier2 me-1 text-primary"></i> {{ $t("YearIStartedTrainingLabel") }}: {{ userData.profile_details.year_attended_training? userData.profile_details.year_attended_training:0 }} years
                        </div> -->
                        <div class="rounded shadow-sm px-2 py-1 f14 my-2 w-fit-content" v-if="userData.profile_details.respected_trainee">
                            <i class="bi bi-person-heart me-1 text-primary"></i> {{ $t("RespectedTraineeLabel") }}: {{ userData.profile_details.respected_trainee }}
                        </div>
                    </div>
                </div>
                <div class="col-md-4 d-flex flex-wrap align-items-center g-profile-container ps-3">
                    <div class="w-100 g-profile-content">
                        <NuxtLink v-if="mode=='me'" to="/me/edit-profile" class="btn btn-outline-primary btn-sm rounded-pill pull-right w-50 py-2 f10">
                            <i class="bi bi-pencil me-1"></i>
                            {{$t('EditProfile')}}
                        </NuxtLink>

                       
                        <button @click="toggleFollow(userData?.id)" v-else class="btn btn-primary btn-sm rounded-pill f12 pull-right w-50 py-2">
                            <i class="bi bi-person-plus me-1"></i>
                            {{ userData?.is_following_me ? "Unfollow" : "Follow"}}
                        </button>
                        <!-- {{ userData }} -->
                        
                        <div v-if="userData.profile_details.birth_date != null" class="rounded shadow-sm px-2 py-1 f12 my-2 w-fit-content mt-5">
                            {{ $t("BirthDateLable") }}: {{ $formatTime(userData.profile_details.birth_date) }}
                        </div>
                        <div class="rounded shadow-sm px-2 py-1 f14 my-2 w-fit-content">
                            {{ $t("HeightLabel") }}: <span> {{ userData.profile_details.height? userData.profile_details.height:0 }} cm</span>
                        </div>
                        <div class="rounded shadow-sm px-2 py-1 f14 my-2 w-fit-content">
                            {{ $t("BodyWeightLabel") }}: {{ userData.profile_details.body_weight? 
                            userData.profile_details.body_weight:0 }} kg
                        </div>
                        <div v-if="userData.profile_details.body_fat_percentage != null" class="rounded shadow-sm px-2 py-1 f14 my-2 w-fit-content">
                            {{ $t("BodyFatPercentageLabel") }}: {{ userData.profile_details.body_fat_percentage? userData.profile_details.body_fat_percentage:0 }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="position-absolute top-10 w-100 g-profile-dp">
                <img :src="userImage? userImage:'/images/no-image.jpeg'" style="height: 270px; width: 270px;" class="object-fit-cover rounded-circle mx-auto g-shadow" />
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
        <div class="is-mobile g-profile-card-main bg-white mx-auto rounded-lg g-shadow w-100 p-3" style="min-height:500px">
            <div class="row align-items-center justify-content-between mt-5">
                <div class="col-xs-12 position-relative" style="z-index: 100;">
                    <NuxtLink v-if="mode=='me'" to="/me/edit-profile" class="btn btn-outline-primary btn-sm rounded-pill f12 pull-right ">
                        <i class="bi bi-pencil me-1"></i>
                        {{$t('EditProfile')}}
                    </NuxtLink>
                    <ProfileGProfileFollowBtn v-else></ProfileGProfileFollowBtn>
                </div>
                <div class="col-sm-6 d-flex flex-wrap align-items-center g-profile-container" v-if="userData.profile_details">
                    <div class="w-100 g-profile-content g-profile-content-first d-flex flex-wrap mt-5 gap-2">
                        <div class="rounded shadow-sm px-2 py-1 f14 my-2 w-fit-content">
                            <i class="bi bi-person-raised-hand me-1 text-primary"></i> {{ $t("DeadliftLabel") }}: {{ userData.profile_details.deadlift? userData.profile_details.deadlift:0 }}
                        </div>
                        <div class="rounded shadow-sm px-2 py-1 f14 my-2 w-fit-content">
                            <i class="bi bi-person-arms-up me-1 text-primary"></i> {{ $t("BenchPressLabel") }}: {{ userData.profile_details.bench_press? userData.profile_details.bench_press:0 }}
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
                                {{ $t("BirthDateLable") }}: {{ $formatTime(userData.profile_details.birth_date) }}
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
            <div class="position-absolute w-100 g-profile-dp ">
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
    // const userStore = useUserStore();
    // var { userData } = storeToRefs(userStore);    
    var followStore = useFollowStore()
    var toggleFollow = (id: string | undefined) => {
        followStore.toggleFollow({ user_id: id})
    }

    onBeforeUpdate(() => {
      userImage.value = props.userData?.profile_details.image;
    });

    return {
      userImage,
      toggleFollow,
    };
  },
});
</script>
<style scoped>
.g-profile-card {
  margin-top: -43vh;
  position: relative;
  margin-bottom: 10%;
}

.g-profile-container {
  height: 20vh;
}
.g-profile-content {
  z-index: 900;
  position: relative;
}
.g-profile-text {
  margin-top: 120px;
}
.g-profile-dp {
  top: -90px;
  left: 0;
  /* z-index: 100; */
  text-align: center;
}

.g-profile-dp img {
  border: 5px solid white;
}

@media only screen and (max-width: 890px) {
    .g-profile-card {
        margin-top: -92%;
    }
}

@media only screen and (min-width: 990px) and (max-width:1180px) {
  .g-profile-dp img{
    width: 210px !important;
    height: 210px !important;
  }
  .g-profile-card {
    margin-top: -22%;
  }
  .g-profile-container {
    height: auto;
  }
  .g-profile-content-first {
    margin-top: 70px !important;
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
