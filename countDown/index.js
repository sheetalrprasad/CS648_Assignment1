var inputNum = parseInt(window.prompt('Enter a number greater than 0'));

if(inputNum > 0){
    for(i = inputNum; i >=0 ; i--){
        document.write(inputNum+"<br>");
        inputNum --; 
    }
}