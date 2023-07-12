// pages/tmp/tmp.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query: [],
    remainTime: 60 * 60, // 剩余时间，默认1小时即3600秒
    timer: null,
    showTime: '1:0:0' // 显示的倒计时，初始为1小时
  },

  countDown: function () {
    let that = this;
    let remainTime = that.data.remainTime;

    that.data.timer = setInterval(function () {
      remainTime--;
      let hour = parseInt(remainTime / 3600);
      let min = parseInt((remainTime - hour * 3600) / 60);
      let sec = remainTime - hour * 3600 - min * 60;

      // 格式化显示的时间
      let showHour = hour < 10 ? '0' + hour : hour;
      let showMin = min < 10 ? '0' + min : min;
      let showSec = sec < 10 ? '0' + sec : sec;

      that.setData({
        showTime: showHour + ':' + showMin + ':' + showSec
      });

      if (remainTime <= 0) {
        that.stopCountDown();
      }
    }, 1000); // 每隔1秒执行一次
  },

  stopCountDown: function () {
    let that = this;
    clearInterval(that.data.timer); // 清除计时器
    wx.showToast({
      title: '倒计时结束',
      icon: 'none'
    })
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