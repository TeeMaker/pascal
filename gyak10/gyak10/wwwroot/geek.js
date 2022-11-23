var viccek;

window.onload = letoltes()

function letoltes() {
    fetch('./jokes.json')
        .then(response => response.json())
        .then(data => letoltesBef(data))

}


function letoltesBef(d) {
    console.log("Sikeres letoltes!")
    console.log(d)
    for (let i = 0; i <= d.length; i++) {
        ujDiv = document.createElement("div")
        ujDiv.InnerHTML = JSON.stringify(d[i])
        document.getElementById("viccek").appendChild(ujDiv)
    }
    viccek = d;
}