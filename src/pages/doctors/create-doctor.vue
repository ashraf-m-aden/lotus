<template>
  <div>
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="page-header">
        <Breadcrumbs main="Doctors" title="Create Doctor" />
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
                        <div class="form-group row">
                          <label
                            for="validationCustom0"
                            class="col-xl-3 col-md-4"
                            ><span>*</span> Nom</label
                          >
                          <input
                            class="form-control col-xl-8 col-md-7"
                            id="validationCustom0"
                            type="text"
                            required
                          />
                        </div>
                        <div class="form-group row">
                          <label
                            for="validationCustom2"
                            class="col-xl-3 col-md-4"
                            ><span>*</span> Email</label
                          >
                          <input
                            class="form-control col-xl-8 col-md-7"
                            id="validationCustom2"
                            type="text"
                            required
                          />
                        </div>
                        <div class="form-group row">
                          <label
                            for="validationCustom3"
                            class="col-xl-3 col-md-4"
                            ><span>*</span> Mot de passe</label
                          >
                          <input
                            class="form-control col-xl-8 col-md-7"
                            id="validationCustom3"
                            type="password"
                            required
                          />
                        </div>
                        <div class="form-group row">
                          <label
                            for="validationCustom4"
                            class="col-xl-3 col-md-4"
                            ><span>*</span> Confirmer mot de passe</label
                          >
                          <input
                            class="form-control col-xl-8 col-md-7"
                            id="validationCustom4"
                            type="password"
                            required
                          />
                        </div>
                      </form>
                    </b-tab>
                  </b-tabs>
                </div>
              </ul>
              <div class="pull-right">
                <button type="button" class="btn btn-primary">Ajouter</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Container-fluid Ends-->
</template>

<script setup lang="ts"></script>
<style scoped></style>
