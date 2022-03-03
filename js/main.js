'use strict '

caption([
    'Developer|', 'Designer|', ' Coder :)'
], 'before', ['white', 'white', 'red']);
function caption(words, id, colors) {
    if (colors === undefined)
        colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'font-weight:', 'color:' + colors[0])
    window.setInterval(function () {

        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function () {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0])
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function () {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
        }
    }, 120)
    window.setInterval(function () {
        if (visible === true) {
            con.className = 'console-underscore hidden'
            visible = false;

        } else {
            con.className = 'console-underscore'

            visible = true;
        }
    }, 400)
}







// LOADER //////////
window.onload = function () {
    setTimeout(() => {
     document.querySelector(".loader").classList.add("d-none")
    }, 1500)

    
}
// end loadnig

//// Modern Slider
$(document).ready(function () {

    $(".Modern-Slider").slick({
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
        dots: true,
        pauseOnDotsHover: true,
        cssEase: 'linear',
        //  fade:true,
        draggable: false,
        prevArrow: '<button class="PrevArrow"></button>',
        nextArrow: '<button class="NextArrow"></button>'
    });

});
////////////////


// window.addEventListener('scroll', (event)=>{
//     let scrool=this.scrollY;
//     console.log(scrool);
// })
var header=document.querySelector(".nav-menu");
var myicon=document.querySelector(".myicon");
var scrollUp=document.querySelector("#header .background .scroll-up")
var navright=document.querySelector(".nav-right");
window.onscroll=function(){
//   console.log(this.pageYOffset)

     

    if(this.pageYOffset>700){
     header.classList.add("active")  
     scrollUp.style.display="block",transform = "translateY(10px)"
   }

   else{
       header.classList.remove("active") 
       scrollUp.style.display="none"
    //    scrollUp.style.transform = "translateY(0px)";
      
   } 
}

console.log(scrollUp)
myicon.addEventListener('click',()=>{
    navright.classList.toggle("activem");

    // console.log(navright);
})


// if(this.pageYOffset=3180){
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
              console.log(counters);
            const inc = target / speed;
            if (count < target) {
                counter.innerText = count + inc;
                setTimeout(updateCount, 1);
            } else {
                count.innerText = target;
            }
        }
        updateCount();
    });
//    }else{
//     //    target=0;
//        count=0;
//    }











$(".blogs").slick({
    dots: true,
    infinite: true,
    autoplay: "true",
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});

 $("#Portfolio .overview .overview-top .overview-a").on("click",function(){
     let nums=$(this).attr("num");

     let rows=$("#Portfolio .overview .overview-bottom .gallery");
    //  for (var vara of rows) {

        rows.removeClass("activebottom")
        rows.eq(nums).addClass("activebottom")
        console.log(rows.eq(nums))
 })









