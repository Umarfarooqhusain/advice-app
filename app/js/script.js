const button = document.querySelector("#button");
const pera = document.querySelector("#advice");
const adviceId = document.querySelector("#head");
button.addEventListener("click", getAdvice);
const url = "https://api.adviceslip.com/advice";
function getAdvice() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const dat = data.slip;
      pera.innerHTML = `<p>"${dat.advice}"</p>`;

      adviceId.textContent = `ADVICE #${dat.id}`;
    });
}
