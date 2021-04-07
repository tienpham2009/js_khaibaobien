let i = 10;
let f = 20.5;
let b = true;
let s = "Thái Bình";
document.write("i =" +i);
document.write("<br>")
document.write("f =" +f);
document.write("<br>")
document.write("b =" +b);
document.write("<br>")
document.write("s =" +s);
document.write("<br>");
let withd = 20;
let height = 40;
let area = withd*height;
document.write("area ="+ area);
document.write("<br>")
function multiples() {
    let a = prompt("nhập a");
    let b = prompt("nhập b");
    if(a%b==0){
        alert("a is multiples b");
    }else {
        alert("a is not multiples b");
    }
}multiples();

