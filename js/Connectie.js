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
    var email = $("#Email").val();
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
                console.log("werkt");
                $("#foutmelding").append("");
            } else {
                $("#foutmelding").empty();
                $("#foutmelding").append("U gegevens zijn fout");
            }
            console.log(naam);
            console.log(voornaam);
            console.log(gebruikersnaam);
            console.log(wachtwoord);
            console.log(email);


        }
    });
}


function nieuwEvent() {
    var naamevent = $("#Naamevent").val();
    var plaats = $("#Plaats").val();
    var datum = $("#Datum").val();
    var tijd = $("#Tijd").val();
    var beschrijving = $("#Beschrijving").val();
    var account_id = 91;
    var link = "http://www.gheraille.be/events/NieuwEvent.php?Naam=" + naamevent + "&" + "Plaats=" + plaats + "&" + "Datum=" + datum + "&" + "Uur=" + tijd + "&" + "Beschrijving=" + beschrijving + "&" + "account_id" + account_id;
    $.ajax({
        type: 'POST',
        url: link,
        dataType: "json",
        data: {
            naamevent: naamevent,
            plaats: plaats,
            datum: datum,
            tijd: tijd,
            beschrijving: beschrijving,
            accoun_id: account_id,

        },
        success: function (data) {
            $myarray = data;
            if ($myarray["Event aanmaken"] == "true") {
                window.location.href = "evenementen.html";
                console.log("werkt");
                $("#foutmelding").append("");
            } else {
                $("#foutmelding").empty();
                $("#foutmelding").append("U gegevens zijn fout");
            }
            console.log(naamevent);
            console.log(plaats);
            console.log(datum);
            console.log(tijd);
            console.log(beschrijving);


        }
    });
}
