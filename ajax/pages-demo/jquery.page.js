//分页插件
/**
2014-08-05 ch
**/
(function($){
	var ms = {
		init:function(obj,args){
			return (function(){
				ms.fillHtml(obj,args);
				ms.bindEvent(obj,args);
			})();
		},
		//填充html
		fillHtml:function(obj,args){
			return (function(){
				obj.empty();
				//上一页

				if(args.current > 1){
					obj.append('<a href="javascript:;" class="prevPage">上一页</a>');
				}else{
					obj.remove('.prevPage');

					obj.append('<span class="disabled">上一页</span>');
					console.log()
				}
				//中间页码
				if(args.current != 1 && args.current >= 4 && args.pageCount != 4){
					obj.append('<a href="javascript:;" class="tcdNumber">'+1+'</a>');
				}
				if(args.current-2 > 2 && args.current <= args.pageCount && args.pageCount > 5){
					obj.append('<span>...</span>');
				}
				var start = args.current -2,end = args.current+2;
				if((start > 1 && args.current < 4)||args.current == 1){
					end++;
				}
				if(args.current > args.pageCount-4 && args.current >= args.pageCount){
					start--;
				}
				for (;start <= end; start++) {
					if(start <= args.pageCount && start >= 1){
						if(start != args.current){
							obj.append('<a href="javascript:;" class="tcdNumber">'+ start +'</a>');
						}else{
							obj.append('<span class="current">'+ start +'</span>');
						}
					}
				}
				if(args.current + 2 < args.pageCount - 1 && args.current >= 1 && args.pageCount > 5){
					obj.append('<span>...</span>');
				}
				if(args.current != args.pageCount && args.current < args.pageCount -2  && args.pageCount != 4){
					obj.append('<a href="javascript:;" class="tcdNumber">'+args.pageCount+'</a>');
				}
				//下一页
				if(args.current < args.pageCount){
					obj.append('<a href="javascript:;" class="nextPage">下一页</a>');
				}else{
					obj.remove('.nextPage');
					obj.append('<span class="disabled">下一页</span>');
				}

				//跳转
				if(args.pageCount>1){
					obj.append('<span class="text">共'+args.pageCount+'页，到第</span> <input' +
					' type="text" class="page-now" value="" /> <span class="text">页</span><span class="jump-btn">确定</span>');
				}
			})();
		},
		//绑定事件
		bindEvent:function(obj,args){
			return (function(){
				//点击页面码
				obj.off().on("click","a.tcdNumber",function(){
					var current = parseInt($(this).text());
					args.current = current;
					ms.fillHtml(obj,{"current":current,"pageCount":args.pageCount});
					if(typeof(args.backFn)=="function"){
						args.backFn(current);//回调方法需要把页面传递出去
					}
				});

				//上一页
				obj.on("click","a.prevPage",function(){
					var current = parseInt(obj.children("span.current").text());
					ms.fillHtml(obj,{"current":current-1,"pageCount":args.pageCount});
					args.current = current-1;
					if(typeof(args.backFn)=="function"){
						args.backFn(current-1);//回调方法需要把页面传递出去
					}
				});
				//下一页
				obj.on("click","a.nextPage",function(){
					var current = parseInt(obj.children("span.current").text());
					args.current = current+1;
					ms.fillHtml(obj,{"current":current+1,"pageCount":args.pageCount});
					if(typeof(args.backFn)=="function"){
						args.backFn(current+1);//回调方法需要把页面传递出去
					}
				});

				//跳转
				obj.on('click','.jump-btn',function(){
					if(obj.find('.page-now').val()=="") return;
					var current = parseInt(obj.find('.page-now').val());
					if(current<1||current==args.current||current>args.pageCount) return;
					args.current = current;
					ms.fillHtml(obj,args);
					if(typeof(args.backFn)=="function"){
						args.backFn(current);//回调方法需要把页面传递出去
					}
				});

				//点击跳转内容验证
				obj.on('keyup afterpaste','.page-now',function(){
					if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}
				})

			})();
		}
	};

	$.fn.createPage = function(options){

		var args = $.extend({
			pageCount : 10,
			current : 1,
			backFn : function(){}
		},options);
		ms.init(this,args);
	};



})(jQuery);



//代码整理：懒人之家 www.lanrenzhijia.com