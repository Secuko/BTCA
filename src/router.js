import MainPage from "./components/MainPage.vue";
import InputForm from "./components/Card/InputForm.vue";
import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
    { path: '/', component: MainPage, alias: "/" },
    { path: '/create', component: InputForm },
  ]

export default createRouter({
    history: createWebHashHistory(),
    routes,
});
