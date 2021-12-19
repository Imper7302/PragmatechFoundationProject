


// let cumle=prompt("Cumleni daxil et")
// let herfler=[]
// for(let i in cumle){
//     if(cumle[i]!=0){
//         herfler.push(cumle[i])
//     }      
// }
// // console.log(herfler)
// let dovr=0
// let tesadufi=[]
// while(dovr<5){
//     let tesadufi_herfler=herfler[Math.floor(Math.random()*herfler.length)]
//     tesadufi.push(tesadufi_herfler)
//     dovr++
// }
// alert(tesadufi.join(""))
let a=Math.floor(Math.random()*10)
console.log(a)
bosh=[]
function cut (arr){
    for(let i=0; i<arr.lenght; i++){
        if (arr[i]%2==0){
            bosh.push(arr[i])
        }
        return(bosh)
    }
}