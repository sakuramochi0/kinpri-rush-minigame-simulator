// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Buefy from 'buefy';
import VueHead from 'vue-head';
import SocialSharing from 'vue-social-sharing';
import 'buefy/dist/buefy.css';

import App from './App';
import router from './router';

Vue.use(Buefy);
Vue.use(VueHead);
Vue.use(SocialSharing);

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
    script: [
      {
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-7053288-4',
      },
      {
        inner: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-7053288-4');
  `,
      },
    ],
  },
});
