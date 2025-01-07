function resmiGoster1() {
  document.getElementById("resim1").style.zIndex = 2;
  document.getElementById("resim2").style.zIndex = 1;
  document.getElementById("resim3").style.zIndex = 1;
}
function resmiGoster2() {
  document.getElementById("resim1").style.zIndex = 1;
  document.getElementById("resim2").style.zIndex = 2;
  document.getElementById("resim3").style.zIndex = 1;
}
function resmiGoster3() {
  document.getElementById("resim1").style.zIndex = 1;
  document.getElementById("resim2").style.zIndex = 1;
  document.getElementById("resim3").style.zIndex = 2;
}
document.getElementById("kirmizi").onclick = function () {
  document.body.style.backgroundColor = "red ";
};
document.getElementById("mavi").onclick = function () {
  document.body.style.backgroundColor = "blue    ";
};

document.getElementById("sari").onclick = function () {
  document.body.style.backgroundColor = "yellow ";
};

document.getElementById("Beyaz").onclick = function () {
  document.body.style.backgroundColor = "bisque ";
};
function hesapla() {
  let urun1, urun2, urunfiyat1, urunfiyat2, toplamFiyat, KDV;
  urun1 = document.getElementById("urun1").value;
  urun2 = document.getElementById("urun2").value;
  urunfiyat1 = document.getElementById("urun1Fiyat").value;
  urunfiyat2 = document.getElementById("urun2Fiyat").value;
  urunfiyat1 = Number(urunfiyat1) * Number(urun1);
  urunfiyat2 = Number(urunfiyat2) * Number(urun2);
  toplamFiyat = urunfiyat1 + urunfiyat2;
  KDV = (toplamFiyat / 100) * 20;

  document.getElementById("KDV").textContent = "KDV %20 : " + KDV;
  document.getElementById("total").textContent = "Tutar : " + toplamFiyat;
}
