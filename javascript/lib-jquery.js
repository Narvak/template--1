function about() {
    $(document).ready(function(){
        $("button").click(function(){
            $("#feature").hide();
            $("#news").hide();
            $("#easteregg").hide();
            $("#gen").show();
            $("#about").show();
        });
    });
}

function feature() {
    $(document).ready(function(){
        $("button").click(function(){
            $("#about").hide();
            $("#feature").show()
        });
    });
}

function news() {
    $(document).ready(function(){
        $("button").click(function(){
            $("#about").hide();
            $("#news").show()
        });
    });
}

function easteregg() {
    $(document).ready(function(){
        $("button").click(function(){
            $("#news").hide();
            $("#about").hide();
            $("#feature").hide();
            $("#gen").show();
            $("#easteregg").show()
        });
    });
}

function show() {
    $(document).ready(function(){
        $("button").click(function(){
            $("#easteregg").hide();
            $("#news").show()
            $("#about").show()
            $("#feature").show()
                $("#feature1").show()
                $("#feature1").show()
                $("#feature3").show()
            $("#gen").show()
        });
    });
}
function show_all() {
    $(document).ready(function(){
        $("button").click(function(){
            $("#easteregg").show();
            $("#news").show()
            $("#about").show()
            $("#feature").show()
                $("#feature1").show()
                $("#feature1").show()
                $("#feature3").show()
            $("#gen").show()
            $("*").show()
        });
    });
}
function hide_all() {
    $(document).ready(function(){
        $("button").click(function(){
            $("#easteregg").hide();
            $("#news").hide()
            $("#about").hide()
            $("#feature").hide()
                $("#feature1").hide()
                $("#feature1").hide()
                $("#feature3").hide()
            $("#gen").hide()
            $("*").hide()
        });
    });
}