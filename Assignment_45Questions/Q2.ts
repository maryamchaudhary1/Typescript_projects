let personname = "maryam";

console.log("uppercase:",personname.toUpperCase());
console.log("lowercase",personname.toLowerCase());


function Titlecase(str) {
    const lower = str.toLowerCase()
    return str.charAt(0).toUpperCase + lower.slice(1)


}
console.log("Titlecase:",Titlecase(personname));