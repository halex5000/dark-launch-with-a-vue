<template>
  <v-timeline>
    <v-timeline-item
      v-for="(item, i) in store.items"
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
import { store } from './store';
</script>
