function add(numbers){
    if(numbers == ""){
        return 0;
    }
    if(numbers.includes(",") || numbers.includes("\n")){
        var numbersArray = numbers.split(/,|\n/);
        var stringValue = findNegative(numbersArray);
        var haveNegative = checkNegative(numbersArray);
        if(haveNegative == true){
            return stringValue;
        }
        else{
            return sum(numbersArray);
        }
        
    }
    else{
        return parseInt(numbers);
    }
    
}
function checkNegative(numbersArray){
    for(var i = 0; i < numbersArray.length;i++) {
        if(parseInt(numbersArray[i]) < 0){
            return true;
        }
    }
    return false;
}

function findNegative(numbersArray){
    var stringValue = "Negatives not allowed: ";
        for(var i = 0; i < numbersArray.length;i++) {
            if(parseInt(numbersArray[i]) < 0){
                if(numbersArray.length-1 == i){
                    stringValue += numbersArray[i];
                }
                else{
                    stringValue += numbersArray[i]+",";
                }
            }
        }
    return stringValue;
}

function sum(array){
    var sum = 0;
    for(var i = 0; i < array.length;i++) {
        if(parseInt(array[i]) <= 1000){
            sum += parseInt(array[i]);
        }
    }
    return sum;
    
}
module.exports = add;