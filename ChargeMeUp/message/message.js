// pages/message/message.js
Page({
  handleShowModal() {
    wx.showModal
    ({
      title: '您的充电已结束', //提示的标题
      content: '请问是否为本人操作', //提示的内容
      cancelText	: '否',//取消的按钮
      confirmText	:'是',//确定的按钮
      success: function(res) {
        if(res.confirm) {
          wx.showModal
    ({
      title: '您的充电已结束', //提示的标题
      content: '请问是否为本人操作', //提示的内容
      showCancel: false,
      confirmText	:'是',//确定的按钮
      success: function(res) {
        if(res.confirm) {
          console.log('用户点击了确定')
        } else if(res.cancel) {
          console.log('用户点击了取消')
        }
      }
    })
          console.log('用户点击了确定')
        } else if(res.cancel) {
          wx.showModal
    ({
      title: '您的充电已结束', //提示的标题
      content: '请问是否为本人操作', //提示的内容
      showCancel: false,
      confirmText	:'是',//确定的按钮
      success: function(res) {
        if(res.confirm) {
          console.log('用户点击了确定')
        } else if(res.cancel) {
          console.log('用户点击了取消')
        }
      }
    })
          console.log('用户点击了取消')
        }
      }
    })
  },
  //获取应用实例
    /**
   * 页面的初始数据
   */
  data: {

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