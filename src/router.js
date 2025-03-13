import MainPage from "./views/MainPage.vue";
import CreatePage from "./views/CreatePage.vue";
import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
    { path: '/', component: MainPage, alias: "/" },
    { path: '/create', component: CreatePage },
  ]

export default createRouter({
    history: createWebHashHistory(),
    routes,
});
