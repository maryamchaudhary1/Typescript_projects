export {}
let magicians : string[] = ['tom','jerry','bhoot'];
function show_magicians(magicians : string[]) {
    for (let magician of magicians) {
        console.log(magician)

    }
}
function make_great(magicians : string[]) {
    let make_magicians : string[] = [];
    for (let magiian of magicians) {
        make_magicians.push(`${magicians}The great`);
    }
    return make_magicians;
}

let make_magicians: string[] = make_great(magicians);
show_magicians(magicians);
console.log("\n");
show_magicians(make_magicians);
console.log(make_magicians);