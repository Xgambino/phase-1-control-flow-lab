
function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return "This one is on me!";
  } else if (distance > 400 && distance <= 2000) {
    return "That will be twenty bucks.";
  } else if (distance > 2000 && distance <= 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (distance > 2500) {
    return "No can do.";
  } else {
    return "Distance must be a positive number.";
  }
}

// Example usage:
console.log(scuberGreetingForFeet(300));
console.log(scuberGreetingForFeet(2200)); 
console.log(scuberGreetingForFeet(3000)); 
console.log(scuberGreetingForFeet(-100)); 

function ternaryCheckCity(city) {
  return city === "NYC" ? 'Ok, sounds good.' :
  'No go.'
}
console.log(ternaryCheckCity("NYC"))
console.log(ternaryCheckCity("Tokyo"))

function switchOnCharmFromTip(tipAmount) {
  switch (tipAmount) {
      case 'generous':
          return "Thank you so much.";
      case 'not as generous':
          return "Thank you."; 
      default:
          return "Bye.";
  }
}
console.log(switchOnCharmFromTip('generous'))