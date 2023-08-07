export{}
let list = [1,3,-4,7,8,-9,11,12,-14,13,16,15,17,18,20];
const number = function(element:number) {
    return element < 0
}
const negativenumber = list.filter(number);
console.log(negativenumber);
let sum = 0
negativenumber.forEach(n =>{sum+= n});
console.log (sum)