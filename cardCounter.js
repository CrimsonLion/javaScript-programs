//this program tells you when to bet or hold based on point system
// +1 for 2,3,4,5,6,7  and -1 for 10, J, Q, K, A also 0 for 7, 8, 9

var count = 0; 

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++; // adds 1
      break; 
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--; // takes away 1
      break;
  }

  if (count > 0) {
    return count + " Bet";  // ex: "5 Bet"
  } else {
    return count + " Hold"; // ex: "0 Hold" or "-3 Hold"
  } 
}

// Add/remove calls to test this
cc(2); cc(3); cc(7); cc('K'); cc('A');