<template>
  <div class="dropdown">
    <div class="dropdown-toggle">
      <p class="code fl">
        <span>+</span>
        <input type="text" v-model="code" @keyup="getcode" />
      </p>
      <i class="iconfont icon-xuanze dropdown-arrow" @click="showList"></i>
    </div>
    <transition name="fade">
      <ul class="dropdown-layer" v-show="isShow">
        <li
          class="item"
          v-for="nation in nations"
          :key="nation.domain"
          @click="getCode(nation.code)"
        >
          <span>+{{ nation.code }}</span
          >&nbsp;{{ nation.name }}
        </li>
      </ul>
    </transition>
  </div>
</template>
<script>
// import {nationList} from './config'
export default {
  name: "NationCodePicker",
  props: {
    // lang: ""
  },
  data() {
    return {
      nations: [
        { name: this.$t("nations.cn"), domain: "cn", code: "86" },
        { name: this.$t("nations.au"), domain: "au", code: "61" }
      ],

      code: "",
      isShow: false
    };
  },
  // created() {
  //     this.nations = nationList
  // },

  methods: {
    getcode(e) {
      console.log(e);
    },
    getCode(val) {
      this.code = val;
      this.isShow = false;
    },
    showList() {
      this.isShow = !this.isShow;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
/*下拉菜单样式dropdown*/
.dropdown {
  height: 100%;
  width: 83px;
}
.dropdown-toggle {
  position: relative;

  justify-content: space-between;
  align-items: center;
  width: 80px;
  height: 100%;
  z-index: 2;
  .code {
    width: 55px;
    overflow: hidden;
    height: 100%;
    display: flex;
    padding: 0 5px;
  }
  .dropdown-arrow {
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    width: 25px;
    height: 100%;
    font-size: 12px;
  }
}

.dropdown-layer {
  // display:none;
  position: absolute;
  left: 0;
  top: 100%;
  width: auto;
  text-align: left;
  padding: 6px 0;
  max-height: 274px;
  // overflow: scroll;
  border: 1px solid #ccc;
  border-top: none;
  z-index: 9;
  background-color: #fff;
  .item {
    height: 24px;
    width: auto;
    padding: 0 20px;
    @include ellipsis();
    display: flex;
    align-items: center;
  }
}
</style>
