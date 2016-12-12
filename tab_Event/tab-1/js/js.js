// JavaScript Document
window.onload=function(){
	var div=document.getElementById('box');//最外面的div
	var uls=div.getElementsByTagName('ul');//找到div下所有的ul
	var lis=uls[0].getElementsByTagName('li');//找到第一个ul下面所有的li
	for(var i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			var oldNum,newNum;
			if(this.className.indexOf('current')!=-1)//检索当前li有木有current样式，有的话直接跳出
			{
				return;
			}
			
			this.setAttribute('val','true');  //设置节点属性val的值为true
			for(var j=0;j<lis.length;j++)
			{
				if(lis[j].className.indexOf('current')!=-1)
				{
					oldNum=j;//此j表示之前有current这个样式的li位置
				}

				if(lis[j].getAttribute('val')=='true')
				{					
					this.removeAttribute('val');//移出属性val；防止第二次找位置时混乱
					newNum=j;//此j表示当前的位置
				}
			}
			
			//alert(oldNum+'   '+newNum);
			lis[newNum].className='current';
			uls[newNum+1].style.display='block';
			lis[oldNum].className='';
			uls[oldNum+1].style.display='none';
			
		}
	}
}