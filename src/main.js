// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Buefy from 'buefy';
import VueHead from 'vue-head';
import 'buefy/dist/buefy.css';

import App from './App';
import router from './router';

Vue.use(Buefy);
Vue.use(VueHead);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  head: {
    title: { inner: '⛸ キンプリラッシュやってみたアプリ' },
    link: [
      {
        rel: 'stylesheet',
        href:
          '//cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css',
      },
      { ref: 'shortcut icon', href: 'https://skrm.ch/favicon.ico' },
    ],
  },
});
