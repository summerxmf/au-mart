<template>
  <header class="header">
    <div class="header-wrap">
      <div class="location"></div>
      <ul class="header-right">
        <router-link tag="li" to="/register">{{
          $t("home.register")
        }}</router-link>
        <router-link tag="li" to="/login">{{ $t("home.login") }}</router-link>
        <li class="language"><change-lang /></li>
      </ul>
    </div>
  </header>
</template>
<script>
import ChangeLang from "components/changeLangTab";
export default {
  name: "HomeHeader",
  components: {
    ChangeLang
  }
};
</script>

<style lang="scss" scoped>
.header {
  border-bottom: 1px dashed #ededed;
  &-wrap {
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .location {
    width: 50px;
    border-right: 1px dashed #ededed;
    border-left: 1px dashed #ededed;
  }
  &-right {
    display: flex;
    li {
      line-height: 46px;
      height: 46px;
      padding: 0 16px;
      border-left: 1px dashed #ededed;
      &:last-child {
        border-right: 1px dashed #ededed;
      }
    }
    .language {
      color: #ff4530;
    }
  }
}
</style>
