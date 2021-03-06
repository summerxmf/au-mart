import Vue from "vue";
import locale from "element-ui/lib/locale";
import VueI18n from "vue-i18n";
import messages from "./langs";
import storage from "assets/js/storage";
import { LOCALE_KEY } from "config/localStorage";

Vue.use(VueI18n);
//从localStorage获取语言选择。
const i18n = new VueI18n({
  locale: storage.get(LOCALE_KEY) || "cn",
  messages
});

locale.i18n((key, value) => i18n.t(key, value));

export default i18n;
