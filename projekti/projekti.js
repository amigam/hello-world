// Nimi/tieto-osion toimivuus. Yksinkertainen if/else-toteutus.
function lisaaMerkinta() {
    let nimi = document.getElementById("nimi").value;                       // Hakee nimen kentästä
    let tieto = document.getElementById("tieto").value;                     // Hakee tiedon kentästä
    const ylaVaroitus = document.getElementById("merkintaIlmoitus1");       // Referenssi varoitusilmoitukseen
    const lisaysnappi = document.getElementById("lisaysnappi");             // Referenssi lisäysnappiin
    const lisaysilmoitus = document.getElementById("merkintaIlmoitus2");    // Referenssi lisäysilmoitukseen

    //Tarkistaa, onko tietoa syötetty kumpaankin kenttään. Jos ei ole, näyttää varoituksen.
    if ( !nimi || !tieto ) {
        ylaVaroitus.textContent = "Täytä kaikki kentät";    // Lisää tekstin varoitusilmoitukseen
        ylaVaroitus.style.display = "block";                // Muuttaa varoitusilmoituksen näkyväksi
        lisaysnappi.disabled = true;                        // Ottaa napin pois päältä, jottei sitä voi spammia
        lisaysnappi.classList.add("varoitus");              // Lisää napille varoitustyylin
        lisaysnappi.value = "Virhe! En lisännyt tietoa.";   // Vaihtaa varoitustekstin nappiin
        setTimeout(() => {                                  // Ajastin, jonka seurauksena seuraavat asiat tulevat voimaan:
            ylaVaroitus.style.display = "none";             // Muuttaa varoitusilmoituksen näkymättömäksi
            lisaysnappi.disabled = false;                   // Palauttaa napin toimivaksi
            lisaysnappi.classList.remove("varoitus");       // Palauttaa napille alkuperäisen tyylin
            lisaysnappi.value = "Lisää tieto";              // Palauttaa napilla alkuperäisen tekstin
        }, 3000);
    }
    // Muussa tapauksessa lisätään ilmoitukseen annetut tiedot ja vaihdetaan se näkyväksi.
    else {
        lisaysilmoitus.textContent = nimi + ": " + tieto;
        lisaysilmoitus.style.display = "block";
    }
}

// Monivalinnan toimivuus. Kaikki tuntimerkinnät poistetaan, ja korvataan sen jälkeen uusilla.
function lisaaSuoritus() {
    const suoritettavat = document.querySelector(".suoritettavat");     // Määritetään se osa sivusta, jota muunnellaan.

    // Poistaa kaikki tuntimerkinnät.
    suoritettavat.querySelectorAll("label").forEach(label => {
        label.textContent = label.textContent.replace(" tunnit pidetty", "");
    });

    // Hakee valitut laatikot ja lisää jokaisen tekstiin merkinnän.
    suoritettavat.querySelectorAll("input[type='checkbox']:checked").forEach(checkbox => {
        const label = suoritettavat.querySelector("label[for='"+checkbox.name+"']");
        label.textContent += " tunnit pidetty";
    });
}
