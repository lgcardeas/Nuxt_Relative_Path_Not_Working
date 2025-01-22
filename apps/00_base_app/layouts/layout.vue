<template>
  <div :key="version" v-loading.body="loading > 0" class="main-content">
    <h1>Layout</h1>
    <transition v-if="loading === 0" name="el-fade-in">
      <nuxt id="print-area" />
    </transition>
  </div>
</template>
<script>

</script>
<style>

</style>
