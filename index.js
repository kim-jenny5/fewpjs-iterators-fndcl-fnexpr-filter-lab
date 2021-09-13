const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

// const drivers = [
//     {
//         name: 'Bobby',
//         hometown: 'Pittsburgh'
//     },
//     {
//         name: 'Sammy',
//         hometown: 'New York'
//     },
//     {
//         name: 'Sally',
//         hometown: 'Cleveland'
//     },
//     {
//         name: 'Annette',
//         hometown: 'Los Angeles'
//     },
//     {
//         name: 'Bobby',
//         hometown: 'Tampa Bay'
//     }
// ];

function findMatching(arr, str) {
    const result = arr.filter(name => {
        return name.toLowerCase() === str.toLowerCase()
    })
    return result
}

// ⚠️ NOT PASSING TEST!
function fuzzyMatch(arr, str) {
    const result = arr.filter(name => {
        // debugger
        return name.toLowerCase().charAt(0) === str.toLowerCase().charAt(0)
    })
    return result
}

function matchName(arr, str) {
    const result = arr.filter(driver => {
        return driver.name.toLowerCase() === str.toLowerCase();
    })
    return result
}

fuzzyMatch(drivers, "Bobby")
// matchName(drivers, "Bobby")
