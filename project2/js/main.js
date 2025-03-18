
///mobile response close the show class using js
let navbar=document.querySelectorAll(".nav-link");
let navcollaps=document.querySelector(".collapse.navbar-collapse")
navbar.forEach(function(a) {
    a.addEventListener("click",function(){
        navcollaps.classList.remove("show");
    })
     
});



//counter design part start
document.addEventListener("DOMContentLoaded",()=>{
   

    function counter(id,start,end,duration){
        let obj=document.getElementById(id),
        current=start,
        range=end-start,
        increment= end > start ? 1 : -1,
        step=Math.abs(Math.floor(duration/range)),
        timer=setInterval(()=>{
            current+=increment;
            obj.textContent=current;
            if(current==end ){
                clearInterval(timer);
            }


        },step);
    }
    counter("count1",10,1020,3000);
    counter("count2",10,420,2000);
    counter("count3",550,920,6000);
    counter("count4",302,520,2000);
    
}) ;

