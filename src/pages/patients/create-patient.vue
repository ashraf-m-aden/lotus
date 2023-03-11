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
                              v-model="dossier" />

                            <label for="structure" class="col-xl-2 col-md-4"
                              ><span>*</span>Structure</label
                            >

                            <input
                              :style="style"
                              class="input form-control col-xl-3 col-md-7"
                              id="structure"
                              type="text"
                              v-model="patient.structure" />
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
                              v-model="patient.name" />
                            <label for="email" class="col-xl-2 col-md-4"
                              >Email</label
                            >

                            <input
                              :style="style"
                              class="input form-control col-xl-3 col-md-7"
                              id="email"
                              type="text"
                              v-model="patient.email" />
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
                              v-model="patient.cin" />

                            <label for="dob" class="col-xl-2 col-md-4"
                              ><span>*</span> Date de naissance</label
                            >

                            <input
                              :style="style"
                              class="input form-control col-xl-3 col-md-7"
                              id="dob"
                              type="date"
                              v-model="patient.dob" />
                          </div>
                          <div class="form-group row mt-5">
                            <label for="specialite" class="col-xl-2 col-md-4"
                              >specialite</label
                            >

                            <input
                              :style="style"
                              class="input form-control col-xl-3 col-md-7"
                              id="specialite"
                              type="text"
                              v-model="patient.specialite" />

                            <label for="spouse" class="col-xl-2 col-md-4"
                              ><span>*</span> Epouse de</label
                            >

                            <input
                              :style="style"
                              class="input form-control col-xl-3 col-md-7"
                              id="spouse"
                              type="text"
                              v-model="patient.spouse" />
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
                              v-model="patient.number" />
                            <label for="address" class="col-xl-2 col-md-4">
                              Addresse</label
                            >

                            <input
                              :style="style"
                              class="input form-control col-xl-3 col-md-7"
                              id="address"
                              type="text"
                              v-model="patient.address" />
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
                              v-model="patient.taille" />
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
                              @click="onComplete()">
                              Ajouter
                            </button>
                            <button
                              type="button"
                              v-show="loading"
                              class="btn btn-primary"
                              disabled>
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

<script>
import { validate, ValidationProvider } from "vee-validate";

import patientService from "../../services/patient";
export default {
  components: {
    ValidationProvider,
  },
  data() {
    return {
      style: "",
      patient: {
        name: "",
        cin: "",
        email: "",
        number: "",
        address: "",
        dob: "",
        date: new Date(),
        dossiers: [],
        enabled: true,
        specialite: "",
        structure: "",
        taille: "",
        spouse: "",
      },
      dossier: "",
      errorCnt: 0,
      loading: false,
    };
  },
  components: {},
  methods: {
    async onComplete() {
      this.loading = true;

      const hasError = await this.validateForm();
      if (!hasError) {
        this.patient.dossiers.push(this.dossier);
        await patientService.registerPatient(this.patient).then(() => {
          this.$router.push("/patients/patient-lists");
        });
      } else {
        this.loading = false;
      }
    },

    async validateForm() {
      this.error = false;

      return new Promise((resolve, reject) => {
        for (const key in this.patient) {
          const element = this.patient[key];
          switch (key) {
            case "email":
              const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
              if (!regex.test(element)) {
                this.redifyError(key);
              } else {
                this.fixError(key);
              }

              break;

            case "dossiers":
              if (this.dossier == "" || undefined || null) {
                this.redifyError(key);
              } else {
                this.fixError(key);
              }

              break;

            default:
              if (element == "" || undefined || null) {
                this.redifyError(key);
              } else {
                this.fixError(key);
              }
              break;
          }
        }
        if (this.error > 0) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    },
    redifyError(idName) {
      if (idName !== "date" && idName !== "enable") {
        this.error++;

        const element = document.getElementById(idName);
        element.style.borderBlockColor = "red";
      }
    },
    fixError(idName) {
      if (idName !== "date" && idName !== "enable") {
        this.error--;

        const element = document.getElementById(idName);
        element.style.borderBlockColor = "green";
      }
    },
  },
};
</script>
<style scoped></style>
