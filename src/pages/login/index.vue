<template>
  <div class="page-wrap">
    <header>
      <div class="h_content">
        <div class="h_left">
          <h2>SUPERMARKET</h2>
        </div>
        <!-- <div class="h_right">					
					<div class="btn">
						<change-lang/>
					</div>

				</div> -->
      </div>
    </header>
    <div class="main">
      <login-box />
    </div>
  </div>
</template>
<script>
import LoginBox from "./loginBox/index.vue";
// import ChangeLang from "components/changeLangTab";
export default {
  name: "login",
  components: {
    LoginBox
    // ChangeLang
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
    width: 100%;
    height: 500px;
    margin: 0 atuo;
    @include flex-center();
  }
}
</style>
