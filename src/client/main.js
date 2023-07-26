import { createApp } from "vue";
import Router from '@/router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import '@/style/index.css';
import App from "./App.vue";

createApp(App).use(Router).use(ElementPlus).mount("#app");
