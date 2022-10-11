<template>
  <form class="form-horizontal auth-form" @submit.prevent="handleSubmit" method="post">
    <div class="form-group">
      <input v-model="username" name="login[username]" type="email" class="form-control" id="exampleInputEmail1" />
    </div>
    <div class="form-group">
      <input :type="type" v-model="password" name="login[password]" class="form-control" />
    </div>

    <div class="form-button">
      <button class="btn btn-primary" type="submit" @click="login" v-show="!isLoading">
        Connection
      </button>
      <button class="btn btn-primary disabled" @click="login" v-show="isLoading">
        Connection....
      </button>
    </div>

  </form>
</template>

<script>
import Userauth from "../../services/auth";
import firebase from "firebase";
export default {
  components: {},
  data() {
    return {
      type: "password",
      username: "",
      password: "",
      submitted: false,
      isLoading: false,
    };
  },

  methods: {
    handleSubmit() {
      this.submitted = true;
    },
    login() {
      this.submitted = true;
      this.isLoading = true;

      if (this.email == "" && this.password == "") {
        this.$toasted.show("Veuillez s'il vous plait remplir les champs", {
          theme: "bubble",
          position: "bottom-right",
          type: "error",
          duration: 2000,
        });
        this.isLoading = false;

      } else {
        let data = {
          username: this.username,
          password: this.password,
        };

        Userauth.login(data.username, data.password)
          .then(async (result) => {
            await this.$store.dispatch('afterLogin', result.uid)
            this.$toasted.show("Connecté avec succés", {
              theme: "bubble",
              position: "top-right",
              type: "success",
              duration: 2000,
            });

            this.$router.push("/");
          },
            (err) => {
              this.username = "";
              this.password = "";
              this.$toasted.show("Oops..." + err.message, {
                theme: "bubble",
                position: "bottom-right",
                type: "error",
                duration: 2000,
              });
              this.isLoading = false;

            }
          );
      }
    },
  },
};
</script>
