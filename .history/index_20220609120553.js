// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, attribute){
    return drivers.filter(function(driver){
        return driver.toLowerCase() === attribute.toLowerCase()
    });
}

function fuzzyMatch(drivers, attribute){
    return drivers.filter(function(driver){
        return driver.toLowerCase().slice(0,attribute.length) === attribute.toLowerCase()
    })
}

function matchName(drivers, argument){
    return drivers.filter(function(driver){ return driver.name === arg})
}