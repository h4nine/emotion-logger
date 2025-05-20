function toggleLogs() {
  const logBox = document.getElementById("seelogs");
  const isHidden = logBox.style.display === "none";

  logBox.style.display = isHidden ? "block" : "none";

  if (isHidden) {
    displayRecentLogs(); // Only refresh logs if becoming visible
  }
}

function displayRecentLogs() {
  const logsContainer = document.getElementById("recentLogs");
  logsContainer.innerHTML = "";

  const logs = JSON.parse(localStorage.getItem("emotionLogs")) || [];

  if (logs.length === 0) {
    logsContainer.innerHTML = "<p>No emotion logs yet.</p>";
    return;
  }

  logs
    .slice()
    .reverse()
    .forEach((log) => {
      const entry = document.createElement("div");
      entry.innerHTML = `
        <strong>${log.emotion}</strong><br />
        <em>${log.timestamp}</em><br />
        <p>${log.description}</p>
        <hr />
      `;
      logsContainer.appendChild(entry);
    });
}
