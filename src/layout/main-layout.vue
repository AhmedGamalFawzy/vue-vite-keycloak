<template>
  <div class="main-layout">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125"/>
    <div class="wrapper">
      <HelloWorld msg="You did it!"/>
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "main-layout",
  components: {HelloWorld}
}
</script>

<style lang="scss" scoped src="./main-layout.scss"></style>
