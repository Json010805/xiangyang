// pages/index/index.js  
Page({  
  // 按钮点击事件处理函数（示例）  
  onButtonClick: function() {  
   console.log("按钮呗点击了，可以跳转下一个页面")
   wx.navigateTo({
     url: '/pages/Myblog/MyBlog',
   })
  }  
})