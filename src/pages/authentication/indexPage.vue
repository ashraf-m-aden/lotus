<template>
  <div class="page-wrapper">
    <div class="authentication-box">
      <div class="container">
        <div class="row m-lg-0">
          <div class="col-md-5 p-0 card-left">
            <div class="card bg-primary">
              <img src="../../assets/images/lotus.png" alt="" />
            </div>
          </div>
          <div class="col-md-7 p-0 card-right">
            <div class="card tab2-card">
              <div class="card-body">
                <b-tabs content-class="mt-3">
                  <b-tab title="Login" data-feather="user" active>
                    <login></login>
                  </b-tab>
                  <!-- registration form start -->
                </b-tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import login from "../authentication/loginPage.vue";
import registration from "../authentication/registration.vue";

let type: "password";
const password = ref();
const username = ref();
let submitted = false;
</script>
