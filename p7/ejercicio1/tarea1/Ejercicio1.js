$(document).ready(function () {

    $("#showAll").click(function () {
        $(":header:hidden,p:hidden,table:hidden").show();
    });

    $("#hideAll").click(function () {
        $(":header:visible,p:visible,table:visible").hide();
    });

    $("#showHide").click(function () {
        //Cambiar lo del combobox
        var combo = document.getElementById("combobox");
        var selectedItem = combo.options[combo.selectedIndex].value;
        $("#" + selectedItem).toggle();
        //$("#"+($(":option:selected").val()).toggle());
    });

    $("#addRows").click(function () {
        var txt = $("#textRow").val();
        $("#tabla tbody").append("<tr><td>"+txt+"</td></tr>");
    });

    $("#editH1").click(function(){
        var txt = $("#textValueEditable").val();
        $("#h1").text(txt);
    });

    $("#editH2").click(function(){
        var txt = $("#textValueEditable").val();
        $("#h2").text(txt);
    });
    $("#editH3").click(function(){
        var txt = $("#textValueEditable").val();
        $("#h3").text(txt);
    }); 
    $("#editP").click(function(){
        var txt = $("#textValueEditable").val();
        $("#p").text(txt);
    });

    $("#delete").click(function(){
        var combo = document.getElementById("combobox");
        var selectedItem = combo.options[combo.selectedIndex].value;
        $("#"+selectedItem).remove();   
    });

    $("#recorrerPadre").click(function(){
        $("body").s
            //console.log($(this).parent().text())
        });
    });
});
