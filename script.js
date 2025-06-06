async function fetchQuote() {
  const box = document.getElementById("quote-box");
  box.classList.remove("loaded");
  const res = await fetch("quotes.json");
  const data = await res.json();
  const random = data[Math.floor(Math.random() * data.length)];
  document.getElementById("quote").textContent = `"${random.text}"`;
  document.getElementById("author").textContent = random.author
    ? `— ${random.author}`
    : "— Unknown";
  setTimeout(() => box.classList.add("loaded"), 100); // slight delay
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
