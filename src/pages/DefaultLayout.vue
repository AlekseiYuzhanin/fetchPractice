<template>
  <header>
    <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
        <span class="fs-4">«Самоход»</span>
      </a>
      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <router-link to="/registration" class="me-3 py-2 text-dark text-decoration-none" >Регистрация</router-link>
        <router-link to="/login" class="me-3 py-2 text-dark text-decoration-none" >Авторизация</router-link>
        <router-link to="/orders" class="me-3 py-2 text-dark text-decoration-none" >Мои заказы</router-link>
        <router-link to="/cart" class="me-3 py-2 text-dark text-decoration-none" >Корзина</router-link>
      </nav>
    </div>
  </header>

  <slot></slot>

  <footer class="pt-4 my-md-5 pt-md-5 border-top">
    <div class="row">
      <div class="col-12 col-md">
        <small class="d-block mb-3 text-muted">&copy; 2017–2022</small>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "DefaultLayout"
}
</script>

<style scoped>

</style>