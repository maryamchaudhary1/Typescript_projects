let list= [1,3,-4,7,8,-9,11,12,-14,13,16,15,17,18,20];
const isodd = function(list) {
    return list%2!==0;
}
const oddnumber = list.filter(isodd);
console.log(oddnumber);