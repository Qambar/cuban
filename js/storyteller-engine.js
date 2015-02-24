document.addEventListener( "DOMContentLoaded", function() {
    var popcorn = Popcorn( "#storyteller" );

    $.getJSON( "./data.json", function( data ) {
        $.each(data, function(index, currentFrame) {
        	
            popcorn.code({
				start   : currentFrame.start,
				end     : currentFrame.end,
				onStart: function( options ) {
					//Change background image
					if (currentFrame.image)
                        $('body').css('background-image', 'url(img/' + currentFrame.image + ')');
					//Change the Tag
					if (currentFrame.tag)
                        $( ".tag" ).html(currentFrame.tag);
				},
				onEnd: function( options ) {
                    
				}
			}); //end of popcorn.code
        }); //end of $.each
    }); // end of getJSON

 }, false );