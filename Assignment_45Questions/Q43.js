function make_sandwich(items) {
    var summary = "You ordered sandwich with following items:";
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        summary += "".concat(item, ",");
    }
    console.log(summary);
}
make_sandwich(["Chicken", "Cheese"]);
make_sandwich(["Olive", "Onion", "Lettuce"]);
make_sandwich(["Chicken", "Cucumber", "Olives", "Mayonise"]);
