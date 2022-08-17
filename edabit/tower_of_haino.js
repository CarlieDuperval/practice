//There are three towers. The objective of the game is to move all the disks over to tower #3, but you can't place a larger disk onto a smaller disk. 


// Create a function that takes a number discs as an argument and returns the minimum amount of steps needed to complete the game.

// Examples
// towerHanoi(3) ➞ 7

// towerHanoi(5) ➞ 31

// towerHanoi(0) ➞ 0
// Notes
// The amount of discs is always a positive integer.
// 1 disc can be changed per move.

// create a function towerHaino = (disc)=> {}
	// 2 discs => 3 moves
	// 3 discs => 7 moves
	// 4 discs => 15 moves
	// 5 discs => 31 moves
	// m = 2^d -1
    // if disc === 0 => return 0  else : return 
