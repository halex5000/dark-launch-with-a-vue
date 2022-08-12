<template>
  <v-app>
    <v-app-bar>
      <v-toolbar dark v-if="isLaunchDarklyReady" color="#405BFF">
        <v-toolbar-title align="center">Features Powered by LaunchDarkly</v-toolbar-title>
      </v-toolbar>
    </v-app-bar>
    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue';
  import HelloWorld from './components/HelloWorld.vue'
  import { useLDReady } from 'launchdarkly-vue-client-sdk';

  let isLaunchDarklyReady = ref(false);
  try {
    isLaunchDarklyReady = useLDReady();
  } catch (error) {
    console.error('error checking LD Ready', error);
  }
</script>
