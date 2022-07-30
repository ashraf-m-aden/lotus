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
<script>
import { mapState } from "vuex";
import Header from "./UI/header.vue";
import Sidebar from "./UI/sidebar.vue";
import Footer from "./UI/footer.vue";

export default {
  name: "mainpage",
  data() {
    return {
      rightsidebar_toggle_var: false,
      mobileheader_toggle_var: false,
      sidebar_toggle_var: false,
      horizontal_Sidebar: true,
      resized: false,
      layouttype: "rtl",
      layoutmode: "dark",
    };
  },
  // props:['sidebar_toggle_var'],
  components: {
    Header,
    Sidebar,
    Footer,
  },
  computed: {
    ...mapState({
      menuItems: (state) => state.menu.data,
      layout: (state) => state.layout.layout,
      transparentbg: (state) => state.layout.transparentbg,
      togglesidebar: (state) => state.menu.togglesidebar,
    }),
  },
  watch: {
    $route() {
      this.menuItems.filter((items) => {
        if (items.path === this.$route.path)
          this.$store.dispatch("menu/setActiveRoute", items);
        if (!items.children) return false;
        items.children.filter((subItems) => {
          if (subItems.path === this.$route.path)
            this.$store.dispatch("menu/setActiveRoute", subItems);
          if (!subItems.children) return false;
          subItems.children.filter((subSubItems) => {
            if (subSubItems.path === this.$route.path)
              this.$store.dispatch("menu/setActiveRoute", subSubItems);
          });
        });
      });
    },
  },
  methods: {
    sidebar_toggle(value) {
      this.sidebar_toggle_var = !value;
    },
    rightsidebar_toggle(value) {
      this.rightsidebar_toggle_var = value;
    },
    mobiletoggle_toggle(value) {
      this.mobileheader_toggle_var = value;
    },
    layoutType(type) {
      if (type == "rtl") {
        document.body.classList.remove("ltr");
        document.body.classList.add("rtl");
        document.getElementsByTagName("HTML")[0].setAttribute("dir", "rtl");
        this.layouttype = "ltr";
      } else {
        document.body.classList.remove("rtl");
        document.body.classList.add("ltr");
        document.getElementsByTagName("HTML")[0].setAttribute("dir", "ltr");
        this.layouttype = "rtl";
      }
    },
    layoutMode(type) {
      if (type == "dark") {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        this.layoutmode = "light";
      } else {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        this.layoutmode = "dark";
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
