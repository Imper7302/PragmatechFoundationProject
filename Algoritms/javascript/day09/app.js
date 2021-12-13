//Funksiyalar
function kvadrat (a){
    return(a**2)
}
function buyukherif(a){
    return(a.toUpperCase())
}

function soz_sayi(a){
    let cem=0
    for(let i=0; i<a.length; i++){
    if(a[i]==" "){
        cem+=1
    } 
    }
    return(cem+1)
}
function sait_say(a){
    let sait_cem=0
    let cing_cem=0
    for(let i=0; i<a.length; i++){
    if(a[i]=="a" || a[i]=="ı" || a[i]=="o" || a[i]=="u" || a[i]=="e" || a[i]=="ə" || a[i]=="i" || a[i]=="ö" || a[i]=="ü" || a[i]=="A" || a[i]=="I" || a[i]=="O" || a[i]=="U" || a[i]=="E" || a[i]=="Ə" || a[i]=="İ" || a[i]=="Ö" || a[i]=="Ü"){
        sait_cem+=1
    }
    }
    return(sait_cem)
}
function samit_say(a){
    let samit_cem=0
    for(let i=0; i<a.length; i++){
    if(a[i]!="a" || a[i]!="ı" || a[i]!="o" || a[i]!="u" || a[i]!="e" || a[i]!="ə" || a[i]!="i" || a[i]!="ö" || a[i]!="ü" || a[i]!="A" || a[i]!="I" || a[i]!="O" || a[i]!="U" || a[i]!="E" || a[i]!="Ə" || a[i]!="İ" || a[i]!="Ö" || a[i]!="Ü"){
        samit_cem+=1
    }
    }
    return(samit_cem)
}




// 1)Parametr olaraq ədəd qəbul edib o ədədin kvadratını return edən method yazın
// let b=prompt('ededi daxil et')
// alert(`daxil etdiyiniz --${b}-- ededinin kvdrati= ${kvadrat(b)}`)


// 2)Parametr olaraq string qəbul edib verilən stringin hərflərini böyük hərfə çevirərək return edən method yazın
// b=prompt('boyuk herfe cevirmek istediyiniz sozu yazin')
// alert(`daxil etdiyiniz ${b} boyuk herflerle= ${buyukherif(b)} `)


// 3)Parametr olaraq cümlə qəbul edib onun daxilində neçə söz olduğunu return edən method yazın
// let a=prompt('Sozlerin sayini bilmek istediyiniz cumleni daxil edin')
// alert(`Daxil etdiyiniz cumledeki soz sayi---${soz_sayi(a)}`)


// 4)Parametr olaraq string qəbul edən və o stringin daxilindəki hərflərdən neçəsinin sait olduğunu return edən method yazın
// let a=prompt('Sozu daxil edin')
// alert(`Daxil etdiyiniz soz icerisinde sait sayi---${sait_say(a)}`)//nece edim ki bir alert icerisn də alt alta yazsin
// alert(`Daxil etdiyiniz soz icerisinde samit sayi---${samit_say(a)}`)


// 5)parametr olaraq array qəbul edib o arrayın daxilindəki ikirəqəmli ədədləri ayrı bir arraya toplayaraq yeni arrayı return edən method yazın.