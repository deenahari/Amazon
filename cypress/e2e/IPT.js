//Reveresed 


// let candidate = "Deena";
// // let reversed="";
// for (let i=candidate.length-1; i>=0; i--){
//     console.log(candidate[i]); 
    
// }

// for(let i=10; i>1;i--){
//     console.log(i)
// }

// let d = ['deena','Deepa',33,'rosh','arun']
// for(let i=d.length-1;i>=0; i--){
// console.log(d[i])
// }

// let d = "India"
// for(let i=d.length-1;i>=0;i--){
//     console.log(d[i])
// }

// let d="India"
// let reveresed=""
// for(i=d.length-1;i>=0;i--){
//     reveresed= reveresed+d[i]
// }
// console.log(reveresed)

//Even Number and ODD numbers 

// for(let i=1; i<=20; i++){
//     if(i%2==0){ //use ! for ODD number (i%2!==0)
//         console.log(i)
//     }
// }

//Prime Numbers

// function isPrime(n){
//     for(let i=2; i<n/2; i++){
//         if(n%i==0){
//             return false;
//         }
//         return true;
//     }
// }
// console.log(isPrime(13))

//SEQUENTIAL ORDER

// function stageOne(callback){
//     setTimeout(()=>{
//         console.log("preproduction started")
//         callback()
//     },6000)
// }

// function stageTwo(callback){
//     setTimeout(()=>{
//         console.log("Shooting in Progress")
//         callback()
//     },4000)
// }

// function stageThree(callback){
//     setTimeout(()=>{
//         console.log("postproduction started")
//         callback()
//     },3000)
// }

// stageOne(()=>{
//     stageTwo(()=>{
//         stageThree(()=>{
//             console.log("Movie is ready to release")
//         })
//     })
// })

//OCCURENCES

// function findCharOccurence(str){
//     let charCount = {};
//     for(let char of str){
//         if(charCount[char]){
//             charCount[char]++;
//         } else {
//             charCount[char] = 1;
//         }
//     }
//     return charCount;
// }

// let data = "racecar";
// console.log(findCharOccurence(data));

//Pallindrome

// let data = "Racecar"

// let reveresed = data.split("").reverse().join("");
// console.log(reveresed===data)


