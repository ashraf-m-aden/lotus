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
              <div class="project-status">
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
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-8">
          <div class="card tab2-card">
            <div class="card-body">
              <b-card-text>
                <div class="tab-pane fade show active" id="top-profile" role="tabpanel"
                  aria-labelledby="top-profile-tab">
                  <div class="table-responsive profile-table mb-0">
                    <table class="table table-responsive mb-0">
                      <tbody>
                        <tr>
                          <td>Nom:</td>
                          <td>{{user.name}}</td>
                        </tr>
                        <tr>
                          <td>Email:</td>
                          <td>{{user.email}}</td>
                        </tr>
                        <tr>
                          <td>Numero:</td>
                          <td>{{user.number}}</td>
                        </tr>
                        <tr>
                          <td>Addresse:</td>
                          <td>{{user.address}}</td>
                        </tr>
                        <tr>
                          <td>Date de naissance:</td>
                          <td>{{user.dob}}</td>
                        </tr>
                        <tr>
                          <td>Numero CIN:</td>
                          <td>{{user.cin}}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </b-card-text>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Consultations></Consultations>
  </div>
</template>

<script>
import patientService from '../../services/patient';
import Consultations from './consultations/consultions.vue';
export default {
  data() {
    return {
      user: {}
    };
  },
  components: {
    Consultations
  },
  created() {
    patientService.getPatient(this.$route.params.id).then(data => {
      this.user = data
    })
  },
  methods: {
    onComplete() { },
  },
};
</script>
<style scoped>

</style>
