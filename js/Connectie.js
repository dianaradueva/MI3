function logincheck() {
    var gn = $("#gnaam").val();
    var ww = $("#wwoord").val();
    var link = "www.gheraille.be/events/login.php?gebruikersnaam=" + gn + "&" + "wachtwoord=" + ww;
    $.ajax({
        type: "post",
        url: link,
        success: function (response) {
            var obj = JSON.parse(response);
            console.log(obj);
            console.log("oker");
        }
    });
    //console.log("");
    //console.log(gn);
    //console.log(ww);
    console.log(link);
}
