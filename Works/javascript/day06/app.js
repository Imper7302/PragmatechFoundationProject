let say=1
let cem=0
for(let i=1; i<64; i++){
    say=2**i
    cem+=say
    console.log(say)
}
console.log(cem+1)