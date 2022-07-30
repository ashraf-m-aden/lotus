<template>
  <div>
    <div class="container-fluid">
      <div class="page-header">
        <Breadcrumbs main="Settings" title="Profile" />
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-4">
          <div class="card">
            <div class="card-body">
              <div class="profile-details text-center">
                <img
                  src="../../assets/images/dashboard/designer.jpg"
                  alt=""
                  class="img-fluid img-90 rounded-circle blur-up lazyloaded"
                />
                <h5 class="f-w-600 mb-0">John deo</h5>
                <span>johndeo@gmail.com</span>
                <div class="social">
                  <div class="form-group btn-showcase">
                    <button class="btn social-btn btn-fb d-inline-block">
                      <i class="fab fa-facebook-f"></i>
                    </button>
                    <button class="btn social-btn btn-twitter d-inline-block">
                      <i class="fab fa-google"></i>
                    </button>
                    <button
                      class="btn social-btn btn-google d-inline-block mr-0"
                    >
                      <i class="fab fa-twitter"></i>
                    </button>
                  </div>
                </div>
              </div>
              <hr />
              <div class="project-status">
                <h5 class="f-w-600">Employee Status</h5>
                <div class="media">
                  <div class="media-body">
                    <h6>Performance<span class="pull-right">80%</span></h6>
                    <div class="progress sm-progress-bar">
                      <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        style="width: 90%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="media">
                  <div class="media-body">
                    <h6>Overtime <span class="pull-right">60%</span></h6>
                    <div class="progress sm-progress-bar">
                      <div
                        class="progress-bar bg-secondary"
                        role="progressbar"
                        style="width: 60%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="media">
                  <div class="media-body">
                    <h6>Leaves taken<span class="pull-right">70%</span></h6>
                    <div class="progress sm-progress-bar">
                      <div
                        class="progress-bar bg-danger"
                        role="progressbar"
                        style="width: 70%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
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
              <ul
                class="nav nav-tabs tab-coupon mb-0"
                id="top-tab"
                role="tablist"
              >
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
                          aria-labelledby="top-profile-tab"
                        >
                          <h5 class="f-w-600">Profile</h5>
                          <div class="table-responsive profile-table mb-0">
                            <table class="table table-responsive mb-0">
                              <tbody>
                                <tr>
                                  <td>First Name:</td>
                                  <td>Johan</td>
                                </tr>
                                <tr>
                                  <td>Last Name:</td>
                                  <td>Deo</td>
                                </tr>
                                <tr>
                                  <td>Email:</td>
                                  <td>johndeo@gmail.com</td>
                                </tr>
                                <tr>
                                  <td>Gender:</td>
                                  <td>Male</td>
                                </tr>
                                <tr>
                                  <td>Mobile Number:</td>
                                  <td>2124821463</td>
                                </tr>
                                <tr>
                                  <td>DOB:</td>
                                  <td>Dec, 15 1993</td>
                                </tr>
                                <tr>
                                  <td>Location:</td>
                                  <td>USA</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </b-card-text>
                    </b-tab>
                    <b-tab data-feather="lock" title="settings">
                      <template slot="title">
                        <feather type="settings"></feather>Notifications
                      </template>
                      <b-card-text>
                        <div class="account-setting">
                          <h5 class="f-w-600">Notifications</h5>
                          <div class="row">
                            <div class="col">
                              <label class="d-block" for="chk-ani">
                                <input
                                  class="checkbox_animated"
                                  id="chk-ani"
                                  type="checkbox"
                                />
                                Allow Desktop Notifications
                              </label>
                              <label class="d-block" for="chk-ani1">
                                <input
                                  class="checkbox_animated"
                                  id="chk-ani1"
                                  type="checkbox"
                                />
                                Enable Notifications
                              </label>
                              <label class="d-block" for="chk-ani2">
                                <input
                                  class="checkbox_animated"
                                  id="chk-ani2"
                                  type="checkbox"
                                />
                                Get notification for my own activity
                              </label>
                              <label class="d-block mb-0" for="chk-ani3">
                                <input
                                  class="checkbox_animated"
                                  id="chk-ani3"
                                  type="checkbox"
                                  checked=""
                                />
                                DND
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="account-setting deactivate-account">
                          <h5 class="f-w-600">Deactivate Account</h5>
                          <div class="row">
                            <div class="col">
                              <label class="d-block" for="edo-ani">
                                <input
                                  class="radio_animated"
                                  id="edo-ani"
                                  type="radio"
                                  name="rdo-ani"
                                  checked=""
                                />
                                I have a privacy concern
                              </label>
                              <label class="d-block" for="edo-ani1">
                                <input
                                  class="radio_animated"
                                  id="edo-ani1"
                                  type="radio"
                                  name="rdo-ani"
                                />
                                This is temporary
                              </label>
                              <label class="d-block mb-0" for="edo-ani2">
                                <input
                                  class="radio_animated"
                                  id="edo-ani2"
                                  type="radio"
                                  name="rdo-ani"
                                  checked=""
                                />
                                Other
                              </label>
                            </div>
                          </div>
                          <button type="button" class="btn btn-primary">
                            Deactivate Account
                          </button>
                        </div>

                        <div class="account-setting deactivate-account">
                          <h5 class="f-w-600">Delete Account</h5>
                          <div class="row">
                            <div class="col">
                              <label class="d-block" for="edo-ani3">
                                <input
                                  class="radio_animated"
                                  id="edo-ani3"
                                  type="radio"
                                  name="rdo-ani1"
                                  checked=""
                                />
                                No longer usable
                              </label>
                              <label class="d-block" for="edo-ani4">
                                <input
                                  class="radio_animated"
                                  id="edo-ani4"
                                  type="radio"
                                  name="rdo-ani1"
                                />
                                Want to switch on other account
                              </label>
                              <label class="d-block mb-0" for="edo-ani5">
                                <input
                                  class="radio_animated"
                                  id="edo-ani5"
                                  type="radio"
                                  name="rdo-ani1"
                                  checked=""
                                />
                                Other
                              </label>
                            </div>
                          </div>
                          <button type="button" class="btn btn-primary">
                            Delete Account
                          </button>
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
export default {
  data() {
    return {
      content: "<h1>Some initial content</h1>",
    };
  },
  methods: {
    onComplete() {},
  },
};
</script>
<style scoped></style>
