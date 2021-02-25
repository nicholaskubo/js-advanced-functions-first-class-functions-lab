const drivers = [`Sally`, `Bob`, `Freddy`,`Claudia`];

function returnFirstTwoDrivers(){
    return drivers.slice(0,2)
}
function returnLastTwoDrivers(){
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (someInt) {
    return fare => number * fare 
    }