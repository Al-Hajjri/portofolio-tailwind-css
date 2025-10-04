//harmburger
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop
    const toTop = document.querySelector('#to-top');

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden')
        toTop.classList.add('flex')
    }else{
        header.classList.remove('navbar-fixed')
        toTop.classList.remove('flex')
        toTop.classList.add('hidden')
    }
}

// klik di luar hamburger
window.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navMenu.contains(e.target)){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden')
    }
})

// --- Certificate Show More/Less ---
document.addEventListener('DOMContentLoaded', function () {
    const certificatesGrid = document.getElementById('certificates-grid');
    // Pastikan grid ada sebelum melanjutkan
    if (!certificatesGrid) return;

    const allCertificates = Array.from(certificatesGrid.getElementsByClassName('certificate-item'));
    const showMoreContainer = document.getElementById('show-more-container');
    const showMoreBtn = document.getElementById('show-more-btn');
    const btnText = document.getElementById('btn-text');
    const btnArrow = document.getElementById('btn-arrow');
    
    const certificatesToShowInitially = 6;
    let isShowingAll = false;

    // Tampilkan tombol hanya jika ada sertifikat yang perlu disembunyikan
    if (allCertificates.length > certificatesToShowInitially) {
        showMoreContainer.style.display = 'block';
    }

    // Sembunyikan sertifikat yang berlebih saat halaman dimuat
    allCertificates.forEach((cert, index) => {
        if (index >= certificatesToShowInitially) {
            cert.style.display = 'none';
        }
    });

    // Tambahkan event listener ke tombol
    showMoreBtn.addEventListener('click', () => {
        isShowingAll = !isShowingAll;

        allCertificates.forEach((cert, index) => {
            if (index >= certificatesToShowInitially) {
                cert.style.display = isShowingAll ? 'block' : 'none';
            }
        });

        if (isShowingAll) {
            btnText.textContent = 'Tampilkan Lebih Sedikit';
            btnArrow.style.transform = 'rotate(180deg)';
        } else {
            btnText.textContent = 'Tampilkan Lebih Banyak';
            btnArrow.style.transform = 'rotate(0deg)';
        }
    });
});

const tabs = document.querySelectorAll(".tab-btn");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((btn) => {
        btn.classList.remove("bg-primary", "text-white");
        btn.classList.add("bg-gray-200", "text-gray-700");
      });
      tab.classList.add("bg-primary", "text-white");
      tab.classList.remove("bg-gray-200", "text-gray-700");

      contents.forEach((c) => c.classList.add("hidden"));
      document.querySelector("#tab-" + tab.dataset.tab).classList.remove("hidden");
    });
  });