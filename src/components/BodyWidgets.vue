<template>
  <div>
    <div class="page-wrapper">
      <Header />
      <body class="ltr">
        <div class="page-body-wrapper">
          <div class="page-sidebar" :class="!togglesidebar ? 'open' : ''">
            <Sidebar
              class="switch"
              @clicked="sidebar_toggle"
              v-if="togglesidebar"
            />
          </div>
          <div class="page-body">
            <transition name="fadeIn" enter-active-class="animated fadeIn">
              <router-view class="view"></router-view>
            </transition>
          </div>

          <Footer />
        </div>
      </body>
    </div>
  </div>
</template>
<script setup lang="ts">
import { menuStore } from "@/store/menu";
import { computed, watch } from "vue";
import { useRoute } from "vue-router";

let name = "mainpage";
let rightsidebar_toggle_var = false;
let mobileheader_toggle_var = false;
let sidebar_toggle_var = false;
let horizontal_Sidebar = true;
let resized = false;
let layouttype = "rtl";
let layoutmode = "dark";
const menu = menuStore();
const route = useRoute();
const menuItems = computed(() => {
  return menu.data;
});
const togglesidebar = computed(() => {
  return menu.togglesidebar;
});
watch(route, () => {
  menuItems.value.filter((items: any) => {
    if (items.path === route.path) menu.setActiveRoute(items);
    if (!items.children) return false;
    items.children.filter((subItems: any) => {
      if (subItems.path === route.path) menu.setActiveRoute(subItems);
      if (!subItems.children) return false;
      subItems.children.filter((subSubItems: any) => {
        if (subSubItems.path === route.path) menu.setActiveRoute(subSubItems);
      });
    });
  });
});

const sidebar_toggle = (value: boolean) => {
  sidebar_toggle_var = !value;
};
const rightsidebar_toggle = (value: boolean) => {
  rightsidebar_toggle_var = value;
};
const mobiletoggle_toggle = (value: boolean) => {
  mobileheader_toggle_var = value;
};
const layoutType = (type: string) => {
  if (type == "rtl") {
    document.body.classList.remove("ltr");
    document.body.classList.add("rtl");
    document.getElementsByTagName("HTML")[0].setAttribute("dir", "rtl");
    layouttype = "ltr";
  } else {
    document.body.classList.remove("rtl");
    document.body.classList.add("ltr");
    document.getElementsByTagName("HTML")[0].setAttribute("dir", "ltr");
    layouttype = "rtl";
  }
};
const layoutMode = (type: string) => {
  if (type == "dark") {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    layoutmode = "light";
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    layoutmode = "dark";
  }
};
</script>

<style lang="scss" scoped></style>
