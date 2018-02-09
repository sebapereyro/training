/* Practice */

var begginingScenarios = [ "Scenario1" , "Scenario2" , "Scenario3"];
var weaponList = [ "Weapon1" , "Weapon2" , "Weapon3"];

function randomNumber(range){
    return Math.round(Math.random() * range);
}

function pickOne(list){
    return list[randomNumber(list.length - 1)]
}

alert("Scenario : " + pickOne(begginingScenarios));
alert("Weapon : " + pickOne(weaponList))