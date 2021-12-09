// 1. prompt() istifadə edərək ad və soyad tələb edin və bu daxil edilən məlumatlardan istifadə edərək alert() metodu ilə ekrana "Memmed Hesenov sən xoş gəlmisən" formatında yazı çıxarın . Template Literal mövzusu faydalı ola bilər. (Yazılan kodlar ad.js faylında olmalıdır)
// Username=prompt("adi daxil et:")
// Subname=prompt("soyadi daxil et:")
// alert("Memmed Hesenov sən xoş gəlmisən")

// username=prompt("Adınızı daxil edin: ")
// surname=prompt("Soyadınızı daxil edin: ")
// if (username=="admin" && surname=="admin"){
//     alert("Memmed Hesenov sən xoş gəlmisən")
// }
// else{
//     alert("Zəhmət olmasa düzgün parol daxil edin")
// }




//3) 3=='3'==='3' bu kodun neticesini tapin ve niye bu netice elde edildiyini kod yazaraq izah edin . izahlari kodun daxilinde comment olaraq bildirmeyiniz kifayetdir.
// 2 bərabər o deməkdir ki, hər iki tərəfi int-ə çevirib yoxlayır. Yəni tərəflərin tipinə baxmır
// 3 bərabərlik o deməkdirki hər iki tərəfin həm tipini, həm də içərisini yoxlayır. 



// 4)prompt vasitəsi ilə istifadəçidən username və password tələb olunmalıdır. bu daxil olunan məlumatlara əsasən aşağıdakı işlər görülməlidir.
// Əgər username və ya password bos buraxılıbsa ekrana alert vasitəsi ilə 'Deyerler bos ola bilmez' yazısı çıxsın
// Əgər username 'admin' ve password '123456'-dirsa ekrana alert vasitesi ile 'Tebrikler siz sisteme daxil oldugunuz'
// Daxil edilen deyerlerden her hansi biri duz deyilse ona uygun mesaj cixsin. Meselen username duz deyil
// username=prompt("Adınızı daxil edin: ")
// password=prompt("Parolu daxil edin: ")
// if (username=="admin" && password=="12345"){
//     alert("Tebrikler siz sisteme daxil oldunuz")
// }
// else if (username=="" || password==""){
//     alert("Deyerler bos ola bilmez")
// }
// else if (username!=="admin" && password=="12345"){
//     alert("Adı səhv daxil etmisiz!!!")
// }
// else if (username=="admin" && password!="12345"){
//     alert("Parolu səhv daxil etmisiz!!!")
// }
// else {
//     alert("Ad ve parol sehfdir!!!")
// }



// 5)while və ya for istifadə edərək aşağıdakı tapşırıqları yazın
// 1-1000 arasındakı ədədləri ekrana çap edin
// 1-1000 arasındakı tək ədədləri ekrana çap edin
// 1-1000 3-ə bölünən ədədləri ekrana çap edin
// 1-1000 arasındakı ədədlərin cəmini hesablayıb ekrana çap edin

// 1-1000 arasındakı ədədləri ekrana çap edin
// 1-ci variant
// for(let i=1; i<=1000; i++){
//     console.log(i)
// }
// 2-ci variant
// let a=1
// while (a<=1000){
//     console.log(a)
//     a++
// }


// 1-1000 arasındakı tək ədədləri ekrana çap edin
// 1-ci variant
// for(let i=1; i<=1000; i+=2){
//     console.log(i)}
// 2-ci variant
// for (let i=1; i<1000; i++){
//     if(i%2!=0){
//         console.log(i)
//     }
// }
// 3-cu variant
// let i=1;
// while(i<=1000){
//     console.log(i)
//     i+=2
// }
// 4-cu variant
// let i=1;
// while(i<=1000){
//     if(i%2!=0){
//         console.log(i)
//     }
//     i++
// }


// 1-1000 3-ə bölünən ədədləri ekrana çap edin
//1-ci variant
// for(let i=0; i<=1000; i+=3){
//     console.log(i)
// }
// 2-ci variant
// for(let i=1; i<=1000; i++){
//     if(i%3==0){
//         console.log(i)
//     }
// }
// 3-cu variant
// let i=0;
// while(i<=1000){
//     console.log(i)
//     i+=3
// }
// 4-cu variant
// let i=0;
// while(i<=1000){
//     if(i%3==0){
//         console.log(i)
//     }
//     i++
// }



// 1-1000 arasındakı ədədlərin cəmini hesablayıb ekrana çap edin
// 1-ci variant
// let a=0
// for(let i=0; i<=1000; i++){
//     a+=i  
// }
// console.log(a)
// 2-ci variant
// let i=0;
// let a=0
// while(i<=1000){
//     a+=i
//     i++
// }
// console.log(a)
// if(44){
//     console.log('duzdu---r')}
// else{
//     console.log('sehvdir')}

if(4){
    console.log("salam")
}
else{
    console.log("xeyir")
}