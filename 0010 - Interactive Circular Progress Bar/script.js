let interval;
document.getElementById("loadingContainer").addEventListener("mouseenter", function() {
    let percentage = 1;
    const loadingText = document.getElementById("loadingText");
    const progress = document.getElementById("progressBar");
    clearInterval(interval);
    
    interval = setInterval(() => {
        if (percentage > 100) {
            clearInterval(interval);
            return;
        }
        loadingText.textContent = percentage + "%";
        progress.style.background = `conic-gradient(#1f77b4 ${percentage * 3.6}deg, #ccc ${percentage * 3.6}deg)`;
        percentage++;
    }, 30);
});

document.getElementById("loadingContainer").addEventListener("mouseleave", function() {
    clearInterval(interval);
    document.getElementById("loadingText").textContent = "0%";
    document.getElementById("progressBar").style.background = "conic-gradient(#ccc 0deg, #ccc 360deg)";
});