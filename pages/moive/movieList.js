// pages/moive/movieList.js
var moivesData = require("../../datas/datas.js");
var startCaculate = require("../../utils/util.js");
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var top250Url = "/movie/top250"
    // var top250Param = "start=0&count=3"
    // this.loadDataGET(top250Url, top250Param)
    // console.log(top250Datas.top250Datas);
    this.setData({
      top250: moivesData.moivesData.top250,
      in_theaters: moivesData.moivesData.in_theaters,
      coming_soon: moivesData.moivesData.coming_soon
    })
   
    this.data.top250.subjects = startCaculate.startCaculate(this.data.top250.subjects)
    this.data.in_theaters.subjects = startCaculate.startCaculate(this.data.in_theaters.subjects)
    this.data.coming_soon.subjects = startCaculate.startCaculate(this.data.coming_soon.subjects)
    this.setData({
      top250: this.data.top250,
      in_theaters: this.data.in_theaters,
      coming_soon: this.data.coming_soon
    })
    //  console.log(this.data)

  },
  loadDataGET:function(url,params){
    var requestUrl = app.globalData.doubanBaseUrl + url;
    console.log(requestUrl)
    wx.request({
      url: requestUrl ,
      header:{
        'content-type': 'application/json'
      },
      method: "GET",
      data:params,
      success:function(res){
        console.log(res)
      },
      fail:function(error){
        console.log(error)
      },
      complete:function(){

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
  
  },
  checkMoreTap:function(event){
    // console.log(event)
    wx.navigateTo({
      url: '../moreMoive/moreMoive?' + "category="+event.currentTarget.dataset.category
    })
  }
})