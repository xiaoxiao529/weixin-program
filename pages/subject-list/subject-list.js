// pages/subject-list/subject-list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    loading:false,
    type:'',
    pageIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let { type } = options;
    this.setData({
      type:type
    })
    this.fetchData();
    wx.setNavigationBarTitle({
      title: type ,
    })
  },

  fetchData(ev){
    wx.showLoading({
      title: '正在加载中...',
      mask:true
    })
    this.setData({
      loading:true
    })
    wx.request({
      url: `https://data.miaov.com/h5-view/v/movie/list/?tag=${this.data.type}&page_start=${this.data.pageIndex}`,
      success:(res)=>{
        let { list, pageIndex } = this.data;
        pageIndex+=10;
        list.push(...res.data.subjects)
        this.setData({
          list,
          pageIndex,
          loading: false
        })
        wx.hideLoading();
      }
    })
  },
  lower(){
    this.fetchData();
  },
  toDetails(ev){
    console.log(ev)
    let id = ev.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`,
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