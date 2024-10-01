// Code your solutions in this file
let thankYouArray =[];

function writeCards(names,occasion){
    let num = 0;
    const arrayLength = names.length;
    while(num < arrayLength){
        thankYouArray.push(`Thank you, ${names[num]}, for the wonderful ${occasion} gift!`);
        num++;
    }
    return thankYouArray;
}

function countDown(number){
    while(number >= 0){
        console.log(number);
        number--;
    }
}