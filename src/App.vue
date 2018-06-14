<template>
  <div id="app">
    <section class="hero is-primary is-bold is-fullheight">
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <div class="navbar-item">
                Lista de Compras
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="row">
            <div class="columns">
              <div class="column is-half is-offset-one-quarter">
                <product-card></product-card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="hero-foot">
        <div class="container">
          <div class="content has-text-centered">
            <strong>VueJS Tutorial</strong>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProductCard from './components/ProductCard';

export default {
  name: 'App',
  components: {
    ProductCard,
  },
};
</script>

<style src="../node_modules/bulma/css/bulma.min.css"></style>
<style src="../node_modules/font-awesome/css/font-awesome.min.css"></style>
<style>

</style>

