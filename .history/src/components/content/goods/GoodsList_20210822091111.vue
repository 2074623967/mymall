<template>
  <div class="goods">
    <goods-list-item
      v-for="(item, index) in goods"
      :key="index"
      :goods-item="item"
    />
    {{ goods }}
  </div>
</template>
<script>
import GoodsListItem from './GoodsListItem';
export default {
  name: 'GoodList',
  components: {
    GoodsListItem
  },
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
<style scoped>
.goods{
  display: flex;
 flex-wrap: wrap;
 justify-content: center;
}
</style>>
