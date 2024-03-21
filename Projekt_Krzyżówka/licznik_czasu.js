let div = document.querySelector('.zegar');
let milisekundy = 0;
let sekundy = 0;
let minuty = 0;
let sekundy_koncowe;
let koniec;


function zegar() {
    milisekundy += 1;

    if (sekundy <=9) {
        sekundy_koncowe = "0" + sekundy;
    } else {
        sekundy_koncowe = sekundy;
    }
    
    div.innerHTML = minuty + ":" + sekundy_koncowe + ":" + "0" + milisekundy;

    if (milisekundy % 9 === 0) {
        milisekundy = 0;
        sekundy += 1;
    }

    if (sekundy === 60) {
        sekundy = 0;
        minuty += 1;
    }
}

koniec = setInterval(zegar, 100);

