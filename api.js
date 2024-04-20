
 let isPasswordClicked = false;

// Fungsi untuk memeriksa password dan menampilkan teks asli
function checkPassword(school) {
    const passwordSchool = 'SMKN 1 SINDANG'; // Nama sekolah yang merupakan password

    if (school === passwordSchool && !isPasswordClicked) { // Jika sekolah adalah password dan password belum ditekan
        const hiddenText = document.getElementById('hiddenText'); // Elemen teks "Unknown"
        hiddenText.style.display = 'none'; // Sembunyikan teks "Unknown"

        const originalText = document.getElementById('originalText'); // Elemen teks "Ica Nafisah"
        originalText.style.display = 'inline'; // Tampilkan teks "Ica Nafisah"

        isPasswordClicked = true; // Tandai bahwa password sudah ditekan

        // Panggil fungsi untuk mengganti teks "Unknown" menjadi "Ica Nafisah"
        replaceUnknownWithIcaNafisah();
    }
}

function hideThePuzzle(){
    const passwordSchool ='SD LEMAHMEKAR 3';
if (school === passwordSchool && !isPasswordClicked) { // Jika sekolah adalah password dan password belum ditekan
        const hiddenText = document.getElementById('hiddenText'); // Elemen teks "Unknown"
        hiddenText.style.display = 'none'; // Sembunyikan teks "Unknown"

        const originalText = document.getElementById('originalText'); // Elemen teks "Ica Nafisah"
        originalText.style.display = 'inline'; // Tampilkan teks "Ica Nafisah"

        isPasswordClicked = falses; // Tandai bahwa password sudah ditekan

        // Panggil fungsi untuk mengganti teks "Unknown" menjadi "Ica Nafisah"
        replaceIcaNafisahWithUnknown();
    }
}
