import Auth from "./../services/auth";
import { User } from "./../types/User";
import { ref } from "vue";
import { defineStore } from "pinia";
import { auth } from "../../db";
const service = Auth;

export const authenticationStore = defineStore("authentication", () => {
  // state is the same as what would typically go inside of the data object when using Vue without Vuex.
  const userData = ref<User | null>();
  const isLoggedIn = ref(false);

  // // getters are Vuex's equivalent to computed properties in Vue.
  // // functions here will always contain state as a parameter
  // const getUserData = (state) =>{
  //     return state.userData.value;
  // }
  // const getAuthentication=(state)=> {
  //     return state.isLoggedIn.value;
  // }

  // mutations are essentially functions that update state in some way.
  // You can think of these as kind of being Vuex's equivalent to Vue's methods.
  const SET_AUTH = (isLoggedInValue: boolean) => {
    localStorage.setItem("isLoggedIn", isLoggedInValue.toString());
    isLoggedIn.value = isLoggedInValue;
  };
  const SET_USER = (user: User | null) => {
    userData.value = user;
  };

  //   // actions are effectively the functions that get called by your components in order to trigger a mutation.
  //   const setAuthentication = (isLoggedInValue) => {
  //     SET_AUTH(isLoggedInValue);
  //   };

  const setUserData = (user: User | null) => {
    SET_USER(user);
  };

  const checkAuth = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        await service
          .getUserData(user.uid)
          .then(async (res: any) => {
            SET_AUTH(true);
            setUserData(res.data());
            // // eslint-disable-next-line no-console
            // console.log(res.data());
          })
          .catch(() => {
            SET_AUTH(false);
            setUserData(null);
          });
      } else {
        SET_AUTH(false);
        setUserData(null);
      }
    });
  };
  const afterLogin = async (id: string) => {
    await service.getUserData(id).then(async (res: any) => {
      SET_AUTH(true);
      setUserData(res.data());
    });
  };

  const afterLogout = () => {
    SET_AUTH(false);
    setUserData(null);
  };

  return {
    userData,
    isLoggedIn,
    afterLogin,
    checkAuth,
    afterLogout,
  };
});
