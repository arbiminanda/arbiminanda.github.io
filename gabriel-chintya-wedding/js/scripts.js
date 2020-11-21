document.getElementById('mute1').style.display = 'none';
			
var x = document.getElementById('myAudio'); 
function playAudio() { 
	x.play();
	document.getElementById('un-mute1').style.display = 'none';
	document.getElementById('mute1').style.display = 'inline-block';
} 
function pauseAudio() { 
	x.pause();
	document.getElementById('mute1').style.display = 'none';
	document.getElementById('un-mute1').style.display = 'inline-block';
}