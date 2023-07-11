// pages/bindAccount/bindAccount.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query: [],
    username: [],
    id: [],
  },
  inputname(e) {
    this.setData({
      username: e
    })
  },

  inputid(e) {
    this.setData({
      id: e
    })
  },

  confirmInfo() {
    if (this.data.username == '' || this.data.id == '') {
      wx.showToast({
        title: '绑定失败',
        icon: 'error'
      })
    }
    // wx.request({
    //   url: 'http://localhost:8082/onlineSubmit/system/login',
    //   method: 'POST',
    //   header: {
    //     "content-type": "application/x-www-form-urlencoded"
    //   },
    //   data: {
    //     username: username,
    //     id: id,
    //     type: this.data.type
    //   },
    //   success: (res) => {
    //     console.log(res.data);
    //     if (res.data.type == 'error') {
    //       wx.showToast({
    //         title: '用户不存在！',
    //         icon: 'error'
    //       })
    //     } else {
    //       // 登录成功后，设置全局变量-username
    //       const app = getApp();
    //       app.globalData.username = username
    //       wx.reLaunch({
    //         url: '/pages/home/home?username=' + username,
    //       })
    //     }
    //   },
    //   fail: (error) => {
    //     //console.log('请求失败：', error);
    //   }
    // })
    else {
      wx.showToast({
        title: '绑定成功',
        icon: 'success',
      })
      wx.reLaunch({
        url: '/pages/home/home'
      })
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      query: options
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: this.data.query.title,
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})