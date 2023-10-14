//jQuery_2

$("#videolink").click(function(){
    $("#textdisplay").fadeToggle(3000, function(){
        document.getElementById("videostory").style.visibility = "visible";
        document.querySelector(".content").style.background = "none";
    });
});

       