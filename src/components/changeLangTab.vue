<template>
  <span @click="changeLang" class="wrap">
    <span v-if="showEn">In English</span>
    <span v-else>中文</span>
  </span>
</template>
<script>
import storage from "assets/js/storage";
import { LOCALE_KEY } from "config/localStorage";
export default {
  name: "ChangeLang",
  data() {
    return {
      showEn: this.$i18n.locale == "cn"
    };
  },
  methods: {
    changeLang() {
      this.showEn = !this.showEn;
    }
    //   	tabEn: function () {
    //   		if(this.$i18n.locale = 'en') {
    //   			return;
    //   		}
    //   		storage.set(LOCALE_KEY, 'en');
    //   	this.$i18n.locale = 'en';
    //   	this.showEn= false;
    // },
    // tabCn: function () {
    //  	if(this.$i18n.locale = 'cn') {
    //   			return;
    // 	}
    // 	storage.set(LOCALE_KEY, 'cn');
    //  		this.$i18n.locale = 'cn';
    //  		this.showEn = true;
    // }
  },
  watch: {
    showEn(val) {
      if (val) {
        this.$i18n.locale = "cn";
        storage.set(LOCALE_KEY, "cn");
        this.$emit("changeLang", "cn");
      } else {
        this.$i18n.locale = "en";
        storage.set(LOCALE_KEY, "en");
        this.$emit("changeLang", "en");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";
.wrap {
  width: 100%;
  height: 100%;
  @include flex-center();
}
</style>
