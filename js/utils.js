function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function showToast(msg) {
    const el = document.createElement('div');
    el.className = 'toast';
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2500);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    showToast('📋 Copied!');
}
