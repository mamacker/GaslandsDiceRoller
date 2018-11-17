let howMany = 10;

let sayings = [
  "hazard",
  "spin",
  "slide",
  "stick shift",
  "stick shift",
  "stick shift"
];

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function askDice() {
  rl.question('How many dice? ', (howMany) => {
    console.log(`Rolling ${howMany} dice`);

    for (let i = 0; i < howMany; i++ ) {
      let pickedNum = Math.floor(Math.random() * sayings.length);
      console.log((i + 1) + ": ", (pickedNum + 1) + " -",  sayings[pickedNum]);
    }

    askDice();
  });
}

askDice();
