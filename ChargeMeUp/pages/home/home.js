// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    endTime: "2023-07-12 16:50:00", //结束时间
    name1: "找充电桩",
    name2: "个人账户",
    loc1: getApp().globalData.loc1,
    loc2: getApp().globalData.loc2,
    time: getApp().globalData.time,
    remainTime: 60 * 60, // 剩余时间，默认1小时即3600秒
    timer: null,
    h: "00",
    m: "00"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 同步全局数据充电位置与充电时长
    this.setData({
      loc1: getApp().globalData.loc1,
      loc2: getApp().globalData.loc2,
      time: getApp().globalData.time,
    });
    this.data.remainTime = this.data.time * 3600;
    console.log(options);
    // 执行倒计时
    if (options.flag == '1') {
      this.countDown();
    }
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

  /**
   * 倒计时功能实现
   */
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
        showTime: showHour + ' H ' + showMin + ' M ' + showSec + ' S ',
        h: showHour,
        m: showMin
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
      title: '充电已结束',
      icon: 'none'
    })
  },

  /**
   * 扫码充电功能跳转
   */
  getScancode: function () {

    // var _this = this;
    // // 允许从相机和相册扫码
    // wx.scanCode({
    //   success: (res) => {
    //     var SampleBarcode = res.result;

    //     _this.setData({
    //       SampleBarcode: SampleBarcode,

    //     })
    //   }
    // })

    // 未绑定学生信息
    if (getApp().globalData.id == '未绑定') {
      wx.showModal({
        title: '学生信息还未绑定', //提示的标题
        content: '您的学生信息还未与账号绑定，请先通过个人账户功能绑定相关信息。', //提示的内容
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
    } else if (getApp().globalData.loc1 != 0) {
      // 重复扫码处理
      wx.showModal({
        title: '重复扫描', //提示的标题
        content: '你的电动车正在此处充电，请耐心等待，不要重复扫码。', //提示的内容
        showCancel: false,
        confirmText: '返回', //确定的按钮
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击了确认')
          } else if (res.cancel) {
            console.log('用户点击了取消')
          }
        }
      })
    } else {
      wx.navigateTo({
        url: '/pages/charging/charging',
      })
    }
  },

  /**
   * 账号绑定
   */
  bindAccount() {
    // 未绑定则跳转至绑定页面
    if (getApp().globalData.id == "未绑定") {
      wx.navigateTo({
        url: '/pages/bindAccount/bindAccount'
      })
    } else {
      // 重复绑定处理
      wx.showModal({
        title: '重复绑定', //提示的标题
        content: '你已绑定学生信息，请勿重复绑定。', //提示的内容
        showCancel: false,
        confirmText: '返回', //确定的按钮
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击了确认')
          } else if (res.cancel) {
            console.log('用户点击了取消')
          }
        }
      })
    }
  }
})