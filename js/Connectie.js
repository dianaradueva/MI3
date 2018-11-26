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
    var NaamNieuwEvent = $("#NaamNieuwEvent").val();
    var Plaats = $("#Plaats").val();
    var Datum = $("#Datum").val();
    var Uur = $("#Uur").val();
    var Beschrijving = $("#Beschrijving").val();
    var account_id = 91;
    var link = "http://www.gheraille.be/events/NieuwEvent.php?Naam=" + NaamNieuwEvent + "&" + "Plaats=" + Plaats + "&" + "Datum=" + Datum + "&" + "Uur=" + Uur + "&" + "Beschrijving=" + Beschrijving + "&" + "account_id=" + account_id;
    $.ajax({
        type: 'POST',
        url: link,
        dataType: "json",
        data: {
            NaamNieuwEvent: NaamNieuwEvent,
            Plaats: Plaats,
            Datum: Datum,
            Uur: Uur,
            Beschrijving: Beschrijving,
            account_id: account_id,
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
            console.log(NaamNieuwEvent);
            console.log(Plaats);
            console.log(Datum);
            console.log(Uur);
            console.log(Beschrijving);
            console.log(account_id);
        }
    });
}
