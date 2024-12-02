// Alljärgnev JavaScripti kood on genereeritud Microsoft Copiloti (2024) tekstiroboti poolt.
// Kommenteeritud ja kohandatud autori poolt.

// Lisame igale prügikasti nupule .btn2 klikkimise sündmuse kuulaja
document.querySelectorAll('.btn2').forEach(button => {
    button.addEventListener('click', function() {
        // Leiame lähima .box elemendi
        const box = this.closest('.box');
        if (box) {
            box.classList.add('fade-out');
            setTimeout(() => {
                box.remove(); // Eemaldame kasti ja uuendame kogusummat pärast animatsiooni lõppu
                updateTotal();
            }, 300); // Ootame 0.3 sekundit, et animatsioon lõppeks
        }
    });
});

// Funktsioon kogusumma uuendamiseks
function updateTotal() {
    let total = 0;
    const boxes = document.querySelectorAll('.shop .box:not(.empty-cart-message .box)');
    boxes.forEach(box => {
        // Leiame hinna tekstist
        const priceText = box.querySelector('h4') ? box.querySelector('h4').innerText : '';
        let price = 0;

        // Teisendame hinna arvuks
        if (priceText.includes('Hind (1 kuu): ')) {
            price = parseFloat(priceText.replace('Hind (1 kuu): ', '').replace('€', '')) || 0;
        } else if (priceText.includes('Price (1 month): ')) {
            price = parseFloat(priceText.replace('Price (1 month): ', '').replace('€', '')) || 0;
        }

        // Leiame kestuse ja arvutame hinna vastavalt kestusele
        const duration = parseInt(box.querySelector('select') ? box.querySelector('select').value : 1);
        total += price * duration;
    });

    // Arvutame maksu ja kogusumma
    const tax = total * 0.20;
    const grandTotal = total + tax;

    // Uuendame parempoolse riba väärtusi
    document.querySelector('.right-bar p:nth-child(1) span:nth-child(2)').innerText = total.toFixed(2) + '€';
    document.querySelector('.right-bar p:nth-child(3) span:nth-child(2)').innerText = tax.toFixed(2) + '€';
    document.querySelector('.right-bar p:nth-child(5) span:nth-child(2)').innerText = grandTotal.toFixed(2) + '€';

    // Kontrollime, kas ostukorv on tühi
    const emptyCartMessage = document.querySelector('.empty-cart-message');
    if (boxes.length === 0) {
        emptyCartMessage.style.display = 'block';
        setTimeout(() => {
            emptyCartMessage.classList.add('show');
        }, 10); // Väike viivitus, et käivitada fade-in animatsioon
    } else {
        emptyCartMessage.classList.remove('show');
        setTimeout(() => {
            emptyCartMessage.style.display = 'none';
        }, 500); // Ootame 0.5 sekundit, et animatsioon lõppeks
    }
}

// Lisame igale valikule 'change' sündmuse kuulaja
document.querySelectorAll('select').forEach(select => {
    select.addEventListener('change', updateTotal);
});

// Uuendame kogusummat esialgu
updateTotal();