// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailData:{},
    loading:false  //默认详细信息未加载完成，未加载完成不显示页面
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id;
    this.loadDetail(id);
  },
  /* 加载详细信息，封装函数 */
  loadDetail(id){
    wx.showLoading({
      title: '正在加载中...',
    })
    wx.request({
      url: `https://data.miaov.com/h5-view/v/movie/detail/?id=${id}`,
      success: (res) => {
        console.log(res.data)
        this.setData({
          detailData: res.data,
          loading:true
        })
        wx.hideLoading();
      }
    });
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