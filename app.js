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

document.getElementById('text1').addEventListener("click", changeChar1);
document.getElementById('text2').addEventListener("click", changeChar2);
document.getElementById('text3').addEventListener("click", changeSetting);
document.getElementById('text4').addEventListener("click", changeObject);
document.getElementById('text5').addEventListener("click", toggle);

