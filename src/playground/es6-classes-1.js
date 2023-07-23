
// setup constructor to take name & age (default to 0)
// Get description - name is xx yrs old
class Person {                                                                                              
    constructor(name = 'Anonomous', age='0'){
       this.name = name;
       this.age = age; 
    }

    getGreeting(){
      return `Hi, I am ${this.name}!`;    
    }
    
    getDescription(){
      return  `${this.name} is ${this.age} years old`;
    }


}

class Student extends Person{ 
    
    constructor(name, age, major){
        super(name, age);
                this.major = major;
     }

     hasMajor(){
        return  !!this.major;
      }

      getDescription(){
        let description = super.getDescription();

        if(this.hasMajor){
            description += ` and their major is: ${this.major}`;
        }
         return  description;
      }
  
}

class Traveler extends Person{ 
    constructor(name, age, homeLocation){
        super(name, age);
                this.homeLocation = homeLocation;
     }

     getGreeting(){
        let greeting = super.getGreeting();

        if(this.homeLocation){
            greeting += ` I am visiting from ${this.homeLocation}.`;
      }

      return greeting;
    }
}
const me = new Traveler('Samuel', 49, "Managua");
console.log("me ", me.getGreeting());

 const other = new Traveler(undefined, undefined, 'Nowhere');
 console.log("other ", other.getGreeting());


// const description = new Student('Sam', 6);
// console.log("description ", description.getDescription());


