<template>
  <div class="page-wrap">
    <header>
      <div class="h_content">
        <div class="h_left">
          <h2>SUPERMARKET</h2>
        </div>
        <div class="h_right">
          <span>{{ $t("register.already") }}</span>
          <router-link class="btn login_btn" to="/login/mobile">
            <span>{{ $t("register.login") }}</span>
          </router-link>
          <div class="btn">
            <change-lang />
          </div>
        </div>
      </div>
    </header>
    <div class="main">
      <dl class="row1">
        <dd>
          <input type="text" :placeholder="$t('register.username')" />
        </dd>
        <dd>
          <input
            type="password"
            name="password"
            :placeholder="$t('register.password')"
          />
          <input
            type="email"
            name="email"
            :placeholder="$t('register.email')"
          />
        </dd>
      </dl>
    </div>
  </div>
</template>
<script>
import ChangeLang from "components/changeLangTab";
export default {
  name: "Register",
  components: {
    ChangeLang
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
.page-wrap {
  header {
    background-color: #f7f7f7;
    .h_content {
      width: 1000px;
      height: 60px;
      @include flex-between();
      .h_left {
        h2 {
          font-size: 24px;
          font-weight: 400;
          color: #ff5b5b;
        }
      }
      .h_right {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        span {
          font-size: 16px;
        }
        .btn {
          width: 120px;
          height: 30px;
          background-color: #ff5b5b;
          color: #fff;
          border: 1px solid #ededed;
          border-radius: 4px;
          @include flex-center();
          font-size: 16px;
          cursor: pointer;
          span {
          }
        }
      }
    }
  }
  .main {
    padding: 48px 0;
    background: #fff;
    .row1 {
      width: 620px;
      margin: 0 auto;
    }
    dd {
      flex: 1;
      margin: 0 auto 20px;
      display: flex;
      justify-content: flex-start;
      input {
        width: 300px;
        height: 36px;
        padding: 0 14px;
        font-size: 16px;
        color: #999;
        border-radius: 4px;
        border: 1px solid #eee;
      }
    }
  }
}
</style>
