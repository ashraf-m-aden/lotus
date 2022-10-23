<template>
  <div>
    <div class="container-fluid">
      <div class="page-header">
        <Breadcrumbs main="Patients" title="Patient Profile" />
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-4">
          <div class="card">
            <div class="card-body">
              <div class="profile-details text-center">
                <img src="../../assets/images/dashboard/designer.jpg" alt=""
                  class="img-fluid rounded-circle blur-up lazyloaded" />
              </div>
              <hr />
              <!-- <div class="project-status">
                <h5 class="f-w-600">Situation</h5>
                <div class="media">
                  <div class="media-body">
                    <h6>Mois<span class="pull-right">8</span></h6>
                    <div class="progress sm-progress-bar">
                      <div class="progress-bar bg-primary" role="progressbar" style="width: 80%" aria-valuenow="25"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <div class="media">
                  <div class="media-body">
                    <h6>
                      Nombre de rendez vous <span class="pull-right">5</span>
                    </h6>
                    <div class="progress sm-progress-bar">
                      <div class="progress-bar bg-secondary" role="progressbar" style="width: 50%" aria-valuenow="25"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <div class="media">
                  <div class="media-body">
                    <h6>Données<span class="pull-right">70%</span></h6>
                    <div class="progress sm-progress-bar">
                      <div class="progress-bar bg-danger" role="progressbar" style="width: 70%" aria-valuenow="25"
                        aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
        <div class="col-xl-8">
          <div class="row">
            <div class="col-12">
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
            <div class="col-12">
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
          </div>
        </div>
      </div>
    </div>
    <Historique :user="user"></Historique>
    <hr>
    <div class="d-flex">
      <button @click="deletePatient()">Supprimmer la patiente</button>
    </div>
  </div>
</template>

<script>
import patientService from '../../services/patient';
import Consultations from './consultations/consultions.vue';
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
    Historique
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
