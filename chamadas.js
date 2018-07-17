window.onload=function(){
	var a = document.getElementById('bntpiramide3');
	var b=document.getElementById('bntpiramide2');
	var c=document.getElementById('bntpiramide1');
	a.onclick=function(){
		geral();
      return false;
	}
	a.onclick=function(){
		document.getElementById('FotoPerfil').querySelector('img').remove();
		}
	b.onclick=function(){
		document.getElementById('FotoPerfil').querySelector('img').remove();
		}	
	c.onclick=function(){
		document.getElementById('FotoPerfil').querySelector('img').remove();
		
		}	
			
}
 
geral = function(){
	var chamada = new XMLHttpRequest();
	chamada.open('GET', 'home.php', true);
	chamada.send(null);
	chamada.onreadystatechange = function(){

		if ( this.readyState == 4 && this.status == 200 ) {
        var div = document.getElementById('intro');
         div.innerHTML = this.responseText;
		}
	};
	
	
};

$(document).ready(function(){
 $("#bntpiramide3").click(function(){ 
 
$.ajax({ 
type: "GET", 
url: "Google/Google.php",
context: document.body,
dataType: 'html',
 success: function(openHtml){
 $('#main').html(openHtml);
 }   
}); 
});

});


$(document).ready(function(){
 $("#bntpiramide2").click(function(){ 
 
$.ajax({ 
type: "GET", 
url: "Facebook/Facebook.php",
context: document.body,
dataType: 'html',
 success: function(openHtml){
 $('#main').html(openHtml);
 }   
}); 
});

});


$(document).ready(function(){
 $("#bntpiramide1").click(function(){ 
 
$.ajax({ 
type: "GET", 
url: "parceiros/parceiros.php",
context: document.body,
dataType: 'html',
 success: function(openHtml){
 $('#main').html(openHtml);
 }   
}); 
});

});






function caller(n){
	
	switch(n){
	case 0: t="home.php " ;break;
	case 1: t=" partnership.php" ;break;
	case 2: t="direitosautorais.php" ;break;
	
	}
	
  httpreq=new XMLHttpRequest();	
 	
	  httpreq.onreadystatechange=function(){
		  
		
		if(httpreq.readyState==3){
			  document.getElementById('intro').innerHTML=httpreq.responseText;
		  
		   
			
		  } 
	
		function browserVer4Detect()

{

  if(navigator.appVersion.substring(0,1) < 4)

    URLStr = "1.html";

  else

    URLStr = "2.html";

  window.location = URLStr;

}



		  
		  }
	
	  httpreq.open("GET",t,true)
	  httpreq.send(null)
	
	}
	
	function ft(){
		var id="bntindex";
		
		if(document.getElementById('bntindex')){  
			  document.getElementById('FotoPerfil').innerHTML="<img src=image/perfil-Alan.png />";
		} 
			  
		
		}
		
		
		$(document).ready(function(){
$('#privabntfo').click(function() {

$('#privabntfo').removeClass('bntcima').addClass('bntbaixo');
$('#priva').removeClass('bntbaixo').addClass('bntcima'); 

$("#mapa").animate({
width: "320px",
left: "501px" }, 500);
});
 
});




$(document).ready(function(){

$('#priva').click(function() {
$('#priva').removeClass('bntcima').addClass('bntbaixo');
$('#privabntfo').removeClass('bntbaixo').addClass('bntcima');

$("#mapa").animate({
width: "380px",
left: "160px" }, 500);



}); });

					$(document).ready(function(){
$('#menuitop').click(function() {

$('#menuitop').removeClass('top').addClass('down');
$('#menuihover').removeClass('down').addClass('top'); 


});
 
}); 


		$(document).ready(function(){
$('#menuihover').click(function() {

$('#menuihover').removeClass('top').addClass('down');
$('#menuitop').removeClass('down').addClass('top'); 


});
 
});
