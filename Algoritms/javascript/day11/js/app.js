document.getElementById("box");

let a=0
function get_data(){
    let elem=document.querySelector('.ad_daxil_et');
    let daxil_olunan=elem.value;
    document.querySelector('#box').innerHTML=daxil_olunan
}

function getdata(){
    let txt=document.querySelector('#box').innerHTML="bu yeni melumatdir"
    document.querySelector('#box').style.background='red'
    document.querySelector('#box').style.widht='5px'
    document.querySelector('#box').style.color='blue'
}