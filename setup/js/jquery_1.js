//jQuery_1

$("#showList").click(function(){
    document.getElementById("list").style.visibility = "visible";
    document.getElementById("showForm").style.visibility = "visible";
    document.getElementById("showFormSync").style.visibility = "visible";
    $("#student-form").fadeToggle();
    })
    $("#showForm").click(function(){
        $("#student-form").fadeToggle();
        document.getElementById("showForm").style.visibility = "hidden";
        document.getElementById("showFormSync").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
    })
   