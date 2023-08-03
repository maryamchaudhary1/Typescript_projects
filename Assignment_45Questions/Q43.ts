function make_sandwich (items : string[]) {
    let summary = `You ordered sandwich with following items:`;
    for(let item of items) {
        summary += `${item},`;
    }
    console.log(summary);

}

make_sandwich(["Chicken", "Cheese"]);
make_sandwich(["Olive", "Onion", "Lettuce"]);
make_sandwich(["Chicken", "Cucumber", "Olives", "Mayonise"]);