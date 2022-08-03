
function add(){
     let fnum = document.getElementById("number1").value;
     fnum = Number(fnum)
     let snum = document.getElementById("number2").value;
     snum = Number(snum);
     let total = fnum + snum;
     document.getElementById("result").innerHTML = total;
}
function subtract(){
    let fnum = document.getElementById("number1").value;
     fnum = Number(fnum)
     let snum = document.getElementById("number2").value;
     snum = Number(snum);
     let total = fnum - snum;
     document.getElementById("result").innerHTML = total;
}
function multiply(){
    let fnum = document.getElementById("number1").value;
     fnum = Number(fnum)
     let snum = document.getElementById("number2").value;
     snum = Number(snum);
     let total = fnum * snum;
     document.getElementById("result").innerHTML = total;
}
function arithmetic(){
     add();
     subtract();
     multiply();
}
arithmetic();