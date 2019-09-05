function init(){
	if(document.querySelector){
		msg='L\'api fonctionne sur ce navigateur';
		document.querySelector('#box').innerHTML =msg;
	}
	else {
		alert("votre navigateur ne supporte pas l'api");
	}
}

/*document.getElementsByClassName("un")== document.querySelector("li")*/
function run(){
	var x = document.getElementsByClassName('un');
	for (let i = 0; i < x.length; i++) {
		x[i].style.background="red";
		x[i].innerHTML="on a changé le texte";
	}
}

function run1(){
	
	let lignes =document.querySelectorAll("li");
	for (var i = 0; i <lignes.length; i++) {
		lignes[i].style.background = 'blue';
	}

	var x = document.querySelector('li:nth-of-type(3)').style.background='red';

	var x = document.querySelector('li:empty').style.background='red';
}

function run2(){
	let lignes = document.querySelectorAll('table tr:nth-child(odd)');
	console.log(lignes);
	for (var i = 0; i < lignes.length; i++) {
		lignes[i].style.background='yellow';
	}
}

/*function go2(){
	let colons=document.querySelectorAll('td:nth-child');
	for (var i = 0; i < colons.length; i++) {
		colons[i].style.background='black';
	}
}*/


function run3(){
	let attributs = document.querySelectorAll("div[title*=ier]");
	for (var i = 0; i < attributs.length; i++) {
		attributs[i].style.background='purple';
		console.log(attributs);
	}
}

function run4(){
	let premierDeClasse= document.querySelector("p.first").style.background='purple';
	let premierDeClassea= document.querySelector("p.second").style.background='purple';

	console.log(premierDeClasse);
		
}
	

