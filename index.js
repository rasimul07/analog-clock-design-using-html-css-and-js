const hr = document.querySelector(".hour")
const min= document.querySelector(".minute")
const sec = document.querySelector(".second")
const inside_clock = document.querySelector(".inside_clock")
const display = document.querySelector('.display');

hr.style.transformOrigin = "left";
min.style.transformOrigin = "left";
sec.style.transformOrigin = "left";

console.dir(display);
console.log(display.children[0]);
setInterval(()=>{
    var t =  new Date();
    var h = t.getHours();
    var m = t.getMinutes();
    var s = t.getSeconds();
    hr.style.transform = `rotate(${-91+30*h+(1/2)*m}deg)`;
    min.style.transform = `rotate(${-91+6*m+((1/10)*s)}deg)`;
    sec.style.transform = `rotate(${-91+6*s}deg)`;
    display.children[0].textContent = h;
    display.children[2].textContent = m;
    display.children[4].textContent = s;
    if(s%2==0){
        display.children[1].style.opacity= "50%";
        display.children[3].style.opacity= "50%";
    }else{
        display.children[1].style.opacity= "100%";
        display.children[3].style.opacity= "100%";
    }
},1000)