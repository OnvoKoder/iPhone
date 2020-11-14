let cicle = document.getElementById("cicle");
let upBtn = document.getElementById("upBtn");
let downBtn = document.getElementById("downBtn");
let rotateValue=cicle.style.transform;
let rotateSum;
upBtn.onclick=function() {
	rotateSum=rotateValue+"rotate(-90deg)";
	cicle.style.transform=rotateSum;
	rotateValue=rotateSum;
};
downBtn.onclick=function() {
	rotateSum=rotateValue+"rotate(90deg)";
	cicle.style.transform=rotateSum;
	rotateValue=rotateSum;
};

