var transitions = new function() {
	this.currentFrame = null;

    this.startImage = function() {
        console.log('startImage');
    	$('.bg').attr('src', 'img/' + this.currentFrame.image);
        $('.bg').fadeIn();
    }
    this.startTag = function () {
        console.log('startTag');
        $(".tag").html(this.currentFrame.tag);
        // $(".tag-box").fadeIn();	
    };
    this.startDescription = function() {
        console.log('startDescription');
    	$(".description" ).html(this.currentFrame.description);
        // $(".description").fadeIn();
    }
    this.startLink = function(title, link) {
        console.log('startLink');
    	$(".button").attr('href', title);
        // $(".button").html(link);
    }

    this.endImage = function () {
        console.log('EndImage');
        $('.bg').fadeOut();
    	$('.bg').attr('src', '');
    }
    this.endTag = function() {
        console.log('EndTag');
    	// $(".tag-box").fadeOut();
    }
    this.endDescription = function () {
        console.log('EndDescripion');
    	// $(".description").fadeOut();
    }
    this.endLink = function() {
        console.log('EndLink');
    	// $(".button").fadeOut();
    }

}