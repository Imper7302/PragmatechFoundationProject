


let cumle=prompt("Cumleni daxil et")
let herfler=[]
for(let i in cumle){
    if(cumle[i]!=0){
        herfler.push(cumle[i])
    }      
}
// console.log(herfler)
let dovr=0
let tesadufi=[]
while(dovr<5){
    let tesadufi_herfler=herfler[Math.floor(Math.random()*herfler.length)]
    tesadufi.push(tesadufi_herfler)
    dovr++
}
alert(tesadufi.join(""))