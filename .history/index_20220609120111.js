// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, attribute){
    return drivers.filter(function(driver){
        return driver.toLowerCase() === attribute.toLowerCase()
    });
}

function fuzzyMatch(drivers, attribute){
    return drivers.filter(function(driver){
        return drivers.toLowerCase().slice(0,att)
    })
}