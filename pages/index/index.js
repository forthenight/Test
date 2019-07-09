Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 被点击的首页下划线索引
    currentIndexNav:0,
    //创建接受首页数据的空数组
    navList:[],
    // 轮播图数据
    swiperList:[],
    // 视频列表数据
    videosList:[]
  },
  //导航栏点击事件
  activeNav(e){
     this.setData({
      currentIndexNav:e.target.dataset.index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  //获取首页导航数据的方法
  getNavList(){
     let _this=this;
     wx.request({
       // 必需
       url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',    
       success: (res) => {
         if (res.data.code===0) {
          _this.setData({
            navList:res.data.data.navList
          })
         }
       }
      
     })
  },
  //获取轮播图数据的方法
  getSwiperList(){
     let _this=this;
     wx.request({
       // 必需
       url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',    
       success: (res) => {
         if (res.data.code===0) {
          _this.setData({
            swiperList:res.data.data.swiperList
          })
         }
       }
      
     })
  },
  //获取视频数据的方法
getVideosList(){
     let _this=this;
     wx.request({
       // 必需
       url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',    
       success: (res) => {
         if (res.data.code===0) {
          _this.setData({
            videosList:res.data.data.videosList
          })
         }
       }
      
     })
  },
  onLoad: function (options) {
    // 获取首页导航数据
    this.getNavList();
    // 获取轮播图数据
    this.getSwiperList();
    // 获取视频数据
    this.getVideosList();
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