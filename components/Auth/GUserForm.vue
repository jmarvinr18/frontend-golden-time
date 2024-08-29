<template>
    <div class="is-desktop">
        <div class="g-auth-signup-form mt-5">
            <div class="g-form-group border-bottom pb-5">
                <div class="mb-4 g-form-input">
                    <label  class="form-label bg-white ms-2 px-2">{{ $t('Nickname') }}*</label>
                    <input type="text" class="form-control form-control-lg" :placeholder="$t('NicknamePlaceholder')" v-model="dataObj.name">
                </div>
                <div class="mb-4 g-form-input">
                    <label  class="form-label bg-white ms-2 px-2">{{ $t('EmailLabel') }}*</label>
                    <input type="email" class="form-control form-control-lg"  :placeholder="$t('EmailRegisterPlaceholder', { account: 'aaa', domain: 'domain.com' })" v-model="dataObj.email">
                </div>
                <div v-if="!edit" class="mb-4 g-form-input position-relative">
                    <label  class="form-label bg-white ms-2 px-2">{{ $t('PasswordConfirmationLabel')}}*</label>
                    <input :type="viewPassword? 'text':'password'" class="form-control form-control-lg" placeholder="Password" v-model="dataObj.password">
                    <div class="position-absolute end-0 me-3" style="margin-top:-50px" @click="viewPassword=!viewPassword">
                        <i v-if="!viewPassword" class="bi h3 bi-eye"></i>
                        <i v-else class="bi h3 bi-eye-slash"></i>
                    </div>
                </div>
                <div v-if="!edit" class="mb-4 g-form-input position-relative">
                    <label  class="form-label bg-white ms-2 px-2">{{ $t('PasswordConfirmationLabel')}}*</label>
                    <input :type="viewConfirmPassword? 'text':'password'" class="form-control form-control-lg"  placeholder="password" v-model="dataObj.password_confirmation">
                    <div class="position-absolute end-0 me-3" style="margin-top:-50px" @click="viewConfirmPassword=!viewConfirmPassword">
                        <i v-if="!viewConfirmPassword" class="bi h3 bi-eye"></i>
                        <i v-else class="bi h3 bi-eye-slash"></i>
                    </div>
                </div>
                <div class="mb-4 g-form-input">
                    <label  class="form-label bg-white ms-2 px-2">{{ $t('InstagramAccountLabel')}}</label>
                    <input type="text" class="form-control form-control-lg" :placeholder="$t('InstagramIdPlaceholder')" v-model="dataObj.profile_details.social_media.instagram">
                </div>
            </div>
            <div class="g-form-group border-bottom py-5">
                <div class="g-form-box mb-2 d-flex gap-4 w-75">
                    <div class="w-50 mb-4 g-form-input">
                        <label  class="form-label bg-white ms-2 px-2">{{ $t('HeightLabel') }}</label>
                        <input type="number" class="form-control form-control-lg"  v-model="dataObj.profile_details.height" :placeholder="$t('HeightPlaceholder')">
                    </div>
                    <div class="ms-5 w-25 text-start">
                        <div>{{ !dataObj.profile_details.h_visibility ?  $t('PrivateLabel') : $t('ReleaseLabel') }}</div>
                        <div class="form-check form-switch">
                            <input class="form-check-input form-check-input-success py-3 px-4" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="dataObj.profile_details.h_visibility">
                        </div>
                    </div>
                </div>
                <div class="g-form-box mb-2 d-flex gap-4 w-75">
                    <div class="w-50 mb-4 g-form-input">
                        <label  class="form-label bg-white ms-2 px-2">{{ $t('BodyWeightLabel') }}</label>
                        <input type="number" class="form-control form-control-lg"  v-model="dataObj.profile_details.body_weight" :placeholder="$t('BodyWeightPlaceholder')">
                    </div>
                    <div class="ms-5 w-25 text-start">
                        <div>{{ !dataObj.profile_details.bw_visibility ?  $t('PrivateLabel') : $t('ReleaseLabel') }}</div>
                        <div class="form-check form-switch">
                            <input class="form-check-input form-check-input-success py-3 px-4" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="dataObj.profile_details.bw_visibility">
                        </div>
                    </div>
                </div>
                <div class="g-form-box mb-2 d-flex gap-4 w-75">
                    <div class="w-50 mb-4 g-form-input">
                        <label  class="form-label bg-white ms-2 px-2">{{ $t('BodyFatPercentageLabel') }}</label>
                        <input type="number" class="form-control form-control-lg"  v-model="dataObj.profile_details.body_fat_percentage" :placeholder="$t('BodyFatPlaceholder')">
                    </div>
                    <div class="ms-5 w-25 text-start">
                        <div>{{ !dataObj.profile_details.bf_visibility ?  $t('PrivateLabel') : $t('ReleaseLabel') }}</div>
                        <div class="form-check form-switch">
                            <input class="form-check-input form-check-input-success py-3 px-4" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="dataObj.profile_details.bf_visibility">
                        </div>
                    </div>
                </div>
                <div class="g-form-box mb-2 d-flex gap-4 w-75">
                    <div class="w-50 mb-4 g-form-input">
                        <label  class="form-label bg-white ms-2 px-2">{{ $t('BirthDateLable') }}</label>
                        <input type="date" class="form-control form-control-lg"  v-model="dataObj.profile_details.birth_date">
                    </div>
                    <div class="ms-5 w-25 text-start">
                        <div>{{ !dataObj.profile_details.a_visibility ?  $t('PrivateLabel') : $t('ReleaseLabel') }}</div>
                        <div class="form-check form-switch">
                            <input class="form-check-input form-check-input-success py-3 px-4" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="dataObj.profile_details.a_visibility">
                        </div>
                    </div>
                </div>
                <div class="g-form-box mb-2 d-flex gap-4 w-75">
                    <div class="w-50 mb-4 g-form-input">
                        <label  class="form-label bg-white ms-2 px-2">{{ $t('SexLabel') }}</label>
                        <select class="form-select form-select-lg" aria-label="Default select example" v-model="dataObj.profile_details.sex">
                            <option :value="null" selected>Select</option>
                            <option v-for="(gender,key) in genderData" :key="key" :value="gender.value">{{ gender.text }}</option>
                        </select>
                    </div>
                    <div class="ms-5 w-25 text-start">
                         <div>{{ !dataObj.profile_details.s_visibility ? $t('PrivateLabel') : $t('ReleaseLabel') }}</div>
                        <div class="form-check form-switch">
                            <input class="form-check-input form-check-input-success py-3 px-4" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="dataObj.profile_details.s_visibility">
                        </div>
                    </div>
                </div>
            </div>
            <div class="g-form-group border-bottom py-5">
                <div class="g-form-box mb-2 d-flex gap-4 w-100">
                    <div class="w-50 mb-4 g-form-input">
                        <label  class="form-label bg-white ms-2 px-2">{{ $t('YearIStartedTrainingLabel') }}</label>
                        <input type="date" class="form-control form-control-lg"  v-model="dataObj.profile_details.year_attended_training"  :placeholder="$t('YearIStartedPlaceholder')">
                    </div>
                    <div class="w-50 mb-4 g-form-input">
                        <label  class="form-label bg-white ms-2 px-2">{{ $t('DeadliftLabel') }}</label>
                        <input type="number" class="form-control form-control-lg" v-model="dataObj.profile_details.deadlift" :placeholder="$t('DeadliftPlaceholder')">
                    </div>
                </div>
                <div class="g-form-box mb-2 d-flex gap-4 w-100">
                    <div class="w-50 mb-4 g-form-input">
                        <label  class="form-label bg-white ms-2 px-2">{{ $t('BenchPressLabel') }}</label>
                        <input type="number" class="form-control form-control-lg" v-model="dataObj.profile_details.bench_press" :placeholder="$t('BenchPressPlaceholder')">
                    </div>
                    <div class="w-50 mb-4 g-form-input">
                        <label  class="form-label bg-white ms-2 px-2"> {{ $t('RespectedTraineeLabel') }}</label>
                        <input type="text" class="form-control form-control-lg" :placeholder="$t('RespectTraineePlaceholder')" v-model="dataObj.profile_details.respected_trainee">
                    </div>
                </div>
                <div class="g-form-box mb-2 d-flex gap-4 w-100">
                    <div class="w-50 mb-4 g-form-input">
                        <label  class="form-label bg-white ms-2 px-2"> {{ $t('SquatLabel') }}</label>
                        <input type="number" class="form-control form-control-lg" :placeholder="$t('SquatPlaceholder')" v-model="dataObj.profile_details.squat">
                    </div>
                </div>
            </div>
            <div class="g-form-group py-5">
                <div class="w-100 mb-4 g-form-input">
                    <label  class="form-label bg-white ms-2 px-2"> {{ $t('SelfIntroduction') }}</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="12" v-model="dataObj.profile_details.description" :placeholder="$t('SelfIntroPlaceholder')"></textarea>
                </div>
                <div class="w-100 mb-4 g-form-input">
                    <label  class="form-label bg-white ms-2 px-2"> {{ $t('MyTraining') }}</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="12" v-model="dataObj.profile_details.my_training" :placeholder="$t('MyTrainingPlaceholder')"></textarea>
                </div>
            </div>
            <div class="w-100 py-3 text-center">
                <button  class="btn btn-primary g-shadow rounded-pill px-4" @click="submitData">
                    {{ $t("CreateNewButton") }}
                    <i class="ms-2 bi bi-plus-lg"></i>
                </button>
            </div>
        </div>
    </div>
    <div class="is-mobile">
        <div class="g-auth-signup-form mt-1">
            <div class="g-form-group border-bottom pb-5">
                <div class="mb-4 g-form-input">
                    <label  class="form-label bg-white ms-2 px-2">{{ $t('Nickname') }}*</label>
                    <input type="text" class="form-control form-control-lg" v-model="dataObj.name" :placeholder="$t('NicknamePlaceholder')">
                </div>
                <div class="mb-4 g-form-input">
                    <label  class="form-label bg-white ms-2 px-2">{{ $t('EmailLabel') }}*</label>
                    <input type="email" class="form-control form-control-lg" v-model="dataObj.email" placeholder="aaa@gmail.com">
                </div>
                <div v-if="!edit" class="mb-4 g-form-input position-relative">
                    <label class="form-label bg-white ms-2 px-2">{{ $t('PasswordLabel')}}*</label>
                    <input :type="viewPassword? 'text':'password'" class="form-control form-control-lg" v-model="dataObj.password" :placeholder="$t('PasswordPlaceholder')">
                    <div class="position-absolute end-0 me-3" style="margin-top:-50px" @click="viewPassword=!viewPassword">
                        <i v-if="!viewPassword" class="bi h3 bi-eye"></i>
                        <i v-else class="bi h3 bi-eye-slash"></i>
                    </div>               
                </div>    
                <div v-if="!edit" class="mb-4 g-form-input position-relative">
                    <label  class="form-label bg-white ms-2 px-2">{{ $t('PasswordConfirmationLabel')}}*</label>
                    <input :type="viewConfirmPassword? 'text':'password'" class="form-control form-control-lg" v-model="dataObj.password_confirmation" :placeholder="$t('PasswordPlaceholder')">
                    <div class="position-absolute end-0 me-3" style="margin-top:-50px" @click="viewConfirmPassword=!viewConfirmPassword">
                        <i v-if="!viewConfirmPassword" class="bi h3 bi-eye"></i>
                        <i v-else class="bi h3 bi-eye-slash"></i>
                    </div>              
                </div>                            
                <div class="mb-4 g-form-input">
                    <label class="form-label bg-white ms-2 px-2">{{ $t('InstagramAccountLabel')}}</label>
                    <input type="text" class="form-control form-control-lg" v-model="dataObj.profile_details.social_media.instagram" :placeholder="$t('InstagramIdPlaceholder')">
                </div>
            </div>
            <div class="g-form-group border-bottom py-5 d-flex flex-wrap f10">
                <div class="row w-100">
                    <div class="col-8 mb-4 g-form-input pe-2">
                        <label class="form-label bg-white px-2">{{$t('HeightLabel')}}</label>
                        <input type="number" class="form-control"  v-model="dataObj.profile_details.height" :placeholder="$t('HeightPlaceholder')">
                    </div>
                    <div class="col-4 ms-1 w-25 text-end">
                         <div>{{ !dataObj.profile_details.h_visibility ?  $t('PrivateLabel') : $t('ReleaseLabel') }}</div>
                
                        <div class="form-check form-switch pull-right">
                            <input class="form-check-input form-check-input-success py-3 px-4" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="dataObj.profile_details.h_visibility">
                        </div>
                    </div>
                </div>
                <div class="row w-100">
                    <div class="col-8 mb-4 g-form-input pe-2">
                        <label  class="form-label bg-white px-2">{{ $t('BodyWeightLabel')}}</label>
                        <input type="number" class="form-control" v-model="dataObj.profile_details.body_weight" :placeholder="$t('BodyWeightPlaceholder')">
                    </div>
                    <div class="col-4 ms-1 w-25 text-end">
                         <div>{{ !dataObj.profile_details.bw_visibility ?  $t('PrivateLabel') : $t('ReleaseLabel') }}</div>                        
                        <div class="form-check form-switch pull-right">
                            <input class="form-check-input form-check-input-success py-3 px-4" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="dataObj.profile_details.bw_visibility">
                        </div>
                    </div>
                </div>
                <div class="row w-100">
                    <div class="col-8 mb-4 g-form-input pe-2">
                        <label  class="form-label bg-white px-2">{{ $t('BirthDateLable') }}</label>
                        <input type="date" class="form-control"  v-model="dataObj.profile_details.birth_date" :placeholder="$t('BirthDatePlaceholder')">
                    </div>
                    <div class="col-4 ms-1 w-25 text-end">
                        <div>{{ !dataObj.profile_details.a_visibility ?  $t('PrivateLabel') : $t('ReleaseLabel') }}</div>                               
                        <div class="form-check form-switch pull-right">
                            <input class="form-check-input form-check-input-success py-3 px-4" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="dataObj.profile_details.a_visibility">
                        </div>
                    </div>
                </div>
                <div class="row w-100">
                    <div class="col-8 mb-4 g-form-input pe-2">
                        <label  class="form-label bg-white px-2">{{ $t('BodyFatPercentageLabel') }}</label>
                        <input type="number" class="form-control" v-model="dataObj.profile_details.body_fat_percentage" :placeholder="$t('BodyFatPlaceholder')">
                    </div>
                    <div class="col-4 ms-1 w-25 text-end">
                        <div>{{ !dataObj.profile_details.bf_visibility ?  $t('PrivateLabel') : $t('ReleaseLabel') }}</div>
                        <div class="form-check form-switch pull-right">
                            <input class="form-check-input form-check-input-success py-3 px-4" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="dataObj.profile_details.bf_visibility">
                        </div>
                    </div>
                </div>
                <div class="row w-100">
                    <div class="col-8 mb-4 g-form-input pe-2">
                        <label  class="form-label bg-white px-2">{{ $t('SexLabel') }}</label>
                        <select class="w-100 form-select" aria-label="Default select example" v-model="dataObj.profile_details.sex">
                            <option :value="null" selected>Select</option>
                            <option v-for="(gender,key) in genderData" :key="key" :value="gender.value">{{ gender.text }}</option>
                        </select>
                    </div>
                    <div class="col-4 ms-1 w-25 text-end">
                        <div>{{ !dataObj.profile_details.s_visibility ?  $t('PrivateLabel') : $t('ReleaseLabel') }}</div>                        
                        <div class="form-check form-switch pull-right">
                            <input class="form-check-input form-check-input-success py-3 px-4" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="dataObj.profile_details.s_visibility">
                        </div>
                    </div>
                </div>
            </div>
            <div class="g-form-group border-bottom py-5 f10">
                <div class="g-form-box mb-2 d-flex flex-column gap-4 w-100 ">
                    <div class="w-100 mb-4 g-form-input">
                        <label  class="form-label bg-white ms-2 px-2">{{ $t('YearIStartedTrainingLabel') }}</label>
                        <input type="date" class="form-control form-control-lg"  :placeholder="$t('YearIStartedPlaceholder')" v-model="dataObj.profile_details.year_attended_training">
                    </div>
                    <div class="w-100 mb-4 g-form-input">
                        <label  class="form-label bg-white ms-2 px-2">{{ $t('DeadliftLabel') }}</label>
                        <input type="number" class="form-control form-control-lg"  :placeholder="$t('DeadliftPlaceholder')" v-model="dataObj.profile_details.deadlift">
                    </div>
                </div>
                <div class="g-form-box mb-2 d-flex flex-column gap-4 w-100">
                    <div class="w-100 mb-4 g-form-input">
                        <label class="form-label bg-white ms-2 px-2">{{ $t('BenchPressLabel') }}</label>
                        <input type="number" class="form-control form-control-lg" v-model="dataObj.profile_details.bench_press" :placeholder="$t('BenchPressPlaceholder')">
                    </div>
                    <div class="w-100 mb-4 g-form-input">
                        <label  class="form-label bg-white ms-2 px-2">{{ $t('RespectedTraineeLabel') }}</label>
                        <input type="text" class="form-control form-control-lg"  v-model="dataObj.profile_details.respected_trainee"  :placeholder="$t('RespectTraineePlaceholder')">
                    </div>
                </div>
                <div class="g-form-box mb-2 d-flex gap-4 w-100">
                    <div class="w-100 mb-4 g-form-input">
                        <label  class="form-label bg-white ms-2 px-2">{{ $t('SquatLabel') }}</label>
                        <input type="number" class="form-control form-control-lg" v-model="dataObj.profile_details.squat" :placeholder="$t('SquatPlaceholder')">
                    </div>
                </div>
            </div>
            <div class="g-form-group py-5">
                <div class="w-100 mb-4 g-form-input">
                    <label  class="form-label bg-white ms-2 px-2">{{ $t('SelfIntroduction') }}</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" v-model="dataObj.profile_details.description" :placeholder="$t('SelfIntroPlaceholder')"></textarea>
                </div>
                <div class="w-100 mb-4 g-form-input">
                    <label  class="form-label bg-white ms-2 px-2">{{ $t('MyTraining') }}</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" v-model="dataObj.profile_details.my_training"  :placeholder="$t('MyTrainingPlaceholder')"></textarea>
                </div>
            </div>
            <div class="w-100 py-1 text-center">
                <button class="w-100 btn btn-primary g-shadow rounded-pill " @click="submitData">
                    {{ $t("CreateNewButton") }}
                    <i class="ms-2 bi bi-plus-lg"></i>
                </button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { useAuthStore } from "~/stores/GStoreAuth";
import { useI18n } from "vue-i18n";

export default defineComponent({
    props: {
        edit: {
            type: Boolean,
            default() {
                return false;
            }
        }
    },
    setup(props) {
        const authStore = useAuthStore();
        const { registrationForm, userData } = storeToRefs(authStore);
        const viewPassword = ref(false);
        const viewConfirmPassword = ref(false);
        const {t} = useI18n();
        const dataObj = ref(registrationForm.value);

        onMounted(async () => {
            if (props.edit) {
                await authStore.getProfile(userData.value.id, "?action=edit").then(() => {
                    dataObj.value = userData.value
                })
            } else {
                dataObj.value = registrationForm.value;
            }
        })

        const genderData = ref([
            { value: "male", text: t("GenderMale") },
            { value: "female", text: t("GenderFemale") },
            { value: "other", text: t("GenderOther") },
        ]);

        const submitData = () => {
            if (props.edit) {
                if (userData.value.profile_details.image) {
                    dataObj.value.profile_details.image = userData.value.profile_details.image;
                }
                authStore.updateProfile(dataObj.value);
            } else {
                authStore.register().then((res) => {
                    localStorage.setItem("gtuserid", res.data.id);
                });    
            }
        }

        return {
            dataObj,
            genderData,
            viewPassword,
            viewConfirmPassword,
            submitData
        }
    }
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