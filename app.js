const DivResultat= document.querySelector('#resultat')

//!tableu multiligne !! on click
var tabjeu=[
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];
//tableau image
// var tabresultat =[
//     [1,4,3,4],
//     [1,2,3,2],
//     [7,8,6,5],
//     [8,7,5,6]
// ];
var tabresultat = genereTableauAleatoire();
var oldSelection=[];

var nbAffiche = 0;

var ready = true;

afficherTableau();

function afficherTableau(){
    var txt ="";

    // ! pour acceder au différente ligne il nous faux 2 boucle for incrémentale

    for(var i=0; i < tabjeu.length; i++){

        //incrementation de la ligne jusqua a fin
        txt +="<div>";

        for(var j=0; j<tabjeu[i].length; j++){

            //incrémentation jusq'a la dernière ligne et la derniere valeur

            if(tabjeu[i][j] === 0){
                txt +="<button class='btn btn-primary m-2'onClick='verif(\""+i+"-"+j+"\");' >Afficher</button>";   
            }
            else{
                txt += "<img src='"+getImage(tabjeu[i][j])+"' class='m-2' >";
            }
        }
        txt +="</div>";
    }
    DivResultat.innerHTML=txt;
}
//fonction génération d'image
function getImage(valeur){

    //!atention ./image/ pour récupérer mon image car je suis dans un sous dosssier

    var imgTxt= "./image/";
    switch(valeur){

        //!atention ne pas oubier de bien récuperer les image avec les bon chemin

        case 1 : imgTxt += "elephant.png";
        break;

        case 2 :imgTxt += "giraffe.png";
        break;

        case 3 :imgTxt += "hippo.png";
        break;

        case 4 :imgTxt += "monkey.png";
        break;

        case 5 :imgTxt += "panda.png";
        break;

        case 6 :imgTxt += "parrot.png";
        break;

        case 7 :imgTxt += "penguin.png";
        break;

        case 8 :imgTxt += "pig.png";
        break;

        default: console.log("cas non pris en compte")
    }
    return imgTxt;
    //ne pas oublier imgtxt apres sinon not found
}
//Pour récupérer les coordonner des bouton et affiher l'image correspondantte
function verif(bouton){
    if(ready){
    //découpage de la variable bouton al'aide du substring 
        nbAffiche++;

        var ligne = bouton.substr(0,1);
        //afin de réupérer lélément 1 et 2
        var colonne = bouton.substr(2,1);
        //récuparation de coordonner réussi on click

        // console.log(ligne);
        // console.log(colonne);

        //mélange des 2 tableau le tableau de base avec les bouton et le tableau avec les image
        tabjeu[ligne][colonne]= tabresultat[ligne][colonne];
        afficherTableau();

        if(nbAffiche>1){
            ready=false;
            //verification
            setTimeout(() =>{
                if(tabjeu[ligne][colonne] !== tabresultat[oldSelection[0]][oldSelection[1]]){
                //0 pour récuperer la ligne et 1 pour la collone
                //on vérifi si la valeur ou l'on va cliquer correspond a la valeur du précédant clique
                tabjeu[ligne][colonne]=0;
                tabjeu[oldSelection[0]][oldSelection[1]]=0;
                //pas de virgule pour verifyer dans un tableau sai des crochet inverser
                }
                afficherTableau();
                ready=true;
                //reset du ready pour retourner les carte de nouveaux
                nbAffiche=0;
                //timer
            },600)
        }
        else{
            //ancienne slection
            //on la placer la pour quil ne s'execute pas quand le timeout sécoule
            oldSelection=[ligne,colonne];
        }
    }
}
//genere tab aleatoire

function genereTableauAleatoire(){

    var tab = [];

    var nbImagePosition = [0,0,0,0,0,0,0,0]
    //pour générer 4 ligne boucle for

    for(var i =0; i < 4 ; i++){

        var ligne = [];
        //génération de colone x4 car on en veux 4

        for(var j = 0; j < 4; j++){

            

            var fin = false;

            while(!fin){
                var randomImage =Math.floor(Math.random() * 8);
                //Mathfloor arondi et math randome pour un number randome
                if(nbImagePosition[randomImage] < 2){

                    ligne.push(randomImage + 1); 
                    //envoi de valeur

                    //incrémentation
                    nbImagePosition[randomImage]++;

                    fin = true ;
                }   
            }
        }
        tab.push(ligne);
    }
    return tab;
}