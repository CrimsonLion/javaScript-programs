var moonPhase = "full";

if (moonPhase === "full") {
  console.log('Howl');
  console.log('I swear I am not a werewolf.');
}	else if (moonPhase === 'mostly full') {
  console.log('Arms and legs are getting hairier.');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet.');
} else {
  console.log('Invalid moon phase')
}

switch (moonPhase) {
  case 'full':
  	console.log('Howl');
    break;
  case 'mostly full':
  	console.log('Arms and legs are getting hairier.');
    break;
  case 'mostly new':
  	console.log('Back on two feet.');
    break;
  default:
    console.log('Invalid Moon Phase');
    break;
}