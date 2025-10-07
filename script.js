// Ambil elemen tombol dan output
const tombol = document.getElementById("sapa-button");
const output = document.getElementById("output");

// Tambahkan event listener ke tombol
tombol.addEventListener("click", function() {
  output.textContent = "Halo, Rafi! 👋 Selamat datang di website kamu sendiri!";
});
