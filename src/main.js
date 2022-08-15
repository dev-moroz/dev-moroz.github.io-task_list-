import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { Quasar } from "quasar"
import quasarUserOptions from "./quasar-user-options"
import { initializeApp } from "firebase/app"

initializeApp({
  apiKey: "AIzaSyDLZeD0aWAHH5Ejp5YvAq9qR_p2FBOcKzs",
  authDomain: "vue-todo-list-1bb43.firebaseapp.com",
  projectId: "vue-todo-list-1bb43",
  storageBucket: "vue-todo-list-1bb43.appspot.com",
  messagingSenderId: "149443049370",
  appId: "1:149443049370:web:970d1123f37b9b78ffec23"
})

createApp(App)
  .use(Quasar, quasarUserOptions)
  .use(store)
  .use(router)
  .mount("#app")
