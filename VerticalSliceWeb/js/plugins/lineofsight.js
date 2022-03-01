function lineOfSight(sightLimit, eventIdentification, mapIdentification, direction) {
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
		//a slightly different script runs depending on whether or not the difference in position is positive or negative
		if(direction == "all" || direction == "down"){
			if(($gamePlayer.y - $gameMap.event(eventIdentification).y) >= 0 ){
				//loop through every position between the current event and the player and check for obstacles
				for(y = $gamePlayer.y; y > $gameMap.event(eventIdentification).y; y--){
					//if there is something in the way break the loop to prevent the false from being overwritten
					if(!($gameMap.isPassable($gamePlayer.x, y))){
						sight = false; 
						break;
					}
					//if nothing is in the way the player can be seen
					else
						sight = true;
				}
			}
		}
		//run if the position is negative
		if(direction == "all" || direction == "up"){
			if(($gamePlayer.y - $gameMap.event(eventIdentification).y) < 0){
				for(y = $gamePlayer.y; y < $gameMap.event(eventIdentification).y; y++){
					if(!($gameMap.isPassable($gamePlayer.x, y))){
						sight = false; 
						break;
					}
					else
						sight = true;
				}
			}
		}
	}
	//run if the player and event share the same Y position and are within the sight limit
	//everything else is the same as above just swapped for the Y position
	if($gamePlayer.y == $gameMap.event(eventIdentification).y && Math.abs($gamePlayer.x - $gameMap.event(eventIdentification).x) <= sightLimit){
		 if(direction == "all" || direction == "right"){
			 if(($gamePlayer.x - $gameMap.event(eventIdentification).x) >= 0){
				for(x = $gamePlayer.x; x > $gameMap.event(eventIdentification).x; x--){
					if(!($gameMap.isPassable(x, $gamePlayer.y))){
						sight = false; 
						break;
					}
					else
						sight = true;
				}
			}
		}
		if(direction == "all" || direction == "left"){
			if(($gamePlayer.x - $gameMap.event(eventIdentification).x) < 0){
				for(x = $gamePlayer.x; x < $gameMap.event(eventIdentification).x; x++){
					if(!($gameMap.isPassable(x, $gamePlayer.y))){
						sight = false; 
						break;
					}
					else
						sight = true;
				}
			}
		}
	}
	//if  after everything the player can be seen then throw event self switch A
	if(sight == true)
		$gameSelfSwitches.setValue([mapIdentification, eventIdentification, 'A'], true);
}


