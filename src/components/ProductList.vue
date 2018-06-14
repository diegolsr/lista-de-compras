<template>
  <div class="row">
    <div class="columns">
      <div class="column">
        <div class="field is-grouped" v-for="(product, index) in products" :key="index">
          <p class="control">
            <a class="button is-small check-button" @click="check(index)">
              <span class="icon is-small">
              </span>
            </a>
          </p>
          <p class="control is-expanded" :class="{'checked': product.bought}">
            {{ product.text }}
          </p>
          <p class="control">
            <a class="button is-danger is-small" @click="remove(index)">
              <span class="icon is-small">
                <i class="fa fa-trash"></i>
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product-list',
  props: ['products'],
  data() {
    return {};
  },
  methods: {
    check(index) {
      this.$emit('check', index);
    },
    remove(index) {
      this.$emit('remove', index);
    },
  },
};
</script>

<style scoped>
.button {
  border-radius: 50%;
}

.checked {
  text-decoration: line-through;
}
</style>
