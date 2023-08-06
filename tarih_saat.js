function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const tarihStr = now.toLocaleDateString('tr-TR', options);
    const saatStr = now.toLocaleTimeString('tr-TR');

    document.getElementById('tarih').textContent = 'Tarih: ' + tarihStr;
    document.getElementById('saat').textContent = 'Saat: ' + saatStr;
}

// Tarih ve saat bilgisini her saniye güncelle
setInterval(updateDateTime, 1000);

// Sayfa yüklendiğinde ilk güncelleme yap
updateDateTime();
