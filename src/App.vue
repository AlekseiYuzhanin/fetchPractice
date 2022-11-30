<template>
  <div class="container py-3">

    <DefaultLayout>
      <router-view></router-view>
    </DefaultLayout>

  </div>
</template>

<script>
import DefaultLayout from "@/pages/DefaultLayout";

export default {
  components: {
    DefaultLayout
  }
}
</script>

<style scoped>
@import "@/css/bootstrap.min.css";
</style>