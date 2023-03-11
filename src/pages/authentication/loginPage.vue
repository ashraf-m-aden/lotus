<template>
  <form
    class="form-horizontal auth-form"
    @submit.prevent="handleSubmit"
    method="post"
  >
    <div class="form-group">
      <input
        v-model="email"
        name="login[email]"
        type="email"
        class="form-control"
        id="exampleInputEmail1"
      />
    </div>
    <div class="form-group">
      <input
        :type="type"
        v-model="password"
        name="login[password]"
        class="form-control"
      />
    </div>

    <div class="form-button">
      <button
        class="btn btn-primary"
        type="submit"
        @click="login"
        v-show="!isLoading"
      >
        Connection
      </button>
      <button
        class="btn btn-primary disabled"
        @click="login"
        v-show="isLoading"
      >
        Connection....
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Userauth from "../../services/auth";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { authenticationStore } from "@/store/authentication";
import { useRouter } from "vue-router";
let type = "password";
const email = ref("");
const password = ref("");
let submitted = false;
let isLoading = false;

const store = authenticationStore();
const router = useRouter();
const handleSubmit = () => {
  submitted = true;
};
const login = () => {
  submitted = true;
  isLoading = true;

  if (email.value == "" && password.value == "") {
    toast("Veuillez s'il vous plait remplir les champs", {
      autoClose: 3000,
    }); // ToastOptions

    isLoading = false;
  } else {
    let data = {
      email: email.value,
      password: password.value,
    };

    Userauth.login(data.email, data.password).then(
      async (result) => {
        store.afterLogin(result.user?.uid as string);
        toast("Connecté avec succés", {
          autoClose: 3000,
        }); // ToastOptions

        router.push("/");
      },
      (err) => {
        email.value = "";
        password.value = "";
        toast("Oops..." + err.message, {
          autoClose: 3000,
        }); // ToastOptions

        isLoading = false;
      }
    );
  }
};
</script>
