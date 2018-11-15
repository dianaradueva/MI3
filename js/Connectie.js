function logincheck() {
    var gn = $("#gnaam").val();
    var ww = $("#wwoord").val();
    var link = "http://www.gheraille.be/events/login.php?gebruikersnaam=" + gn + "&" + "wachtwoord=" + ww;
    $.ajax({
        type: 'POST',
        url: link,
        dataType: "json",
        data: {
            gebruikersnaam: gn,
            wachtwoord: ww,
        },
        success: function (data) {
            $myarray = data;
            if ($myarray["login"] == "true") {
                window.location.href = "startpagina.html";
                $("#foutmelding").append("");
            } else {
                $("#foutmelding").empty();
                $("#foutmelding").append("U gegevens zijn fout");
            }

        }
    });
}

function registratie() {
    var naam = $("#Naam").val();
    var voornaam = $("#Voornaam").val();
    var gebruikersnaam = $("#Gebruikersnaam").val();
    var wachtwoord = $("#Wachtwoord").val();
    var email = $("#email").val();
    var link = "http://www.gheraille.be/events/registratie.php?naam=" + naam + "&" + "voornaam=" + voornaam + "&" + "gebruikersnaam=" + gebruikersnaam + "&" + "wachtwoord=" + wachtwoord + "&" + "email=" + email;
    $.ajax({
        type: 'POST',
        url: link,
        dataType: "json",
        data: {
            naam: naam,
            voornaam: voornaam,
            gebruikersnaam: gebruikersnaam,
            wachtwoord: wachtwoord,
            email: email,
        },
        success: function (data) {
            $myarray = data;
            if ($myarray["registratie"] == "true") {
                window.location.href = "login.html";
                $("#foutmelding").append("");
            } else {
                $("#foutmelding").empty();
                $("#foutmelding").append("U gegevens zijn fout");
            }

        }
    });
}
