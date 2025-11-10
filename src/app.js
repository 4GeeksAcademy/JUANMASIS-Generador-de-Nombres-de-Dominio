let btn = document.getElementById("btn-generate");
let clear = document.getElementById("btn-clear");
let input = document.getElementById("input-base");
let output = document.getElementById("output");

btn.onclick = function() {
  let name = (input.value || "hola").trim().toLowerCase().split(".")[0];
  let tlds = [".com",".net",".org",".es",".us",".shop",".co",".ca",".io",".info",".biz",".mx",".ar",".uk",".fr",".de",".it",".br"];
  let result = "";

  for (let t of tlds) {
    let domain = name + t;
    console.log(domain);
    result += domain + "\n";
  }

  output.textContent = result;
};

clear.onclick = function() {
  output.textContent = "";
  console.clear();
};


