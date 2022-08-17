<template>
  <v-app>
    <div>{{ store.resetStore() }}</div>
    <Login v-if="isLoginEnabled" />
    <v-app-bar>
      <v-toolbar dark v-if="isLaunchDarklyReady" color="#405BFF">
        <LaunchDarkly />
        <Done v-if="isNewExperienceEnabled"/>
        <v-toolbar-title>Features Powered by LaunchDarkly</v-toolbar-title>
        <v-btn v-if="isLoginEnabled" @click="store.toggleLogin()">
          <template v-slot:prepend>
            <v-badge color="info" :content="store.username" inline> </v-badge>
          </template>
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </v-toolbar>
    </v-app-bar>
    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { useLDReady, useLDFlag } from "launchdarkly-vue-client-sdk";
import { store } from "./components/store";
import Login from "./components/Login.vue";
import LaunchDarkly from "./components/LaunchDarkly.vue";
import Done from "./components/Done.vue";
let isLaunchDarklyReady = ref(false);
let isLoginEnabled = ref(false);
let isNewExperienceEnabled = ref(false);

try {
  isLaunchDarklyReady = useLDReady();
  isLoginEnabled = useLDFlag("login", false);
  isNewExperienceEnabled = useLDFlag("new-ui", false);
} catch (error) {
  console.error("error checking LD Ready", error);
}
</script>
