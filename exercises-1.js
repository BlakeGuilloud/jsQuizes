

/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){
    // YOUR CODE HERE

    for(var i = 0; i < array.length; i++){
      callback(array[i]);
    };
}

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });
// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var total = 0;
    for(var i = 0; i < args.length; i++){
      total = total+=args[i];
    }
    return total
    // .. do something with each element of args
    // YOUR CODE HERE
}

console.assert( sum(1, 2, 3, 4, 5) === 15 )

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var avg = 0;
    for (var i in args){
      avg += args[i];
    }
    return avg / args.length
    // .. do something with each element of args
    // YOUR CODE HERE
}

console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    // .. do something with each element of args
    // YOUR CODE HERE
    var l = 0;
    args.forEach(function(e){
      if(e > l){
        l = e;
      }
    })
    return l;
  };

  function largest(){
    var args = [].slice.call(arguments);
    var l = 0;
    for (i = 0; i < args.length; i++)
    if(args[i] > l){
      l = args[i];
    }
  return l;
  };

console.assert( largest(2, 4, 6, 8) === 8 )


// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    // .. do something with each element of args
    // YOUR CODE HERE
    var l = "";
    args.forEach(function(e){
      if(e.length > l.length){
        l = e;
      }
    })
    return l
  }

 console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

// .sort()

var dogs = ["woodrow", "leia", "tippy"];
dogs.sort();
console.assert( dogs.sort()[2] === "woodrow")


// .concat()

var apples = ["granny", "red", "golden"],
    color = ["yellow", "delicious", "green"];
var conCat = apples.concat(color);
console.assert( apples.concat(color)[3] === "yellow")


// .indexOf()

var string = "hey there babos";
var n = string.indexOf("there");
console.assert( string.indexOf("t") === 4)

// .split()

var str = "heytherebabos";
var strSplit = str.split();
console.assert( strSplit.length === 1)

// .join()

var arr = ['dog', 'cat', 'bird'];
var join = arr.join()
console.assert( join === "dog,cat,bird")

// .pop()

var arr = ['dog', 'cat', 'bird'];
arr.pop();
console.assert( arr.length === 2)

// .push()

var arr = ['dog', 'cat', 'bird'];
arr.push('monkey');
console.assert( arr[3]==='monkey')

// .slice()

var arr = ['dog', 'cat', 'bird'];
arr.slice(0,1)
console.assert( arr[0]==='dog')

// .splice()

var arr = ['dog', 'cat', 'bird'];
arr.splice(1,3)
console.assert( arr[0]==='dog')

// .shift()

var arr = ['dog', 'cat', 'bird'];
arr.shift();
console.assert( arr[0] === 'cat')

// .unshift()

var arr = ['dog', 'cat', 'bird'];
arr.unshift("lemon");
console.assert( arr[0] === 'lemon')

// .filter()
function bigNumber(big){
  return big >= 2;
}
var arr = [1, 2, 3, 4].filter(bigNumber);
console.assert( arr[0] === 2)

// .map()

var numbers = [5,4,6];
var triple = numbers.map(function(trip){
  return trip*3;
});
console.assert ( triple[0] === 15)
