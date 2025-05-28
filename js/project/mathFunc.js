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

function combinaison(n, k) {
    if (!isNaN(n) && !isNaN(k)) {
        if (n < k) {
            return 'n can\'t be less than k'

        } else {
            let result = facto(n) / facto(k) * facto(n - k);
            return result;
        }
    }
    else {

    }
}

function normalDistrib(t) {
    return 1 / Math.sqrt(2 * Math.PI) * Math.exp(-(1 / 2) * power(t, 2));
}