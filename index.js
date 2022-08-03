let fnum;
let snum;

function add(){
    fnum = document.getElementById("number1").value;
    fnum = Number(fnum)
    snum = document.getElementById("number2").value;
    snum = Number(snum)
     let total = fnum + snum;
     document.getElementById("result").innerHTML = total;
}
function subtract(){
    
     let total = fnum - snum;
     document.getElementById("result").innerHTML = total;
}
function multiply(){
   
     let total = fnum * snum;
     document.getElementById("result").innerHTML = total;
}

function arithmetic(){
    
     add()
     subtract();
     multiply();
}
arithmetic();
