/*
 * @version: v 1.0.0
 * @Github: https://github.com/GitHubGanKai
 * @Author: GitHubGanKai
 * @Date: 2021-03-20 10:28:10
 * @LastEditors: geeks.kai@gmail.com
 * @LastEditTime: 2021-03-20 20:41:57
 * @FilePath: /vue-jd-h5/src/main.ts
 */
import { createApp, h, defineComponent } from 'vue';
import App from './App';
import router from './router';
import store from './store';

import makeServer from '../mock/server';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

import { Button } from 'vant';

const app = createApp(App)
  .use(store)
  .use(router)
  .use(Button)
  .mount('#app');