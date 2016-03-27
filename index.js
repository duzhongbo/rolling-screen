
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
mousewheel($('body')[0],function (event) {
	console.log(bScroll);
	if(!bScroll){
		return;
	}
	bScroll = false;
	var dis = event.delta,
		scrollTop = document.body.scrollTop;
	// 鼠标向下滚
	if (dis < 0) {
	 	if(scrollTop>0&&scrollTop<h1 || scrollTop==0){
	 		$("html,body").animate({scrollTop:h1},600,function () {
	 			bScroll = true;
	 		});
	 	}else if(scrollTop>h1&&scrollTop<h2 || scrollTop == h1){
	 		$("html,body").animate({scrollTop:h2},600,function () {
	 			bScroll = true;
	 		});
	 	}else if(scrollTop>h2&&scrollTop<h3 || scrollTop == h2){
	 		$("html,body").animate({scrollTop:h3},600,function () {
	 			bScroll = true;
	 		});
	 	}else{
	 		bScroll = true;
	 	}
	}else{// 鼠标向上滚
	 	if(scrollTop>0&&scrollTop<h1 || scrollTop == h1){
	 		$("html,body").animate({scrollTop:0},600,function () {
	 			bScroll = true;
	 		});
	 	}else if(scrollTop>h1&&scrollTop<h2 || scrollTop == h2){
	 		$("html,body").animate({scrollTop:h1},600,function () {
	 			bScroll = true;
	 		});
	 	}else if(scrollTop>h2&&scrollTop<h3 || scrollTop == h3){
	 		$("html,body").animate({scrollTop:h2},600,function () {
	 			bScroll = true;
	 		});
	 	}else{
	 		bScroll = true;
	 	}

	}
});


