
// // javascriptle yeni divin yaradilmasi---usul 1
// let cem=200
// function getdata(){
//    let box=document.createElement('div')
//    box.className='new_box'
//    box.style.width=`${cem}px`
//    cem+=50
//    document.body.appendChild(box)
   
// }
// // javascriptle yeni divin yaradilmasi---usul 2
// let count=0
// function getdata(){
//     let randomR=Math.floor(Math.random()*255)
//     let randomB=Math.floor(Math.random()*255)
//     let randomC=Math.floor(Math.random()*255)
//     document.body.innerHTML+=`<div class='new_box' style=background:rgb(${randomR},${randomB},${randomC})>${count}</div>`
//     count++
// }



// bir img adresin yolunu diger img in yoluna qoymaq
// function img_yolu(){
//     document.querySelector('.big_image img')/*big_image divinde olan img tagini tap)*/.setAttribute('src',a.querySelector('img').getattribute('src'))/*img olan src-in icerisne, tikladigimiz weklin src-ni yazsin*/
// }


// snake
let pozisionleft=50
let pozisiontop=50
let snake=document.querySelector('.snake')
function goleft(){
    pozisionleft-=20
    snake.style.left=`${pozisionleft}px`
}
function goup(){
    pozisiontop-=20
    snake.style.top=`${pozisiontop}px`
}
function goright(){
    pozisionleft+=20
    snake.style.left=`${pozisionleft}px`
}
function godown(){
    pozisionleft+=20
    snake.style.top=`${pozisionleft}px`
}