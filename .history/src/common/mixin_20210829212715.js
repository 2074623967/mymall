import { POP, NEW, SELL } from './const';
import { debounce } from 'common/utils';
import BackTop from 'components/content/backTop/BackTop';
export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      refresh:null
    };
  },
  mounted() {
    // 1.图片加载完成的事件监听
    this.refresh = debounce(this.$refs.scroll.refresh, 50);
    //对监听的事件进行保存
    this.itemImgListener = () => {
      this.refresh();
    };
    this.$bus.$on('itemImageLoad', this.itemImgListener);
  }
};
export const backTopMixin={
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    };
  },
  methods: {
     //3.回到顶部按钮事件
     backClick() {
      console.log('点击触发!');
      //1.判断backTop是否显示
      this.$refs.scroll.scrollTo(0, 0);
    },
  }
}