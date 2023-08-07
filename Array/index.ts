export{}
let list = [1,3,-4,7,8,-9,11,12,-14,13,16,15,17,18,20];
const isEven = function(list) {
    return list%2===0;
}
const evennumber = list.filter(isEven);
console.log(evennumber);


