function logincheck() {
    var gn = $("#gnaam").val();
    var ww = $("#wwoord").val();
    var link = "http://www.gheraille.be/events/login.php?gebruikersnaam=" + gn + "&" + "wachtwoord=" + ww;
    $.ajax({
        type: 'POST',
        url: "http://www.gheraille.be/events/login.php",
        dataType: "json",
        cache: false,
        crossDomain: true,
        processData: true,
        data: {
            gebruikersnaam: gn,
            wachtwoord: ww,
        },
        success: function (data) {
            var jsonArray = jQuery.parseJSON(data);
            alert(jsonArray.status.message);
        },
        error: function () {
            console.log($.makeArray(arguments));
        },
        complete: function () {
            console.log($.makeArray(arguments));
        }

    });
    //console.log("");
    // console.log(gn);
    // console.log(ww);
    //console.log("test");
    // console.log(link);
}
