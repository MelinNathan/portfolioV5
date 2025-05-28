//FACTO INPUT

const factoInput = document.getElementById('facto')
const factoResult = document.getElementById('factoResult');

factoInput.addEventListener('input', function () {
    const n = parseInt(factoInput.value, 10);
    factoResult.textContent = facto(n);
});

//POWER INPUT

const powerP = document.getElementById('powerBase')
const powerN = document.getElementById('powerExpo')
const powerResult = document.getElementById('powerResult');

powerP.addEventListener('input', function () {
    const p = parseInt(powerP.value);
    const n = parseInt(powerN.value);
    powerResult.textContent = power(p, n)
})
powerN.addEventListener('input', function () {
    const p = parseInt(powerP.value);
    const n = parseInt(powerN.value);
    powerResult.textContent = power(p, n)
})

//PERMUTATION INPUT

permN = document.getElementById('permN')
permK = document.getElementById('permK')
const permResult = document.getElementById('permResult');

permN.addEventListener('input', function () {
    const n = parseInt(permN.value);
    const k = parseInt(permK.value);
    permResult.textContent = permutation(n, k)
})
permK.addEventListener('input', function () {
    const n = parseInt(permN.value);
    const k = parseInt(permK.value);
    permResult.textContent = permutation(n, k)
})