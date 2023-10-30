//1. print 1 - 135

//need for loop
//start from 1 , end at 135
//call it

for(let i=1; i<=135; i=i+1){
    console.log(i)
    }       
//2. Print odd Numbers 1 - 135 => 1,3
//need for loop
//condition to skip one in my loop u= u+2
//call it

for(let u=1; u<=135; u= u+2){
     console.log(u)
}

//3. sum of Printed Numbers

//new variable to start with
//need for loop
//sum the prev sum + new element
//adding a string type
//call it

let sum =0
for( let r=0; r<=135; r++){

    sum= r+sum
    let string = "Number is " + r + " sum : " + sum

    console.log(string)
}

//4. Print the elements of an array

//have an array
//go throwgh every element to print (forEach)

let Array1 = [1,4,2,12,80,41,51]

Array1.forEach((list)=>console.log(list))

//4. Print the elements of an array

//have an array
//go throwgh every element to print (forEach)

let Arrayx =  [1,4,2,12]

Arrayx.forEach((array)=>console.log(array))

//5. find max
//have an Array
//Print the maximum value

let array = [2,-3,-1]
let max = array[0]
for(let i= 0; i<array.lenght; i++){
    if(array[i]>max) max =array[i];
}
console.log(max);

//6. Get Average
//have an array
//
let y = [2,1,3]
let a = 0;
let s = 0;
for( let i=0; i<y.length; i++){
    if(y[i] ){
        //legit value
        a++;
        s+=y[i];

    }
}
let avg = s / a;
console.log(avg);

//eliminate the negative


let x = [2,-1,4,-3]
let negative =0;

   for(let i=0; i<x.length; i++){
    if(x[i]<negative){
        x[i]=0;
    }
   }
   console.log(x)

   //number to string
   //
   let X = [1, -4, 0, -1];
   {
   for (let i = 0; i < X.length; i++) {
     if (X[i] < 0) {
        X[i] = "Turing";
     }
   }
 }
 
 console.log(X);

