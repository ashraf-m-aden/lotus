<template>
  <!-- Page Header Start-->
  <div :class="!sidebar ? 'page-main-header open' : 'page-main-header '">
    <div class="main-header-right row">
      <div class="main-header-left d-lg-none">
        <div class="logo-wrapper">
          <router-link to="/">
            <img class="blur-up lazyloaded" src="../../assets/images/lotus - Copy.png" alt="" />
          </router-link>
        </div>
      </div>
      <div class="mobile-sidebar">
        <div class="media-body text-right switch-sm">
          <label class="switch"><a @click="toggle_sidebar"><i id="sidebar-toggle">
                <feather type="align-left"></feather>
              </i></a></label>
        </div>
      </div>
      <div class="nav-right col">
        <ul class="nav-menus" :class="headerMenu ? 'open' : ''">
          <li></li>
          <li>
            <a class="text-dark" href="#!" @click="toggle_fullscreen()"><i data-feather="maximize-2">
                <feather type="maximize-2"></feather>
              </i></a>
          </li>

          <!-- <li class="onhover-dropdown">
            <i data-feather="bell">
              <feather type="bell"></feather>
            </i><span class="badge badge-primary pull-right notification-badge">3</span><span class="dot"></span>
            <ul class="notification-dropdown onhover-show-div p-0">
              <li>
                Notification
                <span class="badge badge-primary pull-right">3</span>
              </li>
              <li>
                <div class="media">
                  <div class="media-body">
                    <h6 class="mt-0">
                      <span><i class="shopping-color" data-feather="shopping-bag">
                          <feather type="shopping-bag"></feather>
                        </i></span>Notification
                    </h6>
                    <p class="mb-0">
                      Lorem ipsum dolor sit amet, consectetuer.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="media">
                  <div class="media-body">
                    <h6 class="mt-0 txt-success">
                      <span><i class="download-color font-success" data-feather="download">
                          <feather type="download"></feather>
                        </i></span>Notification
                    </h6>
                    <p class="mb-0">
                      Lorem ipsum dolor sit amet, consectetuer.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div class="media">
                  <div class="media-body">
                    <h6 class="mt-0 txt-danger">
                      <span><i class="alert-color font-danger" data-feather="alert-circle">
                          <feather type="alert-circle"></feather>
                        </i></span>Notification
                    </h6>
                    <p class="mb-0">
                      Lorem ipsum dolor sit amet, consectetuer.
                    </p>
                  </div>
                </div>
              </li>
              <li class="txt-dark"><a href="#">All</a> notification</li>
            </ul>
          </li> -->

          <li class="onhover-dropdown">
            <div class="media align-items-center">
              <img class="align-self-center pull-right img-50 rounded-circle blur-up lazyloaded"
                src="../../assets/images/dashboard/man.png" alt="header-user" />
              <div class="dotted-animation">
                <span class="animate-circle"></span><span class="main-circle"></span>
              </div>
            </div>
            <ul class="profile-dropdown onhover-show-div p-20 profile-dropdown-hover">
              <li>
                <a @click="profile()">
                  <feather type="user"></feather>Mon profil
                </a>
              </li>

              <li>
                <a @click="logout">
                  <feather type="log-out"></feather><span>Deconnection</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="d-lg-none mobile-toggle pull-right" @click="openHeader()">
          <feather type="more-horizontal"></feather>
        </div>
      </div>
    </div>
  </div>
  <!-- Page Header Ends -->
</template>

<script>
import firebase from "firebase";
import UserAuth from "../../services/auth";
import { mapActions } from "vuex";

export default {
  name: "Header",

  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    this.resized = this.sidebar_toggle_var;
  },
  data() {
    return {
      headerMenu: false,
    };
  },
  filters: {
    capitalize: function (value) {
      if (!value) {
        return "";
      }
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },

  computed: {
    sidebar() {
      return this.$store.state.menu.togglesidebar;
    },
  },
  methods: {
    ...mapActions(["setLang"]),
    toggle_sidebar() {
      this.$store.dispatch("menu/opensidebar");
    },
    openHeader() {
      this.headerMenu = !this.headerMenu;
    },

    toggle_fullscreen() {
      if (
        (document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)
      ) {
        if (document.documentElement.requestFullScreen) {
          document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
          document.documentElement.webkitRequestFullScreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
    logout: function () {
      UserAuth.Logout().then(() => {
        this.$store.dispatch('afterLogout');
        this.$router.push('/login')
      })
    },
    profile() {
      this.$router.push('/profil/mon-profil')
    },

    handleResize() {
      this.width = window.innerWidth;
    },
  },
};
</script>
