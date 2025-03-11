// Home Page
document.getElementById("get-started").addEventListener("click", () => {
  document.getElementById("email-modal").style.display = "flex";
});

// Close Modal
document.querySelectorAll(".close").forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    document.querySelectorAll(".modal").forEach((modal) => {
      modal.style.display = "none";
    });
  });
});

// Email Verification
document.getElementById("verify-email").addEventListener("click", () => {
  const email = document.getElementById("email-input").value;
  if (email) {
    alert("Verification email sent to " + email);
    document.getElementById("email-modal").style.display = "none";
    document.getElementById("bot-modal").style.display = "flex";
  }
});

// Bot Creation
document.getElementById("create-bot").addEventListener("click", () => {
  const botName = document.getElementById("bot-name").value;
  const botToken = document.getElementById("bot-token").value;

  if (botName && botToken) {
    alert("Bot created successfully!");
    document.getElementById("bot-modal").style.display = "none";
    document.getElementById("home-page").style.display = "none";
    document.getElementById("dashboard").style.display = "block";

    // Update Dashboard
    document.getElementById("bot-id").textContent = "123456789"; // Replace with actual bot ID
    document.getElementById("dashboard-bot-name").textContent = botName;
    document.getElementById("bot-status").textContent = "Online 🚀 Coded with IntoSpace!";
    simulateUptime();
    simulateErrors();
  }
});

// Simulate Uptime
function simulateUptime() {
  let uptime = 0;
  setInterval(() => {
    uptime += 1;
    document.getElementById("uptime").textContent = uptime + "s";
  }, 1000);
}

// Simulate Errors
function simulateErrors() {
  const errorList = document.getElementById("error-list");
  setInterval(() => {
    const error = document.createElement("li");
    error.textContent = "Error at " + new Date().toLocaleTimeString();
    errorList.appendChild(error);
  }, 5000);
}
