<!-- <template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form
      class="form-horizontal auth-form"
      @submit.prevent="handleSubmit"
      method="post">
      <div class="form-group">
        <ValidationProvider name="email" rules="required" v-slot="{ errors }">
          <input
            v-model="email"
            name="login[email]"
            type="email"
            class="form-control"
            placeholder="email"
            id="exampleInputEmail12" />
          <span class="block text-danger text-xs absolute bottom-0 left-0">{{
            errors[0]
          }}</span>
        </ValidationProvider>
      </div>
      <div class="form-group">
        <ValidationProvider
          name="password"
          ref="password"
          :rules="{
            required: { allowFalse: false },
            regex:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          }"
          v-slot="{ errors }">
          <input
            v-model="password"
            name="login[password]"
            type="password"
            class="form-control"
            placeholder="Password" />
          <span class="block text-danger text-xs absolute bottom-0 left-0">{{
            errors[0]
          }}</span>
        </ValidationProvider>
      </div>
      <div class="form-group">
        <ValidationProvider
          name="confirm password"
          vid="pass"
          rules="required|confirmed:password"
          v-slot="{ errors }">
          <input
            name="login[password]"
            type="password"
            v-model="confirmPassword"
            class="form-control"
            placeholder="Confirm Password" />
          <span class="block text-danger text-xs absolute bottom-0 left-0">{{
            errors[0]
          }}</span>
        </ValidationProvider>
      </div>
      <div class="form-terms">
        <div class="custom-control custom-checkbox mr-sm-2">
          <input
            type="checkbox"
            class="custom-control-input"
            id="customControlAutosizing1" />
          <label class="custom-control-label" for="customControlAutosizing1"
            ><span
              >I agree all statements in
              <a href="">Terms &amp; Conditions</a></span
            ></label
          >
        </div>
      </div>
      <div class="form-button">
        <button class="btn btn-primary" type="submit" @click="register">
          Register
        </button>
      </div>
      <div class="form-footer">
        <span>Or Sign up with social platforms</span>
        <ul class="social">
          <li>
            <feather
              type="facebook"
              class="icon-facebook"
              fill="#F98085"
              stroke="#F98085"
              size="16px"></feather>
          </li>
          <li>
            <feather
              type="twitter"
              stroke="#F98085"
              size="16px"
              class="icon-twitter"></feather>
          </li>
          <li>
            <feather
              type="instagram"
              stroke="#F98085"
              size="16px"
              class="icon-instagram"></feather>
          </li>
          <li>
            <feather
              type="github"
              stroke="#F98085"
              size="16px"
              class="icon-instagram"></feather>
          </li>
        </ul>
      </div>
    </form>
  </ValidationObserver>
</template>

<script setup lang="ts">
import firebase from "firebase/compat";
import { ref } from "vue";
import Userauth from "../../services/auth";
import { auth } from "db";
const password = ref("");
const email = ref("");
let submitted = false;
const confirmPassword = ref("");

const register = () => {
  submitted = true;
  let data = {
    email: email.value,
    password: password.value,
  };
  auth
    .createUserWithEmailAndPassword(data.email, data.password)
    .then((result) => {
      Userauth.localLogin(result);
      if (result.user.refreshToken) {
        localStorage.setItem("user", JSON.stringify(result.user.refreshToken));
      }
      //  this.$toasted.show("succesfully loged in", {
      //    theme: "bubble",
      //    position: "top-right",
      //    type: "success",
      //    duration: 2000
      //  });
      this.$router.push("/");
    });
};
</script> -->
