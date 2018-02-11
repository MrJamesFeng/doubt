//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })

    // wx.request({
    //   url: 'https://api.douban.com/v2/movie/top250',
    //   header:{
    //     'content-type': 'application/json'
    //   },
    //   success:function(res){
    //     console.log(res)
    //   },
    //   fail:function(e){
    //     console.log(e)

    //   }
    // })
  }
})
