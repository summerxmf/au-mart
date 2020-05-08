import Vue from "vue";
import Router from "vue-router";

import Home from "pages/home";
import Login from "pages/login";
// import LoginBox from "pages/login/loginBox";
import AccountLogin from "pages/login/loginBox/accountLogin";
import MobileLogin from "pages/login/loginBox/mobileLogin";

import Register from "pages/register";

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: "Home",
      path: "/home",
      component: Home
    },

    {
      name: "Login",
      path: "/login",
      component: Login,

      children: [
        {
          path: "account",
          component: AccountLogin
        },
        {
          path: "mobile",
          name: "MobileLogin",
          component: MobileLogin
        },
        {
          path: "/login",
          redirect: "/login/mobile"
        }
      ]
    },
    {
      name: "Register",
      path: "/register",
      component: Register
    },
    {
      path: "*",
      redirect: "/home"
    }
  ]
});
