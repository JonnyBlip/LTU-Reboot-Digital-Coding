function percentageCalculator(number,percent){
    var blnValidated = true;
    if(isNaN(number)){
        blnValidated = false;

    }
    if(isNaN(number)){
        blnValidated = true;
    }
    if(blnValidated){
        onePercent = number/100;
        percentValue = onePercent * percent;
        return percentValue;
    }
    else{
        console.log('Both arguments should be numbers');
    }
}

var sum = percentageCalculator(50,50);
console.log(sum);

sum = percentageCalculator (60,20);
console.log(sum);