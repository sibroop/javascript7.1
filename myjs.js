// JavaScript Document
var myText = document.getElementById("myButton").innerHTML;
var myColor = document.getElementById("myButton").style.backgroundColor;
function myFunction(){
	if(myText === "Like"){
		myText = "Unlike";
		myColor = "orange";	
	}	
	else{
		myText = "Like";	
		myColor = "green";
	}
	document.getElementById("myButton").innerHTML = myText;
	document.getElementById("myButton").style.backgroundColor = myColor;
}