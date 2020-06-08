"use strict";

console.log("mainpage.js started.");

var q = new XMLHttpRequest();

addEventListener('load', fetchData);

function fetchData() {
    fetch("/startersData")
    .then((resp) => resp.json())
    .then(function(data){
        console.log(data);
        var html = "";
        for (var i=0; i<data.length; i++) {
            html += "<p>ID."+data[i].ID+" "+data[i].NAME+"</p>";
        }
        var grassColumn = document.querySelector("#grassStarters");
        var fireColumn = document.querySelector("#fireStarters");
        var waterColumn = document.querySelector("#waterStarters");
        var typelist = ["Grass", "Fire", "Water"];
        var columnlist = [grassColumn, fireColumn, waterColumn];
        for (var i=0; i<3; i++){
            var html = '<img src="./css/image/mainpage/poketype/'+typelist[i]+'.png" class="icon" id="typeIcon"/>';
            for (var j=0; j<data.length; j++){
                if (data[j].TYPE1 == typelist[i]){
                    // First line: No. and name.
                    html += '<div style="padding-top: 10%;"><p class="poketext"><a href="pokemon.html?id='+data[j].ID+'">No.'+data[j].ID+' '+data[j].NAME+'</a></p>';
                    // Second line: type.
                    html += '<p class="poketext">'+typeTempate(data[j].TYPE1)+" ";
                    if (data[j].TYPE2 != null) html += typeTempate(data[j].TYPE2);
                    html += '</p>';
                    // Third line: image. 
                    html += '<img src="./css/image/mainpage/pokedex/'+addzero(data[j].ID)+data[j].NAME+'.png" id="pokedexImage"/></div>';
                }
            }
            columnlist[i].innerHTML = html;
        }
    });
}

function addzero(id){
    id = id.toString();
    if (id.length == 1) id = "00" + id;
    if (id.length == 2) id = "0"  + id;
    return id;
}

function typeTempate(type){
    var html = '<span class="texttypeicon" id="'+type+'" style="width: 8vw;">'+type+'</span>';
    return html;
}