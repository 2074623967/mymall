<template>
  <div class="goods" v-for="(item index) in goods" :key="index">{{item}}</div>
</template>
<script>
export default {
  name: 'GoodList',
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
