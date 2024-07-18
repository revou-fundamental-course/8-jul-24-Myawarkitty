/*Ini javascript*/

function updateResult() {
    let weightValue = document.querySelector('#input-berat-badan').value ;
    console.log(weightValue);
    // jika weightValue tidak sama dengan null dan wajib weightValue tidak sama dengan ''
    weightValue != null && weightValue != ''
        ? document.querySelector('#bmi-result').innerHTML = weightValue
        : alert ('input anda kosong')
}
