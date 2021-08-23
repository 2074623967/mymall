<template>
<div class="goods">
  {{goods}}
</div>

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
