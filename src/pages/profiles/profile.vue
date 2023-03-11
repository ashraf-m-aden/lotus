<template>
  <div>
    <div class="container-fluid">
      <div class="page-header">
        <Breadcrumbs main="Settings" title="Profile" />
      </div>
    </div>
    <div class="container-fluid" v-if="user !== null">
      <div class="row">
        <div class="col-xl-4">
          <div class="card">
            <div class="card-body text-center">
              <div class="profile-details text-center">
                <img
                  src="../../assets/images/dashboard/designer.jpg"
                  alt=""
                  class="img-fluid img-90 rounded-circle blur-up lazyloaded" />
                <h5 class="f-w-600 mb-0">{{ user.name }}</h5>
              </div>
              <hr />
              <h5 class="f-w-600 mb-0">{{ user.specialite }}</h5>
            </div>
          </div>
        </div>
        <div class="col-xl-8">
          <div class="card tab2-card">
            <div class="card-body">
              <ul
                class="nav nav-tabs tab-coupon mb-0"
                id="top-tab"
                role="tablist">
                <div class="tab-content" id="top-tabContent">
                  <b-tabs content-class="mt-3">
                    <b-tab title="profile" data-feather="user" active>
                      <template slot="title">
                        <feather type="user"></feather>Profile
                      </template>
                      <b-card-text>
                        <div
                          class="tab-pane fade show active"
                          id="top-profile"
                          role="tabpanel"
                          aria-labelledby="top-profile-tab">
                          <h5 class="f-w-600">Profile</h5>
                          <div class="table-responsive profile-table mb-0">
                            <table class="table table-responsive mb-0">
                              <tbody>
                                <tr>
                                  <td>Nom:</td>
                                  <td>{{ user.name }}</td>
                                </tr>
                                <tr>
                                  <td>Email:</td>
                                  <td>{{ user.email }}</td>
                                </tr>

                                <tr>
                                  <td>Mobile Number:</td>
                                  <td>{{ user.number }}</td>
                                </tr>
                                <tr>
                                  <td>Specialité:</td>
                                  <td>{{ user.specialite }}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </b-card-text>
                    </b-tab>
                    <b-tab data-feather="lock" title="settings">
                      <template slot="title">
                        <feather type="settings"></feather>Mis à jours
                      </template>
                      <b-card-text>
                        <div
                          class="tab-pane fade show active"
                          id="top-profile"
                          role="tabpanel"
                          aria-labelledby="top-profile-tab">
                          <h5 class="f-w-600">Profile</h5>
                          <div class="table-responsive profile-table mb-0">
                            <table class="table table-responsive mb-0">
                              <tbody>
                                <tr>
                                  <td>Nom:</td>
                                  <td>
                                    <input
                                      type="text"
                                      class="form-control"
                                      v-model="update.name" />
                                  </td>
                                </tr>
                                <tr>
                                  <td>Mobile Number:</td>
                                  <td>
                                    <input
                                      type="text"
                                      class="form-control"
                                      v-model="update.number" />
                                  </td>
                                </tr>
                                <tr>
                                  <td>Specialité:</td>
                                  <td>
                                    <input
                                      type="text"
                                      class="form-control"
                                      v-model="update.specialite" />
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <button
                                      class="btn btn-group btn-primary"
                                      @click="updateProfile()">
                                      Sauvegarder
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <hr />
                            <p>
                              Changement de mot de passe, veuillez cliquez sur
                              le bouton ci dessous vous recevrez un email de
                              changement de mot de passe.
                            </p>
                            <br />
                            <button
                              class="btn btn-group btn-air-warning"
                              @click="updatePassword()">
                              Envoyez email de mis à jour mot de passe
                            </button>
                          </div>
                        </div>
                      </b-card-text>
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
</template>

<script>
import auth from "../../services/auth";
export default {
  data() {
    return {
      update: {
        name: "",
        specialite: "",
        number: "",
      },
    };
  },
  methods: {
    onComplete() {},
    updateProfile() {
      this.update.email = this.user.email;
      auth.updateUser(this.user.id, this.update).then(() => {
        this.$store.dispatch("afterLogin", this.user.id);
      });
    },
    updatePassword() {
      auth.updatePassword(this.user.email).then(() => {
        this.$store.dispatch("afterLogout");
        this.$router.push("/login");
      });
    },
  },
  computed: {
    user() {
      console.log(this.$store.getters.getUserData);
      return this.$store.getters.getUserData;
    },
  },
};
</script>
<style scoped></style>
