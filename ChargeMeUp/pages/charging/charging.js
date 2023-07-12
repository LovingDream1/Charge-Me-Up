// pages/charging/charging.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: 0,
    location1: Math.floor(Math.random()*10),
    location2: Math.floor(Math.random()*40)
  },

  chargingtime(e) {
    console.log(e),
    getApp().globalData.loc1 = this.data.location1,
    getApp().globalData.loc2 = this.data.location2,
    getApp().globalData.lasttime =e.currentTarget.dataset.time,
    getApp().globalData.endTime = "2023-07-12 20:30:00", //结束时间"

    wx.switchTab({
      url: '/pages/home/home',
      success: () => {
        console.log("成功");
      }
    })
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
  onShareAppMessage() {

  }
})