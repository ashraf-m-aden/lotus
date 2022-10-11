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
                      <form class="needs-validation user-add" novalidate="">
                        <h4>Details</h4>
                        <div class="form-group row mt-5">
                          <label for="validationCustom0" class="col-xl-1 col-md-4"><span>*</span> Nom</label>
                          <input class="form-control col-xl-4 col-md-4" id="validationCustom0" type="text" required=""
                            v-model="patient.name" />
                          <label for="validationCustom2" class="col-xl-1 col-md-4">Email</label>
                          <input class="form-control col-xl-4 col-md-7" id="validationCustom2" type="text" required=""
                            v-model="patient.email" />

                        </div>
                        <div class="form-group row mt-5">
                          <label for="cin" class="col-xl-2 col-md-4"><span>*</span> Numero CIN</label>
                          <input class="form-control col-xl-3 col-md-7" id="cin" type="number" required=""
                            v-model="patient.cin" />


                          <label for="dob" class="col-xl-2 col-md-4"><span>*</span> Date de
                            naissance</label>
                          <input class="form-control col-xl-3 col-md-7" id="dob" type="date" required=""
                            v-model="patient.dob" />

                        </div>
                        <div class="form-group row mt-5">
                          <label for="validationCustom2" class="col-xl-2 col-md-4"><span>*</span> Numero de
                            telephone</label>
                          <input class="form-control col-xl-3 col-md-7" id="validationCustom2" type="number" required=""
                            v-model="patient.number" />
                          <label for="validationCustom2" class="col-xl-2 col-md-4"> Addresse</label>
                          <input class="form-control col-xl-3 col-md-7" id="validationCustom2" type="text" required=""
                            v-model="patient.address" />
                        </div>

                        <!-- <div class="form-group row mt-5">
                          <label for="validationCustom4" class="col-xl-3 col-md-4">Photo</label>
                          <input class="form-control col-xl-8 col-md-7" id="validationCustom4" type="file"
                            required="" />
                        </div> -->
                      </form>
                    </b-tab>
                  </b-tabs>
                </div>
              </ul>
              <div class="pull-right">
                <button type="button" class="btn btn-primary" @click="onComplete()">Ajouter</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Container-fluid Ends-->
</template>

<script>
import patientService from '../../services/patient';
export default {
  data() {
    return {
      patient: {
        name: '',
        cin: '',
        email: '',
        number: '',
        address: '',
        dob: '',
        date: new Date(),
      }
    };
  },
  methods: {
    onComplete() {
      patientService.registerPatient(this.patient).then(() => {
        this.$router.push('/patients/patient-lists')
      })
    },
  },
};
</script>
<style scoped>

</style>
