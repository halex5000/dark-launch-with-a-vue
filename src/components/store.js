// store.js
import { reactive } from "vue";

// if (isNewExperienceEnabled.value) {
//   store.prependItem({
//     color: "#FF386B",
//     icon: "mdi-star",
//     title: "New user experience enabled!",
//     subtitle: "targeting a user!",
//   });
//   store.prependItem({
//     color: "#405BFF",
//     icon: "mdi-trophy",
//     title: "Congratulations!",
//     subtitle: "quest completed!",
//   });
// }

const ogItems = [
  {
    color: "#FF386B",
    icon: "mdi-vuetify",
    title: "Vuetify",
    image: "./blog-images/logo.svg",
    subtitle: "keeping it vuetiful!",
  },
  {
    color: "#A34FDE",
    icon: "mdi-vuejs",
    title: "Vue 3",
    image: "./blog-images/vue.png",
    subtitle: "running your app!",
  },
  {
    color: "#405BFF",
    icon: "mdi-package",
    title: "Vite",
    image: "https://vitejs.dev/logo.svg",
    subtitle: "bundling and building!",
  },
];

export const store = reactive({
  showLogin: false,
  username: "anonymous",
  items: ogItems,
  toggleLogin() {
    this.showLogin = !this.showLogin;
  },
  setUsername(username) {
    this.username = username;
  },
  prependItem(item) {
    this.items = [item, ...this.items];
  },
  resetStore() {
    this.items = ogItems;
  },
});
