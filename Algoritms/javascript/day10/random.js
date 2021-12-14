let say=prompt("nece soz daxil etmek isteyirsiz?")

let dovr=0
let sozler_list=[]
while(dovr<say*1){
    let soz=prompt("sozu yazin")
    sozler_list.push(soz)
    dovr++
    
}
let dovr1=0
let tesadufi_sozler=[]
while(dovr1<5) {
    let tesadufi_soz = sozler_list[Math.floor(Math.random()*sozler_list.length)];
    tesadufi_sozler.push(tesadufi_soz)
    dovr1++

}
console.log(sozler_list)
console.log(tesadufi_sozler)