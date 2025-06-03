
function page3animation(){
    var page3boxs = document.querySelectorAll(".page3-boxs");

page3boxs.forEach(function(val){

    val.addEventListener("mouseenter",function(){
        val.childNodes[5].style.display = "block"
    });

    val.addEventListener("mouseleave",function(){
        val.childNodes[5].style.display = "none"
    });
});
}

page3animation();

function page4animation (){
    
var elems = document.querySelectorAll(".elem");

elems.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        gsap.to(val.childNodes[3],{
            opacity:1,
            scale:1
        })
    });

    val.addEventListener("mouseleave",function(){
        gsap.to(val.childNodes[3],{
            opacity:0,
            scale:0
        });
    });

    val.addEventListener("mousemove", function(dets){
        gsap.to(val.childNodes[3],{
            x:dets.x - val.getBoundingClientRect().x - 60,
            y:dets.y - val.getBoundingClientRect().y - 150
        });
    });
});
}
page4animation();

function page6animation (){
    var sec = document.querySelectorAll('.page6-v')

sec.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        elem.childNodes[7].style.opacity = 1
    })

    elem.addEventListener("mouseleave", function(){
        elem.childNodes[7].style.opacity = 0
    })
});
}

page6animation();