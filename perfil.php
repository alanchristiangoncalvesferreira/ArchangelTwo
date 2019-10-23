<script>
	  $(document).ready(function(){
  $("#chamadamenudois").click(function(){
    $("#conteudo").load("perfildados.php");
  });
});	  




$(document).ready(function(){
 $("#chamadamenudois").click(function(){ 
 
$.ajax({ 
type: "GET", 
url: "perfildados.php",
context: document.body,
dataType: 'html',
 success: function(openHtml){
 $('#conteudo').html(openHtml);
 }   
}); 
});

});


</script>
<style>
#chamadamenudois{}
</style>
<div id="home">

<div id="bloco2">
<ul><li><a class="icon-print" href="Curriculum.pdf" target="_blank" ></a></li>
<li ><a id="chamadamenudois"  class="icon-user-6" href="#"></a></li>
<li ><a  class="icon-graduation-cap-1"></a></li>
</ul>
<div id="telaone">
<div id="figure">
<img src="image/AlanChristiangoncalvesferreiraperfil.png" class="perfil"/>
<h1 class="titulo">Alan Christian Gonçalves Ferreira</h1>

<p class="">Meu nome é Alan Christian Gonçalves Ferreira ,sou designer e programador front end desde 2010 quando comecei minha carreira .</br>
Essa página foi criada como blog pessoal e profissional e esta destinada a oferecer o melhor de mim e do meu trabalho .
</p>


</div>
<div id="conteudo">
</div>
</div>
</div>
