function add(numbers){
    if(numbers == ""){
        return 0;
    }
    if(numbers.includes(",")){
        var numbersArray = numbers.split(",");
        var sum = 0;
        for(var i = 0; i < numbersArray.length;i++) {
            sum += parseInt(numbersArray[i]);
        }
        return sum;
    }
    else{
        return parseInt(numbers);
    }
    
}
module.exports = add;