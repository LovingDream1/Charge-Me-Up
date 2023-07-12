// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },

  globalData: {
    userInfo: null,
<<<<<<< HEAD
    username: "未绑定",
    id: "未绑定"
=======
    lasttime: 0,
    loc1: 0,
    loc2: 0,
    endTime: "2023-07-12 20:30:00"
>>>>>>> 5b6d0d1b1d45fb54aa6413f20c8b9ee3bd917846
  }
})
