// components/title/title.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    oneline: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  ready: function (e) {
    var me = this;
    var query = wx.createSelectorQuery().in(this)
    query.select('.tnm-title').boundingClientRect(function (res) {
      console.log('ret', res.height);
      me.triggerEvent('toggletitle', {
        linecount: (res.height+1)/21
      });
    }).exec()
  }
})
