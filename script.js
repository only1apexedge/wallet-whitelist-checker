document.addEventListener("DOMContentLoaded", () => {
    loadHistory();
});

function checkWhitelist() {
    const walletInput = document.getElementById("walletInput").value.trim();
    const messageEl = document.getElementById("message");

    clearMessage();

    if (!walletInput || walletInput.length < 10) {
        showMessage("⚠ Invalid wallet format. Try again.", "red");
        return;
    }

    const ethPattern = /^0x[a-fA-F0-9]{40}$/;
    const btcPattern = /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/;
    const solPattern = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;

    if (!(ethPattern.test(walletInput) || btcPattern.test(walletInput) || solPattern.test(walletInput))) {
        showMessage("⚠ Enter a valid wallet (ETH, BTC, SOL).", "red");
        return;
    }

    showMessage("⏳ Checking...", "blue");

    setTimeout(() => {
        const normalizedWhitelist = WHITELIST_DATA.map(addr => addr.toLowerCase());
        if (normalizedWhitelist.includes(walletInput.toLowerCase())) {
            showMessage("✅ Your wallet is whitelisted!", "green");
        } else {
            showMessage("❌ Your wallet is NOT whitelisted.", "red");
        }
    }, 1500);
}

function showMessage(text, color) {
    const messageEl = document.getElementById("message");
    messageEl.innerText = text;
    messageEl.style.color = color;
    messageEl.style.opacity = 1;
    setTimeout(() => {
        messageEl.style.opacity = 0;
    }, 2000);
}

function clearMessage() {
    document.getElementById("message").innerText = "";
}
