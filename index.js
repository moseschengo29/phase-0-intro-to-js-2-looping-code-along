// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

// const names = ["Guadalupe", "Ollie", "Aki"];

names = [];

function writeCards(names, text="for the wonderful surprise gift!"){
    let messages = [];

    for(let i=0; i<names.length; i++){
        const message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
        messages.push(message);
    }
    return messages;
}

writeCards(["Guadalupe", "Ollie", "Aki"]);

function countDown(num){
    let count = 0;
    
    while(count<=num){
        console.log(num);
        num--;
    }
}

countDown(10);