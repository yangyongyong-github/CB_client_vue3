<template>
  <div id="app-container">
    <nav>
      <TopBanner />
    </nav>
    <div class="main">
      <RouterView />
    </div>
    <!-- <footer></footer> -->
  </div>
</template>

<script setup>
import TopBanner from "@/components/content/TopBanner";
</script>

<style lang="scss">
// @import url("./styles/_var.scss");

$base-container-width: 1200px;
#app-container {
  width: $base-container-width;
  margin: 0 auto;
  border: 1px solid sienna;
}
</style>>