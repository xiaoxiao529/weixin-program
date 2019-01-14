// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailData:{},
    loading:false,  //默认详细信息未加载完成，未加载完成不显示页面,
    storageData:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id;
    this.loadDetail(id);
    let self = this;
    wx.getStorage({
      key: 'movie',
      success: function(res) {
      	console.log(res)
        self.setData({  //先从缓存里面取值，存到storageData里
          storageData: res.data
        })
      },
    })
  },
  /* 加载详细信息，封装函数 */
  loadDetail(id){
    
    wx.showLoading({
      title: '正在加载中...',
    })
    wx.request({
      url: `https://data.miaov.com/h5-view/v/movie/detail/?id=${id}`,
      success: (res) => {      
      	
        this.setData({
          detailData: res.data,
          loading:true
        })
        //数组里面已经存在了，进行过滤，即去掉已经存在的那个，然后unshift存在的那个
        this.data.storageData = this.data.storageData.filter((value,key)=>{
          return value.reviews_count != res.data.reviews_count;
        })
        console.log(this.data.storageData)
        this.data.storageData.unshift(res.data);  //进行unshift操作，把新的值插入到数组的前面
        wx.setStorage({
          key: 'movie',
          data: this.data.storageData //存值
        })
        
        wx.setNavigationBarTitle({
          title: res.data.title,
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