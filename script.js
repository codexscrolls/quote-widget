async function fetchQuote() {
  const res = await fetch("https://type.fit/api/quotes");
  const data = await res.json();
  const random = data[Math.floor(Math.random() * data.length)];
  document.getElementById("quote").textContent = `"${random.text}"`;
  document.getElementById("author").textContent = random.author
    ? `— ${random.author}`
    : "— Unknown";
}


function copyQuote() {
  const quote = document.getElementById("quote").textContent;
  const author = document.getElementById("author").textContent;
  navigator.clipboard.writeText(`${quote} ${author}`);
  alert("Copied to clipboard!");
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

fetchQuote();
