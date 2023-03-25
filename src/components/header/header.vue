<template>
  <header>
    <div>Welcome {{getCurrentUsername()}}</div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/keycloak">Keycloak</RouterLink>
      <RouterLink to="/greetings">Greetings</RouterLink>
    </nav>
    <button @click="logout">Logout</button>
  </header>
</template>

<script lang="ts" src="./header.ts"></script>
<style lang="scss" scoped src="./header.scss"></style>
