function changeChar1() {
	document.getElementById('frame1').src = 'iframe1.html';
}

function changeChar2() {
	document.getElementById('frame2').src = 'iframe4.html';
}

function changeSetting() {
	document.getElementById('frame3').src = 'iframe2.html';
}

function changeObject() {
	document.getElementById('frame4').src = 'iframe3.html';
}

function toggle() {
	var a = document.getElementById('help');
	if (document.getElementById('help').style.display == 'none')
	{document.getElementById('help').style.display = 'block'}
	else {document.getElementById('help').style.display = 'none'};
}

document.body.onkeyup = function(x) {
if (x.keyCode==49) {changeChar1();}
if (x.keyCode==50) {changeChar2();}
if (x.keyCode==51) {changeSetting();}
if (x.keyCode==52) {changeObject();}
if (x.keyCode==72) {toggle();}
}

document.getElementById('frame1').addEventListener("click", changeChar1());
document.getElementById('frame2').addEventListener("click", changeChar2());
document.getElementById('frame3').addEventListener("click", changeSetting());
document.getElementById('frame4').addEventListener("click", changeObject());
