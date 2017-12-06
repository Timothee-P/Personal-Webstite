var largeur = $(window).width();
var height1= $(window).innerHeight();
var cinquantepercent= ((largeur*3)/2)-(height1/2);

function InvertedScroll () {
    $.jInvertScroll
    (['.scroll'],        // an array containing the selector(s) for the elements you want to animate
    {
        height: largeur*3,                   // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
        onScroll: function (percent) {}
    }
    );
}(jQuery)
 InvertedScroll();

$("html").velocity("scroll", { offset: cinquantepercent, duration: 0,
delay: 0, mobileHA: false });


function milieu (){
   
    $("html").velocity("scroll", { offset: cinquantepercent, duration: 2500,
        delay: 0, mobileHA: false });
}




function debut (){
    $("html").velocity("scroll", { offset: "0px" , duration: 2500,
        delay: 0, mobileHA: false });
}


function fin (){
    $("html").velocity("scroll", { offset: (largeur*3-height1) , duration: 2500,
        delay: 0, mobileHA: false });
}


