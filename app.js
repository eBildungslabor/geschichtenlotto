function changeChar1() {
	document.getElementById("character1").style.backgroundImage = "url('https://source.unsplash.com/UGQpaq08Igw/')";
	document.getElementById("character1").style.backgroundImage = "url('https://source.unsplash.com/collection/530988/')";
	console.log("attempted1");
}

document.body.onkeyup = function(x) {
if (x.keyCode==49) {changeChar1();}
}