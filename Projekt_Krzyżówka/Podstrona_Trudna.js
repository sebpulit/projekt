const btn = document.querySelector('button.sprawdz');

btn.addEventListener('click', function() {
    const tablica_pierwszej_odpowiedzi_gracza = [];
    tablica_pierwszej_odpowiedzi_gracza [0] = document.querySelector('input[name="pierwszaodpowiedz_pole1"]').value;
    tablica_pierwszej_odpowiedzi_gracza [1] = document.querySelector('input[name="pierwszaodpowiedz_pole2"]').value;
    tablica_pierwszej_odpowiedzi_gracza [2] = document.querySelector('input[name="pierwszaodpowiedz_pole3"]').value;
    tablica_pierwszej_odpowiedzi_gracza [3] = document.querySelector('input[name="pierwszaodpowiedz_pole4"]').value;
    tablica_pierwszej_odpowiedzi_gracza [4] = document.querySelector('input[name="czwartaodpowiedz_pole2"]').value;
    tablica_pierwszej_odpowiedzi_gracza [5] = document.querySelector('input[name="pierwszaodpowiedz_pole6"]').value;
    tablica_pierwszej_odpowiedzi_gracza [6] = document.querySelector('input[name="pierwszaodpowiedz_pole7"]').value;
    tablica_pierwszej_odpowiedzi_gracza [7] = document.querySelector('input[name="pierwszaodpowiedz_pole8"]').value;
    tablica_pierwszej_odpowiedzi_gracza [8] = document.querySelector('input[name="pierwszaodpowiedz_pole9"]').value;
    tablica_pierwszej_odpowiedzi_gracza [9] = document.querySelector('input[name="szostaodpowiedz_pole1"]').value;
    tablica_pierwszej_odpowiedzi_gracza [10] = document.querySelector('input[name="pierwszaodpowiedz_pole11"]').value;


    const tablica_pierwszej_odpowiedzi_gracza_Duze_Litery = [];
    for (let i = 0; i <=10; i++) {
        tablica_pierwszej_odpowiedzi_gracza_Duze_Litery[i] = tablica_pierwszej_odpowiedzi_gracza[i].toUpperCase();
    }

    const tablica_drugiej_odpowiedzi_gracza = [];
    tablica_drugiej_odpowiedzi_gracza [0] = document.querySelector('input[name="pierwszaodpowiedz_pole1"]').value;
    tablica_drugiej_odpowiedzi_gracza [1] = document.querySelector('input[name="drugaodpowiedz_pole1"]').value;
    tablica_drugiej_odpowiedzi_gracza [2] = document.querySelector('input[name="drugaodpowiedz_pole2"]').value;
    tablica_drugiej_odpowiedzi_gracza [3] = document.querySelector('input[name="drugaodpowiedz_pole3"]').value;
    tablica_drugiej_odpowiedzi_gracza [4] = document.querySelector('input[name="drugaodpowiedz_pole4"]').value;
    tablica_drugiej_odpowiedzi_gracza [5] = document.querySelector('input[name="drugaodpowiedz_pole5"]').value;
    tablica_drugiej_odpowiedzi_gracza [6] = document.querySelector('input[name="drugaodpowiedz_pole6"]').value;
    tablica_drugiej_odpowiedzi_gracza [7] = document.querySelector('input[name="trzeciaodpowiedz_pole1"]').value;

    const tablica_drugiej_odpowiedzi_gracza_Duze_Litery = [];
    for (let i = 0; i <=7; i++) {
        tablica_drugiej_odpowiedzi_gracza_Duze_Litery[i] = tablica_drugiej_odpowiedzi_gracza[i].toUpperCase();
    }

    const tablica_trzeciej_odpowiedzi_gracza = [];
    tablica_trzeciej_odpowiedzi_gracza [0] = document.querySelector('input[name="trzeciaodpowiedz_pole1"]').value;
    tablica_trzeciej_odpowiedzi_gracza [1] = document.querySelector('input[name="trzeciaodpowiedz_pole2"]').value;
    tablica_trzeciej_odpowiedzi_gracza [2] = document.querySelector('input[name="trzeciaodpowiedz_pole3"]').value;
    tablica_trzeciej_odpowiedzi_gracza [3] = document.querySelector('input[name="trzeciaodpowiedz_pole4"]').value;
    tablica_trzeciej_odpowiedzi_gracza [4] = document.querySelector('input[name="trzeciaodpowiedz_pole5"]').value;

    const tablica_trzeciej_odpowiedzi_gracza_Duze_Litery = [];
    for (let i = 0; i <=4; i++) {
        tablica_trzeciej_odpowiedzi_gracza_Duze_Litery[i] = tablica_trzeciej_odpowiedzi_gracza[i].toUpperCase();
    }

    const tablica_czwartej_odpowiedzi_gracza = [];
    tablica_czwartej_odpowiedzi_gracza [0] = document.querySelector('input[name="czwartaodpowiedz_pole1"]').value;
    tablica_czwartej_odpowiedzi_gracza [1] = document.querySelector('input[name="czwartaodpowiedz_pole2"]').value;
    tablica_czwartej_odpowiedzi_gracza [2] = document.querySelector('input[name="czwartaodpowiedz_pole3"]').value;
    tablica_czwartej_odpowiedzi_gracza [3] = document.querySelector('input[name="piataodpowiedz_pole2"]').value;
    tablica_czwartej_odpowiedzi_gracza [4] = document.querySelector('input[name="czwartaodpowiedz_pole5"]').value;
    tablica_czwartej_odpowiedzi_gracza [5] = document.querySelector('input[name="czwartaodpowiedz_pole6"]').value;
    tablica_czwartej_odpowiedzi_gracza [6] = document.querySelector('input[name="czwartaodpowiedz_pole7"]').value;

    const tablica_czwartej_odpowiedzi_gracza_Duze_Litery = [];
    for (let i = 0; i <=6; i++) {
        tablica_czwartej_odpowiedzi_gracza_Duze_Litery[i] = tablica_czwartej_odpowiedzi_gracza[i].toUpperCase();
    }

    const tablica_piatej_odpowiedzi_gracza = [];
    tablica_piatej_odpowiedzi_gracza [0] = document.querySelector('input[name="piataodpowiedz_pole1"]').value;
    tablica_piatej_odpowiedzi_gracza [1] = document.querySelector('input[name="piataodpowiedz_pole2"]').value;
    tablica_piatej_odpowiedzi_gracza [2] = document.querySelector('input[name="piataodpowiedz_pole3"]').value;
    tablica_piatej_odpowiedzi_gracza [3] = document.querySelector('input[name="piataodpowiedz_pole4"]').value;
    tablica_piatej_odpowiedzi_gracza [4] = document.querySelector('input[name="piataodpowiedz_pole5"]').value;
    tablica_piatej_odpowiedzi_gracza [5] = document.querySelector('input[name="piataodpowiedz_pole6"]').value;
    tablica_piatej_odpowiedzi_gracza [6] = document.querySelector('input[name="szostaodpowiedz_pole3"]').value;


    const tablica_piatej_odpowiedzi_gracza_Duze_Litery = [];
    for (let i = 0; i <=6; i++) {
        tablica_piatej_odpowiedzi_gracza_Duze_Litery[i] = tablica_piatej_odpowiedzi_gracza[i].toUpperCase();
    }

      const tablica_szostej_odpowiedzi_gracza = [];
      tablica_szostej_odpowiedzi_gracza [0] = document.querySelector('input[name="szostaodpowiedz_pole1"]').value;
      tablica_szostej_odpowiedzi_gracza [1] = document.querySelector('input[name="szostaodpowiedz_pole2"]').value;
      tablica_szostej_odpowiedzi_gracza [2] = document.querySelector('input[name="szostaodpowiedz_pole3"]').value;
      tablica_szostej_odpowiedzi_gracza [3] = document.querySelector('input[name="szostaodpowiedz_pole4"]').value;
      tablica_szostej_odpowiedzi_gracza [4] = document.querySelector('input[name="szostaodpowiedz_pole5"]').value;
      tablica_szostej_odpowiedzi_gracza [5] = document.querySelector('input[name="szostaodpowiedz_pole6"]').value;
      tablica_szostej_odpowiedzi_gracza [6] = document.querySelector('input[name="szostaodpowiedz_pole7"]').value;
      tablica_szostej_odpowiedzi_gracza [7] = document.querySelector('input[name="szostaodpowiedz_pole8"]').value;
      tablica_szostej_odpowiedzi_gracza [8] = document.querySelector('input[name="szostaodpowiedz_pole9"]').value;


    const tablica_szostej_odpowiedzi_gracza_Duze_Litery = [];
    for (let i = 0; i <=8; i++) {
        tablica_szostej_odpowiedzi_gracza_Duze_Litery[i] = tablica_szostej_odpowiedzi_gracza[i].toUpperCase();
    }

    const Pierwsza_poprawna_odpowiedz = "SZCZOTECZKA";
    const tablica_Pierwsza_poprawna_odpowiedz = Pierwsza_poprawna_odpowiedz.split('');
  
    const Druga_poprawna_odpowiedz = "SAMOCHÓD";
    const tablica_Druga_poprawna_odpowiedz = Druga_poprawna_odpowiedz.split('');
  
    const Trzecia_poprawna_odpowiedz = "DZWON";
    const tablica_Trzecia_poprawna_odpowiedz = Trzecia_poprawna_odpowiedz.split('');
  
    const Czwarta_poprawna_odpowiedz = "KOTWICA";
    const tablica_Czwarta_poprawna_odpowiedz = Czwarta_poprawna_odpowiedz.split('');
  
    const Piąta_poprawna_odpowiedz = "KWIATEK";
    const tablica_Piąta_poprawna_odpowiedz = Piąta_poprawna_odpowiedz.split('');
  
    const Szósta_poprawna_odpowiedz = "KUKURYDZA";
    const tablica_Szósta_poprawna_odpowiedz = Szósta_poprawna_odpowiedz.split('');
    

    let odpjeden = 1;
    var twoja_odpowiedz = " ";

    for(let i=0; i<tablica_pierwszej_odpowiedzi_gracza_Duze_Litery.length;i++)
    {
        if(tablica_pierwszej_odpowiedzi_gracza_Duze_Litery[i]!=tablica_Pierwsza_poprawna_odpowiedz[i])
        odpjeden=2;
    }
    if(odpjeden===2)
    {
        document.getElementById("wynik1").innerHTML = "Odpowiedz numer 1 w krzyzówce jest błędna";

    }
    else
    {
        var twoja_odpowiedz = tablica_pierwszej_odpowiedzi_gracza_Duze_Litery[0];
        document.getElementById("wynik1").innerHTML = "";

    }



    let odpdwa = 1;
    var twoja_odpowiedz6 = " ";
    for(let i=0; i<tablica_drugiej_odpowiedzi_gracza_Duze_Litery.length;i++)
    {
        if(tablica_drugiej_odpowiedzi_gracza_Duze_Litery[i]!=tablica_Druga_poprawna_odpowiedz[i])
        odpdwa=2;
    }
    if(odpdwa===2)
    {
        document.getElementById("wynik2").innerHTML = "Odpowiedz numer 2 w krzyzówce jest błędna";
    }
    else
    {
        var twoja_odpowiedz6 = tablica_drugiej_odpowiedzi_gracza_Duze_Litery[1];
        document.getElementById("wynik2").innerHTML = "";

    }


    let odptrzy = 1;
    var twoja_odpowiedz5 = " ";
    for(let i=0; i<tablica_trzeciej_odpowiedzi_gracza_Duze_Litery.length;i++)
    {
        if(tablica_trzeciej_odpowiedzi_gracza_Duze_Litery[i]!=tablica_Trzecia_poprawna_odpowiedz[i])
        odptrzy=2;
    }
    if(odptrzy===2)
    {
        document.getElementById("wynik3").innerHTML = "Odpowiedz numer 3 w krzyzówce jest błędna";
    }
    else
    {
        var twoja_odpowiedz5 = tablica_trzeciej_odpowiedzi_gracza_Duze_Litery[4];
        document.getElementById("wynik3").innerHTML = "";

    }

    
    let odpcztery = 1;
    var twoja_odpowiedz4 = " ";
    for(let i=0; i<tablica_czwartej_odpowiedzi_gracza_Duze_Litery.length;i++)
    {
        if(tablica_czwartej_odpowiedzi_gracza_Duze_Litery[i]!=tablica_Czwarta_poprawna_odpowiedz[i])
        odpcztery=2;

    }
    if(odpcztery===2)
    {
        document.getElementById("wynik4").innerHTML = "Odpowiedz numer 4 w krzyzówce jest błędna";
    }
    else
    {
        var twoja_odpowiedz4 = tablica_czwartej_odpowiedzi_gracza_Duze_Litery[1];
        document.getElementById("wynik4").innerHTML = "";

    }


    let odppiec = 1;
    var twoja_odpowiedz2 = " ";
    for(let i=0; i<tablica_piatej_odpowiedzi_gracza_Duze_Litery.length;i++)
    {
        if(tablica_piatej_odpowiedzi_gracza_Duze_Litery[i]!=tablica_Piąta_poprawna_odpowiedz[i])
       odppiec=2;

    }
    if(odppiec===2)
    {
        document.getElementById("wynik5").innerHTML = "Odpowiedz numer 5 w krzyzówce jest błędna";
    }
    else
    {
        var twoja_odpowiedz2 = tablica_piatej_odpowiedzi_gracza_Duze_Litery[4];
        document.getElementById("wynik5").innerHTML = "";

    }


    let odpszesc = 1;
    var twoja_odpowiedz3 = " ";

    for(let i=0; i<tablica_szostej_odpowiedzi_gracza_Duze_Litery.length;i++)
    {
        if(tablica_szostej_odpowiedzi_gracza_Duze_Litery[i]!=tablica_Szósta_poprawna_odpowiedz[i])
        odpszesc=2;
    }
    if(odpszesc===2)
    {
        document.getElementById("wynik6").innerHTML = "Odpowiedz numer 6 w krzyzówce jest błędna";
    }
    else
    {
        var twoja_odpowiedz3 = tablica_szostej_odpowiedzi_gracza_Duze_Litery[4];
        document.getElementById("wynik6").innerHTML = "";

    }

    var haslo = twoja_odpowiedz + twoja_odpowiedz2 + twoja_odpowiedz3 + twoja_odpowiedz4 + twoja_odpowiedz5 + twoja_odpowiedz6;
    document.getElementById("odp").innerHTML = haslo;
    var wygrana = document.querySelector('.srodek');
        if(haslo === "STRONA")
    {
        wygrana.innerHTML = `
        <h1>Gratulacje!</h1>
        <p>Wygrałeś! Udało ci sie odgadąć hasło.</p>
        <p>Twój czas to ${minuty} : ${sekundy_koncowe} : 0${milisekundy}</p>
    `;
    clearInterval(koniec);
    }



});
