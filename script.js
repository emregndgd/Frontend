const btnEl=document.getElementById("hesapla");
const tutarGiris=document.getElementById("tutar");
const bahsisGiris=document.getElementById("bahsis");
const toplamTutar=document.getElementById("toplam");

function ToplamHesapla(){
    const tutarDegeri=tutarGiris.value;
    const bahsisDegeri=bahsisGiris.value;
    const toplamDeger=tutarDegeri*(1+bahsisDegeri/100);
    toplamTutar.innerText=toplamDeger.toFixed(2);
}
btnEl.addEventListener("click",ToplamHesapla);