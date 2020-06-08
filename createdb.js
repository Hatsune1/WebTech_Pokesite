"use strict";
var sqlite3 = require("sqlite3");
var db = new sqlite3.Database("data.db");
                                                    
function create(){
    createStarters();
    createPokedex();
}

function createStarters(){
    db.run("CREATE TABLE IF NOT EXISTS POKEDEX_STARTERS (ID, NAME, TYPE1, TYPE2, GEN, PS);");
    
    db.run("INSERT INTO POKEDEX_STARTERS VALUES (003, 'Venusaur'  , 'Grass', 'Poison'  , 1, NULL);");
    db.run("INSERT INTO POKEDEX_STARTERS VALUES (006, 'Charizard' , 'Fire' , 'Flying'  , 1, NULL);");
    db.run("INSERT INTO POKEDEX_STARTERS VALUES (009, 'Blastoise' , 'Water',  NULL     , 1, NULL);");

    db.run("INSERT INTO POKEDEX_STARTERS VALUES (154, 'Meganium'  , 'Grass',  NULL     , 2, NULL);");
    db.run("INSERT INTO POKEDEX_STARTERS VALUES (157, 'Typhlosion', 'Fire' ,  NULL     , 2, NULL);");
    db.run("INSERT INTO POKEDEX_STARTERS VALUES (160, 'Feraligatr', 'Water',  NULL     , 2, NULL);");
    
    db.run("INSERT INTO POKEDEX_STARTERS VALUES (254, 'Sceptile'  , 'Grass',  NULL     , 3, NULL);");
    db.run("INSERT INTO POKEDEX_STARTERS VALUES (257, 'Blaziken'  , 'Fire' , 'Fighting', 3, NULL);");
    db.run("INSERT INTO POKEDEX_STARTERS VALUES (260, 'Swampert'  , 'Water', 'Ground'  , 3, NULL);");
    
    db.run("INSERT INTO POKEDEX_STARTERS VALUES (389, 'Torterra'  , 'Grass', 'Ground'  , 4, NULL);");
    db.run("INSERT INTO POKEDEX_STARTERS VALUES (392, 'Infernape' , 'Fire' , 'Fighting', 4, NULL);");
    db.run("INSERT INTO POKEDEX_STARTERS VALUES (395, 'Empoleon'  , 'Water', 'Steel'   , 4, NULL);");
    
    db.run("INSERT INTO POKEDEX_STARTERS VALUES (497, 'Serperior' , 'Grass',  NULL     , 5, NULL);");
    db.run("INSERT INTO POKEDEX_STARTERS VALUES (500, 'Emboar'    , 'Fire' , 'Fighting', 5, NULL);");
    db.run("INSERT INTO POKEDEX_STARTERS VALUES (503, 'Samurott'  , 'Water',  NULL     , 5, NULL);");
    
    db.run("INSERT INTO POKEDEX_STARTERS VALUES (652, 'Chesnaught', 'Grass', 'Fighting', 6, NULL);");
    db.run("INSERT INTO POKEDEX_STARTERS VALUES (655, 'Delphox'   , 'Fire' , 'Psychic' , 6, NULL);");
    db.run("INSERT INTO POKEDEX_STARTERS VALUES (658, 'Greninja'  , 'Water', 'Dark'    , 6, NULL);");
    
    db.run("INSERT INTO POKEDEX_STARTERS VALUES (724, 'Decidueye' , 'Grass', 'Ghost'   , 7, NULL);");
    db.run("INSERT INTO POKEDEX_STARTERS VALUES (727, 'Incineroar', 'Fire' , 'Dark'    , 7, NULL);");
    db.run("INSERT INTO POKEDEX_STARTERS VALUES (730, 'Primarina' , 'Water', 'Fairy'   , 7, NULL);");

    db.run("INSERT INTO POKEDEX_STARTERS VALUES (812, 'Rillaboom' , 'Grass',  NULL     , 8, NULL);");
    db.run("INSERT INTO POKEDEX_STARTERS VALUES (815, 'Cinderace' , 'Fire' ,  NULL     , 8, NULL);");
    db.run("INSERT INTO POKEDEX_STARTERS VALUES (818, 'Inteleon'  , 'Water',  NULL     , 8, NULL);");
}

function createPokedex(){
    db.run("CREATE TABLE IF NOT EXISTS POKEDEX (ID, NAME, TYPE1, TYPE2, GEN, PS);");
    db.run("INSERT INTO POKEDEX VALUES (001, 'Bulbasaur' , 'Grass'   , 'Poison'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (002, 'Ivysaur'   , 'Grass'   , 'Poison'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (003, 'Venusaur'  , 'Grass'   , 'Poison'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (004, 'Charmander', 'Fire'    ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (005, 'Charmeleon', 'Fire'    ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (006, 'Charizard' , 'Fire'    , 'Flying'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (007, 'Squirtle'  , 'Water'   ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (008, 'Wartortle' , 'Water'   ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (009, 'Blastoise' , 'Water'   ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (010, 'Caterpie'  , 'Bug'     ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (011, 'Metapod'   , 'Bug'     ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (012, 'Butterfree', 'Bug'     , 'Psychic' , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (013, 'Weedle'    , 'Bug'     , 'Poison'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (014, 'Kakuna'    , 'Bug'     , 'Poison'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (015, 'Beedrill'  , 'Bug'     , 'Poison'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (016, 'Pidgey'    , 'Normal'  , 'Flying'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (017, 'Pidgeotto' , 'Normal'  , 'Flying'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (018, 'Pidgeot'   , 'Normal'  , 'Flying'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (019, 'Rattata'   , 'Normal'  ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (020, 'Raticate'  , 'Normal'  ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (021, 'Spearow'   , 'Normal'  , 'Flying'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (022, 'Fearow'    , 'Normal'  , 'Flying'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (023, 'Ekans'     , 'Poison'  ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (024, 'Arbok'     , 'Poison'  ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (025, 'Pikachu'   , 'Electric',  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (026, 'Raichu'    , 'Electric',  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (027, 'Sandshrew' , 'Ground'  ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (028, 'Sandslash' , 'Ground'  ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (029, 'NidoranF'  , 'Poison'  ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (030, 'Nidorina'  , 'Poison'  ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (031, 'Nidoqueen' , 'Poison'  , 'Ground'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (032, 'NidoranM'  , 'Poison'  ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (033, 'Nidorino'  , 'Poison'  ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (034, 'Nidoking'  , 'Poison'  , 'Ground'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (035, 'Clefairy'  , 'Fairy'   ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (036, 'Clefable'  , 'Fairy'   ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (037, 'Vulpix'    , 'Fire'    ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (038, 'Ninetales' , 'Fire'    ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (039, 'Jigglypuff', 'Normal'  , 'Fairy'   , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (040, 'Wigglytuff', 'Normal'  , 'Fairy'   , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (041, 'Zubat'     , 'Poison'  , 'Flying'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (042, 'Golbat'    , 'Poison'  , 'Flying'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (043, 'Oddish'    , 'Grass'   , 'Poison'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (044, 'Gloom'     , 'Grass'   , 'Poison'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (045, 'Vileplume' , 'Grass'   , 'Poison'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (046, 'Paras'     , 'Bug'     , 'Grass'   , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (047, 'Parasect'  , 'Bug'     , 'Grass'   , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (048, 'Venonat'   , 'Bug'     , 'Poison'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (049, 'Venomoth'  , 'Bug'     , 'Poison'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (050, 'Diglett'   , 'Ground'  ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (051, 'Dugtrio'   , 'Ground'  ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (052, 'Meowth'    , 'Normal'  ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (053, 'Persian'   , 'Normal'  ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (054, 'Psyduck'   , 'Water'   ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (055, 'Golduck'   , 'Water'   ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (056, 'Mankey'    , 'Fighting',  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (057, 'Primeape'  , 'Fighting',  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (058, 'Growlithe' , 'Fire'    ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (059, 'Arcanine'  , 'Fire'    ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (060, 'Poliwag'   , 'Water'   ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (061, 'Poliwhirl' , 'Water'   ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (062, 'Poliwrath' , 'Water'   , 'Fighting', NULL);");
    db.run("INSERT INTO POKEDEX VALUES (063, 'Abra'      , 'Psychic' ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (064, 'Kadabra'   , 'Psychic' ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (065, 'Alakazam'  , 'Psychic' ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (066, 'Machop'    , 'Fighting',  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (067, 'Machoke'   , 'Fighting',  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (068, 'Machamp'   , 'Fighting',  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (069, 'Bellsprout', 'Grass'   , 'Poison'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (070, 'Weepinbell', 'Grass'   , 'Poison'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (071, 'Victreebel', 'Grass'   , 'Poison'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (072, 'Tentacool' , 'Water'   , 'Poison'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (073, 'Tentacruel', 'Water'   , 'Poison'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (074, 'Geodude'   , 'Rock'    , 'Ground'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (075, 'Graveler'  , 'Rock'    , 'Ground'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (076, 'Golem'     , 'Rock'    , 'Ground'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (077, 'Ponyta'    , 'Fire'    ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (078, 'Rapidash'  , 'Fire'    ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (079, 'Slowpoke'  , 'Water'   , 'Psychic' , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (080, 'Slowbro'   , 'Water'   , 'Psychic' , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (081, 'Magnemite' , 'Electric', 'Steel'   , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (082, 'Magneton'  , 'Electric', 'Steel'   , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (083, 'Farfetchd' , 'Normal'  , 'Flying'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (084, 'Doduo'     , 'Normal'  , 'Flying'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (085, 'Dodrio'    , 'Normal'  , 'Flying'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (086, 'Seel'      , 'Water'   ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (087, 'Dewgong'   , 'Water'   , 'Ice'     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (088, 'Grimer'    , 'Poison'  ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (089, 'Muk'       , 'Poison'  ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (090, 'Shellder'  , 'Water'   ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (091, 'Cloyster'  , 'Water'   , 'Ice'     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (092, 'Gastly'    , 'Ghost'   , 'Poison'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (093, 'Haunter'   , 'Ghost'   , 'Poison'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (094, 'Gengar'    , 'Ghost'   , 'Poison'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (095, 'Onix'      , 'Rock'    , 'Ground'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (096, 'Drowzee'   , 'Psychic' ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (097, 'Hypno'     , 'Psychic' ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (098, 'Krabby'    , 'Water'   ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (099, 'Kingler'   , 'Water'   ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (100, 'Voltorb'   , 'Electric',  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (101, 'Electrode' , 'Electric',  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (102, 'Exeggcute' , 'Grass'   , 'Psychic' , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (103, 'Exeggutor' , 'Grass'   , 'Psychic' , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (104, 'Cubone'    , 'Ground'  ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (105, 'Marowak'   , 'Ground'  ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (106, 'Hitmonlee' , 'Fighting',  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (107, 'Hitmonchan', 'Fighting',  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (108, 'Lickitung' , 'Normal'  ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (109, 'Koffing'   , 'Poison'  ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (110, 'Weezing'   , 'Poison'  ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (111, 'Rhyhorn'   , 'Ground'  , 'Rock'    , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (112, 'Rhydon'    , 'Ground'  , 'Rock'    , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (113, 'Chansey'   , 'Normal'  ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (114, 'Tangela'   , 'Grass'   ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (115, 'Kangaskhan', 'Normal'  ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (116, 'Horsea'    , 'Water'   ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (117, 'Seadra'    , 'Water'   ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (118, 'Goldeen'   , 'Water'   ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (119, 'Seaking'   , 'Water'   ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (120, 'Staryu'    , 'Water'   ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (121, 'Starmie'   , 'Water'   , 'Psychic' , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (122, 'Mr. Mime'  , 'Psychic' , 'Fairy'   , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (123, 'Scyther'   , 'Bug'     , 'Flying'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (124, 'Jynx'      , 'Ice'     , 'Psychic' , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (125, 'Electabuzz', 'Electric',  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (126, 'Magmar'    , 'Fire'    ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (127, 'Pinsir'    , 'Bug'     ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (128, 'Tauros'    , 'Normal'  ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (129, 'Magikarp'  , 'Water'   ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (130, 'Gyarados'  , 'Water'   , 'Flying'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (131, 'Lapras'    , 'Water'   , 'Ice'     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (132, 'Ditto'     , 'Normal'  ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (133, 'Eevee'     , 'Normal'  ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (134, 'Vaporeon'  , 'Water'   ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (135, 'Jolteon'   , 'Electric',  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (136, 'Flareon'   , 'Fire'    ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (137, 'Porygon'   , 'Normal'  ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (138, 'Omanyte'   , 'Rock'    , 'Water'   , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (139, 'Omastar'   , 'Rock'    , 'Water'   , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (140, 'Kabuto'    , 'Rock'    , 'Water'   , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (141, 'Kabutops'  , 'Rock'    , 'Water'   , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (142, 'Aerodactyl', 'Rock'    , 'Flying'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (143, 'Snorlax'   , 'Normal'  ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (144, 'Articuno'  , 'Ice'     , 'Flying'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (145, 'Zapdos'    , 'Electric', 'Flying'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (146, 'Moltres'   , 'Fire'    , 'Flying'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (147, 'Dratini'   , 'Dragon'  ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (148, 'Dragonair' , 'Dragon'  ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (149, 'Dragonite' , 'Dragon'  , 'Flying'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (150, 'Mewtwo'    , 'Psychic' ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (151, 'Mew'       , 'Psychic' ,  NULL     , NULL);");

    db.run("INSERT INTO POKEDEX VALUES (154, 'Meganium'  , 'Grass'   ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (157, 'Typhlosion', 'Fire'    ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (160, 'Feraligatr', 'Water'   ,  NULL     , NULL);");
    
    db.run("INSERT INTO POKEDEX VALUES (254, 'Sceptile'  , 'Grass'   ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (257, 'Blaziken'  , 'Fire'    , 'Fighting', NULL);");
    db.run("INSERT INTO POKEDEX VALUES (260, 'Swampert'  , 'Water'   , 'Ground'  , NULL);");
    
    db.run("INSERT INTO POKEDEX VALUES (389, 'Torterra'  , 'Grass'   , 'Ground'  , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (392, 'Infernape' , 'Fire'    , 'Fighting', NULL);");
    db.run("INSERT INTO POKEDEX VALUES (395, 'Empoleon'  , 'Water'   , 'Steel'   , NULL);");
    
    db.run("INSERT INTO POKEDEX VALUES (497, 'Serperior' , 'Grass'   ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (500, 'Emboar'    , 'Fire'    , 'Fighting', NULL);");
    db.run("INSERT INTO POKEDEX VALUES (503, 'Samurott'  , 'Water'   ,  NULL     , NULL);");
    
    db.run("INSERT INTO POKEDEX VALUES (652, 'Chesnaught', 'Grass'   , 'Fighting', NULL);");
    db.run("INSERT INTO POKEDEX VALUES (655, 'Delphox'   , 'Fire'    , 'Psychic' , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (658, 'Greninja'  , 'Water'   , 'Dark'    , NULL);");
    
    db.run("INSERT INTO POKEDEX VALUES (724, 'Decidueye' , 'Grass'   , 'Ghost'   , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (727, 'Incineroar', 'Fire'    , 'Dark'    , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (730, 'Primarina' , 'Water'   , 'Fairy'   , NULL);");

    db.run("INSERT INTO POKEDEX VALUES (812, 'Rillaboom' , 'Grass'   ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (815, 'Cinderace' , 'Fire'    ,  NULL     , NULL);");
    db.run("INSERT INTO POKEDEX VALUES (818, 'Inteleon'  , 'Water'   ,  NULL     , NULL);");

}

exports.create = create;