// pages/login/login.js
Page({
  /**
   * 页面的初始数据
   */
  data:{
    code:"0",
    location:[],
    imageUrl: "https://profile-avatar.csdnimg.cn/default.jpg!0",
    userName:"",
    userPass:"",
  },
 
  /**
   * 登陆检验操作
   */
  login: function () {
    if (this.data.userName === "student" && this.data.userPass === "123123") {
      wx.reLaunch({
        url: '/pages/home/home',
        success: function(res) {
          console.log('router1 success');
        },
        fail: function(res) {
          console.log('router1 fail');
          console.log(res)
        }
      })
    } else {
      wx.showToast({
        title: '账号密码错误',
        icon: 'none'
      })
    }
  },
})