var cities = {
    name: 'islamabad',
    population: 13979000
};
{
    name: "karachi";
    population: 17236000;
}
{
    name: 'Quetta';
    population: 1190000;
}
{
    name: 'peshawar';
    population: 241200;
}
console.log(cities);
for (var i = 0; i < cities.length; i++) {
    console.log('population: ${cities[i].population}');
}
console.log('captial of Pakistan: ${cities[0].name}');
console.log('population of capital city of Pakistan: ${cities[0].population');
