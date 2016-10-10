function show(w) { console.log(w); }

/*
var arr = [1, 2, 4];
//console.log(arr[arr.length - 1]);



Object.defineProperty(Array.prototype, 'last', {
    get: function () {
        return this[this.length - 1];
    }
});


console.log(arr.last);
var arr2 = [2, 3, 4];
console.log(arr2.last);
*/



// A prototype is an object tht exists on every function in Javascript

/*
var testFunc = function test() { }
show(testFunc.prototype);
var test = { name: "test" }
console.log(test.__proto__);
//proto
*/

function Cat(name, color) {
    this.name = name;
    this.color = color;
}
var blackCat = new Cat("Tommy", "black");
//show(blackCat.__proto__);

//show(Cat.prototype === blackCat.__proto__);
/*
var whiteCat = new Cat("Ranjeet", "black");


//blackCat.age = 7;
Cat.prototype.age = 10;
Cat.prototype = { age: 9 };
//whiteCat.age = 8;
//blackCat.age = 10;

//show(Cat.prototype);
//show(whiteCat.age);
var cat3 = new Cat("Amogh", "white");
show(cat3.__proto__);
show(cat3.__proto__.__proto__);
show(cat3.__proto__.__proto__.__proto__);
show(Object.keys(cat3)); */
//show(cat3.age);
//show(Cat.prototype === cat3.__proto__);

/*
show(whiteCat.__proto__ === blackCat.__proto__);
show(blackCat.age);
show(whiteCat.age);
show(Cat.prototype);
*/

//show(Object.keys(blackCat));
/*show(Cat.prototype);
show(blackCat.prototype);
//comparision 
*/
/*
show(Cat.prototype === blackCat.__proto__);
Cat.prototype.age = 2;
//show(Cat.prototype);
//show(Cat.prototype.age);
//show(blackCat.age);


//Instance and Prototype propertiess
blackCat.age = 6;
show(Cat.prototype.age);
show(blackCat.age);

// Chnging function prototype 

Cat.prototype = { age: 3 };
show(blackCat.age);
var secondCat = new Cat("tt", "ss");
show(secondCat.age);

// Mutliple levels of Inheritance
show(secondCat.__proto__.__proto__);
show(secondCat.__proto__.__proto__.__proto__);
*/


function animal() { }
animal.prototype.speak = function () {
    show("Animals can speak");
};

function Cat(name, color) {
   animal.call(this);
    this.name = name;
    this.color = color;
}
//Cat.prototype.age = 6;
Cat.prototype = Object.create(animal.prototype);

Cat.prototype.constructor = Cat;
var catetest = new Cat("sss", "ddd");

catetest.speak();

//show(catetest.age);
show(catetest instanceof Cat);
show(catetest instanceof animal);
