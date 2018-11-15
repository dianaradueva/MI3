function logincheck() {
    var gn = $("#gnaam").val();
    var ww = $("#wwoord").val();
    var link = "www.gheraille.be/events/login.php?gebruikersnaam=" + gn + "&" + "wachtwoord=" + ww;
    $.ajax({
        type: 'POST',
        url: link,
        data: {
            gebruikersnaam: gn,
            wachtwoord: ww
        },
        success: function (response) {
            //            var obj = JSON.parse(response);
            //          console.log(obj);
            //        console.log(response);
            if (response == "true") {
                window.location.href = "index.html";
                console.log("test");
            } else {
                Console.log("false");
            }
        }

    });
    //console.log("");
    // console.log(gn);
    // console.log(ww);
    console.log("test");
    console.log(link);
}
