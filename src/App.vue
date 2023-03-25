<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainLayout from "@/layout/main-layout.vue";
import AppHeader from "@/components/header/header.vue";</script>

<template>
  <app-header class="header"/>
  <main>
    <main-layout/>
    <RouterView/>
  </main>
</template>

<style lang="scss">
  $header-height: 5rem;

  main {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    font-weight: normal;
    min-height: calc(100vh - $header-height);
    place-items: center;
  }

  @media (min-width: 1024px) {
    main {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 0 2rem;
    }
  }

  .header {
    height: $header-height;
  }
</style>
