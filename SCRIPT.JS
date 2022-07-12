function iShoot(enemy) {
	
enemy.classList.add("dead");
	
}

function enemyAttacksMe(enemy) {
	
	enemy.classList.add("showing");
	
	setTimeout(  ()=> {
		
		enemy.classList.remove("showing");
	}, 3000);
	
}




function enemyShootsMe(enemy) {
	
	enemy.classList.add("shooting");
	
		setTimeout(  ()=> {
			enemyShootsMe(enemy);
		}, 1000);
		setTimeout(  ()=> {
            enemy.classList.remove("showing");
		}, 3000) ;
}
	    

	
	
	
	
	setTimeout(  ()=> {
		enemy.classList.remove("shooting");
	}, 200);
	
	}
	
	
	function livingEnemies() {
		return document,querySelectorAll(".enemy:not(.dead)")
		
	}
	
	
	
	function randomEnemyAttacks()  {
		var randomEnemyNo= Math.random() * livingEnnemies(). length;
		randomEnemyNo = Math.floor(randomEnemyNo);
		
		var randomDelay = math.ranodom()* 2000 + 1000;
		
		setTimeout(  ()=> {
			enemyAttacksMe(enemy);
			randomEnemyAttacks();
		}, randomDelay);
	}
	      