import { createApp } from 'vue';
import App from './App.vue';
import router from './index'; // Import your Vue Router instance

const app = createApp(App);

// Use Vue Router
app.use(router);

app.mount('#app');