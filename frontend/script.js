async function checkNews() {
    const text = document.getElementById("news").value;
    const resultBox = document.getElementById("result-box");
    const badge = document.getElementById("badge");
    const confidenceText = document.getElementById("confidence-text");
    const progressBar = document.getElementById("progress-bar");

    if (text.trim() === "") {
        alert("Please enter some news text");
        return;
    }

    resultBox.classList.remove("hidden");
    badge.innerHTML = "🔎 Analyzing...";
    confidenceText.innerHTML = "";
    progressBar.style.width = "0%";
    progressBar.style.background = "#fff";

    try {
        const response = await fetch("http://127.0.0.1:5000/predict", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text })
        });

        const data = await response.json();
        const confidence = data.confidence;

        if (data.prediction === "FAKE") {
            badge.innerHTML = "🚨 FAKE NEWS";
            badge.style.color = "#ff4b4b";
            progressBar.style.background = "linear-gradient(90deg, #ff4b4b, #ff0000)";
        } else {
            badge.innerHTML = "✅ REAL NEWS";
            badge.style.color = "#2ecc71";
            progressBar.style.background = "linear-gradient(90deg, #2ecc71, #27ae60)";
        }

        confidenceText.innerHTML = `Confidence: ${confidence}%`;
        progressBar.style.width = confidence + "%";

    } catch (err) {
        badge.innerHTML = "❌ Backend not reachable";
        badge.style.color = "yellow";
    }
}
