 
<template>
  <div id="app">
    <router-view @setAppClasses="setAppClasses" />

    <main>
      <fade-transition origin="center" mode="out-in" :duration="250">
        <router-view name="footer"></router-view>
        {{}}
      </fade-transition>
    </main>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import themeConfig from "@/../themeConfig.js";
import jwt from "@/http/requests/auth/jwt/index.js";
//import io from 'socket.io-client';
import { mapState } from "vuex";
import * as divilib from "@/divisoftlibs/utilDivisoftJS.js";
import { FadeTransition } from "vue2-transitions";
import AppHeader from "./layouts/AppHeader.vue";

export default {
  components: {
    FadeTransition,
    AppHeader,
  },

  
  mounted() {
    this.toggleClassInBody(themeConfig.theme);
    this.$store.commit("UPDATE_WINDOW_WIDTH", window.innerWidth);

     this.traerLocalStorage();

    const vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    try {
      this.$socket.connect();
    } catch (error) {
      console.log("Error al Conectar al Socket App.vue " + error);
    }
  },

  async created() {
    const dir = this.$vs.rtl ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);

    window.addEventListener("resize", this.handleWindowResize);
    window.addEventListener("scroll", this.handleScroll);

    // Auth0

    //	alert("prueba de pruebaContext");
   
    //alert(this.getRecargas);
    if (this.getRecargas==0)
      {
        this.$store.commit("MUTSETRECARGAS",1); 
       location.reload();

      } 
       

    this.$store.dispatch("pruebaContext");
    //try       { await this.$auth.renewTokens() } catch (e) { console.error(e) }
  },
  data() {
    return {
      vueAppClasses: [],
      tokenChat: "",
      contador: 0,
    };
  },

  computed: {
    getProfile() {
      return this.$store.state.dsoaLogin.profile[0];
    },
    getTokenChat() {
      return this.$store.state.dsoaLogin.token;
    },
    getRecargas() {
      return this.$store.state.recargasApp;
    }, 
  },

  watch: {
    "$store.state.theme"(val) {
      this.toggleClassInBody(val);
    },
    "$vs.rtl"(val) {
      document.documentElement.setAttribute("dir", val ? "rtl" : "ltr");
    },
    getTokenChat: function () {
      return;
    },
  },
  methods: {
    ...mapActions({
      login: "dsoaLogin/login",
      loginchat: "dsoaLogin/acLoginChat",
      logout: "dsoaLogin/logout",
    }),
    exit() {
      this.$socket.emit(
        "logout",
        this.$store.getters["dsoaLogin/user"].username
      );
      this.$socket.disconnect();
      this.logout();
    },

    toggleClassInBody(className) {
      if (className === "dark") {
        if (document.body.className.match("theme-semi-dark"))
          document.body.classList.remove("theme-semi-dark");
        document.body.classList.add("theme-dark");
      } else if (className === "semi-dark") {
        if (document.body.className.match("theme-dark"))
          document.body.classList.remove("theme-dark");
        document.body.classList.add("theme-semi-dark");
      } else {
        if (document.body.className.match("theme-dark"))
          document.body.classList.remove("theme-dark");
        if (document.body.className.match("theme-semi-dark"))
          document.body.classList.remove("theme-semi-dark");
      }
    },
    setAppClasses(classesStr) {
      this.vueAppClasses.push(classesStr);
    },
    handleWindowResize() {
      this.$store.commit("UPDATE_WINDOW_WIDTH", window.innerWidth);

      // Set --vh property
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    },
    handleScroll() {
      this.$store.commit("UPDATE_WINDOW_SCROLL_Y", window.scrollY);
    },

    ////////////CHAT
    traerLocalStorage() {
      //local storage

      let profile = divilib.traerLocalStorage();

      console.log("app", this.getProfile[0]);


      if (this.getProfile.Credencial == "VISITANTE")
        localStorage.setItem("profile", JSON.stringify(this.getProfile));

      
    },
  },

  destroyed() {
    window.removeEventListener("resize", this.handleWindowResize);
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
