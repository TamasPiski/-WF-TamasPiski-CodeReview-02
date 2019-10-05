let button = document.querySelector("button")

button.addEventListener("click", function(e) {
    calculateInsurance()
})

function calculateInsurance() {
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    let country = document.getElementById("country").value
    let hp = document.getElementById("hp").value
    let quote 

    switch (country) {
        case 'austria':
          quote = ((hp*100 / age) + 50);
          break;
        case 'hungary':
          quote = ((hp*120 / age) + 100);
          break;
        case 'greece':
          quote = ((hp*150 / (age + 3)) + 50);
          break;
    }
    document.getElementById("calc").innerText = (`Your quote is: ${quote.toFixed(2)} EUR`);
}