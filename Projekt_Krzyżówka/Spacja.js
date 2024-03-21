for (let i = 1; i <= 8; i++) {
    const poczatkowy_input = document.querySelector(`input[name="pierwszaodpowiedz_pole${i}"]`);
    const kolejny_input = document.querySelector(`input[name="pierwszaodpowiedz_pole${i + 1}"]`);

    poczatkowy_input.addEventListener('input', function () {
            const wartosc_inputa = this.value;
            const dlugosc_inputa = wartosc_inputa.length;

            if (dlugosc_inputa === 1) {
                kolejny_input.select();
            }
        });

}
document.querySelector('input[name="pierwszaodpowiedz_pole9"]').addEventListener('input', function() {
    const wartosc_inputa = this.value;
    const dlugosc_inputa = wartosc_inputa.length;

    if (dlugosc_inputa === 1) {
        const kolejny_input = document.querySelector('input[name="drugaodpowiedz_pole1"]');
        kolejny_input.select();
    }
});

for (let i = 1; i <= 4; i++) {
    const poczatkowy_input = document.querySelector(`input[name="drugaodpowiedz_pole${i}"]`);
    const kolejny_input = document.querySelector(`input[name="drugaodpowiedz_pole${i + 1}"]`);

    poczatkowy_input.addEventListener('input', function () {
            const wartosc_inputa = this.value;
            const dlugosc_inputa = wartosc_inputa.length;

            if (dlugosc_inputa === 1) {
                kolejny_input.select();
            }
        });
}

document.querySelector('input[name="drugaodpowiedz_pole5"]').addEventListener('input', function() {
    const wartosc_inputa = this.value;
    const dlugosc_inputa = wartosc_inputa.length;

    if (dlugosc_inputa === 1) {
        const kolejny_input = document.querySelector('input[name="trzeciaodpowiedz_pole1"]');
        kolejny_input.select();
    }
});

for (let i = 1; i <= 7; i++) {
    const poczatkowy_input = document.querySelector(`input[name="trzeciaodpowiedz_pole${i}"]`);
    const kolejny_input = document.querySelector(`input[name="trzeciaodpowiedz_pole${i + 1}"]`);

    poczatkowy_input.addEventListener('input', function () {
            const wartosc_inputa = this.value;
            const dlugosc_inputa = wartosc_inputa.length;

            if (dlugosc_inputa === 1) {
                kolejny_input.select();
            }
        });
}

document.querySelector('input[name="trzeciaodpowiedz_pole8"]').addEventListener('input', function() {
    const wartosc_inputa = this.value;
    const dlugosc_inputa = wartosc_inputa.length;

    if (dlugosc_inputa === 1) {
        const kolejny_input = document.querySelector('input[name="czwartaodpowiedz_pole1"]');
        kolejny_input.select();
    }
});

for (let i = 1; i <= 6; i++) {
    const poczatkowy_input = document.querySelector(`input[name="czwartaodpowiedz_pole${i}"]`);
    const kolejny_input = document.querySelector(`input[name="czwartaodpowiedz_pole${i + 1}"]`);

    poczatkowy_input.addEventListener('input', function () {
            const wartosc_inputa = this.value;
            const dlugosc_inputa = wartosc_inputa.length;

            if (dlugosc_inputa === 1) {
                kolejny_input.select();
            }
        });
}

document.querySelector('input[name="czwartaodpowiedz_pole7"]').addEventListener('input', function() {
    const wartosc_inputa = this.value;
    const dlugosc_inputa = wartosc_inputa.length;

    if (dlugosc_inputa === 1) {
        const kolejny_input = document.querySelector('input[name="piataodpowiedz_pole1"]');
        kolejny_input.select();
    }
});

for (let i = 1; i <= 8; i++) {
    const poczatkowy_input = document.querySelector(`input[name="piataodpowiedz_pole${i}"]`);
    const kolejny_input = document.querySelector(`input[name="piataodpowiedz_pole${i + 1}"]`);

    poczatkowy_input.addEventListener('input', function () {
            const wartosc_inputa = this.value;
            const dlugosc_inputa = wartosc_inputa.length;

            if (dlugosc_inputa === 1) {
                kolejny_input.select();
            }
        });
}

document.querySelector('input[name="piataodpowiedz_pole9"]').addEventListener('input', function() {
    const wartosc_inputa = this.value;
    const dlugosc_inputa = wartosc_inputa.length;

    if (dlugosc_inputa === 1) {
        const kolejny_input = document.querySelector('input[name="szostaodpowiedz_pole1"]');
        kolejny_input.select();
    }
});

for (let i = 1; i <= 3; i++) {
    const poczatkowy_input = document.querySelector(`input[name="szostaodpowiedz_pole${i}"]`);
    const kolejny_input = document.querySelector(`input[name="szostaodpowiedz_pole${i + 1}"]`);

    poczatkowy_input.addEventListener('input', function () {
            const wartosc_inputa = this.value;
            const dlugosc_inputa = wartosc_inputa.length;

            if (dlugosc_inputa === 1) {
                kolejny_input.select();
            }
        });
}
