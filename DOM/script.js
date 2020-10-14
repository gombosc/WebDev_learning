
var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector("ul");

//select listItems
var listItems = document.getElementsByTagName("li")
console.log(listItems);

//store input value length
function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li = document.createElement('li');
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li)
	input.value = "";

	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode('Delete'))
	li.appendChild(btn);
	btn.onclick = removeParent;
  }

function AddlistAfterClick(){
    if( inputLength() >0){createListElement();
}}

function addListAfterKeypress(event){
	 if(inputLength() >0 && event.keyCode===13){
	 	createListElement();
	 }
}

button.addEventListener("click",AddlistAfterClick);

input.addEventListener("keypress", addListAfterKeypress);



//Exercise DOM Events

//store listItems length
function listLength(){
	return listItems.length;
}

//check which list element was clicked and add class "done"
ul.onclick = function(event){
	var target = event.target;
	target.classList.toggle('done');}

 function deleteButton(){
 	var btn=document.createElement("button");
	btn.appendChild(document.createTextNode("Delete!"));
	listItems[i].appendChild(btn);
	btn.onclick=removeParent;
}

for( i=0;i<listLength();i++){deleteButton();}

function removeParent(event){
     event.target.parentElement.remove();
}

var yellow = document.getElementById("yellow");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
var red = document.getElementById("red");

yellow.addEventListener("click",function(){ yellow.classList.toggle('change');})
