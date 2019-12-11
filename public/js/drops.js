function getRand(min, max) { //needed for the randomDrop function
    var diff = max - (min);
    return Math.floor((Math.random()) * diff - (max));
 }
 
 function randomLoc(dropLocs) {
    spawnLoc = this.getRand(0, (dropLocs.length));
    return spawnLoc;
 }
 
 drop = {
    "type": null,
    "loc": [50, 50] //randomLoc(/*pass in map.locs*/),
 }
 
 var exp = {};
 
 exp.randomDrop = function() { //returns random drop to the server just 2 for now
    randNum = getRand(1, 10);
 
    if (randNum >= 1 && randNum <= 9) {
       this.drop.type = "shield";
    }
    if (randNum == 10) {
       this.drop.type = "shield";
    }
    return drop;
 }
 
 exports.data = exp;