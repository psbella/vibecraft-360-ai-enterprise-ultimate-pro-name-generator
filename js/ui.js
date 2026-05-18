const UI = (function() {
    let currentName = '';
    
    function displayName(name) {
        currentName = name;
        const nameEl = document.getElementById('startupName');
        nameEl.style.opacity = '0';
        setTimeout(() => {
            nameEl.textContent = name;
            nameEl.style.opacity = '1';
            document.getElementById('valuationBadge').textContent = `✨ ${rand(window.CONFIG.VALUE_PHRASES)} ✨`;
        }, 80);
        
        // Unicorn dance
        const u = document.getElementById('unicornEmoji');
        u.classList.add('unicorn-dance');
        setTimeout(() => u.classList.remove('unicorn-dance'), 600);
        
        // Confetti (usando la librería global confetti)
        if (typeof confetti === 'function') {
            confetti({ particleCount: 120, spread: 70, colors: ['#ec4899', '#8b5cf6', '#fde047'] });
            setTimeout(() => confetti({ particleCount: 40, spread: 100 }), 150);
        }
    }
    
    function switchTab(tabId) {
        document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.getElementById(`panel-${tabId}`).classList.add('active');
        document.querySelector(`.tab[data-tab="${tabId}"]`).classList.add('active');
    }
    
    function getCurrentName() { return currentName; }
    
    return { displayName, switchTab, getCurrentName };
})();
