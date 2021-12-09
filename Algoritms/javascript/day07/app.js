// 1)Ədədi tərsinə cevirin.
// let x="987654"
// for(let i=x.length; i>-1; i--){
//     console.log(x[i]) 
// }

//  Ders meseleleri
let nums=[23, 28, 28, 24, 24, 21, 33, 17, 29, 25, 31, 29, 2]
// Funksiyalar
function boyukedeler(a,b){
    return a>b
}
function tekeded(a){
    return a%2!=0
}
function cuteded(a){
    return a%2==0
}
function ededcem(a,b=0){
    return a+b
}
// 1) 25-den boyuk olanlari gorsed
// for(i=0;i<nums.length;i++){
//     if(nums[i]>25){
//         console.log(nums[i])
//     }
// }
// for(let i=0; i<nums.length; i++){
//     if (boyukedeler(nums[i], 25)){
//         console.log(`25-den boyuk eded--  ${nums[i]}`)
//     }
//     else{
//         console.log(`25-den kicik eded--  ${nums[i]}`)
//     }     
// }



// 2) tek ededleri gosder
// 1-ci usul
// for (let i=0; i<nums.length; i++){
//     if(nums[i]%2!=0){
//         console.log(nums[i])
//     }

// }
// 2-ci usul
// for(let i=0; i<nums.length; i++){
//     if (tekeded(nums[i])){
//         console.log(nums[i])
//     }
// }



// 3) tek ededlerin cemini gosder
// 1-ci usul
// let cem=0
// for(let i=0; i<nums.length;i++){
//     if(nums[i]%2!=0){
//         cem+=nums[i]
//     }
// }
// console.log(cem)
// 2-ci usul
// let cem2=0;
// for(let i=0; i<nums.length;i++){
//     if(tekeded(nums[i])){
//         cem2+=cemeded(nums[i])
//     }
// }
// console.log(cem2)



// 4) cut ededlerin cemini gosder
// 1-ci usul
// let cem=0;
// for(let i=0; i<nums.length; i++){
//     if(nums[i]%2==0){
//         cem+=nums[i]
//     }
// }
// console.log(cem)
// 2-ci usul
// let cem2=0
// for(let i=0; i<nums.length; i++){
//     if(cuteded(nums[i])){
//         cem2+=nums[i]
//     }
// }
// console.log(cem2)



// 5) yas ortalamasindan boyuk olanlari gosder
// let i=0
// let cem=0
// let orta=0
// while(i<nums.length){
//     cem+=nums[i]
//     i++
// }
// console.log(`yaslarin cemi--  ${cem}`)
// console.log(`yaslarin sayi--  ${nums.length}`)
// console.log(`yaslarin ededi ortasi--  ${cem/nums.length}`)


// 6) en kicik ve en boyuyu goster
let min=nums[0]
let max=nums[0]
for(i=1;i<nums.length;i++){
    if (nums[i]>max){
        max=nums[i]
    }
    if (nums[i]<min){
        min=nums[i]
    }
}
console.log(`en kicik yas  ${min}`)
console.log(`en boyuk yas ${max} `)