var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function make_car(manufacturer, model) {
    var other_info = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        other_info[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // for other infor, any number of keyword arguments.
    Object.assign.apply(Object, __spreadArray([car], other_info, false));
    return car;
}
var car = make_car('Honda', 'City', { color: 'blue', version: 'Automatic', speed: 220 }, { Other: 1, more: 2 });
console.log(car);
