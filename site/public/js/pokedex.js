"use strict";

console.log("pokesearch.js started.");

var q = new XMLHttpRequest();

addEventListener('load', start);

function start() {
    fetch("/pokemonsData")
    .then((resp) => resp.json())
    .then(function(data){
        pokemonList(data);
    });
}

function showPokemonList(name,value=null){
    if (value == null) value = document.getElementById(name+"search").value;
    if (value != null){
        fetch("/pokedex.html?"+name+"="+value)
        .then((resp) => resp.json())
        .then(function(data){
            pokemonList(data);
        });
    }
}

function pokemonList(data) {
    console.log(data);
    var pokelinklist = '<tr><th colspan="4" style="text-align: center;">Pokemon list</th></tr>';
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