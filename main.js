// Write your code here
/*

1.to add element in array we can use "push" or "unshift"

2.to remove first elelment from array we can us "shift"

3. "splice" can remove and edd elements to the array in any place and modifite it
    "slice " didi not change originall araay makes copy of original array or poart of it

4. useing ".length" camand

5. useing ".some" camand or ".includes"

6.The sort method converts the elements of the array to strings
It then compares these strings in alphabetical order

7."slice " with out argument 

8.".reverse"
9. "concat"
10.useing array [row][column] indexes

*/ 


//Assignment 1:

let arr =[1,2,3,4,5,6,7,8,9,10];
console.log(arr[2]);
arr[4] = 15;
console.log(arr);
arr.push(33);
console.log(arr);
arr.shift();
console.log(arr);

//Assignment 2:
const fruits = ["Apple", "Banana", "Pineapple", "Mango"];

console.log(fruits);

fruits.push("Orange");

console.log(fruits);

const x = fruits.pop();

console.log(x);

fruits.unshift("Strawberry");

console.log(fruits);

fruits.shift();
console.log(fruits);

//Assignment 3:
const colors = ["Red", "Blue", "Green", "Yellow", "Purple"];

for(let i = 0; i < colors.length ;i++){
    console.log(colors[i]);
}

//Assignment 4:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.splice(1 , 2);
console.log(numbers);
numbers.splice(1 , 0, 17, 20);
console.log(numbers);
const b = numbers.slice(-3);
console.log(b);

//Assignment 5:

const names = ["givi","mamuka","ana","sofo","natia"];

names.sort();

console.log(names);

names.reverse();

console.log(names);

//Assignment 6: 
const nums = [15, 22, 84, 94, 20, 32, 45];

console.log(nums.indexOf(32));
console.log(nums.includes(88));

const a = 90;

//console.log(nums.findIndex())
for (let i = 0;i < nums.length; i++){
    if(nums[i] > a){
        console.log(`${nums.indexOf[i]} < ${a}`);
        break;
    }
}
//Assignment 7: 
const arrGrid = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10]
  ];
console.log(arrGrid[0][3]);

arrGrid[1][1] = 15;

console.log(arrGrid);

console.log(arrGrid[0]);
console.log(arrGrid[1]);

//Assignment 8: 

const arr1 = ["givi","mamuka","ana","sofo","natia"];
const arr2 = [15, 22, 84, 94, 20, 32, 45];

let [first = 0, second = 0] =arr1; //default values
//let [first, second] =arr2;

console.log(first);
console.log(second);

[first,second] = [second,first];

console.log(first);
console.log(second);

//let mid = first;
//first = second;
//second = mid;
//console.log(first);
//console.log(second);

//Assignment 9: */
const arr3 = [15, 22, 84, 94, 20, 32, 45];
const arr4 = [42, 7, 89, 15, 63, 24, 78]
//const arr5 = arr3.concat(arr4);
const arr5 = [...arr3,...arr4];

console.log(arr5);

//Assignment 10: 
arr5.sort((a,b) => a - b);
console.log(arr5);

arr5.sort((a,b) => b - a);
console.log(arr5);

