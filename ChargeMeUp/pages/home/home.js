// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    endTime: "2023-07-12 10:30:00", //结束时间
    name1: "找充电桩",
    name2: "个人账户"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.singleCountDown(); //页面加载时就启动定时器
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
  onShareAppMessage() {

  },

  //时间显示小于10的格式化函数
  timeFormat(param) {
    return param < 10 ? '0' + param : param;
  },
  //倒计时
  singleCountDown: function () {
    var that = this;
    var time = 0;
    var obj = {};
    var endTime = new Date(that.data.endTime.replace(/-/g, "/")).getTime(); //结束时间时间戳
    var currentTime = new Date().getTime(); //当前时间时间戳
    time = (endTime - currentTime) / 1000;
    // 如果活动未结束
    if (time > 0) {
      var hou = parseInt(time / (60 * 60));
      var min = parseInt(time % (60 * 60 * 24) % 3600 / 60);
      obj = {
        hou: that.timeFormat(hou),
        min: that.timeFormat(min)
      }
    } else { //活动已结束
      obj = {
        hou: "00",
        min: "00"
      }
      clearTimeout(that.data.timeIntervalSingle); //清除定时器
    }
    var timeIntervalSingle = setTimeout(that.singleCountDown, 1000);
    that.setData({
      timeIntervalSingle,
      txtTime: obj,
    })
  },
  getScancode: function () {

    var _this = this;
    // 允许从相机和相册扫码
    wx.scanCode({
      success: (res) => {
        var SampleBarcode = res.result;

        _this.setData({
          SampleBarcode: SampleBarcode,

        })
      }
    })
  }
})

