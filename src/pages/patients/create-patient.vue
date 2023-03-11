<template>
  <div>
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="page-header">
        <Breadcrumbs main="Patients" title="Create Patient" />
      </div>
      <div class="row">
        <div class="col">
          <div class="card tab2-card">
            <div class="card-body">
              <ul class="nav nav-tabs tab-coupon" id="top-tab" role="tablist">
                <div class="tab-content" id="top-tabContent">
                  <b-tabs content-class="mt-3">
                    <b-tab title="Compte" data-feather="user" active>
                      <ValidationObserver tag="form">
                        <form class="needs-validation user-add">
                          <h4>Details</h4>
                          <div class="form-group row mt-5">
                            <label for="dossiers" class="col-xl-2 col-md-4"
                              ><span>*</span> Numero de dossier</label
                            >

                            <input
                              :style="style"
                              class="input form-control col-xl-3 col-md-7"
                              id="dossiers"
                              type="text"
                              v-model="dossier"
                            />

                            <label for="structure" class="col-xl-2 col-md-4"
                              ><span>*</span>Structure</label
                            >

                            <input
                              :style="style"
                              class="input form-control col-xl-3 col-md-7"
                              id="structure"
                              type="text"
                              v-model="patient.structure"
                            />
                          </div>
                          <div class="form-group row mt-5">
                            <label for="name" class="col-xl-2 col-md-4"
                              ><span>*</span> Nom</label
                            >

                            <input
                              :style="style"
                              class="input form-control col-xl-3 col-md-7"
                              id="name"
                              type="text"
                              v-model="patient.name"
                            />
                            <label for="email" class="col-xl-2 col-md-4"
                              >Email</label
                            >

                            <input
                              :style="style"
                              class="input form-control col-xl-3 col-md-7"
                              id="email"
                              type="text"
                              v-model="patient.email"
                            />
                          </div>
                          <div class="form-group row mt-5">
                            <label for="cin" class="col-xl-2 col-md-4"
                              ><span>*</span> Numero CIN</label
                            >

                            <input
                              :style="style"
                              class="input form-control col-xl-3 col-md-7"
                              id="cin"
                              type="number"
                              v-model="patient.cin"
                            />

                            <label for="dob" class="col-xl-2 col-md-4"
                              ><span>*</span> Date de naissance</label
                            >

                            <input
                              :style="style"
                              class="input form-control col-xl-3 col-md-7"
                              id="dob"
                              type="date"
                              v-model="patient.dob"
                            />
                          </div>
                          <div class="form-group row mt-5">
                            <label for="profession" class="col-xl-2 col-md-4"
                              >Profession</label
                            >

                            <input
                              :style="style"
                              class="input form-control col-xl-3 col-md-7"
                              id="profession"
                              type="text"
                              v-model="patient.profession"
                            />

                            <label for="spouse" class="col-xl-2 col-md-4"
                              ><span>*</span> Epouse de</label
                            >

                            <input
                              :style="style"
                              class="input form-control col-xl-3 col-md-7"
                              id="spouse"
                              type="text"
                              v-model="patient.spouse"
                            />
                          </div>

                          <div class="form-group row mt-5">
                            <label for="number" class="col-xl-2 col-md-4"
                              ><span>*</span> Numero de telephone</label
                            >

                            <input
                              :style="style"
                              class="input form-control col-xl-3 col-md-7"
                              id="number"
                              type="number"
                              v-model="patient.number"
                            />
                            <label for="address" class="col-xl-2 col-md-4">
                              Addresse</label
                            >

                            <input
                              :style="style"
                              class="input form-control col-xl-3 col-md-7"
                              id="address"
                              type="text"
                              v-model="patient.address"
                            />
                          </div>
                          <div class="form-group row mt-5">
                            <label for="taille" class="col-xl-2 col-md-4"
                              ><span>*</span> Taille</label
                            >

                            <input
                              :style="style"
                              class="input form-control col-xl-3 col-md-7"
                              id="taille"
                              type="number"
                              v-model="patient.taille"
                            />
                          </div>

                          <!-- <div class="form-group row mt-5">
                          <label for="validationCustom4" class="col-xl-3 col-md-4">Photo</label>
                         <ValidationProvider rules="notempty" v-slot="{ errors }" class="col-xl-3 col-md-7" >

                          <input  :style="style" class="input form-control col-xl-8 col-md-7" id="validationCustom4" type="file"
                             />
  <span>{{ errors[0] }}</span>
</ValidationProvider>                        </div> -->
                          <div class="pull-right">
                            <button
                              type="button"
                              v-show="!loading"
                              class="btn btn-primary"
                              @click="onComplete()"
                            >
                              Ajouter
                            </button>
                            <button
                              type="button"
                              v-show="loading"
                              class="btn btn-primary"
                              disabled
                            >
                              Chargement
                            </button>
                          </div>
                        </form>
                      </ValidationObserver>
                    </b-tab>
                  </b-tabs>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Container-fluid Ends-->
</template>

<script setup lang="ts">
import { authenticationStore } from "@/store/authentication";
import { Patient } from "@/types/Patient";
import { ref } from "vue";
import { useRouter } from "vue-router";

import patientService from "../../services/patient";
const authStore = authenticationStore();
const router = useRouter();
const style = ref("");
const patient = new Patient(authStore.userData!.id);
const dossier = ref("");
const errorCnt = ref(0);
const loading = ref(false);

const onComplete = async () => {
  loading.value = true;

  const hasError = await validateForm();
  if (!hasError) {
    patient.dossiers.push(dossier.value);
    await patientService.registerPatient(patient).then(() => {
      router.push("/patients/patient-lists");
    });
  } else {
    loading.value = false;
  }
};

const validateForm = async () => {
  let error = false;

  return new Promise((resolve, reject) => {
    for (const [key, value] of Object.entries(patient)) {
      switch (key) {
        case "email":
          // eslint-disable-next-line no-case-declarations
          const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
          if (!regex.test(patient[key])) {
            redifyError(key);
          } else {
            fixError(key);
          }

          break;

        case "dossiers":
          if (dossier.value == "" || undefined || null) {
            redifyError(key);
          } else {
            fixError(key);
          }

          break;

        default:
          if (value == "" || undefined || null) {
            redifyError(key);
          } else {
            fixError(key);
          }
          break;
      }
    }
    if (errorCnt.value > 0) {
      resolve(true);
    } else {
      resolve(false);
    }
  });
};
const redifyError = (idName: string) => {
  if (idName !== "date" && idName !== "enable") {
    errorCnt.value++;

    const element = document.getElementById(idName);
    element!.style.borderBlockColor = "red";
  }
};
const fixError = (idName: string) => {
  if (idName !== "date" && idName !== "enable") {
    errorCnt.value--;

    const element = document.getElementById(idName);
    element!.style.borderBlockColor = "green";
  }
};
</script>
<style scoped></style>
