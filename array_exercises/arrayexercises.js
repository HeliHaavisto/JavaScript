let expectedResult;
/**
 * Task 1: You are provided with 2 arrays, firstArray, and secondArray
 * Make a new thirdArray, that contains elements of the firstArray, followed by 
 * elements of the secondArray.
 * Please don't do it manually :) 
 */

let firstArray = [1, 2, 3, 4, 'a', true, false];
let secondArray = ['hello', 'I', 'am', 'not', 'an', 'array', 'jkd'];

let newArray = firstArray.concat(secondArray);

console.log(newArray);


expectedResult = [1, 2, 3, 4, 'a', true, false, 'hello', 'I', 'am', 'not', 'an', 'array', 'jkd'];

/**
 * Task 2: You are provided with an array of numbers
 * create another array that contains elements of the provided array, but in reverse order
 * do not use .reverse() method
 * Please don't do it manually :) 
 */

let fourthArray = [1, 500, 10000, 123456, 234, 500, 10000, 12345, 20000];

let reverseArray = [];

const pituus = fourthArray.length

for (i = 0; i < pituus; i++) {

    reverseArray.push(fourthArray.pop());
}
console.log(reverseArray);


expectedResult = [20000, 12345, 10000, 500, 234, 123456, 10000, 500, 1];

/**
 * Task 3: You are provided with an array that contains some duplicated elements
 * create another array that contains ONLY unique elements of the given array
 * the order of the new array isn't important
 * Please don't do it manually :) 
 */

let fifthArray = [1, 500, 10000, 'world', 'yeah', 'bye bye', 123456, 234, 500, 10000, 12345, 20000, true, true, false, 'hello', 'world'];



let tokaJono = [];
fifthArray.forEach((item) => {
    if (!tokaJono.includes(item)) {
        tokaJono.push(item);
    }
})
console.log(tokaJono);

expectedResult = [1, 500, 10000, 'world', 'yeah', 'bye bye', 123456, 234, 12345, 20000, true, false];

/**
 * Task 4: You are provided 2 arrays
 * write a logic that will compare elements of the 2 arrays to find out if they contain same elements
 * it is possible that the one of the array is a sub array of the other, in which case they shouldn't be considered as containing same elements
 * the order of elements in each array can be different
 * Please don't do it manually :) 
 */

// sixthArray and seventhArray should be considered as being similar
let sixthArray = [1, 2, 3, 'hello', true, false];
let seventhArray = ['hello', false, 1, 3, true, 2];
let counterOfYes = 0;

for (i = 0; i < seventhArray.length; i++) {

    if (sixthArray.includes(seventhArray[i])) {
        counterOfYes++;
    }
}

if (counterOfYes == seventhArray.length) {
    console.log("yes they contain same elements");
} else {
    console.log("no they don't contain same elements");
}

// eighthArray and ninthArray are not
let eighthArray = [1, 2, true, false, 'hello', 3, 'moi moi'];
let ninthArray = [];

for (i = 0; i < eighthArray.length; i++) {

    if (ninthArray.includes(eighthArray[i])) {
        counterOfYes++;
    }
}

if (counterOfYes == eighthArray.length) {
    console.log("yes they contain same elements");
} else {
    console.log("no they don't contain same elements");
}

/**
 * Task 5: The following array is nested (having array inside array)
 * you need to create a new array that will deconstruct the nested array so that it is no longer nested
 * the order isn't important
 * Please don't do it manually :) 
 */

let tenthArray = [
    'one', 'two', 'three', 1, 2, 3, false, 'false', [['oh oh'], [[['tom']], 'jerry'], ['not', 'again', ['yes', 'whynot?', true]]]
]

let openArray = tenthArray.flat();
console.log(openArray);

let open2Array = openArray.flat();
console.log(open2Array);

let open3Array = open2Array.flat();
console.log(open3Array);

let open4Array = open3Array.flat();
console.log(open4Array);


expectedResult = ['one', 'two', 'three', 1, 2, 3, false, 'false', 'oh oh', 'tom', 'jerry', 'not', 'again', 'yes', 'whynot?', true]

/**
 * Task 6: The array you are given contains all kinds of personal information
 * Filter out all email addresses into a separate array
 * Filter out all phone numbers into a separate array
 * Please don't do it manually :) 
 */

let peopleInfo = [
    'ron', '044 123 345', 'lonelyspider@email.com',
    'hermione', '0123-414-443', 'hermione@email.com',
    'harry', '(0123) 123 4324', 'ginnyforever@email.com'
];

let emailArray = [];
let phonesArray = [];
let namesArray = [];

peopleInfo.forEach((xx) => {


    if (xx.includes("@")) {
        emailArray.push(xx);
    } else if (xx.includes("1")) {
        phonesArray.push(xx);
    } else {
        namesArray.push(xx);
    }


})

console.log(emailArray);
console.log(phonesArray);
console.log(namesArray);




let expectedNamesArray = ['ron', 'hermione', 'harry'];
let expectedPhones = ['044 123 345', '0123-414-443', '(0123) 123 4324']
let expectedEmails = ['lonelyspider@email.com', 'hermione@email.com', 'ginnyforever@gmail.com']

/**
 * Task 7: The current array contains a sample text
 * use the .split(' ') method to split the paragraph to an array of words
 * iterate through the array of words, check if each word contain the letter 'o'
 * if it does, store a value of 1 to a newArray, otherwise 0
 * Please don't do it manually :) 
 * Example:
 * sample = ['Lorem', 'ipsum', 'dolor', 'sit']
 * result = [1, 0, 1, 0]
 * 
 */

const sample = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quod, soluta debitis reiciendis recusandae necessitatibus consequatur. Et odit quas quis, nulla sequi voluptatem, impedit optio, illo nihil at distinctio aliquid.';

let sampleArray = sample.split(" ");
let collectionArray = [];

sampleArray.forEach((el) => {
    if (el.includes("o")) {
        collectionArray.push("1");
    } else {
        collectionArray.push("0");
    }

})

console.log(collectionArray);