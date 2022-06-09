// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, attribute){
    return drivers.filter(function(driver){
        return driver.toLowerCase() === attribute
    });
}