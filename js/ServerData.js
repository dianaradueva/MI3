function evenementen() {
    $.ajax({
        type: "get",
        url: "http://www.gheraille.be/events/Restfullapi.php",
        data: {
            function: 'evenementen',
        },
        success: function (response) {
            console.log("lukt");
            /*var obj = JSON.parse(response);
            console.log(obj);
            var i = 0;
            for (i = 0; i < obj.length; i++) {}*/
        }
    });

}
