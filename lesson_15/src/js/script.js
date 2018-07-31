var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var main = document.getElementById("main");
var myList = document.getElementById("list");
var ul = document.getElementsByTagName("ul");
var story = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0];
var close = document.querySelector(".close");

function showMessage() {
  alert( 'Дратути' );
}

showMessage();
console.log("Захадити, но есть ещё вопросик =.=")
var year = prompt('Сколько вам лет ?', '');
if (year < 18) {
  alert( 'Низяяяя, но я добрый, держи ещё один вопросик)))' );
} else if (year > 60) {
  alert( ' Аххх ты, старый пердун)))' );
} 

if (confirm("=.= Ты подписан на рассылку? =.=")) {
	alert("Заходи, дружище)"); 
}

else  {
  alert("Увы, тебе низя, но я добрый, заходи))) Только тсссссс. Не говори никому.")
}

function addItem() {
	var newLi = document.createElement("li");
	newLi.innerHTML = "Элементик";
	newLi.className = "item";
	myList.appendChild(newLi);
	popup.style.display = "none";
}
function delItem() {
	myList.removeChild(story[0]);

	if ( story.length == 0 ) {
		popup.style.display = "block";
	}
}
function closePopup() {
	popup.style.display = "none";
}

close.addEventListener("click", closePopup);
btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);