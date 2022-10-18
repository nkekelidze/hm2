function sum(...numbers){
    console.log(numbers);
    let numbersum = 0;
    for(let item of numbers){
        numbersum=numbersum+item;
    }
}
sum(4,8,75,20)
//1
function sum(...numbers){
    let numberssum = 0;
    for (let item of numbers)
    if(item > 0){
        numberssum=numberssum + item;
    }
return numberssum;
}
let result = sum(2,-9,5,11,-30,100,-8,-11,-4,5,-6,8)

console.log(result);


//2
function sum(...numbers){
    let numberssum = 0;
    for(item of numbers){
        numberssum=numberssum+item;
    }
    return numberssum;
}
let result = sum(10,50,6,7,8,11,6)
console.log(result);


//3
let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }
  
 function username(user){
    if(user.isloggedin){
        return user.firstname + ' ' + user.lastname
    } else {
        return false;
    }
 }
 let result = username(user);
 console.log(result);


//4
 function num(...numbers){
   let highnumber = 0;
    for (let item of numbers) {
        if(highnumber < item) {
            highnumber = item
        }
    }
    return element
 }
 let result = num( 7,5,77,11,66,800,789);
 console.log(result);

// //5
let array = [1,2,4,10,34,5,7,87];
for(i of array){
    if(i>0 && i<10){
        console.log(i);
    }
}

//6
Let numbers =[1,2,3,4,5,6,7,8,9,10];
for(let i of numbers){
    if(i==5){
        break;
    }
    console.log(i);
}

