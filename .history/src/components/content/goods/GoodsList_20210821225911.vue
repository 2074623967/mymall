<template>
 {{goods}}
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
