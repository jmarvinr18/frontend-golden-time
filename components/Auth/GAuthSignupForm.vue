<template>
    <div class="is-desktop">
        <div class="g-auth-signup-title w-100 mt-5">
            <div class="h3 mt-5">{{ mode=='signup'? 'Register a new account':'Profile change' }}</div>
            <div class="text-danger mt-5">* Required input</div>
        </div>
        <div class="g-auth-signup-form mt-5">
            <div class="g-form-group border-bottom pb-5">
                <div class="mb-4 g-form-input">
                    <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">nickname*</label>
                    <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="sample nickname" v-model="formData.name">
                </div>
                <div class="mb-4 g-form-input">
                    <label for="g-auth-form-2" class="form-label bg-white ms-2 px-2">email Address*</label>
                    <input type="email" class="form-control form-control-lg" id="g-auth-form-2" placeholder="sample@gmail.com"
                    v-model="formData.email">
                </div>
                <div class="mb-4 g-form-input">
                    <label for="g-auth-form-2" class="form-label bg-white ms-2 px-2">password*</label>
                    <input type="password" class="form-control form-control-lg" id="g-auth-form-2" placeholder="abcde12345"
                    v-model="formData.password">
                </div>
                <div class="mb-4 g-form-input">
                    <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Instagram account*</label>
                    <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="@sample.ig"
                    v-model="profileData.social_media.instagram">
                </div>
            </div>
            <div class="g-form-group border-bottom py-5">
                <div class="g-form-box mb-2 d-flex gap-4 w-75">
                    <div class="w-50 mb-4 g-form-input">
                        <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">height</label>
                        <input type="text" class="form-control form-control-lg" id="g-auth-form-1" v-model="profileData.height">
                    </div>
                    <div class="ms-5 w-25 text-start">
                        <div>Release</div>
                        <div class="form-check form-switch">
                            <input class="form-check-input form-check-input-success py-3 px-4" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="profileData.h_visibility">
                        </div>
                    </div>
                </div>
                <div class="g-form-box mb-2 d-flex gap-4 w-75">
                    <div class="w-50 mb-4 g-form-input">
                        <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">body weight</label>
                        <input type="text" class="form-control form-control-lg" id="g-auth-form-1" v-model="profileData.body_weight">
                    </div>
                    <div class="ms-5 w-25 text-start">
                        <div>Private</div>
                        <div class="form-check form-switch">
                            <input class="form-check-input form-check-input-success py-3 px-4" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="profileData.bw_visibility">
                        </div>
                    </div>
                </div>
                <div class="g-form-box mb-2 d-flex gap-4 w-75">
                    <div class="w-50 mb-4 g-form-input">
                        <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">body fat percentage</label>
                        <input type="number" class="form-control form-control-lg" id="g-auth-form-1" v-model="profileData.body_fat_percentage">
                    </div>
                    <div class="ms-5 w-25 text-start">
                        <div>Private</div>
                        <div class="form-check form-switch">
                            <input class="form-check-input form-check-input-success py-3 px-4" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="profileData.bf_visibility">
                        </div>
                    </div>
                </div>
                <div class="g-form-box mb-2 d-flex gap-4 w-75">
                    <div class="w-50 mb-4 g-form-input">
                        <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">age</label>
                        <input type="text" class="form-control form-control-lg" id="g-auth-form-1" v-model="profileData.age">
                    </div>
                    <div class="ms-5 w-25 text-start">
                        <div>Private</div>
                        <div class="form-check form-switch">
                            <input class="form-check-input form-check-input-success py-3 px-4" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="profileData.a_visibility">
                        </div>
                    </div>
                </div>
                <div class="g-form-box mb-2 d-flex gap-4 w-75">
                    <div class="w-25 mb-4 g-form-input">
                        <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">sex</label>
                        <select class="form-select form-select-lg" aria-label="Default select example" v-model="profileData.sex">
                        <option selected>Select</option>
                        <option v-for="(gender,key) in genderData" :key="key" :value="gender.value">{{ gender.text }}</option>
                        </select>
                    </div>
                    <div class="ms-5 w-25 text-start">
                        <div>Private</div>
                        <div class="form-check form-switch">
                            <input class="form-check-input form-check-input-success py-3 px-4" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="profileData.s_visibility">
                        </div>
                    </div>
                </div>
            </div>
            <div class="g-form-group border-bottom py-5">
                <div class="g-form-box mb-2 d-flex gap-4 w-100">
                    <div class="w-50 mb-4 g-form-input">
                        <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Year I started training</label>
                        <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="2001"  v-model="profileData.year_attended_training">
                    </div>
                    <div class="w-50 mb-4 g-form-input">
                        <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">deadlift</label>
                        <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="xxx" v-model="profileData.deadlift">
                    </div>
                </div>
                <div class="g-form-box mb-2 d-flex gap-4 w-100">
                    <div class="w-50 mb-4 g-form-input">
                        <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">bench press</label>
                        <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="30kg" v-model="profileData.bench_press">
                    </div>
                    <div class="w-50 mb-4 g-form-input">
                        <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Respected trainee</label>
                        <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="XXX XXX" v-model="profileData.respected_trainee">
                    </div>
                </div>
                <div class="g-form-box mb-2 d-flex gap-4 w-100">
                    <div class="w-50 mb-4 g-form-input">
                        <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">squat</label>
                        <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="xxx" v-model="profileData.squat">
                    </div>
                </div>
            </div>
            <div class="g-form-group py-5">
                <div class="w-100 mb-4 g-form-input">
                    <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">self-introduction</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="12" v-model="profileData.description"></textarea>
                </div>
                <div class="w-100 mb-4 g-form-input">
                    <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">my training</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="12" v-model="profileData.my_training"></textarea>
                </div>
            </div>
            <div class="w-100 py-3 text-center">
                <button v-if="mode=='signup'" class="btn btn-primary g-shadow rounded-pill px-4" @click="submitData">
                    Create New
                    <i class="ms-2 bi bi-plus-lg"></i>
                </button>
                <div v-else class="d-flex justify-content-center gap-3">
                    <button class="w-25 btn btn-outline-secondary rounded-pill px-4">
                        cancel
                    </button>
                    <button class="w-25 btn btn-primary rounded-pill px-4" @click="submitData">
                        change
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="is-mobile">
        <div class="g-auth-signup-title w-100 mt-2">
            <div class="h4 mt-2 text-center">{{ mode=='signup'? 'Register a new account':'Profile change' }}</div>
            <div class="text-danger mt-5">* Required input</div>
        </div>
        <div class="g-auth-signup-form mt-1">
            <div class="g-form-group border-bottom pb-5">
                <div class="mb-4 g-form-input">
                    <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">nickname*</label>
                    <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="sample nickname" v-model="formData.name">
                </div>
                <div class="mb-4 g-form-input">
                    <label for="g-auth-form-2" class="form-label bg-white ms-2 px-2">email Address*</label>
                    <input type="email" class="form-control form-control-lg" id="g-auth-form-2" placeholder="sample@gmail.com" v-model="formData.email">
                </div>
                <div class="mb-4 g-form-input">
                    <label for="g-auth-form-2" class="form-label bg-white ms-2 px-2">password*</label>
                    <input type="password" class="form-control form-control-lg" id="g-auth-form-2" placeholder="abcde12345" v-model="formData.password">
                </div>
                <div class="mb-4 g-form-input">
                    <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Instagram account*</label>
                    <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="@sample.ig" v-model="profileData.social_media.instagram">
                </div>
            </div>
            <div class="g-form-group border-bottom py-5 d-flex flex-wrap f10">
                <div class="g-form-box mb-2 d-flex gap-1 w-50 justify-content-between">
                    <div class="w-75 mb-4 g-form-input pe-2">
                        <label for="g-auth-form-1" class="form-label bg-white px-2">height</label>
                        <input type="text" class="form-control" id="g-auth-form-1" v-model="profileData.height">
                    </div>
                    <div class="ms-1 w-25 text-end">
                        <div>Private</div>
                        <div class="form-check form-switch pull-right">
                            <input class="form-check-input form-check-input-success py-3 px-4" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="profileData.h_visibility">
                        </div>
                    </div>
                </div>
                <div class="g-form-box mb-2 d-flex gap-1 w-50 justify-content-between">
                    <div class="w-75 mb-4 g-form-input pe-2">
                        <label for="g-auth-form-1" class="form-label bg-white px-2">body weight</label>
                        <input type="text" class="form-control" id="g-auth-form-1" v-model="profileData.body_weight">
                    </div>
                    <div class="ms-1 w-25 text-end">
                        <div>Private</div>
                        <div class="form-check form-switch pull-right">
                            <input class="form-check-input form-check-input-success py-3 px-4" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="profileData.bw_visibility">
                        </div>
                    </div>
                </div>
                <div class="g-form-box mb-2 d-flex gap-1 w-50 justify-content-between">
                    <div class="w-75 mb-4 g-form-input pe-2">
                        <label for="g-auth-form-1" class="form-label bg-white px-2">age</label>
                        <input type="text" class="form-control" id="g-auth-form-1" v-model="profileData.age">
                    </div>
                    <div class="ms-1 w-25 text-end">
                        <div>Private</div>
                        <div class="form-check form-switch pull-right">
                            <input class="form-check-input form-check-input-success py-3 px-4" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="profileData.a_visibility">
                        </div>
                    </div>
                </div>
                <div class="g-form-box mb-2 d-flex gap-1 w-50 justify-content-between">
                    <div class="w-75 mb-4 g-form-input pe-2">
                        <label for="g-auth-form-1" class="form-label bg-white px-2">body fat percentage</label>
                        <input type="number" class="form-control" id="g-auth-form-1" v-model="profileData.body_fat_percentage">
                    </div>
                    <div class="ms-1 w-25 text-end">
                        <div>Private</div>
                        <div class="form-check form-switch pull-right">
                            <input class="form-check-input form-check-input-success py-3 px-4" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="profileData.bf_visibility">
                        </div>
                    </div>
                </div>
                <div class="g-form-box mb-2 d-flex gap-1 w-50">
                    <div class="w-75 mb-4 g-form-input pe-2">
                        <label for="g-auth-form-1" class="form-label bg-white px-2">sex</label>
                        <select class="form-select" aria-label="Default select example" v-model="profileData.sex">
                        <option selected>Select</option>
                        <option v-for="(gender,key) in genderData" :key="key" :value="gender.value">{{ gender.text }}</option>
                        </select>
                    </div>
                    <div class=" w-25 text-start">
                        <div>Private</div>
                        <div class="form-check form-switch">
                            <input class="form-check-input form-check-input-success py-3 px-4" type="checkbox" role="switch" id="flexSwitchCheckChecked" v-model="profileData.s_visibility">
                        </div>
                    </div>
                </div>
            </div>
            <div class="g-form-group border-bottom py-5 f10">
                <div class="g-form-box mb-2 d-flex gap-4 w-100 ">
                    <div class="w-50 mb-4 g-form-input">
                        <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Year I started training</label>
                        <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="2001" v-model="profileData.year_attended_training">
                    </div>
                    <div class="w-50 mb-4 g-form-input">
                        <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">deadlift</label>
                        <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="xxx" v-model="profileData.deadlift">
                    </div>
                </div>
                <div class="g-form-box mb-2 d-flex gap-4 w-100">
                    <div class="w-50 mb-4 g-form-input">
                        <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">bench press</label>
                        <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="30kg" v-model="profileData.bench_press">
                    </div>
                    <div class="w-50 mb-4 g-form-input">
                        <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">Respected trainee</label>
                        <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="XXX XXX" v-model="profileData.respected_trainee">
                    </div>
                </div>
                <div class="g-form-box mb-2 d-flex gap-4 w-100">
                    <div class="w-50 mb-4 g-form-input">
                        <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">squat</label>
                        <input type="text" class="form-control form-control-lg" id="g-auth-form-1" placeholder="xxx" v-model="profileData.squat">
                    </div>
                </div>
            </div>
            <div class="g-form-group py-5">
                <div class="w-100 mb-4 g-form-input">
                    <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">self-introduction</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" v-model="profileData.description"></textarea>
                </div>
                <div class="w-100 mb-4 g-form-input">
                    <label for="g-auth-form-1" class="form-label bg-white ms-2 px-2">my training</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" v-model="profileData.my_training"></textarea>
                </div>
            </div>
            <div class="w-100 py-1 text-center">
                <button v-if="mode=='signup'" class="w-100 btn btn-primary g-shadow rounded-pill" @click="submitData">
                    Create New
                    <i class="ms-2 bi bi-plus-lg"></i>
                </button>
                <div v-else class="d-flex justify-content-center gap-3 flex-wrap">
                    <button class="w-100 btn btn-outline-secondary rounded-pill ">
                        cancel
                    </button>
                    <button class="w-100 btn btn-primary rounded-pill" @click="submitData">
                        change
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { useAuthStore } from "~/stores/GStoreAuth";
export default defineComponent({
    props: {
        mode: {
            type: String,
            default: 'signup', // or edit
        },
    },
    setup(props) {
        const authStore = useAuthStore();


        const formData = ref({
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            role: "basic",
        });

        const profileData = ref({
            id: "",
            social_media: {
                "instagram": null
            },
            description: null,
            my_training: null,
            height: null,
            h_visibility: "private",
            body_weight: null,
            bw_visibility: "private",
            body_fat_percentage: "0.00",
            bf_visibility: "private",
            age: 0,
            a_visibility: "private",
            sex: null,
            s_visibility: "private",
            year_attended_training: null,
            bench_press: null,
            deadlift: null,
            squat: null,
            respected_trainee: null
        });

        const genderData = ref([
            { text: "Male", value: "male" },
            { text: "Female", value: "female" },
            { text: "Other", value: "other" },
        ]);

        const submitData = () => {
            try {
                formData.value.password_confirmation = formData.value.password;
                if (formData.value.name && formData.value.email) {
                    const allData = {...formData.value, profile_details: {...profileData.value}};
                    
                    if (props.mode == "edit") {
                        saveChanges(allData);
                    } else {
                        if (formData.value.password && formData.value.password_confirmation) {
                            signUpProcess(allData);
                        }
                    }
                }
            } catch(err:any) {

            }
        }

        const saveChanges = (data:any) => {
            authStore.updateProfile(data);
        }

        const signUpProcess = (data:any) => {
            authStore.registrationStepOne(data).then((res:any) => {
                const resData = res.data;
                console.log(resData);
                profileData.value.id = resData.id;
                
                // authStore.registrationStepTwo(profileData.value);
            });
        }

        onMounted(() => {
            const savedProfile = JSON.parse(localStorage.getItem("profile"));
            authStore.getProfile(savedProfile.id).then((res:any) => {
                formData.value = res;
                profileData.value.social_media = JSON.parse(res.profile_details.social_media);
                // profileData.value = res.profile_details;
            })
        });

        return {
            formData,
            profileData,
            genderData,
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