
function showPlans() {
  const wallet = document.getElementById("walletInput").value.trim();
  if (!wallet) {
    alert("Please enter your Litecoin wallet address");
    return;
  }

  const plansSection = document.getElementById("plans");
  plansSection.classList.remove("hidden");
  plansSection.innerHTML = "";

  const plans = [
    { name: "Starter Plan", price: "0.10", return: "0.20", duration: "1 Day", features: ["Instant Mining", "Secure & Fast", "No KYC Required"] },
    { name: "Silver Plan", price: "0.25", return: "0.40", duration: "2 Days", features: ["24/7 Uptime", "Daily Payouts", "Secure System"] },
    { name: "Gold Plan", price: "0.50", return: "0.90", duration: "3 Days", features: ["Higher Profit", "Fast Network", "Priority Support"] },
    { name: "Diamond Plan", price: "1.00", return: "1.75", duration: "5 Days", features: ["Stable ROI", "Fast Withdrawals", "Advanced Security"] },
    { name: "Elite Plan", price: "2.00", return: "3.00", duration: "7 Days", features: ["Dedicated Server", "Email Notifications", "Daily Reports"] },
    { name: "Ultimate Plan", price: "5.00", return: "7.50", duration: "10 Days", features: ["Maximum Return", "Full Support", "Zero Fees"] }
  ];

  plans.forEach(plan => {
    const card = document.createElement("div");
    card.className = "plan-card";
    card.innerHTML = `
      <div class="plan-title">${plan.name}</div>
      <p><strong>Price:</strong> ${plan.price} LTC</p>
      <p><strong>Daily Return:</strong> ${plan.return} LTC</p>
      <p><strong>Duration:</strong> ${plan.duration}</p>
      <ul>${plan.features.map(f => `<li>• ${f}</li>`).join('')}</ul>
      <button onclick="alert('Plan selected: ${plan.name}\nWallet: ${wallet}')">Buy Now</button>
    `;
    plansSection.appendChild(card);
  });
}
