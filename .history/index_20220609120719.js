// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, attribute){
    return drivers.filter(function(driver){
        return driver.toLowerCase() === attribute.toLowerCase()
    });
}
/*
returns a driver if beginning provided letters match
 does not return drivers if only middle or ending letters match
 does not return drivers if only middle or ending letters match

 */

function fuzzyMatch(drivers, attribute){
    return drivers.filter(function(driver){
        return driver.toLowerCase().slice(0,attribute.length) === attribute.toLowerCase()
    })
}
//
function matchName(drivers, argument){
    return drivers.filter(function(driver){ return driver.name === argument})
}