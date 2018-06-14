<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title has-text-left">
        {{ today }}
      </p>
      <div class="has-text-right">
        <p class="card-header-title">products: {{ products.length }}</p>
      </div>
    </header>
    <div class="card-content">
      <div class="content">
        <new-product @newProduct="addProduct"></new-product>
      </div>
      <div class="content">
        <product-list :products="products" @check="checkProduct" @remove="removeProduct"></product-list>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import NewProduct from './NewProduct';
import ProductList from './ProductList';

export default {
  name: 'product-card',
  components: {
    NewProduct,
    ProductList,
  },
  data() {
    return {
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      products: [],
      errors: [],
    };
  },
  created() {
    axios.get(`http://localhost:3000/products`)
      .then(res => {
        this.products = res.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  computed: {
    today() {
      const newDate = new Date();
      return `${this.days[newDate.getDay()]}, ${newDate.getDate()} of ${this.months[newDate.getMonth()]}`;
    },
  },
  methods: {
    addProduct(product) {
      const newProduct = { text: product };
      axios.post(`http://localhost:3000/products`, newProduct)
        .then((res) => {
          this.created();
        })
        .catch((e) => {
          this.errors.push(e);
        })
    },
    checkProduct(index) {
      this.products[index].bought = !this.products[index].bought;
    },
    removeProduct(index) {
      this.products.splice(index, 1);
    },
  },
};
</script>

<style>
.card {
  border-radius: 10px;
}

.card-header-title {
  color: #636368;
}
</style>
