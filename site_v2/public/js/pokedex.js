"use strict";

var q = new XMLHttpRequest();

addEventListener('load', start);

function start() {
    if (window.location.pathname == "/pokedex.html") {
        fetch("/pokemonsData")
        .then((resp) => resp.json())
        .then(function(data){
            pokemonList(data);
        });
    }
}

function showPokemonList(name,value){
    if (value != null){
        fetch("/pokedex.html?"+name+"="+value)
        .then((resp) => resp.json())
        .then(function(data){
            pokemonList(data);
        });
    }
}

function myFavorate(id){
    var toid = "";
    if (id == "on") toid = "off";
    if (id == "off") toid = "on";
    fetch("./favo"+toid+"Data")
    .then((resp) => resp.json())
    .then(function(data){
        pokemonList(data);
    });
    changeStarMode(id);
}

function changeFavorate(id){
    var params = window.location.search;
    var pokeid = params.split("=")[1];
    changePS(id, pokeid);
    changeStarMode(id);
}

function changePS(status, id){
    var statuscode = 0;
    if (status == "off") statuscode = 1;
    q.open("GET", "/pokemon.html?ps="+statuscode+"&id="+id, true);
    q.send();
}

function changeStarMode(id){
    if (id=="off"){
        document.getElementById("off").id = "on";
        document.getElementById("polystaroff").id = "polystaron";
    }
    if (id=="on"){
        document.getElementById("on").id = "off";
        document.getElementById("polystaron").id = "polystaroff";
    }
}

function pokemonList(data) {
    console.log(data);
    var pokelinklist = '';
    for (var i=0; i<data.length; i++) {
        pokelinklist += rowTemplate(data[i].ID, data[i].NAME, data[i].TYPE1, data[i].TYPE2);
    }
    if (pokelinklist == "") document.querySelector("#pokemonlist").innerHTML = "Pokemon Not Found";
    else document.querySelector("#pokemonlist").innerHTML = pokelinklist;
}

function rowTemplate(id, name, type1, type2){
    var row = '<tr><td class="idw">#'+addzero(id)+'</td>';
    row += '<td class="idw"><img src="./css/image/pokedex/icons/'+id+'.png" class="imgs"/></td>';
    row += '<td class="namew"><a href="/pokemon.html?id='+id+'">'+name+'</a></td>';
    row += '<td class="typew">'+typeTempate(type1);
    if (type2 == null) row += '</td></tr>';
    else row += ' '+typeTempate(type2)+'</td></tr>';
    return row;
}

function typeTempate(type){
    var html = '<span class="texttypeicon" id="'+type+'">'+type+'</span>';
    return html;
}

function addzero(id){
    id = id.toString();
    if (id.length == 1) id = "00" + id;
    if (id.length == 2) id = "0"  + id;
    return id;
}