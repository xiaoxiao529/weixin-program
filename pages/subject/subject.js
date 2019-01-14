// pages/subject/subject.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        title:'爱情',
        src:'/assets/image/aiqing.png'
      },
      {
        title: '动画',
        src: '/assets/image/donghua.png'
      },
      {
        title: '动作',
        src: '/assets/image/dongzuo.png'
      },
      {
        title: '科幻',
        src: '/assets/image/kehuan.png'
      },
      {
        title: '喜剧',
        src: '/assets/image/xiju.png'
      }
    ],
    type:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  toSubjectList(ev) {
    let type = ev.currentTarget.dataset.type;
    wx.navigateTo({
      url: `/pages/subject-list/subject-list?type=${type}`
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