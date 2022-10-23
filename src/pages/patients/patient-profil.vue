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
                <div class="tab-pane fade show active" id="top-profile" role="tabpanel"
                  aria-labelledby="top-profile-tab">
                  <div class="table-responsive profile-table mb-0">
                    <table class="table table-responsive mb-0">
                      <tbody>
                        <tr>
                          <td class="bold">Nom:</td>
                          <td>{{ user.name }}</td>
                          <td class="bold">Epoux:</td>
                          <td>{{ user.spouse }}</td>
                        </tr>
                        <tr>
                          <td class="bold">Date de naissance:</td>
                          <td>{{ user.dob }}</td>
                          <td class="bold">Email:</td>
                          <td>{{ user.email }}</td>
                        </tr>
                        <tr>
                          <td class="bold">Numero:</td>
                          <td>{{ user.number }}</td>

                          <td class="bold">Addresse:</td>
                          <td>{{ user.address }}</td>
                        </tr>
                        <tr>
                          <td class="bold">Taille:</td>
                          <td>{{ user.taille }}</td>
                          <td class="bold">Numero CIN:</td>
                          <td>{{ user.cin }}</td>
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
                  <b-avatar variant="light"><img class="img-fluid" src="../../assets/images/lotus 2 2.png" alt="">
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
    <Historique :user="user"></Historique>
    <hr>
    <Trimestres :user="user" :dossier="dossier"></Trimestres>

    <!-- <div class="d-flex">
      <button @click="deletePatient()">Supprimmer la patiente</button>
    </div> -->
  </div>
</template>

<script>
import patientService from '../../services/patient';
import Trimestres from './trimestres/trimestres.vue';
import Historique from './historique/historique.vue';
export default {
  data() {
    return {
      user: {},
      dossiers: [],
      dossier: 0,
      loadingConsultation: false
    };
  },
  components: {
    Historique,
    Trimestres
  },
  async created() {
    await patientService.getPatient(this.$route.params.id).then(async data => {
      this.user = data
      await patientService.retrieveTousDossierPatient(data.id).then((dossiers) => {
        this.dossiers = dossiers;
        this.chooseDossier(dossiers[0])
      })
    })
  },
  methods: {
    chooseDossier(dossier) {
      this.dossier = dossier;
      this.loadingConsultation = true;

    },
    deletePatient() {
      patientService.deletePatient(this.user.id).then(() => {
        this.$router.push('/')
      }).catch(error => {
        console.log(error);
      })
    }
  },
};
</script>
<style scoped>
.bold {
  text-transform: capitalize;
  text-decoration: underline;
  font-weight: 800;

}
</style>
