document.addEventListener( "DOMContentLoaded", function() {
    var popcorn = Popcorn( "#storyteller" );

    $(window).focus(function() {
        popcorn.play();
    });
    $(window).blur(function() {
        popcorn.pause();
    });

    // $.getJSON( "./data.json", function( data ) {
        $.each(data, function(index, currentFrame) {
        	
            popcorn.code({
				start   : currentFrame.start,
				end     : currentFrame.end,
				onStart: function( options ) {
                    
                    transitions.currentFrame = currentFrame;
                    
					//Change background image
					if (currentFrame.image) 
                        transitions.image();
					//Change the Tag
					if (currentFrame.tag) {
                        transitions.tag();
                    }
                    //Change the description
                    if (currentFrame.description) {
                        transitions.description();
                    }
                    //Change the link
                    if (currentFrame.link) {
                        var linkElements = (currentFrame.link).split("|");
                        var title = null;
                        var link  = null;
                        if (linkElements.length > 1) {
                            title = linkElements[1];
                            link  = linkElements[0];
                        } else {
                            title = linkElements[0];
                            link  = linkElements[0];
                        }
                        transitions.link(title, link);
                        $(".button").fadeIn();
                        $('.button').click(function() {
                            popcorn.pause();
                        });
                    }
				},
				onEnd: function( options ) {
                    $('.bg').attr('src', '');
                    $(".tag-box").fadeOut();
                    $(".description").fadeOut();
                    $(".button").fadeOut();
				}
			}); //end of popcorn.code
        }); //end of $.each
    // }); // end of getJSON
    popcorn.play();
 }, false );