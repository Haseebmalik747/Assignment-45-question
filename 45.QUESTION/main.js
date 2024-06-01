"use strict";
function createCar(manufacturer, modelName, options = {}) {
    return Object.assign({ manufacturer,
        modelName }, options);
}
// Call the function with required information and additional options
const myCar = createCar("Toyota", "Camry", { color: "blue", optionalFeature: "sunroof" });
// Print the Object that's returned
console.log("My Car:", myCar);
