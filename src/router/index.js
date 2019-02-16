import Vue from 'vue';
import Router from 'vue-router';

import Game from '@/components/Game';
import About from '@/components/About';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'About',
      component: About,
    },
    {
      path: '/game/',
      name: 'Game',
      component: Game,
    },
  ],
});
