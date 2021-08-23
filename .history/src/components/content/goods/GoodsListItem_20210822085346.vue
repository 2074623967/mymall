<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt="" />
  </div>
</template>
<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
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
