let myHeading = document.querySelector('h1');
let myImage = document.querySelector('img');
let myButton = document.querySelector('button');

myImage.onclick = () => {
	alert('Ouch!');
	let mySrc = myImage.getAttribute('src');
	mySrc === "images/photo.jpg" ? myImage.setAttribute ('src', "images/photo1.jpg") : myImage.setAttribute ('src', "images/photo.jpg");
}

myHeading.onclick = () => {
	setUserName()

}

function setUserName() {

	let myName = prompt('Please enter your name.');
  	localStorage.setItem('name', myName);
  	myHeading.textContent = 'Hello world!66Ш, ' + myName;
}

if(!localStorage.getItem('name')) {
  		setUserName();
	} else {
  		let storedName = localStorage.getItem('name');
  		myHeading.textContent = 'Hello world!66Ш, , ' + storedName;
}
