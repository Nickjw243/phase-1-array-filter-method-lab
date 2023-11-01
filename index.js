// Code your solution here
function findMatching(drivers, searchName) {
   return drivers.filter(driver => driver.toLowerCase() === searchName.toLowerCase())
}
function fuzzyMatch(drivers,searchName) {
    return drivers.filter(driver => driver.slice(0,2) === searchName.slice(0,2))
}
function matchName(drivers, town) {
    return drivers.filter(driver => driver.name === town)
}