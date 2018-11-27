function evenementen() {
    $.ajax({
        type: "post",
        url: "http://www.gheraille.be/events/Restfullapi.php",
        contentType: 'application/json',
        data: {
            function: 'evenementen',
        },
        success: function (response) {
            console.log("lukt");
            var obj = JSON.parse(response);
            console.log(obj);
            var i = 0;
            for (i = 0; i < obj.length; i++) {
                document.getElementsByClassName("eventNaam")[i].append(obj[i][0]);
                document.getElementsByClassName("inhoudPlaatsEvent")[i].append(obj[i][1]);
                document.getElementsByClassName("inhoudDatumEvent")[i].append(obj[i][2]);
                document.getElementsByClassName("inhoudTijdEvent")[i].append(obj[i][3]);
                document.getElementsByClassName("inhoudBeschrijving")[i].append(obj[i][4]);

            }
        }
    });

}
