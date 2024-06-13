import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './Layout/Wrapper/index.vue'
import Blank from './Layout/Wrapper/index_blank.vue'
import Client from './Layout/Wrapper/index_client.vue'
import DaiLy from './Layout/Wrapper/index_daily.vue'
import Toaster from "@meforma/vue-toaster"
const app = createApp(App)

app.use(router)
app.use(Toaster, {
    position: "top-right"
})
app.component("default-layout", Default);
app.component("blank-layout", Blank);
app.component("client-layout", Client);
app.component("daily-layout", DaiLy);

app.mount("#app")