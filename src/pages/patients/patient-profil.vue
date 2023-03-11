<template>
  <div>
    <div class="container-fluid">
      <div class="page-header">
        <Breadcrumbs main="Patients" title="Patient Profile" />
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-8">
          <div class="card tab2-card">
            <div class="card-body">
              <b-card-text>
                <div
                  class="tab-pane fade show active"
                  id="top-profile"
                  role="tabpanel"
                  aria-labelledby="top-profile-tab"
                >
                  <div class="table-responsive profile-table mb-0">
                    <table class="table table-responsive mb-0">
                      <tbody>
                        <tr>
                          <td class="bold">Nom:</td>
                          <td>{{ patient.name }}</td>
                          <td class="bold">Epoux:</td>
                          <td>{{ patient.spouse }}</td>
                        </tr>
                        <tr>
                          <td class="bold">Date de naissance:</td>
                          <td>{{ patient.dob }}</td>
                          <td class="bold">Email:</td>
                          <td>{{ patient.email }}</td>
                        </tr>
                        <tr>
                          <td class="bold">Numero:</td>
                          <td>{{ patient.number }}</td>

                          <td class="bold">Addresse:</td>
                          <td>{{ patient.address }}</td>
                        </tr>
                        <tr>
                          <td class="bold">Taille:</td>
                          <td>{{ patient.taille }}</td>
                          <td class="bold">Numero CIN:</td>
                          <td>{{ patient.cin }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </b-card-text>
            </div>
          </div>
        </div>

        <div class="col-8">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Numero de dossier</th>
                <th scope="col">Date</th>
                <th scope="col">Dossier en cours</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in dossiers" :key="index">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ item.id }}</td>
                <td>{{ item.date }}</td>
                <td>
                  <b-avatar variant="light"
                    ><img
                      class="img-fluid"
                      src="../../assets/images/lotus-logo.png"
                      alt=""
                    />
                  </b-avatar>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-4">
          <b-button squared variant="primary">Ajouter une grossesse</b-button>
        </div>
      </div>
    </div>
    <Historique :patient="patient"></Historique>
    <hr />
    <Trimestres :patient="patient" :dossier="dossier"></Trimestres>

    <!-- <div class="d-flex">
      <button @click="deletePatient()">Supprimmer la patiente</button>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import patientService from "../../services/patient";
import Trimestres from "./trimestres/trimestresPage.vue";
import Historique from "./historique/historiquePage.vue";
import { onBeforeMount, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const patient = ref();
const dossiers = ref();
const dossier = ref(0);
const loadingConsultation = ref(false);
onBeforeMount(async () => {
  await patientService
    .getPatient(route.params.id as string)
    .then(async (data) => {
      patient.value = data;
      await patientService
        .retrieveTousDossierPatient(patient.value.id)
        .then((dossiersValue) => {
          dossiers.value = dossiersValue;
          chooseDossier(dossiers.value[0]);
        });
    });
});
const chooseDossier = (value: any) => {
  dossier.value = value;
  loadingConsultation.value = true;
};
const deletePatient = () => {
  patientService
    .deletePatient(patient.value.id)
    .then(() => {
      router.push("/");
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
<style scoped>
.bold {
  text-transform: capitalize;
  text-decoration: underline;
  font-weight: 800;
}
</style>
