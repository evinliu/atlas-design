import { createApp } from 'vue';
import atlasDesign from 'atlas-design';
import App from './App.vue';
import '@atlas-design/theme/index.css';

createApp(App).use(atlasDesign).mount('#app');
