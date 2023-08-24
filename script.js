const h1 = document.querySelector("h1");
console.log(h1.textContent);
h1.textContent = "overskrift";

const h2 = document.querySelector("h2");
console.log(h2.textContent);
h2.textContent = "h2 tekst";

const h3 = document.querySelector("h3");
console.log(h3.textContent);
h3.textContent = "h3 tekst ændret";

const p = document.querySelector("p");
console.log(p.textContent);
p.textContent = "p tekst ændret";

const p2 = document.querySelector("article:nth-child(2) p");
console.log(p.textContent);
p2.innerHTML = "p tekst ændret";

const img = document.querySelector("img");
console.log(img);
