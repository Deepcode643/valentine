const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const container = document.getElementById("container");

let yesSize = 1;

noBtn.addEventListener("click", () => {
  yesSize += 0.3;
  yesBtn.style.transform = `scale(${yesSize})`;
});

yesBtn.addEventListener("click", () => {
  container.innerHTML = `
    <h1>I knew you’d say YES! 💖</h1>
    <img src="https://media.giphy.com/media/26FLdmIp6wJr91JAI/giphy.gif"
         style="width:300px; margin-top:20px;">
  `;
});
