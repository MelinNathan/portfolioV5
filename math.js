const factoInput = document.getElementById('facto')
const factoResult = document.getElementById('factoResult');

factoInput.addEventListener('input', function () {
    const n = parseInt(factoInput.value, 10);
    factoResult.textContent = facto(n);
});

function facto(n) {
    if (!isNaN(n) && n >= 0) {
        let result = 1;
        for (let i = n; i > 0; i--) {
            result *= i;
        }
        return result

    } else {
        return 'waiting input';
    }
}


const powerP = document.getElementById('powerBase')
const powerN = document.getElementById('powerExpo')
// const powerResult = document.getElementById('powerResult');

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

function power(p, n) {
    if (!isNaN(n) && !isNaN(p)) {

        if (n == 0) {
            powerResult.textContent = 0;
        }
        let result = Math.pow(p, n)
        return result;

    } else {
        return 'waiting input';
    }
}

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

function permutation(n, k) {

    if (!isNaN(n) && !isNaN(k)) {
        if (n < k) {
            return 'n can\'t be less than k'

        } else {
            let result = facto(n) / facto(n - k);
            return result;
        }
    }
    else {
        return 'waiting input';
    }
}