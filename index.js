
function fun(){
     let fnum = document.getElementById("two").value;
     fnum = Number(fnum)
     let snum = document.getElementById("three").value;
     snum = Number(snum);
     let total = fnum + snum;
     document.getElementById("result").innerHTML = total;
}
function fun1(){
    let fnum = document.getElementById("two").value;
     fnum = Number(fnum)
     let snum = document.getElementById("three").value;
     snum = Number(snum);
     let total = fnum - snum;
     document.getElementById("result").innerHTML = total;
}
function fun2(){
    let fnum = document.getElementById("two").value;
     fnum = Number(fnum)
     let snum = document.getElementById("three").value;
     snum = Number(snum);
     let total = fnum * snum;
     document.getElementById("result").innerHTML = total;
}