// import Toast from '../../miniprogram_npm/vant-weapp/toast/toast';
import myrequest from '../../utils/request.js'
Page({
  /**
   * 页面的初始数据
   */
// "tabBar": {
//   "backgroundColor": "#000",
//    "list": [
//      {
//        "pagePath": "pages/home/home",
//        "text": "首页",
//        "iconPath": "image/s1.png",
//        "selectedIconPath": "image/s2.png"      },
//      {
//        "pagePath": "pages/index/index",
//        "text": "订单",
//        "iconPath": "image/d1.png",
//        "selectedIconPath": "image/d11.png"
//      },
//      {
//        "pagePath": "pages/person/person",
//        "text": "个人中心",
//        "iconPath": "image/g1.png",
//        "selectedIconPath": "image/g2.png"
//      }
//    ]
//  }

  data: {
    lunboList:[
      {
        src:"../../image/lunbo1.png"
      },
      {
        src:"../../image/lunbo1.png"
      },
      {
        src:"../../image/lunbo1.png"
      }
      
    ]
  },
  addList:function(event){
    console.log(event)
    wx.navigateTo({
      url: "../../pages/addOrder/addOrder"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // myrequest("/hotMusic")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})