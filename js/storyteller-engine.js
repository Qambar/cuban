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
                    
                    
					//Change background image
					if (currentFrame.image) 
                        $('body').css('background-image', 'url(img/' + currentFrame.image + ')');
					//Change the Tag
					if (currentFrame.tag) {
                        $( ".tag" ).html(currentFrame.tag);
                        $(".tag-box").fadeIn();
                    }
                    //Change the description
                    if (currentFrame.description) {
                        $( ".description" ).html(currentFrame.description);
                        $(".description").fadeIn();
                    }
                    //Change the link
                    if (currentFrame.link) {
                        var linkElements = (currentFrame.link).split("|");
                        if (linkElements.length > 1) {
                            $( ".button" ).attr('href', linkElements[1]);
                            $( ".button" ).html(linkElements[0]);
                        } else {
                            $( ".button" ).attr('href', linkElements[0]);
                            $( ".button" ).html(linkElements[0]);
                        }
                        $(".button").fadeIn();
                        $('.button').click(function() {
                            popcorn.pause();
                        });
                    }
				},
				onEnd: function( options ) {
                    $('body').css('background-image', 'url("")');
                    $(".tag-box").fadeOut();
                    $(".description").fadeOut();
                    $(".button").fadeOut();
				}
			}); //end of popcorn.code
        }); //end of $.each
    // }); // end of getJSON
    popcorn.play();
 }, false );