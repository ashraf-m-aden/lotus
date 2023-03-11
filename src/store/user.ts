import { User } from "./../types/User";
import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
const ax = axios.create({
  baseURL: process.env.BASE_URL,
});
const url = "user.json";

export const userStore = defineStore("user", () => {
  const userList = ref<Array<any>>();
  const userData = ref<User>();
  const getUsers = () => {
    ax.get(url)
      .then((response) => {
        mutation_getUsers(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const setUserData = (user: any) => {
    userData.value = user;
  };
  const mutation_getUsers = (payload: any) => {
    userList.value = payload;
  };

  return {
    userList,
    setUserData,
    userData,
    getUsers,
  };
});
