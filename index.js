const app = "I don't do much."

function bumpCounter() {
	let counter = 0
	
	function addBump(){
		counter += 1
		}
	 function getBumps(){
		return counter
		}

	return {addBump,
 			getBumps};
}

function createAnimal(animalType){
	function addDevice (deadlyDevice){
		 let object = {animalType: `${animalType}`, deadlyDevice: `${deadlyDevice}`}
		 return object 
	}
	return addDevice;
}

var sharkCreator = createAnimal('Shark')
var sharkWithFrickinLaserbeam = sharkCreator('Laserbeam')
var sharkWithFrickinCannon = createAnimal('Shark')('Cannon')
