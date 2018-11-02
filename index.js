document.cookie="VISITOR_INFO1_LIVE=oKckVSqvaGw; path=/; domain=.youtube.com";
window.onload = function ( event ) {
	safari.self.tab.dispatchMessage("initInjected", "");
}

const setPlaybackRate = function(event) {
	if (event.name === "setPlaybackRate") {
		var vid = document.getElementsByClassName('video-stream html5-main-video').length 
						? document.getElementsByClassName('video-stream html5-main-video')[0] 
						: document.getElementsByTagName('video')[0];
		if (vid) {
			vid.playbackRate = event.message;
		}
	}
}

safari.self.addEventListener("message", setPlaybackRate);
