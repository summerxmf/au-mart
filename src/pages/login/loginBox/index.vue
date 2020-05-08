<template>
  <div class="login-box">
    <ul class="login-tab">
      <router-link tag="li" to="/login/mobile">{{
        $t("login.tabMobiie")
      }}</router-link>
      <router-link tag="li" to="/login/account">{{
        $t("login.tabAccount")
      }}</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "LoginBox"
};
</script>

<style lang="scss" scoped>
.login-box {
  padding: 25px;
  width: 350px;
  height: 350px;
  background-color: #fff;
}
.login-tab {
  margin-bottom: 30px;
  display: flex;
  justify-content: flex-start;

  li {
    margin-right: 25px;
    font-size: 16px;
  }
}
.router-link-active {
  color: #ff5b5b;
  border-bottom: 2px solid #ff5b5b;
  padding-bottom: 4px;
}
</style>
