// pages/user/user.js  点击详情页的时候把数据缓存到本地，然后进入user页尝试进行读取
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    wx.getUserInfo({
      success: (res) => {
        let userInfo = res.userInfo;
        this.setData({
          userInfo
        })
      }
    });
    
  },
  getUserInfo(ev){
    let userInfo = ev.detail.userInfo;
    console.log(userInfo)
    this.setData({
      userInfo
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let self = this;
    wx.getStorage({
      key: 'movie',
      success: function (res) {
        console.log(res.data)
        self.setData({
          list: res.data
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})