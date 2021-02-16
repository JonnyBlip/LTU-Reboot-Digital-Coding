function getFullName(firstName, lastName){
  let fullName = firstName + ' ' + lastName;
  return fullName;
}

var fName = 'Imran';
var lName = 'Mohammed';

var fName2 = 'Safina';
var lName2 = 'Shan';

var fullName1 = getFullName(fName, lName);
console.log (fullName1);
var fullName2 = getFullName(fName2, lName2);
console.log (fullName2);