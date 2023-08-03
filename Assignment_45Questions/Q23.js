var names4 = ["Maryam", "Saba", "Muskan", "Isha"];
var numbers1 = [1, 2, 3, 4, 5];
//string equlity test  - true
console.log('is first name in aray is Maryami preditcted true');
console.log(names4[0] = 'maryam');
//string ineuality test - true
console.log('is first name is not musa? i predicted true');
console.log(names4[0] = 'saba');
//string equality test - false
console.log('is first name is Saba? i predicted false ');
console.log(names4[0] = 'Maryam');
// string inequality test - false
console.log('is second name is Maryam? i predicted false');
console.log(names4[0] = 'saba');
//string equality test with lower case - true
console.log('is last name in array is Isha? i predicted true');
console.log(names4[0] = 'Isha');
// string inequality test with lower case  false
console.log('is first name in array is  Isha? i predicted false');
console.log(names4[0] = 'Maryam');
// number equality test true
console.log('is first number in number is 1? i predicted true');
console.log(numbers1[0] = 1);
// number inequality test false
console.log('is second number in number is not 2? i predicted false');
console.log(numbers1[0] = 2);
// number greater than test - true
console.log('is second element in numbers is greater than 1? i predicted true');
console.log(numbers1[1] > 1);
// number less than test - false
console.log('is second element in number is less than1? i predicted false');
console.log(numbers1[1] > 1);
// number greater than or equal to - true
console.log('is second element in numbers is greater than or equal to2? i predicted true');
console.log(numbers1[1] >= 2);
// number less than or equal to  - false
console.log('is second number in numbers is less tha or  equal 1? i predicted false');
console.log(numbers1[1] <= 1);
//test using and oprater 
console.log('is first number in numbers is 1 and second number is 2? i predited  ture');
console.log(numbers1[0] = 1 && numbers1[1] == 2);
// test using OR opreator
console.log('is first number in numbers is 1 or second number is 2? i predicted true');
console.log(numbers1[0] = 1 || numbers1[0] == 2);
// if item is in array
console.log(' is 4 is in number? i predicted true');
console.log(numbers1.includes(4));
//if item is not in arry
console.log('is7 number in numbers array? i predicted false');
console.log(numbers1.includes(7));
