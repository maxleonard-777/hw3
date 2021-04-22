// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.

  // Store into memory the name, phone number, and starting and ending address
  let passengerDetails = ride.passengerDetails
  let pickup = ride.pickupLocation
  let dropoff = ride.dropoffLocation

  let passengerFirstName = passengerDetails.first 
  let passengerLastName = passengerDetails.last 
  let passengerNumber = passengerDetails.phoneNumber 

  let startAdress = pickup.address
  let startCity = pickup.city 
  let startState = pickup.state 
  let startZip = pickup.zip 

  let endAdress = dropoff.address
  let endCity = dropoff.city 
  let endState = dropoff.state 
  let endZip = dropoff.zip 

  let rideType

  // Decide which level of service to provide using conditionals
  // Noober purple requests superscede other requests, so this goes first
  if (ride.purpleRequested == true) {
    rideType = 'Noober Purple'
  } 
 // if the number of passengers is over 3 we need an XL 
  else if (ride.numberOfPassengers > 3) {
    rideType = 'Noober XL'
  } else {
    // If the number of riders is 3 or below and no purple ride was requested it is a normal ride
    rideType = 'Noober X'
  }
  console.log(`${rideType} Passenger: ${passengerFirstName} ${passengerLastName} - ${passengerNumber}. 
  Pickup at ${startAdress}, ${startCity}, ${startState} ${startZip}. 
  Drop-off at ${endAdress}, ${endCity}, ${endState} ${endZip}.`)
  // 🔥 YOUR CODE ENDS HERE 🔥
})