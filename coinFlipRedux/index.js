var coinFlip;

for(var i = 0 ; i < 10 ; i++){
    coinFlip =  Math.round(Math.random(coinFlip));    
    if(coinFlip === 0 ){
        console.log('Heads')
    } else {
        console.log('Tails');
    }
}
