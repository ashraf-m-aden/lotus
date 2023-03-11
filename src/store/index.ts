import { defineStore } from "pinia";

export const globalStore = defineStore("global", () => {
  const changeLang = (payload: any) => {
    localStorage.setItem("currentLanguage", payload.id);
    localStorage.setItem("currentLanguageIcon", payload.icon);
    window.location.reload();
  };

  const setLang = (payload: any) => {
    changeLang(payload);
  };

  return setLang;
});
