
//导航菜单
  layui.use(['jquery', 'element', 'carousel'], function(){
      var $ = layui.jquery
      ,element = layui.element
      ,carousel = layui.carousel
    
      //滚动监听
      $(window).scroll(function() {
        var scr=$(document).scrollTop();
        scr > 0 ? $(".nav").addClass('scroll') : $(".nav").removeClass('scroll');
      });

    //导航切换
      var btn = $('.nav').find('.nav-list').children('button')
      ,spa = btn.children('span')
      ,ul = $('.nav').find('.nav-list').children('.layui-nav');
      btn.on('click', function(){
        if(!$(spa[0]).hasClass('spa1')){
          spa[0].className = 'spa1';
          spa[1].style.display = 'none';
          spa[2].className = 'spa3';
          $('.nav')[0].style.height = 90 + ul[0].offsetHeight + 'px';
        }else{
          spa[0].className = '';
          spa[1].style.display = 'block';
          spa[2].className = '';
          $('.nav')[0].style.height = 60 + 'px';
        }
      });
  });
  
  
  //打字机
  // <script src="node_modules/typed.js/lib"></script> //引入js文件
  // var options = {
  //     strings: ['生活', '啊'],
  //     typeSpeed: 120, //打印的速度。数值越大，速度越慢
  //     loop: true, //开启循环
  //     loopCount: Infinity, //设置循环次数，值为：Infinity，也可以使用数值
  //     backSpeed: 20, //延迟时间后才后退，值越大，延迟的时间就越长
  //     cursorChar: '^' //光标的符号，比如：
  // };
  // var typed = new Typed('#description', options);


  //title切换
      window.onblur=function(){        
          document.title="你走了~我好伤心┭┮﹏┭┮";    
          };    
          window.onfocus=function () {        
          document.title="感谢经历";   
          }


//返回顶部
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {console.log(121);
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("gotop").style.display = "block";
      } else {
          document.getElementById("gotop").style.display = "none";
      }
  }
  function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }




