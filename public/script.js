const BASE_URL = "http://localhost:3000/yafet";

async function getQuotes() {
    const author = document.getElementById("authorInput").value;

    let url = BASE_URL;
    if (author) {
        url += `?author=${encodeURIComponent(author)}`;
    }

    const res = await fetch(url);
    const data = await res.json();

    if (data.length === 0) {
        document.getElementById("quote").innerText = "No quotes found";
        document.getElementById("author").innerText = "";
        return;
    }

    document.getElementById("quote").innerText = data[0].quote;
    document.getElementById("author").innerText = "- " + (data[0].author || "Unknown");
}

async function getRandomQuote() {
    const res = await fetch(BASE_URL);
    const data = await res.json();

    const random = data[Math.floor(Math.random() * data.length)];

    document.getElementById("quote").innerText = random.quote;
    document.getElementById("author").innerText = "- " + (random.author || "Unknown");
}
