function drinkOrder(size, drink){
    var strMessage = 'You have ordered a ' ;
    switch(size){
        case 'small':
            strMessage += ' Small';
        break;
        case 'medium':
            strMessage += ' Medium';
        break;
        case 'large':
            strMessage += ' Large';
        break;
    }
    
    switch(drink){
        case 'cola':
            strMessage += ' Cola';
        break;
        case 'lemon':
            strMessage += ' Lemonade';
        break;
        case 'orange':
            strMessage += ' Orangeade';
        break;
    }
    return strMessage;

}

order = drinkOrder('large','orange');
console.log(order);