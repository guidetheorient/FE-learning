define(['jquery'],function ($) {
  function GoTop(){
      this.ct = $('html,body')
      this.createNode()
      this.target = $('.go-top')
      this.bindEvent()
    }

  GoTop.prototype = {
    createNode: function(){
      var goTopHtml = '<div class="go-top">TOP</div>'
      this.ct.append(goTopHtml)
    }, 
    bindEvent: function(){
      var ct = this.ct
      //注意this
      this.target.click(function(){
        ct.animate({scrollTop: 0});
      })
    }
  }
  return GoTop
})