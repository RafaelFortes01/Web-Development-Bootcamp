function houseKeeper(name, age, workPermition) {
    this.name = name
    this.age = age
    this.workPermition = workPermition
    this.clean = function clean() {
        console.log("Cleaning in progress...")
    }

}
    
var houseKeeper1 = new houseKeeper ("Rafael", 22, true)
var houseKeeper2 = new houseKeeper ("Pedro", 32, true)
    
houseKeeper1.clean()
houseKeeper2.clean()