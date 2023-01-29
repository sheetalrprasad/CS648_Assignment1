var str =""
for(var i = 0; i < 8; i++){
    for(var j = 0; j <i; j++ ){
        document.write("#");
        str+="#"
    }
    str+="\n";    
    document.write("<br>");
}
console.log(str);