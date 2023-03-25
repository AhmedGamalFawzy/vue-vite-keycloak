<template>
  <div class="about">
    <h2>Roles</h2>
    <span>{{ getUserRoles()?.join(" ") }}</span>
    <h2>Token</h2>
    <span>{{getAccessToken()}}</span>
  </div>
</template>

<script lang="ts" src="./keycloak.ts"></script>
<style lang="scss" scoped src="./keycloak.scss"></style>
