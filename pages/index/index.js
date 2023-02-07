//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    name: '',
    nameErrtip:'',
    car: '',
    carErrtip: '',
    phone: '',
    phoneErrtip:''
  },
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  bindKeyInput1: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  bindKeyInput2: function (e) {
    this.setData({
      car: e.detail.value
    })
  },
  bindKeyInput3: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  _check :function(){
    let result = false
    let phoneReg = /^1[3-9]\d{9}$/
    let {
      name,
      phone 
    } = this.data
    if (name === '') {
      this.setData({
        nameErrtip: '称呼不能为空！'
      })
      return false
    } else {
      this.setData({
        nameErrtip: ''
      })
      result = true
    }
    if (phone === '') {
      this.setData({
        phoneErrtip: '号码不能为空！'
      })
      return false
    } else {
      this.setData({
        phoneErrtip: ''
      })
      result = true
    }
    if (!phoneReg.test(phone)) {
      this.setData({
        phoneErrtip: '号码格式不正确！'
      })
      return false
    } else {
      phoneRef.current.cleanTip()
      this.setData({
        phoneErrtip: ''
      })
      result = true
    }
    return result
  },
  _submit: function () {
    let result = this._check()
    console.log(this.data.motto)
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})