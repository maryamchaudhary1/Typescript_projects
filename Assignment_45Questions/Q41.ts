export {}
let magicians : string[] = ['tom','jerry','bhoot'];
function show_magicians(magician : string[]) {
    for( let magician of magicians) {
        console.log( magician)
    }
}
function make_great(magician : string[]) {
    for ( let i = 0; i < magician.length; i++) {
        magician[i] += `The greate`;
    }
}
make_great(magicians);
show_magicians(magicians);
console.log(magicians);