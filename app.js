const DivResultat= document.querySelector('#resultat')

//!tableu multiligne !!
var tabjeu=[
    [0,1,0,0],
    [0,2,0,0],
    [0,0,0,0],
    [0,0,0,0]
];

afficherTableau();

function afficherTableau(){
    var txt ="";
    // ! pour acceder au différente ligne il nous faux 2 boucle for incrémentale
    for(var i=0; i < tabjeu.length; i++){
        txt +="<div>";
        for(var j=0; j<tabjeu[i].length; j++){
            if(tabjeu[i][j] === 0){
             txt +="<button class='btn btn-primary m-2' style='width:100px;height:100px;'>Afficher</buttob>";   
            }
            else{
                txt+="<image scr='img/elephant.png'style='width:100px;height:100px;class='m-2>'"
            }
            
        }
        txt +="</div>";
    }
    DivResultat.innerHTML=txt;
}