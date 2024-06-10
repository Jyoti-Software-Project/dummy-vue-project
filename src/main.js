// import { createApp } from 'vue';
// import App from './App.vue';
// import router from './router/Index';

// createApp(App).mount('#app').use(router);


import { createApp } from 'vue';
import App from './App.vue';
import router from './router/Index';

const app = createApp(App);

app.use(router);
app.mount('#app');
