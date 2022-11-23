window.onload = () => {
    console.log("hello")
}

function fakt(n) {
    if (n === 1 || n === 0) {
        return 1;
    } else {
        return n * fakt(n - 1);
    }
}

function binomialCoeff(n, k) {
    let res = 1;

    if (k > n - k)
        k = n - k;

    for (let i = 0; i < k; ++i) {
        res *= (n - i);
        res /= (i + 1);
    }
    return res;
}

for (var sor = 0; sor < 10; sor++) {
    ujDiv = document.createElement("div")
    ujDiv.classList.add("sor")
    document.getElementById("pascal").appendChild(ujDiv)
    for (var oszlop = 0; oszlop <= sor; oszlop++) {
        ujDivElem = document.createElement("div")
        ujDivElem.classList.add("elem")
        //ujDivElem.innerHTML = `${sor}:${oszlop}`
        ujDivElem.innerText = binomialCoeff(sor, oszlop)
        ujDiv.appendChild(ujDivElem)
    }
}