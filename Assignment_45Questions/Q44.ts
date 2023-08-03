function make_car (manufacturer: string, model: string, ...other_info: any[]) {
    const car = {
        manufacturer,
        model,
    };

    // for other infor, any number of keyword arguments.
    Object.assign(car, ...other_info); 
    return car;

}

const car = make_car('Honda', 'City', {color: 'blue', version: 'Automatic', speed: 220},{Other: 1, more:2});
console.log(car);