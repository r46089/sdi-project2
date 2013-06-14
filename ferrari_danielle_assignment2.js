
// A Mage's Quest

var spellToCast; // string
var healthToOvercome; // number
var monstersKilled; // array

var startWalking = function(inForest) {
	if (inForest) {
		console.log("So he began walking through the forest, and ran into a goblin!");
	} else {
		console.log("So he began spelunking in a dark cavern, and came upon some bats!");
	}
}

var makeSureHesGotMana = function(manaHeHas, manaHeNeeds) {
	var hasHeGotIt;
	if (manaHeHas >= manaHeNeeds) {
		console.log("He was not afraid, however, for he had more than enough mana for his needs.");
		hasHeGotIt = true;
	} else {
		console.log("He was slightly worried when this happened, for his mana supply was slightly low.");
		hasHeGotIt = false;
	}
	return hasHeGotIt;
}

var assessHowStrongTheyWere = function(monsters) {
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
		console.log("\"So far, that's about " + totalHealth + " 'health points' to whittle away,\" he thought.");
	}
	return totalHealth;
}

var whichSpellToUse = function(spellShape, spellAction) {
	var fullSpell = spellShape + " of " + spellAction;
	return fullSpell;
}

var attacksTheGroup = function(totalDamage, monstersNames) {
	var monstersCounted = 0;
	var remainingMonsters = monstersNames;
	var monsterJustKilled;
	for (monstersCounted = 0; (monstersCounted * 6) < totalDamage; monstersCounted++) {
		if (remainingMonsters.length == 0) {
			console.log("All of the creatures died; the rest of the spell went towards destroying the environment a little.");
			break;
		}
		
		monsterJustKilled = remainingMonsters.pop();
		if (monstersCounted == 0) {
			console.log("The first casualty was " + monsterJustKilled + ".");
		} else {
			console.log("And then it took the life of " + monsterJustKilled + "!");
		}
	}
	return remainingMonsters;
}

console.log("There once was a mage who wanted to quest.");
startWalking();
makeSureHesGotMana(25, 35);
console.log("Nevertheless, he pressed on. He decided to size up the situation.");
healthToOvercome = assessHowStrongTheyWere(5);
console.log("\"Right, so I've got to shave away " + healthToOvercome + " total 'health points',\" he concluded.");
spellToCast = whichSpellToUse("Ball", "Flaming Death");
console.log("\"I'd better use the " + spellToCast + " .\" And so he did.");
monstersKilled = attacksTheGroup(42, ["Blata", "Blara", "Blana", "Blaba", "Morris"]); 
if (monstersKilled.length > 1) {
	console.log("When it was all said and done, only " + monstersKilled + " remained alive and ran off -- the only others to live to tell the tale.");
} else if (monstersKilled.length == 1) {
	console.log("When it was all said and done, only " + monstersKilled + " remained alive and ran off -- the only one to live to tell the tale.");
} else {
	console.log("When it was all said and done, none survived.");
}
console.log("And the mage continued on his journey."); 
