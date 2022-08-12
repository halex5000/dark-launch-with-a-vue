// store.js
import { reactive } from 'vue'

export const store = reactive({
  showLogin: false,
  username: 'anonymous',
  toggleLogin() {
    this.showLogin = !this.showLogin;
  },
  setUsername(username) {
    this.username = username;
  },
});