module.exports = {
  plugins: {
    autoprefixer: {
    },
    "postcss-px-to-viewport":{
      viewportWidth:375,//视窗的宽度，对应的是我们设计稿的宽度,
      viewportHeight:667,//视窗的高度，对应的是我们设计稿的高度,
      unitPrecision:'vw',//指定需要转换成的视窗单位，建议使用vw,
      selectorBlackList:['ignore','tab-bar','tab-bar-item'],//指定不需要转换的类，后面再讲
      minPixeValue:1,//小于或等于'1px'不转换为视窗单位
      mediaQuery:false//运行在媒体查询中转换'px'
    }
  }
}
