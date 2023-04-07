let array = [1, 4, 11, 2, 37, -4], bool;

for(i = 0; i < array.length; i++){
    for(j = i + 1; j < array.length; j++){
        if(array[i] + array[j] === 0){
            bool = true;
            console.log(bool);
            break;
        }
    }
}

if(bool === undefined){
    console.log(false);
}