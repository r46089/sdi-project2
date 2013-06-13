
/* A Mage's Quest */

var startWalking = function(inForest) {
	if (inForest) {
		console.log("The mage began walking through the forest, and ran into a goblin!");
	} else {
		console.log("The mage began spelunking in a dark cavern, and came upon some bats!");
	}
}

var howStrongTheyWere = function(monsters) {
	var totalHealth = 0;
	var monstersCounted = 0; 
	while (monstersCounted < monsters) {
		if (monstersCounted == 0) {
			console.log("He looked at the first one, and saw it had about 6 health.");
		} else {
			console.log("Then he looked at the next one, and saw it, too, had about 6 health.");
		}
		monstersCounted++;
		totalHealth = totalHealth + 6;
		console.log("\"So far, that's about " + totalHealth + " to whittle through,\" he thought.");
	}
	return totalHealth;
}

