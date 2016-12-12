$(function(){
	// 点击我要许愿
	 $(".wish").on("click",function(){
	 	$(".mask").show();
	 	$(".send_form").fadeIn(1000);
    	$("#content").empty();//清空数据不可以用val设置清空
    	$("#user").val(" ");
	 	
	 	//$("#content").empty();
	 });
   // 关闭许愿
	 $(".send_form .close").on("click",function(){
	 	$(".mask").fadeOut(1000);
	 	$(".send_form").fadeOut(1000);
	 });

      // 显示表情
    $("#content").on("mouseenter",function(){
    	$(".phiz").slideDown();
    });
   // 关闭表情
   $(".send_form").on("mouseleave",function(){
   	    $(".phiz").slideUp();
   });
  
   //纸条移动 给所有纸条加了拖拽事件
   $(".person").on("mousedown",function(event){
   	       var that=$(this);
   	       $(".paper").css("z-index",0);
   	       that.parent().css("z-index",1);
   	       that.parent().css("opacity",0.6);//鼠标按下纸条变透明
   	     //鼠标按下获取鼠标此时相对于盒子的位置
         var x=event.clientX- $(this).offset().left;
         var y=event.clientY- $(this).offset().top;
   	     $(document).on("mousemove",function(event){
   	     	// 防止拖拽选中字体鼠标松开后也跟着拖拽
   	     	 window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
   	     	    var X=event.clientX-x;
   	     	    var Y=event.clientY-y;
                that.parent().offset({
                	"left":X,
                	 "top":Y
            });
   	    });
 });
   // 鼠标弹起
   $(document).on("mouseup",function(){
   	   $(".paper").css("opacity",1);
   	   $(document).off("mousemove");
   });
  // 删除纸条
  $(".paper .close").on("click",function(){
  	  $(this).parents(".paper").fadeOut();
  });
   // 添加发布wish
   $(".send").on("click",function(){
       var mywish=$(".a1").clone(true);
       var random=Math.ceil(Math.random()*5);
       mywish.attr("class","a"+random+" paper");
       // 纸条随机分布
       mywish.css({
       	  "left":($(".main").width()*Math.random()-mywish.outerWidth()),
       	  "top":($(".paper").height()*Math.random()-mywish.outerHeight())
       });
       mywish.find(".username").html($("#user").val());
       mywish.find(".content").children("p").html($("#content").val());
       mywish.appendTo($(".main"));
    	$("#content").empty()//清空数据
    	$("#user").val(" ");

   });

   // 添加表情功能
// $(".phiz").on("click","img",function(){
// 	     var alt=$(this).attr("alt");
// 	     $("#content").html($("#content").text()+"["+alt+"]");
// });
	$(".phiz img").click(function(){
		var mysrc=$(this).attr("src");
		var myalt=$(this).attr("alt");
		$("#content").html($("#content").html()+"<img src='"+mysrc+"'>");
		
	})

});