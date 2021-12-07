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

username=prompt("Adınızı daxil edin: ")
password=prompt("Parolu daxil edin: ")
if (username=="admin" && password=="12345"){
    alert("Tebrikler siz sisteme daxil oldunuz")
}
else if (username=="" || password==""){
    alert("Deyerler bos ola bilmez")
}
else if (username!=="admin" && password=="12345"){
    alert("Adı səhv daxil etmisiz!!!")
}
else if (username=="admin" && password!="12345"){
    alert("Parolu səhv daxil etmisiz!!!")
}
else {
    alert("Ad ve parol sehfdir!!!")
}
