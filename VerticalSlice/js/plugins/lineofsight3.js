function lineOfSight3(sightLimit, eventIdentification, mapIdentification, direction) {
	//variable
	var sight; //variable to know whether the player has been seen
	//if they are in the same Y position and within the sight limit check for obstacles
	if($gamePlayer.y == $gameMap.event(eventIdentification).y && Math.abs($gamePlayer.x - $gameMap.event(eventIdentification).x) <= sightLimit){
		 sight = true;
	}
	//if  after everything the player can be seen then throw event self switch A
	if(sight == true)
		$gameSelfSwitches.setValue([mapIdentification, eventIdentification, 'A'], true);
}


