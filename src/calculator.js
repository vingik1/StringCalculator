function add(numbers){
    if(numbers == ""){
        return 0;
    }
    if(numbers.includes(",")){
        var numbersArray = numbers.split(",");
        return sum(numbersArray);
    }
    else{
        return parseInt(numbers);
    }
    
}

function sum(array){
    var sum = 0;
    for(var i = 0; i < array.length;i++) {
        sum += parseInt(array[i]);
    }
    return sum;
    
}
module.exports = add;