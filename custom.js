// =============================================================================
// Video Player
// =============================================================================
window.addEventListener ("DOMContentLoaded",handleWindowLoad);
function handleWindowLoad ()
{
    var Video = document.getElementById ( "Example_Video" );
    var PlayButton = document.getElementById ( "Play_Pause" );
    var MuteButton = document.getElementById ( "Mute_Unmute" );
    var Slider = document.getElementById ( "Slider" );

    PlayButton.addEventListener ( "click", Play_Pause_Video ) ;

    function Play_Pause_Video ()
    {
        if (Video.paused === true)
        {
            Video.play();
            PlayButton.innerHTML = "Pause";
        }
        else
        {
            Video.pause();
            PlayButton.innerHTML = "Play";
        }
    }
}

// =============================================================================
// Lazy load
// =============================================================================