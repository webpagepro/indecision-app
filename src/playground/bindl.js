
const obj = {
    name: "Vikran",
    getName(){
        return this.name;
    }
};
//console.log("getName ", obj.getName());

const getName = obj.getName.bind({name: 'Samuel'});
console.log("getName 2 ", getName());
