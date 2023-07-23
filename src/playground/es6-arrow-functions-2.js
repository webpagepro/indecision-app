//babel src/playground/es6-let-const.js --out-file=public/scripts/app.js --presets=env,react --watch

// arguments object - no longer bound with arrow functions
// this keyword - no longer bound by arrow functions
const add = (a, b) => {
    console.log(a, b);
    return a + b;
}
//console.log(add(55, 1));

//this keyword is no longer bound

const user = {
    name: 'Andrew',
    cities: ['Philidelphia', 'New York', 'Dublin'],
    printPlacesLived() {
        // console.log(this.name);
        // console.log("cities", this.cities);

    // this.cities.forEach( (city) => {
    //     console.log(this.name + ' has lived in ' + city)
    // })

        // return this.cities.map((city) => {
        //     return this.name + ' has lived in ' + city;
        //     //console.log(this.name + ' has lived in ' + city);
        // })

        return this.cities.map((city) => this.name + ' has lived in ' + city)

        return places;

    }

};
//console.log(user.printPlacesLived());

//Challenge
//array of numbers

const multiplier = {
    numbers: [10,20,30,40,50],
    multBy : 3, 
    multiply () {
       return this.numbers.map((arr) => (arr * this.multBy) )
    console.log("arr ", this.arrs)
    } 
    
    //multiply by single number
     
}
    //multiply returns new array where the numbers have been multiplied


console.log("mult ", multiplier.multiply()); // [1, 2, 3] 2 [2, 4, 6]

