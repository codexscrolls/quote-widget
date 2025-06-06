async function fetchQuote() {
  const res = await fetch("https://api.quotable.io/random");
  const data = await res.json();
  document.getElementById("quote").textContent = `"${data.content}"`;
  document.getElementById("author").textContent = `— ${data.author}`;
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
