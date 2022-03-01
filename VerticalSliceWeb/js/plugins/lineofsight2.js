function lineOfSight2(sightLimit, eventIdentification, mapIdentification, direction) {
	//variable
	var sight; //variable to know whether the player has been seen
	if(direction == "auto"){
		if($gameMap.event(eventIdentification)._direction == 8)
		{
			direction = "up";
		}
		if($gameMap.event(eventIdentification)._direction == 2)
		{
			direction = "down";
		}
		if($gameMap.event(eventIdentification)._direction == 4)
		{
			direction = "left";
		}
		if($gameMap.event(eventIdentification)._direction == 6)
		{
			direction = "right";
		}
	}
	//if they are in the same X position and within the sight limit check for obstacles
	if($gamePlayer.x == $gameMap.event(eventIdentification).x && Math.abs($gamePlayer.y - $gameMap.event(eventIdentification).y) <= sightLimit){
		sight = true;
	}
	//run if the player and event share the same Y position and are within the sight limit
	//everything else is the same as above just swapped for the Y position
	if($gamePlayer.y == $gameMap.event(eventIdentification).y && Math.abs($gamePlayer.x - $gameMap.event(eventIdentification).x) <= sightLimit){
		 sight = true;
	}
	//if  after everything the player can be seen then throw event self switch A
	if(sight == true)
		$gameSelfSwitches.setValue([mapIdentification, eventIdentification, 'A'], true);
}


