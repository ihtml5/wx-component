// components/item/item.js
Component({
  // 在组件定义时的选项中启用多slot支持
  options: {
    multipleSlots: true 
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type:  String,
      value: 'Item component',
    },
    img_small: {
      type: String,
      value: 'http://img5.qiyipic.com/image/ppopen/ppopen_58958e7cf6882e5fa81b62b4_0.jpg'
    },
    linecount: {
      type: Number,
      value: 2 
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  /**
   * 组件的方法列表
   */
  methods: {
    toggletitle: function (e) {
      console.log('item:::::', e.detail);
      this.setData({
        oneline: e.detail.linecount >= 3,
      });
      console.warn('oneline::::', this.data.oneline);
    }
  },
  ready: function (e) {
  }
})
