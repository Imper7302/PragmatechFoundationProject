
function backgroundcolor(){
    document.body.style.backgroundColor='green'
    document.body.style.color='white'
}

function headercolor(){
   let a=document.querySelector(".btns")
   a.style.backgroundColor="red"
    
}

function contentcolor(){
    document.querySelector('.card ul').style.color='grey'
}

function herfsayi(){
    let metn1=document.querySelector(".card ul li:nth-child(1)").innerHTML
    let metn2=document.querySelector(".card ul li:nth-child(2)").innerHTML
    let metn3=document.querySelector(".card ul li:nth-child(3)").innerHTML
    let metn4=document.querySelector(".card ul li:nth-child(4)").innerHTML
    let metn5=document.querySelector(".card ul li:nth-child(5)").innerHTML
    let metn6=document.querySelector(".card ul li:nth-child(6)").innerHTML
    let metn7=document.querySelector(".card ul li:nth-child(7)").innerHTML
   
    let metnesas=metn1+" " + metn2 +" "+ metn3+" " + metn4 +" "+ metn5+" " + metn6 +" "+ metn7
    let say=0
    for(let i in metnesas){
        if(metnesas[i]!=" " || metnesas[i]!="." || metnesas[i]!='"' ){
            say+=1
        }
        
    }
    document.querySelector('.card div').innerHTML=`Nəticə: ${say}`
    
}


function sozsayi(){
    let metn1=document.querySelector(".card ul li:nth-child(1)").innerHTML
    let metn2=document.querySelector(".card ul li:nth-child(2)").innerHTML
    let metn3=document.querySelector(".card ul li:nth-child(3)").innerHTML
    let metn4=document.querySelector(".card ul li:nth-child(4)").innerHTML
    let metn5=document.querySelector(".card ul li:nth-child(5)").innerHTML
    let metn6=document.querySelector(".card ul li:nth-child(6)").innerHTML
    let metn7=document.querySelector(".card ul li:nth-child(7)").innerHTML
   
    let metnesas=metn1+" " + metn2 +" "+ metn3+" " + metn4 +" "+ metn5+" " + metn6 +" "+ metn7
    let cem=1
    for(let i in metnesas){
        if(metnesas[i]==" "){
            cem+=1
        }
        
    }
    document.querySelector('.card div').innerHTML=`Nəticə: ${cem}`     
}




function proqramchi(){
    let metn1=document.querySelector(".card ul li:nth-child(1)").innerHTML
    let metn2=document.querySelector(".card ul li:nth-child(2)").innerHTML
    let metn3=document.querySelector(".card ul li:nth-child(3)").innerHTML
    let metn4=document.querySelector(".card ul li:nth-child(4)").innerHTML
    let metn5=document.querySelector(".card ul li:nth-child(5)").innerHTML
    let metn6=document.querySelector(".card ul li:nth-child(6)").innerHTML
    let metn7=document.querySelector(".card ul li:nth-child(7)").innerHTML
   
    let metnesas=metn1+" " + metn2 +" "+ metn3+" " + metn4 +" "+ metn5+" " + metn6 +" "+ metn7
       
    let myArray = metnesas.split(" ")
    console.log(myArray)
    let cem=0
    for(i in myArray){
        if(myArray[i]=="Proqramçı"  || myArray[i]=="proqram"){
            cem+=1
        }
    }
    document.querySelector('.card div').innerHTML=`Nəticə: ${cem}`  
}



function cerchive(){
    document.querySelector('.card img').style.border='10px solid black'

}


    
function yol_img(){
    document.querySelector('.card img').setAttribute("src", "images/images.jfif")
}


function sait_say(){
    let metn1=document.querySelector(".card ul li:nth-child(1)").innerHTML
    let metn2=document.querySelector(".card ul li:nth-child(2)").innerHTML
    let metn3=document.querySelector(".card ul li:nth-child(3)").innerHTML
    let metn4=document.querySelector(".card ul li:nth-child(4)").innerHTML
    let metn5=document.querySelector(".card ul li:nth-child(5)").innerHTML
    let metn6=document.querySelector(".card ul li:nth-child(6)").innerHTML
    let metn7=document.querySelector(".card ul li:nth-child(7)").innerHTML
   
    let a=metn1+" " + metn2 +" "+ metn3+" " + metn4 +" "+ metn5+" " + metn6 +" "+ metn7
    let say=0
    for(let i in a){
        if(a[i]=="a" || a[i]=="ı" || a[i]=="o" || a[i]=="u" || a[i]=="e" || a[i]=="ə" || a[i]=="i" || a[i]=="ö" || a[i]=="ü" || a[i]=="A" || a[i]=="I" || a[i]=="O" || a[i]=="U" || a[i]=="E" || a[i]=="Ə" || a[i]=="İ" || a[i]=="Ö" || a[i]=="Ü"){
            say+=1
        }
        
    }
    let samitsay=herfsayi(say)-say
    
    document.querySelector('.card div').innerHTML=`Nəticə: saitlerin sayi: ${say}-dir , samitlerin sayi:${samitsay}-dir.`
}




function yerdeyisme(){
    let tovsiye1=document.querySelector(".card ul li:nth-child(1)").innerHTML
    let tovsiye2=document.querySelector(".card ul li:nth-child(7)").innerHTML

    document.querySelector(".card ul li:nth-child(1)").innerHTML=tovsiye2
    document.querySelector(".card ul li:nth-child(7)").innerHTML=tovsiye1
}
function reng_deyis(){
    
    document.querySelector(".card ul li:nth-child(1)").style.color="red"
    document.querySelector(".card ul li:nth-child(3)").style.color="red"
    document.querySelector(".card ul li:nth-child(5)").style.color="red"
    document.querySelector(".card ul li:nth-child(7)").style.color="red"
    document.querySelector(".card ul li:nth-child(2)").style.color="blue"
    document.querySelector(".card ul li:nth-child(4)").style.color="blue"
    document.querySelector(".card ul li:nth-child(6)").style.color="blue"
}

function evez_et(){
    let metn1=document.querySelector(".card ul li:nth-child(1)").innerHTML
    let metn2=document.querySelector(".card ul li:nth-child(2)").innerHTML
    let metn3=document.querySelector(".card ul li:nth-child(3)").innerHTML
    let metn4=document.querySelector(".card ul li:nth-child(4)").innerHTML
    let metn5=document.querySelector(".card ul li:nth-child(5)").innerHTML
    let metn6=document.querySelector(".card ul li:nth-child(6)").innerHTML
    let metn7=document.querySelector(".card ul li:nth-child(7)").innerHTML
   
    let metnesas=metn1+" " + metn2 +" "+ metn3+" " + metn4 +" "+ metn5+" " + metn6 +" "+ metn7
    let metnesas1=[]
    let esasmetn


    for(i in metnesas){
        if(metnesas[i]!="e"){
            metnesas1.push(metnesas[i])
        }
        else{
            metnesas1.push("Ə")
        } 
    }
    esasmetn=metnesas1.join("") 
    document.querySelector('.card div').innerHTML=`Nəticə: ${esasmetn}`
}
