<template>
  <ul class="tab-content">
    <li class="fill-item fill-mobile">
      <div class="el-icon">
        <i class="iconfont icon-iconzhengli_shouji"></i>
      </div>
      <div class="el-select ">
        <me-nation-code-picker />
      </div>
      <input type="text" :placeholder="$t('login.mobileNumber')" />
    </li>
    <li class="fill-item fill-code">
      <div class="el-icon"><i class="iconfont icon-dunpai"></i></div>

      <input type="text" :placeholder="$t('login.code')" />
      <span class="getcode">{{ $t("login.getCode") }}</span>
    </li>
    <li class="fill-menu">
      <router-link tag="li" to="/register">{{
        $t("login.register")
      }}</router-link>
    </li>
    <li>
      <a class="submit">{{ $t("login.login") }}</a>
    </li>
  </ul>
</template>
<script>
import MeNationCodePicker from "components/nationCodePicker";
export default {
  name: "MobileLogin",
  components: {
    MeNationCodePicker
  }
};
</script>

<style lang="scss" scoped>
.tab-content {
  width: 300px;
  height: 205px;
  li {
    margin-bottom: 20px;
  }
}
.fill-item {
  line-height: 40px;
  height: 42px;
  width: 100%;
  color: #666;
  border-radius: 5px;
  display: flex;
  .el-icon {
    height: 100%;
    padding: 0 10px;
    background-color: #ccc;
    color: #fff;
  }
}
.fill-mobile {
  border: 1px solid #f1f1f1;
  .el-select {
    width: 80px;
    height: 42px;
    line-height: 42px;
    position: relative;
    border-right: 1px solid #f1f1f1;
  }
  input {
    padding-left: 55px;
  }
}
.fill-code {
  .getcode {
    display: inline-block;
    color: #ff5b5b;
    flex: 1;
    height: 42px;
    text-align: right;
  }
  input {
    width: 100px;
    height: 42px;
    line-height: 42px;
    padding-left: 13px;
    border: 1px solid #f1f1f1;
  }
}
.fill-menu {
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  color: #ff5b5b;
}
.submit {
  display: block;
  text-align: center;
  height: 42px;
  line-height: 42px;
  width: 100%;
  color: #fff;
  background-color: #ff5b5b;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}
</style>
