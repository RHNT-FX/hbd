const tombol = document.querySelector('button');
tombol.addEventListener('click', masuk);

function masuk() {
  var nama = document.getElementById("nama").value;

  // Validasi nama 
  if (nama.toLowerCase() === "diah") {
    // Tambahkan class "loading" ke tombol
    tombol.classList.add('loading');

    // Simulasikan proses login (misalnya, delay 2 detik)
    setTimeout(() => {
      // Hapus class "loading" setelah selesai
      tombol.classList.remove('loading');

      // Simpan nama di localStorage
      localStorage.setItem("nama", nama);
      // Redirect ke halaman utama (misalnya, main.html)
      window.location.href = "main.html";  
    }, 2000);  

  } else {
    // Tampilkan pesan error
    document.getElementById("error").textContent = "cubaa agi yah ayangg";
  }
}