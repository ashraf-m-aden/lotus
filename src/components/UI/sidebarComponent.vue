<template>
  <div>
    <!-- Il y'a 3 niveau ici, il ya le sub, le children, le children of children, et chacun contient des if -->
    <!-- Page Sidebar Start-->
    <div class="page-sidebar">
      <div class="main-header-left d-none d-lg-block">
        <div class="logo-wrapper">
          <router-link to="/"
            ><img
              class="blur-up lazyloaded"
              src="../../assets/images/lotus - Copy.png"
              alt="" />
          </router-link>
        </div>
      </div>
      <div class="sidebar custom-scrollbar">
        <div class="sidebar-user text-center">
          <div>
            <img
              class="img-60 rounded-circle lazyloaded blur-up"
              src="../../assets/images/dashboard/man.png"
              alt="#" />
          </div>
          <h6 class="mt-3 f-14">{{ user?.name || "" }}</h6>
          <p>{{ user?.role || "" }}</p>
        </div>
        <ul class="sidebar-menu" id="myDIV">
          <li
            v-for="(menuItem, index) in menuItems"
            :key="index"
            :class="{ active: menuItem.active }">
            <!-- Sub -->
            <a
              href="javascript:void(0)"
              class="sidebar-header"
              v-if="menuItem.type == 'sub'"
              @click="setNavActive(menuItem)">
              <feather :type="menuItem.icon"> </feather>
              <span @click="dashboardClick(menuItem.title)">
                {{ menuItem.title }}
              </span>

              <span
                :class="'badge badge-pill badge-' + menuItem.badgeType"
                v-if="menuItem.badgeType"
                >{{ menuItem.badgeValue }}</span
              >
              <i
                class="fa fa-angle-right pull-right"
                v-if="menuItem.children"></i>
            </a>
            <router-link
              :to="menuItem.path"
              class="sidebar-header"
              v-if="menuItem.type == 'link'"
              router-link-exact-active>
              <feather :type="menuItem.icon" class="middle"></feather>
              <span>
                {{ menuItem.title }}
                <span
                  :class="'badge badge-' + menuItem.badgeType + ' ml-3'"
                  v-if="menuItem.badgeType"
                  >{{ menuItem.badgeValue }}</span
                >
              </span>
              <i
                class="fa fa-angle-right pull-right"
                v-if="menuItem.children"></i>
            </router-link>
            <!--</span>
            </span>-->
            <!-- External Link -->
            <a
              :href="menuItem.path"
              class="sidebar-header"
              v-if="menuItem.type == 'extLink'"
              @click="setNavActive(menuItem)">
              <feather :type="menuItem.icon" class="middle"></feather>
              <span>
                {{ menuItem.title }}
                <span
                  :class="'badge badge-' + menuItem.badgeType + ' ml-3'"
                  v-if="menuItem.badgeType"
                  >{{ menuItem.badgeValue }}</span
                >
              </span>
              <i
                class="fa fa-angle-right pull-right"
                v-if="menuItem.children"></i>
            </a>
            <!-- External Tab Link -->
            <a
              :href="menuItem.path"
              target="_blank"
              class="sidebar-header"
              v-if="menuItem.type == 'extTabLink'"
              @click="setNavActive(menuItem)">
              <feather :type="menuItem.icon" class="middle"></feather>
              <span>
                {{ menuItem.title }}
                <span
                  :class="'badge badge-' + menuItem.badgeType + ' ml-3'"
                  v-if="menuItem.badgeType"
                  >{{ menuItem.badgeValue }}</span
                >
              </span>
              <i
                class="fa fa-angle-right pull-right"
                v-if="menuItem.children"></i>
            </a>
            <!-- 2nd Level Menu -->
            <ul
              class="sidebar-submenu"
              v-if="menuItem.children"
              :class="{ 'menu-open': menuItem.active }">
              <li
                v-for="(childrenItem, index) in menuItem.children"
                :key="index"
                :class="{ active: childrenItem.active }">
                <!-- Sub -->
                <a
                  href="javascript:void(0)"
                  v-if="childrenItem.type == 'sub'"
                  @click="setNavActive(childrenItem)">
                  <i class="fa fa-circle"></i>
                  {{ childrenItem.title }}
                  <span
                    :class="
                      'badge badge-' + childrenItem.badgeType + ' pull-right'
                    "
                    v-if="childrenItem.badgeType"
                    >{{ childrenItem.badgeValue }}</span
                  >
                  <i
                    class="fa fa-angle-right pull-right"
                    v-if="childrenItem.children"></i>
                </a>
                <!-- Link -->
                <!--{{ childrenItem.children }}-->
                <!--{{ childrenItem.path }}-->
                <span
                  v-for="(item, index) in childrenItem.children"
                  :key="index">
                </span>

                <router-link
                  :to="childrenItem.path"
                  v-if="childrenItem.type == 'link'"
                  router-link-exact-active>
                  <i class="fa fa-circle"></i>
                  {{ childrenItem.title }}
                  <span
                    :class="
                      'badge badge-' + childrenItem.badgeType + ' pull-right'
                    "
                    v-if="childrenItem.badgeType"
                    >{{ childrenItem.badgeValue }}</span
                  >
                  <i
                    class="fa fa-angle-down pull-right"
                    v-if="childrenItem.children"></i>
                </router-link>
                <!-- External Link -->
                <a
                  :href="childrenItem.path"
                  v-if="childrenItem.type == 'extLink'">
                  <i class="fa fa-circle"></i>
                  {{ childrenItem.title }}
                  <span
                    :class="
                      'badge badge-' + childrenItem.badgeType + ' pull-right'
                    "
                    v-if="childrenItem.badgeType"
                    >{{ childrenItem.badgeValue }}</span
                  >
                  <i
                    class="fa fa-angle-down pull-right"
                    v-if="childrenItem.children"></i>
                </a>
                <!-- External Tab Link -->
                <a
                  :href="childrenItem.path"
                  target="_blank"
                  v-if="childrenItem.type == 'extTabLink'">
                  <i class="fa fa-circle"></i>
                  {{ childrenItem.title }}
                  <span
                    :class="
                      'badge badge-' + childrenItem.badgeType + ' pull-right'
                    "
                    v-if="childrenItem.badgeType"
                    >{{ childrenItem.badgeValue }}</span
                  >
                  <i
                    class="fa fa-angle-down pull-right"
                    v-if="childrenItem.children"></i>
                </a>
                <!-- 3rd Level Menu -->
                <ul class="sidebar-submenu" v-if="childrenItem.children">
                  <li
                    v-for="(childrenSubItem, index) in childrenItem.children"
                    :key="index">
                    <!-- Link -->
                    <router-link
                      :to="childrenSubItem.path"
                      v-if="childrenSubItem.type == 'link'"
                      router-link-exact-active>
                      <i class="fa fa-circle"></i>
                      {{ childrenSubItem.title }}
                      <span
                        :class="
                          'badge badge-' +
                          childrenSubItem.badgeType +
                          ' pull-right'
                        "
                        v-if="childrenSubItem.badgeType"
                        >{{ childrenSubItem.badgeValue }}</span
                      >
                      <i
                        class="fa fa-angle-right pull-right"
                        v-if="childrenSubItem.children"></i>
                    </router-link>
                    <!-- External Link -->
                    <a
                      :href="childrenSubItem.path"
                      v-if="childrenSubItem.type == 'extLink'">
                      <i class="fa fa-circle"></i>
                      {{ childrenSubItem.title }}
                      <span
                        :class="
                          'badge badge-' +
                          childrenSubItem.badgeType +
                          ' pull-right'
                        "
                        v-if="childrenSubItem.badgeType"
                        >{{ childrenSubItem.badgeValue }}</span
                      >
                      <i
                        class="fa fa-angle-right pull-right"
                        v-if="childrenSubItem.children"></i>
                    </a>
                    <!-- External Tab Link -->
                    <a
                      :href="childrenSubItem.path"
                      target="_blank"
                      v-if="childrenSubItem.type == 'extTabLink'">
                      <i class="fa fa-circle"></i>
                      {{ childrenSubItem.title }}
                      <span
                        :class="
                          'badge badge-' +
                          childrenSubItem.badgeType +
                          ' pull-right'
                        "
                        v-if="childrenSubItem.badgeType"
                        >{{ childrenSubItem.badgeValue }}</span
                      >
                      <i
                        class="fa fa-angle-right pull-right"
                        v-if="childrenSubItem.children"></i>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!-- Page Sidebar Ends-->
  </div>
</template>
<script setup lang="ts">
import { authenticationStore } from "@/store/authentication";
import { menuStore } from "@/store/menu";
import { computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

let name = "Sidebar";
let width = 0;
let height = 0;

const menu = menuStore();
const auth = authenticationStore();
const route = useRoute();
const router = useRouter();
const menuItems = computed(() => {
  return menu.data;
});
const user = computed(() => {
  return auth.userData;
});

// created() {
//   window.addEventListener("resize", this.handleResize);
//   this.handleResize();
//   if (this.width < 991) {
//     // this.layout.settings.sidebar.type = "default";
//   }
// },
// unmounted() {
//   window.removeEventListener("resize", this.handleResize);
// },
onMounted(() => {
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
const dashboardClick = (title: string) => {
  if (title == "Dashboard") {
    router.push("/");
  }
};
const setNavActive = (item: string) => {
  menu.setNavActive(item);
};
// const handleResize = () => {
//   this.width = window.innerWidth - 310;
// };
</script>
<style scoped></style>
