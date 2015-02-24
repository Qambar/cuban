var transitions = new function() {
	this.currentFrame = null;

    this.image = function() {
    	$('body').css('background-image', 'url(img/' + this.currentFrame.image + ')');
    }
    this.tag = function () {
        $(".tag").html(this.currentFrame.tag);
        $(".tag-box").fadeIn();	
    };
    this.description = function() {
    	$(".description" ).html(this.currentFrame.description);
        $(".description").fadeIn();
    }
    this.link = function(title, link) {
    	$(".button").attr('href', title);
        $(".button").html(link);
    }
}