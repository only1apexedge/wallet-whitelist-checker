/*******************************************************/
/*           Maximals NFT Whitelist Checker            */
/*******************************************************/

/* Global Variables */
let whitelist = (typeof WHITELIST_DATA !== "undefined") ? WHITELIST_DATA : [];

document.addEventListener("DOMContentLoaded", () => {
    loadHistory();
});

function checkWhitelist() {
    const walletInput = document.getElementById("walletInput").value.trim();
    const messageEl = document.getElementById("message");

    clearMessage();

    if (!walletInput || walletInput.length < 10) {
        showMessage("⚠ Invalid wallet address format.", "red");
        return;
    }

    const ethRegex = /^0x[a-fA-F0-9]{40}$/;
    const btcRegex = /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/;
    const solRegex = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;

    if (!(ethRegex.test(walletInput) || btcRegex.test(walletInput) || solRegex.test(walletInput))) {
        showMessage("⚠ Enter a valid wallet address.", "red");
        return;
    }

    showMessage("⏳ Checking...", "blue");

    setTimeout(() => {
        const normalizedInput = walletInput.toLowerCase();
        const normalizedWhitelist = whitelist.map(addr => addr.toLowerCase());

        if (normalizedWhitelist.includes(normalizedInput)) {
            showMessage("✅ Your wallet is whitelisted!", "green");
        } else {
            showMessage("❌ Your wallet is NOT whitelisted.", "red");
        }

        updateHistory(walletInput);
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

/* Local Storage for History */
function updateHistory(wallet) {
    let history = JSON.parse(localStorage.getItem("checkedHistory")) || [];
    if (!history.includes(wallet)) {
        history.unshift(wallet);
        if (history.length > 5) history = history.slice(0, 5);
        localStorage.setItem("checkedHistory", JSON.stringify(history));
    }
}

function loadHistory() {
    let history = JSON.parse(localStorage.getItem("checkedHistory")) || [];
}
