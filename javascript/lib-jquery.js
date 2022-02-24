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
            $("#about").hide();
            $("#easteregg").show()
        });
    });
}