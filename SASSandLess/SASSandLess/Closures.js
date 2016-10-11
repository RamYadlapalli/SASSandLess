function show(w) { console.log(w); }
// Types as arguments 

var sum = function (a, b) {
    return (++a) + (++b.val);
}

var x = 1;
var y = { val: 2 };
var z = sum(x, y);
//show(x + "," + y.val + "," + z);

//primitives: Passed by value, get a copy of data 
//Object: Passed by reference


var a = {};
for (var i = 0; i < 3; i++) {
    a[i] = function () { show(i)};
}
a[0]();
a[1]();
a[2]();




//Closures

var counter = function () {
    var count = 0;
    return function () {
        return ++count;
    };
};

var c1 = counter();
//show("after");
c1();// 1
c1();// 2
var c2 = counter();
c2(); //

//Execute the alert code 

var a = {};

for (var i = 0; i < 3; i++) {

    (function (j) {
        a[j] = function () {
           // show(j);
        }
    })(i);
}
a[0]();
a[1]();
a[2]();