var transitions = new function() {
	this.currentFrame = null;

    this.startImage = function() {
    	$('.bg').attr('src', 'img/' + this.currentFrame.image);
        $('.bg').fadeIn();
    }
    this.startTag = function () {
        $(".tag").html(this.currentFrame.tag);
        $(".tag-box").fadeIn();	
    };
    this.startDescription = function() {
    	$(".description" ).html(this.currentFrame.description);
        $(".description").fadeIn();
    }
    this.startLink = function(title, link) {
    	$(".button").attr('href', title);
        $(".button").html(link);
    }

    this.endImage = function () {
        $('.bg').fadeOut();
    	$('.bg').attr('src', '');
    }
    this.endTag = function() {
    	$(".tag-box").fadeOut();
    }
    this.endDescription = function () {
    	$(".description").fadeOut();
    }
    this.endLink = function() {
    	$(".button").fadeOut();
    }

}