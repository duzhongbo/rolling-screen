
var h0 = 0,
	h1 = box1.offsetHeight,
	h2 = h1 + box2.offsetHeight,
	h3 = h2 + box3.offsetHeight;


$('.nav a').click(function () {
	$("html,body").animate({scrollTop:window['h'+$(this).index()]},600);
	return false;
})

/**/
var bScroll = true;
var _animate = function (h) {
	$("html,body").animate({scrollTop:h},600,function () {
		bScroll = true;
	});
}
mousewheel($('body')[0],function (event) {
	if(!bScroll){
		return;
	}
	bScroll = false;
	var dis = event.delta,
		scrollTop = document.body.scrollTop;
	var h = scrollTop + document.documentElement.clientHeight;
	// 鼠标向下滚
	if (dis < 0) {
		if(h==wrap.offsetHeight){
			bScroll = true;
			return;
		}
	 	if(scrollTop>0&&scrollTop<h1 || scrollTop==0){
	 		_animate(h1);
	 	}else if(scrollTop>h1&&scrollTop<h2 || scrollTop == h1){
	 		_animate(h2);
	 	}else if(scrollTop>h2&&scrollTop<h3 || scrollTop == h2){
	 		_animate(h3);
	 	}else{
	 		bScroll = true;
	 	}
	}else{// 鼠标向上滚
	 	if(scrollTop>0&&scrollTop<h1 || scrollTop == h1){
	 		_animate(h0);
	 	}else if(scrollTop>h1&&scrollTop<h2 || scrollTop == h2){
	 		_animate(h1);
	 	}else if(scrollTop>h2&&scrollTop<h3 || scrollTop == h3){
	 		_animate(h2);
	 	}else{
	 		bScroll = true;
	 	}
	}
});


