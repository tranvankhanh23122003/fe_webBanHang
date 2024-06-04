import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './Layout/Wrapper/index.vue'
import Blank from './Layout/Wrapper/index_blank.vue'
const app = createApp(App)

app.use(router)
app.component("default-layout", Default);
app.component("blank-layout", Blank);

app.mount("#app")