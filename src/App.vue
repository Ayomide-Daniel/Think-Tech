<template>
  <div>
    <NavbarComponent/>
    <div id="main-wrapper">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
    <FooterComponent/>
  </div>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
export default {
  components: {
    NavbarComponent,
    FooterComponent
  },
}
</script>
<style>
  @import './assets/css/app.css';
</style>