function dmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function img_header() {
    $(document).ready(function(){
        $("img").click(function(){
            $("#news").hide();
            $("#about").hide();
            $("#feature").hide();
            $("#gen").hide();
            $("#easteregg").hide()
            $("#msg_img_header").show()
        });
    });
}