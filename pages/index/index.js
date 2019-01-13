// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    pageIndex:0, /* 起始页 */
    loading:false /* 默认加载结束 */
  },
  lower(){
    if( !this.data.loading ){  //没有在加载
      console.log(1);
      this.fetchData();
    }
  },
  toDetails(ev){
    console.log(ev.currentTarget.dataset.id);
    wx.navigateTo({
      url: `/pages/detail/detail?id=${ev.currentTarget.dataset.id}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /* 不能一直都在取数据，只有当本次数据加载之后才能进行下一次的取数据 */
    /* 数据取到，但是没有加载完成，那么不能进行下一次的取数据 */
    /* 就算已经滑到底部，然而上一次数据没有加载完成，也是不能取数据的，所以也就不能调用fetchData */
    this.fetchData();
  },

  /* 封装函数，拉取数据 */
  fetchData(){
    /* 微信小程序自带loading */
    wx.showLoading({
      title: '正在拼命加载中...',
      mask: true
    });
    this.setData({  //表示正在加载
      loading: true
    })
    wx.request({
      url: `https://data.miaov.com/h5-view/v/movie/list/?page_start=${this.data.pageIndex}`,
      success: (res) => {
        let { pageIndex,list } = this.data;  
        console.log(res.data.subjects);
        list.push(...res.data.subjects);
        pageIndex += 10;  /* 请求成功之后，页数加10 */
        this.setData({
          list,
          pageIndex,
          loading: false  //加载结束
        });
        wx.hideLoading();
      }
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