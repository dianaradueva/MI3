function evenementen() {
    $.ajax({
        type: "post",
        dataType: "json",
        url: "http://www.gheraille.be/events/Restfullapi.php",
        data: {
            function: 'evenementen',
        },
        success: function (response) {
            var obj = JSON.parse(response);
            console.log(obj);
            console.log("test");
            var i = 0;
            for (i = 0; i < obj.length; i++) {
                console.log(obj);
            }
        }
    });

}

function TitrePrecedents() {
    $.ajax({
        type: "post",
        url: "http://www.gheraille.be/events/Restfullapi.php",
        data: {
            function: 'NouveautesFirstPage',
        },
        success: function (response) {
            var obj = JSON.parse(response);
            console.log(obj);
            var i = 0;
            for (i = 0; i < obj.length; i++) {}
        }
    });

}
