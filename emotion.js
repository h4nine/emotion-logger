// Fonction pour afficher les logs récents
function displayRecentLogs() {
  const logsContainer = document.getElementById("recentLogs");
  logsContainer.innerHTML = ""; // Vider le conteneur

  const logs = JSON.parse(localStorage.getItem("emotionLogs")) || [];

  if (logs.length === 0) {
    logsContainer.innerHTML = "<p>No emotion logs yet.</p>";
    return;
  }

  logs
    .slice()
    .reverse()
    .forEach((log) => {
      const logItem = document.createElement("div");
      logItem.className = "log-entry";
      logItem.innerHTML = `
        <strong>${log.emotion}</strong><br />
        <em>${log.timestamp}</em><br />
        <p>${log.description}</p>
        <hr />
      `;
      logsContainer.appendChild(logItem);
    });
}

// Fonction d'enregistrement
document.getElementById("logButton").addEventListener("click", function () {
  const emotion = document.getElementById("emotion").value;
  const description = document.getElementById("description").value;

  if (emotion && description) {
    const newLog = {
      emotion: emotion,
      description: description,
      timestamp: new Date().toLocaleString(),
    };

    let logs = JSON.parse(localStorage.getItem("emotionLogs")) || [];
    logs.push(newLog);
    localStorage.setItem("emotionLogs", JSON.stringify(logs));

    alert("Emotion logged successfully!");
    displayRecentLogs();
  } else {
    alert("Please select an emotion and provide a description.");
  }
});

// Charger les logs au chargement de la page
window.addEventListener("DOMContentLoaded", displayRecentLogs);
