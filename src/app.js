
// 🔹 Listas de palabras
let pronoun = ["the", "our", "my", "your"];
let adj = ["great", "cool", "awesome", "modern"];
let noun = ["shop", "store", "app", "food"];
let extensions = [".com", ".net", ".io", ".us"];

// 🔹 Función para generar un dominio aleatorio
function generateDomain() {
  let randomPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
  let randomAdj = adj[Math.floor(Math.random() * adj.length)];
  let randomNoun = noun[Math.floor(Math.random() * noun.length)];
  let randomExt = extensions[Math.floor(Math.random() * extensions.length)];

  let domain = randomPronoun + randomAdj + randomNoun + randomExt;
  console.log(domain); // también lo muestra en consola
  return domain.toLowerCase();
}

// 🔹 Conectar con el HTML
let domainElement = document.getElementById("domain");
let button = document.getElementById("generate");

// 🔹 Mostrar dominio al hacer clic
button.addEventListener("click", function () {
  domainElement.textContent = generateDomain();
});