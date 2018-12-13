function logincheck() {
    var gn = $("#gnaam").val();
    var ww = $("#wwoord").val();
    var link = "http://www.gheraille.be/events/login.php?gebruikersnaam=" + gn + "&" + "wachtwoord=" + ww;
    $.ajax({
        type: 'POST',
        async: false,
        url: link,
        dataType: "json",
        data: {
            gebruikersnaam: gn,
            wachtwoord: ww,
        },
        success: function (data) {
            $myarray = data;
            if ($myarray["login"] == "true") {
                sessionStorage.setItem("id", $myarray["ID"]["account_id"]);
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
    var account_id = sessionStorage.getItem("id");
    var link = "http://www.gheraille.be/events/NieuwEvent.php?NaamNieuwEvent=" + NaamNieuwEvent + "&" + "Plaats=" + Plaats + "&" + "Datum=" + Datum + "&" + "Uur=" + Uur + "&" + "Beschrijving=" + Beschrijving + "&" + "account_id=" + account_id;
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

function evenementen() {
    var id = sessionStorage.getItem("id");
    $.ajax({
        type: "POST",
        url: "http://www.gheraille.be/events/Restfullapi.php?id=" + id,
        contentType: 'application/json',
        data: {
            function: 'evenementen',
        },
        success: function (response) {
            console.log("lukt");
            var obj = JSON.parse(response);
            console.log(obj);
            var i = 0;
            var parent = $("#Hier");
            $("#body").append("<script type='text/javascript' src='../js/materialize.min.js'></script>")
            for (i = 0; i < obj.length; i++) {
                $("<button class='collapsible'><p class='eventNaam'></p></button><div class='content'><img id='evenementIcon' src='Icons/Evenement.png'><div class='EventP'><p class='plaatsEvent'>Plaats:</p><p class='inhoudPlaatsEvent'></p><p class='datumEvent'>Datum:</p><p class='inhoudDatumEvent'></p><p class='tijdEvent'>Tijd:</p><p class='inhoudTijdEvent'></p><p class='beschrijvingEvent'>Beschrijving:</p><p class='inhoudBeschrijving'></p></div></div>").appendTo('#Hier');
                console.log("test");
                document.getElementsByClassName("eventNaam")[i].append(obj[i][0]);
                document.getElementsByClassName("inhoudPlaatsEvent")[i].append(obj[i][1]);
                document.getElementsByClassName("inhoudDatumEvent")[i].append(obj[i][2]);
                document.getElementsByClassName("inhoudTijdEvent")[i].append(obj[i][3]);
                document.getElementsByClassName("inhoudBeschrijving")[i].append(obj[i][4]);

            }
            var coll = document.getElementsByClassName("collapsible");
            var i;

            for (i = 0; i < coll.length; i++) {
                coll[i].addEventListener("click", function () {
                    this.classList.toggle("active");
                    var content = this.nextElementSibling;
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = content.scrollHeight + "px";
                    }
                });
                console.log(coll.length);
            }

        }
    });
}

function Data() {
    var id = sessionStorage.getItem("id");
    $.ajax({
        type: "POST",
        url: "http://www.gheraille.be/events/Restfullapi.php?id=" + id,
        contentType: 'application/json',
        data: {
            function: 'Data',
        },
        success: function (response) {
            console.log("test");
            var obj = JSON.parse(response);
            console.log(obj);
            document.getElementById("naamGebruiker").append(obj[1][5]);
        }
    });
}

function toonWachtwoord() {
    var x = document.getElementById("Wachtwoord");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function toonWachtwoordLogin() {
    var y = document.getElementById("wwoord");
    if (y.type === "password") {
        y.type = "text";
    } else {
        y.type = "password";
    }
}


function Loguit() {
    sessionStorage.removeItem('id');
    window.location.href = "login.html";

}

function vrienden() {
    var id = sessionStorage.getItem("id");
    $.ajax({
        type: "POST",
        url: "http://www.gheraille.be/events/Vrienden.php?id=" + id,
        contentType: 'application/json',
        data: {
            function: 'vrienden',
        },
        success: function (response) {
            console.log("lukt");
            var obj = JSON.parse(response);
            console.log(obj);
            var i = 0;
            for (i = 0; i < obj.length; i++) {
                $("<div class='chip'><img class='picvriend' src='Icons/img_avatar2.png' alt='Person'><p class='Vriend'></p><span class='closeBtn' onclick='this.parentElement.style.display='none''>&times;</span></div>").appendTo('#data');
                document.getElementsByClassName("Vriend")[i].append(obj[i][0]);
            }
        }
    });
}
