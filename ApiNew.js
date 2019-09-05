/*let ville =prompt('rentres un ville en code postal');*/
console.log(ville);


$(function(){

	$('#bouton').on("click", function appelApi() {

		let villeCible = document.getElementById('ville').value;
		let paysCible = document.getElementById('pays').value;

		$.get("http://api.openweathermap.org/data/2.5/weather?q="+villeCible+","+paysCible+"&APPID=6e304d9f68e195069e21579cb2bf452d&units=Metric", callbackGetSuccess )
		/*.done(function(){
			/*alert('ca fonctionne');
			})*/
		.fail(function(){
			alert('bug dans le systeme de recup de l\'api');
			})
		.always(function(){
			alert('c\'est terminé');
			})
	});

	var callbackGetSuccess = function(data){
		console.log(data);

		$('#retour_api').empty();
		$('#retour_api').append('A '+' '+data.name+'la température est de : '+data.main.temp+'°Celsius'+
			'<br>et l\'humidité est de '+data.main.humidity) +' %.';
	}

});













