$.fn.extend({
		move:function(){
			$(this).css('top','-=5px');
			if($(this).offset().top<-$(this).innerHeight()/2){
				$(this).css('top','0');
			}
		}
	})