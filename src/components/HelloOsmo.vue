<template>
  <v-timeline>
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :dot-color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <template v-slot:opposite>
        <v-chip class="ma-2" :color="item.color" text-color="white">
          {{ item.subtitle }}
        </v-chip>
      </template>
      <v-card max-width="425" min-width="400" elevated rounded="true">
        <v-card-title
          :color="item.color"
          class="white text--primary text-h5"
          align="center"
        >
          <v-avatar size="150">
            <v-img v-if="item.image" size="100" :src="item.image"></v-img>
            <v-icon v-else="item.icon" size="100" :color="dotColor">{{
              item.icon
            }}</v-icon>
          </v-avatar>
          <h4>{{ item.title }}</h4>
        </v-card-title>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script setup>
const items = [
  {
    color: "#405BFF",
    icon: "mdi-trophy",
    title: "Congratulations!",
    subtitle: 'quest completed!',
  },
  {
    color: "#FF386B",
    icon: "mdi-star",
    title: "New user experience enabled!",
    subtitle: 'targeting a user!',
  },
  {
    color: "#A34FDE",
    icon: "mdi-account",
    title: "Login Enabled",
    subtitle: 'targeting enabled!',
  },
  {
    color: "#405BFF",
    icon: "mdi-flag",
    title: "LaunchDarkly",
    image: "./blog-images/osmo.png",
    subtitle: 'powering your features!',
  },
  {
    color: "#FF386B",
    icon: "mdi-vuetify",
    title: "Vuetify",
    image: "./blog-images/logo.svg",
    subtitle: 'keeping it vuetiful!',
  },
  {
    color: "#A34FDE",
    icon: "mdi-vuejs",
    title: "Vue 3",
    image: "./blog-images/vue.png",
    subtitle: 'running your app!',
  },
  {
    color: "#405BFF",
    icon: "mdi-package",
    title: "Vite",
    image: "https://vitejs.dev/logo.svg",
    subtitle: 'bundling and building!',
  },
];
</script>
