var newElement = document.createElement('p');
//console.log(newElement);
var divElement = document.querySelector('div');
//console.log(divElement);
newElement.innerHTML = ('Hello');
console.log(newElement);
divElement.append(newElement);