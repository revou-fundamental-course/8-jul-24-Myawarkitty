/*Ini javascript*/

    //Konstanta
    const beratbadan = document.getElementById('input-berat-badan')
    const tinggibadan = document.getElementById('input-tinggi-badan')
    const usia = document.getElementById("input-usia")
    const jeniskelamin = document.getElementsByName("jenis-kelamin")
    const submit = document.getElementById("submit");

    //Link Hubungi Dokter
    document.querySelector('#hubungi-dokter').addEventListener('click', function() {
        const element = document.getElementById('registrasi-online');
        if (element) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });


    
    //Submit
     submit.addEventListener("click", function() { 
         //Inisiasi variabel
         let weightValue = document.getElementById('input-berat-badan').value ;
         let heightValue = document.getElementById('input-tinggi-badan').value ;
         let result = parseFloat(weightValue) /(parseFloat(heightValue)/100)**2;
    
         //Pengelompokan BMI
         if(!isNaN(result)){
             document.getElementById("bmi-result").innerHTML = result;
             if(result < 18.5){
                document.getElementById("hasil-adalah").innerHTML = "Hasil Adalah:";
                document.getElementById("bmi-status").innerHTML = "Anda Kekurangan Berat Badan";
                document.getElementById("golongan-bmi").innerHTML = "Hasil BMI kurang dari 18,5";
                document.getElementById("penjelasan-hasil-bmi").innerHTML = "Anda berada dalam kategori underweight atau berat badan kurang. Cara terbaik untuk meningkatkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menaikkan berat badan hingga batas normal.";
                document.getElementById("bmi-bukan-diagnosis").innerHTML = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.";
                document.getElementById("macam-penyakit").innerHTML = "Beberapa penyakit yang berasal dari kegemukan dan kekurusan";
                document.getElementById("diabetes").innerHTML = "Diabetes";
                document.getElementById("hipertensi").innerHTML = "Hipertensi";
                document.getElementById("sakit-jantung").innerHTML = "Sakit Jantung";
                document.getElementById("osteoarthritis").innerHTML = "Osteoarthritis";
                document.getElementById("download-halodoc").innerHTML = "Konsultasi Ahli Gizi Via Aplikasi";
                document.getElementById("registrasi-online").innerHTML = "Registrasi Online Ahli GIzi";
            }
             else if(result < 25){
                 document.getElementById("hasil-adalah").innerHTML = "Hasil Adalah:";
                 document.getElementById("bmi-status").innerHTML = "Anda Memiliki Berat Badan Ideal";
                 document.getElementById("golongan-bmi").innerHTML = "Hasil BMI di antara 18,5 - 24,9";
                 document.getElementById("penjelasan-hasil-bmi").innerHTML = "Anda berada dalam kategori ideal. Cara terbaik untuk mempertahankan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk mempertahankan berat badan.";
                 document.getElementById("bmi-bukan-diagnosis").innerHTML = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.";
                 document.getElementById("macam-penyakit").innerHTML = "Beberapa penyakit yang berasal dari kegemukan dan kekurusan";
                 document.getElementById("diabetes").innerHTML = "Diabetes";
                 document.getElementById("hipertensi").innerHTML = "Hipertensi";
                 document.getElementById("sakit-jantung").innerHTML = "Sakit Jantung";
                 document.getElementById("osteoarthritis").innerHTML = "Osteoarthritis";
                 document.getElementById("download-halodoc").innerHTML = "Konsultasi Ahli Gizi Via Aplikasi";
                document.getElementById("registrasi-online").innerHTML = "Registrasi Online Ahli GIzi";
                }
             else if(result < 30){
                document.getElementById("hasil-adalah").innerHTML = "Hasil Adalah:";
                 document.getElementById("bmi-status").innerHTML = "Anda Kelebihan Berat Badan";
                 document.getElementById("golongan-bmi").innerHTML = "Hasil BMI di antara 25 - 29,9";
                 document.getElementById("penjelasan-hasil-bmi").innerHTML = "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
                 document.getElementById("bmi-bukan-diagnosis").innerHTML = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.";
                 document.getElementById("macam-penyakit").innerHTML = "Beberapa penyakit yang berasal dari kegemukan dan kekurusan";
                 document.getElementById("diabetes").innerHTML = "Diabetes";
                 document.getElementById("hipertensi").innerHTML = "Hipertensi";
                 document.getElementById("sakit-jantung").innerHTML = "Sakit Jantung";
                 document.getElementById("osteoarthritis").innerHTML = "Osteoarthritis";
                 document.getElementById("download-halodoc").innerHTML = "Konsultasi Ahli Gizi Via Aplikasi";
                document.getElementById("registrasi-online").innerHTML = "Registrasi Online Ahli GIzi";
                }  
             else{
                document.getElementById("hasil-adalah").innerHTML = "Hasil Adalah:";
                 document.getElementById("bmi-status").innerHTML = "Anda Obesitas";
                 document.getElementById("golongan-bmi").innerHTML = "Hasil BMI 30 atau lebih";
                 document.getElementById("penjelasan-hasil-bmi").innerHTML = "Anda berada dalam kategori obesitas. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
                 document.getElementById("bmi-bukan-diagnosis").innerHTML = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.";
                 document.getElementById("macam-penyakit").innerHTML = "Beberapa penyakit yang berasal dari kegemukan dan kekurusan";
                 document.getElementById("diabetes").innerHTML = "Diabetes";
                 document.getElementById("hipertensi").innerHTML = "Hipertensi";
                 document.getElementById("sakit-jantung").innerHTML = "Sakit Jantung";
                 document.getElementById("osteoarthritis").innerHTML = "Osteoarthritis";
                }
         }
        }
 )

    //Tombol Reset
    function reset() {
     document.getElementById("bmi-form").reset();
   }
