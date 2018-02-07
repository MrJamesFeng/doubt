// pages/moreMoive/moreMoive.js
var moreMoiveData = require("../../datas/datas.js");
var util = require("../../utils/util.js");
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

  this.setData({
    category: options.category
  })

  // console.log(moreMoiveData.moivesData.moreIn_theaters)
  moreMoiveData.moivesData.moreIn_theaters.subjects = util.startCaculate(moreMoiveData.moivesData.moreIn_theaters.subjects)
  //  console.log(moreMoiveData.moivesData.moreIn_theaters)
  this.setData({
    moreIn_theaters: moreMoiveData.moivesData.moreIn_theaters
  })
   console.log(this.data.moreIn_theaters)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  wx.setNavigationBarTitle({
    title: this.data.category
  })
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