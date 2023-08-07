let list = [1,3,-4,7,8,-9,11,12,-14,13,16,15,17,18,20];
const number = function(element:number) {
    return element > 0
}
const positivenumber = list.filter(number);
console.log(positivenumber);
let sum = 0
positivenumber.forEach(n => {sum += n});
console.log(sum)

    

    
