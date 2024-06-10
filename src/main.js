import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './Layout/Wrapper/index.vue'
import Blank from './Layout/Wrapper/index_blank.vue'
import Client from './Layout/Wrapper/index_client.vue'
const app = createApp(App)

app.use(router)
app.component("default-layout", Default);
app.component("blank-layout", Blank);
app.component("client-layout", Client);

app.mount("#app")