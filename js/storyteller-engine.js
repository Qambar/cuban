document.addEventListener( "DOMContentLoaded", function() {
    var popcorn = Popcorn( "#storyteller" );

    $(window).focus(function() {
        popcorn.play();
    });
    $(window).blur(function() {
        popcorn.pause();
    });

    var gapTime = 32;

    // $.getJSON( "./data.json", function( data ) {
        $.each(data, function(index, currentFrame) {
        	
            popcorn.code({
				start   : (currentFrame.start + gapTime),
				end     : (currentFrame.end + gapTime),
				onStart: function( options ) {
                    
                    transitions.currentFrame = currentFrame;
                    
					//Change background image
					if (currentFrame.image) 
                        transitions.startImage();
					//Change the Tag
					if (currentFrame.tag) {
                        transitions.startTag();
                    }
                    //Change the description
                    if (currentFrame.description) {
                        transitions.startDescription();
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
                        transitions.startLink(title, link);
                        $(".button").fadeIn();
                        $('.button').click(function() {
                            popcorn.pause();
                        });
                    }
				},
				onEnd: function( options ) {
                    transitions.endTag();
                    transitions.endLink();
                    transitions.endDescription();
                    transitions.endImage();
				}
			}); //end of popcorn.code
        }); //end of $.each
    // }); // end of getJSON
    popcorn.play();
 }, false );