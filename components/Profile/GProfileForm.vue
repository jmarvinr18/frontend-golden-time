<template>
    <div class="is-desktop">
        <div class="g-auth-signup-title w-100 mt-5">
            <div class="h3 mt-5">{{ $t('ProfileChange') }}</div>
            <div class="text-danger mt-5">* {{ $t('RequiredInput') }}</div>
        </div>
        <div class="g-auth-signup-form mt-5">
            <div class="g-form-group border-bottom pb-5">
                <div class="mb-4 g-form-input">
                    <label  class="form-label bg-white ms-2 px-2">{{ $t('Nickname') }}*</label>
                    <input type="text" class="form-control form-control-lg"  placeholder="sample nickname" v-model="userData.name">
                </div>
                <div class="mb-4 g-form-input">
                    <label  class="form-label bg-white ms-2 px-2">{{ $t('EmailLabel') }}*</label>
                    <input type="email" class="form-control form-control-lg"  placeholder="sample@gmail.com" v-model="userData.email">
                </div>
                <div class="mb-4 g-form-input position-relative">
                    <label  class="form-label bg-white ms-2 px-2">{{ $t('PasswordConfirmationLabel')}}*</label>
                    <input :type="viewPassword? 'text':'password'" class="form-control form-control-lg"  placeholder="abcde12345" v-model="userData.password">
                    <div class="position-absolute end-0 me-3" style="margin-top:-50px" @click="viewPassword=!viewPassword">
                        <i v-if="!viewPassword" class="bi h3 bi-eye"></i>
                        <i v-else class="bi h3 bi-eye-slash"></i>
                    </div>
                </div>
                <div class="mb-4 g-form-input">
                    <label  class="form-label bg-white ms-2 px-2">{{ $t('InstagramAccountLabel')}}*</label>
                    <input type="text" class="form-control form-control-lg"  placeholder="@sample.ig" v-model="userData.profile_details.social_media.instagram">
                </div>
            </div>
            <div class="g-form-group border-bottom py-5">
                <div class="g-form-box mb-2 d-flex gap-4 w-75">
                    <div class="w-50 mb-4 g-form-input">
                        <label  class="form-label bg-white ms-2 px-2">{{ $t('HeightLabel') }}</label>
                        <input type="text" class="form-control form-control-lg"  v-model="userData.profile_details.height">
                    </div>
                    <div class="ms-5 w-25 text-start">
                        <div>{{ !userData.profile_details.h_visibility ?  $t('PrivateLabel') : $t('ReleaseLabel') }}</div>
                        <div class="form-check form-switch">
                            <input class="form-check-input form-check-input-success py-3 px-4" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="userData.profile_details.h_visibility">
                        </div>
                    </div>
                </div>
                <div class="g-form-box mb-2 d-flex gap-4 w-75">
                    <div class="w-50 mb-4 g-form-input">
                        <label  class="form-label bg-white ms-2 px-2">{{ $t('BodyWeightLabel') }}</label>
                        <input type="text" class="form-control form-control-lg"  v-model="userData.profile_details.body_weight">
                    </div>
                    <div class="ms-5 w-25 text-start">
                        <div>{{ !userData.profile_details.bw_visibility ?  $t('PrivateLabel') : $t('ReleaseLabel') }}</div>
                        <div class="form-check form-switch">
                            <input class="form-check-input form-check-input-success py-3 px-4" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="userData.profile_details.bw_visibility">
                        </div>
                    </div>
                </div>
                <div class="g-form-box mb-2 d-flex gap-4 w-75">
                    <div class="w-50 mb-4 g-form-input">
                        <label  class="form-label bg-white ms-2 px-2">{{ $t('BodyFatPercentageLabel') }}</label>
                        <input type="number" class="form-control form-control-lg"  v-model="userData.profile_details.body_fat_percentage">
                    </div>
                    <div class="ms-5 w-25 text-start">
                        <div>{{ !userData.profile_details.bf_visibility ?  $t('PrivateLabel') : $t('ReleaseLabel') }}</div>
                        <div class="form-check form-switch">
                            <input class="form-check-input form-check-input-success py-3 px-4" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="userData.profile_details.bf_visibility">
                        </div>
                    </div>
                </div>
                <div class="g-form-box mb-2 d-flex gap-4 w-75">
                    <div class="w-50 mb-4 g-form-input">
                        <label  class="form-label bg-white ms-2 px-2">{{ $t('AgeLabel') }}</label>
                        <input type="text" class="form-control form-control-lg"  v-model="userData.profile_details.age">
                    </div>
                    <div class="ms-5 w-25 text-start">
                        <div>{{ !userData.profile_details.a_visibility ?  $t('PrivateLabel') : $t('ReleaseLabel') }}</div>
                        <div class="form-check form-switch">
                            <input class="form-check-input form-check-input-success py-3 px-4" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="userData.profile_details.a_visibility">
                        </div>
                    </div>
                </div>
                <div class="g-form-box mb-2 d-flex gap-4 w-75">
                    <div class="w-25 mb-4 g-form-input">
                        <label  class="form-label bg-white ms-2 px-2">{{ $t('SexLabel') }}</label>
                        <select class="form-select form-select-lg" aria-label="Default select example" v-model="userData.profile_details.sex">
                        <option :value="null" selected>Select</option>
                        <option v-for="(gender,key) in genderData" :key="key" :value="gender.value">{{ gender.text }}</option>
                        </select>
                    </div>
                    <div class="ms-5 w-25 text-start">
                         <div>{{ !userData.profile_details.s_visibility ? $t('PrivateLabel') : $t('ReleaseLabel') }}</div>
                        <div class="form-check form-switch">
                            <input class="form-check-input form-check-input-success py-3 px-4" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="userData.profile_details.s_visibility">
                        </div>
                    </div>
                </div>
            </div>
            <div class="g-form-group border-bottom py-5">
                <div class="g-form-box mb-2 d-flex gap-4 w-100">
                    <div class="w-50 mb-4 g-form-input">
                        <label  class="form-label bg-white ms-2 px-2">{{ $t('YearIStartedTrainingLabel') }}</label>
                        <input type="text" class="form-control form-control-lg"  placeholder="2001"  v-model="userData.profile_details.year_attended_training">
                    </div>
                    <div class="w-50 mb-4 g-form-input">
                        <label  class="form-label bg-white ms-2 px-2">{{ $t('DeadliftLabel') }}</label>
                        <input type="text" class="form-control form-control-lg"  placeholder="xxx" v-model="userData.profile_details.deadlift">
                    </div>
                </div>
                <div class="g-form-box mb-2 d-flex gap-4 w-100">
                    <div class="w-50 mb-4 g-form-input">
                        <label  class="form-label bg-white ms-2 px-2">{{ $t('BenchPressLabel') }}</label>
                        <input type="text" class="form-control form-control-lg"  placeholder="30kg" v-model="userData.profile_details.bench_press">
                    </div>
                    <div class="w-50 mb-4 g-form-input">
                        <label  class="form-label bg-white ms-2 px-2"> {{ $t('RespectedTraineeLabel') }}</label>
                        <input type="text" class="form-control form-control-lg"  placeholder="XXX XXX" v-model="userData.profile_details.respected_trainee">
                    </div>
                </div>
                <div class="g-form-box mb-2 d-flex gap-4 w-100">
                    <div class="w-50 mb-4 g-form-input">
                        <label  class="form-label bg-white ms-2 px-2"> {{ $t('SquatLabel') }}</label>
                        <input type="text" class="form-control form-control-lg"  placeholder="xxx" v-model="userData.profile_details.squat">
                    </div>
                </div>
            </div>
            <div class="g-form-group py-5">
                <div class="w-100 mb-4 g-form-input">
                    <label  class="form-label bg-white ms-2 px-2"> {{ $t('SelfIntroduction') }}</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="12" v-model="userData.profile_details.description"></textarea>
                </div>
                <div class="w-100 mb-4 g-form-input">
                    <label  class="form-label bg-white ms-2 px-2"> {{ $t('MyTraining') }}</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="12" v-model="userData.profile_details.my_training"></textarea>
                </div>
            </div>
            <div class="w-100 py-3 text-center">
                <div  class="d-flex justify-content-center gap-3">
                    <button @click="router.push('/me/profile')" class="w-25 btn btn-outline-secondary rounded-pill px-4">
                        {{ $t("CancelButton") }}
                    </button>
                    <button class="w-25 btn btn-primary rounded-pill px-4" @click="submitData">
                        {{ $t("ChangeButton") }}
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="is-mobile">
        <div class="g-auth-signup-title w-100 mt-2">
            <div class="h4 mt-2 text-center">{{ $t('ProfileChange') }}</div>
            <div class="text-danger mt-5">* {{ $t('RequiredInput') }}</div>
        </div>
        <div class="g-auth-signup-form mt-1">
            <div class="g-form-group border-bottom pb-5">
                <div class="mb-4 g-form-input">
                    <label  class="form-label bg-white ms-2 px-2">{{ $t('Nickname') }}*</label>
                    <input type="text" class="form-control form-control-lg"  placeholder="sample nickname" v-model="userData.name">
                </div>
                <div class="mb-4 g-form-input">
                    <label  class="form-label bg-white ms-2 px-2">{{ $t('EmailLabel') }}*</label>
                    <input type="email" class="form-control form-control-lg"  placeholder="sample@gmail.com" v-model="userData.email">
                </div>
                <div class="mb-4 g-form-input">
                    <label  class="form-label bg-white ms-2 px-2">{{ $t('PasswordLabel')}}*</label>
                    <input type="password" class="form-control form-control-lg"  placeholder="abcde12345" v-model="userData.password">
                </div>
                <div class="mb-4 g-form-input">
                    <label  class="form-label bg-white ms-2 px-2">{{ $t('InstagramAccountLabel')}}*</label>
                    <input type="text" class="form-control form-control-lg"  placeholder="@sample.ig" v-model="userData.profile_details.social_media.instagram">
                </div>
            </div>
            <div class="g-form-group border-bottom py-5 d-flex flex-wrap f10">
                <div class="g-form-box mb-2 d-flex gap-1 w-50 justify-content-between">
                    <div class="w-75 mb-4 g-form-input pe-2">
                        <label  class="form-label bg-white px-2">{{$t('HeightLabel')}}</label>
                        <input type="text" class="form-control"  v-model="userData.profile_details.height">
                    </div>
                    <div class="ms-1 w-25 text-end">
                         <div>{{ !userData.profile_details.h_visibility ?  $t('PrivateLabel') : $t('ReleaseLabel') }}</div>
                
                        <div class="form-check form-switch pull-right">
                            <input class="form-check-input form-check-input-success py-3 px-4" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="userData.profile_details.h_visibility">
                        </div>
                    </div>
                </div>
                <div class="g-form-box mb-2 d-flex gap-1 w-50 justify-content-between">
                    <div class="w-75 mb-4 g-form-input pe-2">
                        <label  class="form-label bg-white px-2">{{ $t('BodyWeightLabel')}}</label>
                        <input type="text" class="form-control"  v-model="userData.profile_details.body_weight">
                    </div>
                    <div class="ms-1 w-25 text-end">
                         <div>{{ !userData.profile_details.bw_visibility ?  $t('PrivateLabel') : $t('ReleaseLabel') }}</div>                        
                        <div class="form-check form-switch pull-right">
                            <input class="form-check-input form-check-input-success py-3 px-4" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="userData.profile_details.bw_visibility">
                        </div>
                    </div>
                </div>
                <div class="g-form-box mb-2 d-flex gap-1 w-50 justify-content-between">
                    <div class="w-75 mb-4 g-form-input pe-2">
                        <label  class="form-label bg-white px-2">{{ $t('AgeLabel') }}</label>
                        <input type="text" class="form-control"  v-model="userData.profile_details.age">
                    </div>
                    <div class="ms-1 w-25 text-end">
                        <div>{{ !userData.profile_details.a_visibility ?  $t('PrivateLabel') : $t('ReleaseLabel') }}</div>                               
                        <div class="form-check form-switch pull-right">
                            <input class="form-check-input form-check-input-success py-3 px-4" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="userData.profile_details.a_visibility">
                        </div>
                    </div>
                </div>
                <div class="g-form-box mb-2 d-flex gap-1 w-50 justify-content-between">
                    <div class="w-75 mb-4 g-form-input pe-2">
                        <label  class="form-label bg-white px-2">{{ $t('BodyFatPercentageLabel') }}</label>
                        <input type="number" class="form-control"  v-model="userData.profile_details.body_fat_percentage">
                    </div>
                    <div class="ms-1 w-25 text-end">
                        <div>{{ !userData.profile_details.bf_visibility ?  $t('PrivateLabel') : $t('ReleaseLabel') }}</div>
                        <div class="form-check form-switch pull-right">
                            <input class="form-check-input form-check-input-success py-3 px-4" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="userData.profile_details.bf_visibility">
                        </div>
                    </div>
                </div>
                <div class="g-form-box mb-2 d-flex gap-1 w-50">
                    <div class="w-75 mb-4 g-form-input pe-2">
                        <label  class="form-label bg-white px-2">{{ $t('SexLabel') }}</label>
                        <select class="form-select" aria-label="Default select example" v-model="userData.profile_details.sex">
                            <option :value="null" selected>Select</option>
                            <option v-for="(gender,key) in genderData" :key="key" :value="gender.value">{{ gender.text }}</option>
                        </select>
                    </div>
                    <div class=" w-25 text-start">
                        <div>{{ !userData.profile_details.s_visibility ?  $t('PrivateLabel') : $t('ReleaseLabel') }}</div>                        
                        <div class="form-check form-switch">
                            <input class="form-check-input form-check-input-success py-3 px-4" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="userData.profile_details.s_visibility">
                        </div>
                    </div>
                </div>
            </div>
            <div class="g-form-group border-bottom py-5 f10">
                <div class="g-form-box mb-2 d-flex gap-4 w-100 ">
                    <div class="w-50 mb-4 g-form-input">
                        <label  class="form-label bg-white ms-2 px-2">{{ $t('YearIStartedTrainingLabel') }}</label>
                        <input type="text" class="form-control form-control-lg"  placeholder="2001" v-model="userData.profile_details.year_attended_training">
                    </div>
                    <div class="w-50 mb-4 g-form-input">
                        <label  class="form-label bg-white ms-2 px-2">{{ $t('DeadliftLabel') }}</label>
                        <input type="text" class="form-control form-control-lg"  placeholder="xxx" v-model="userData.profile_details.deadlift">
                    </div>
                </div>
                <div class="g-form-box mb-2 d-flex gap-4 w-100">
                    <div class="w-50 mb-4 g-form-input">
                        <label  class="form-label bg-white ms-2 px-2">{{ $t('BenchPressLabel') }}</label>
                        <input type="text" class="form-control form-control-lg"  placeholder="30kg" v-model="userData.profile_details.bench_press">
                    </div>
                    <div class="w-50 mb-4 g-form-input">
                        <label  class="form-label bg-white ms-2 px-2">{{ $t('RespectedTraineeLabel') }}</label>
                        <input type="text" class="form-control form-control-lg"  placeholder="XXX XXX" v-model="userData.profile_details.respected_trainee">
                    </div>
                </div>
                <div class="g-form-box mb-2 d-flex gap-4 w-100">
                    <div class="w-50 mb-4 g-form-input">
                        <label  class="form-label bg-white ms-2 px-2">{{ $t('SquatLabel') }}</label>
                        <input type="text" class="form-control form-control-lg"  placeholder="xxx" v-model="userData.profile_details.squat">
                    </div>
                </div>
            </div>
            <div class="g-form-group py-5">
                <div class="w-100 mb-4 g-form-input">
                    <label  class="form-label bg-white ms-2 px-2">{{ $t('SelfIntroduction') }}</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" v-model="userData.profile_details.description"></textarea>
                </div>
                <div class="w-100 mb-4 g-form-input">
                    <label  class="form-label bg-white ms-2 px-2">{{ $t('MyTraining') }}</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" v-model="userData.profile_details.my_training"></textarea>
                </div>
            </div>
            <div class="w-100 py-1 text-center">
                <div class="d-flex justify-content-center gap-3 flex-wrap">
                    <button @click="router.push('/me/profile')" class="w-100 btn btn-outline-secondary rounded-pill ">
                        {{ $t("CancelButton") }}
                    </button>
                    <button class="w-100 btn btn-primary rounded-pill " @click="submitData">
                        {{ $t("ChangeButton") }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {

        var authStore = useAuthStore()
        var router = useRouter()
        const viewPassword = ref(false);
        var { userData } = storeToRefs(authStore)
        const genderData = ref([
            { text: "Male", value: "male" },
            { text: "Female", value: "female" },
            { text: "Other", value: "other" },
        ]);        
        var submitData = () => {
            authStore.updateProfile()
        }
        return {
            viewPassword,
            userData,
            genderData,
            submitData,
            router
        }
    },
})
</script>
<style scoped>
.g-form-input input, .g-form-input select, .g-form-input textarea{
    margin-top:-16px;
    padding: 16px 13px !important;
}

.g-form-input input::placeholder {
    color:#e4e4e4;
}


</style>