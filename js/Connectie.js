function logincheck() {
    var gn = $("#gnaam").val();
    var ww = $("#wwoord").val();
    var link = "www.gheraille.be/events/login.php?gebruikersnaam=" + gn + "&" + "wachtwoord=" + ww;
    $.ajax({
        type: 'POST',
        url: link,
        success: function (response) {
            var obj = JSON.parse(response);
            console.log(obj);
            alert(obj);
            console.log(response);
          /*  if (response == "true") {
                window.location.href = "index.html";
                console.log("test");
                alert("test");
                $("#login-body").css("background-color", "red");
                alert(response);
            } else {
                Console.log("false");
            }*/
        }

    });
    //console.log("");
    console.log(gn);
    console.log(ww);
    //console.log("test");
    console.log(link);
}
