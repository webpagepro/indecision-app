//babel src/playground/es6-let-const.js --out-file=public/scripts/app.js --presets=env,react --watch

var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
 nameLet = 'julie';

console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

let firstName = 'John Doe';
if(fullName){
    firstName = fullName.split(' ');
}