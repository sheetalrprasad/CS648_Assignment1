var coinFlip;

do{
    coinFlip = Math.round(Math.random());
    if(coinFlip === 1){
        console.log('Tails')
    } else{
        console.log('Heads')
    }
}while(coinFlip !== 1);