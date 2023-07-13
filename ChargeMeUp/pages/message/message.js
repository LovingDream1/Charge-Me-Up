// pages/message/message.js
Page({
  /**
   * 异常信息查看详情
   */
  handleShowModal() {
    wx.showModal({
      title: '电源提前拔出', //提示的标题
      content: '您在天赐庄本部' + this.data.loc1 + '号充电桩' + this.data.loc2 + '号充电位的电动车电源于' + this.data.time + '被提前拔出。请确认是否为本人操作。', //提示的内容
      cancelText: '否', //取消的按钮
      confirmText: '是', //确定的按钮
      success: function (res) {
        if (res.confirm) {
          wx.showModal({
            title: '您的充电已结束', //提示的标题
            content: '已为您停止计费，感谢您的使用！', //提示的内容
            showCancel: false,
            confirmText: '返回', //确定的按钮
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击了确定');
                getApp().globalData.loc1 = 0;
                getApp().globalData.loc2 = 0;
                wx.reLaunch({
                  url: '/pages/home/home?flag=2',
                })
              } else if (res.cancel) {
                console.log('用户点击了取消')
              }
            }
          })
          console.log('用户点击了确定')
        } else if (res.cancel) {
          wx.showModal({
            title: '您的充电已结束', //提示的标题
            content: '已停止继续计费，请关注您的电动车安全！', //提示的内容
            showCancel: false,
            confirmText: '返回', //确定的按钮
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击了确定');
                wx.reLaunch({
                  url: '/pages/home/home?flag=2',
                })
              } else if (res.cancel) {
                console.log('用户点击了取消')
              }
            }
          })
          console.log('用户点击了取消')
        }
      }
    })
  },

  /**
   * 隐藏异常信息
   */
  yincang: function () {
    setTimeout(function () {
      this.setData({
        hidden: true
      })
    }.bind(this), )
  },

  /**
   * 显示异常信息
   */
  xianshi: function () {
    var date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()
    var result = year + "年" + month + "月" + day + "日" + hour + "时" + minute + "分" + second + "秒";
    setTimeout(function () {
      this.setData({
        hidden: false
      })
    }.bind(this), );
    this.setData({
      loc1: getApp().globalData.loc1,
      loc2: getApp().globalData.loc2,
      time: result
    })
  },

  /**
   * 页面的初始数据
   */
  data: {
    hidden: true,
    loc1: getApp().globalData.loc1,
    loc2: getApp().globalData.loc2,
    time: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

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
  onShareAppMessage() {}
})