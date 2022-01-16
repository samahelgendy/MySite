


let nums=document.querySelectorAll(".box .number");
let section=document.querySelector(".stats");
let started=false;
let btn=document.querySelector(".btn");
let prog= document.querySelector(".our-skills");
let allspans= document.querySelectorAll(".progress span");

 window.onscroll=function(){
    if(window.scrollY >= section.offsetTop){
       if(!started){
        nums.forEach(num => {
            counter(num);
        });
       }
           started=true;
     }
     if(window.scrollY >= 1000){
        btn.style.display="block";
    } else {
        btn.style.display="none";
    }
    if( window.scrollY >= prog.offsetTop -200 ){
        allspans.forEach((span) => {
            span.style.width=span.dataset.width;
        })
    }
   }

function counter(el){
let goal=el.dataset.goal;
let count=setInterval( () =>{
el.textContent++;
if(el.textContent ===goal){
    clearInterval(count);
}
},2000/goal);
}

btn.onclick=function(){
    window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth"
    })
};

let totaldate=new Date("Dec 31 ,2022 23:59:59").getTime();
let gettime=setInterval(() =>{
    let newdate=new Date().getTime();
    let difdate=totaldate - newdate;
    let days=Math.floor(difdate / (1000*60*60*24));
    let hours=Math.floor(difdate % (1000*60*60*24) /(1000*60*60));
    let minutes=Math.floor(difdate % (1000*60*60) /(1000*60));
    let seconds=Math.floor(difdate % (1000*60) /(1000));


    document.querySelector(".days").innerHTML= days < 10 ? `0${days}` :days;
    document.querySelector(".hours").innerHTML= hours<10 ? `0${hours}` :hours;
    document.querySelector(".minutes").innerHTML= minutes<10 ? `0${minutes}` :minutes;
    document.querySelector(".seconds").innerHTML= seconds<10 ? `0${seconds}` :seconds;

})








