cat > js/main.js << 'EOF'
document.addEventListener('DOMContentLoaded', () => {
    // Obtener elementos del DOM
    const generateBtn = document.getElementById('generateBtn');
    const chaosBtn = document.getElementById('chaosBtn');
    const saveBtn = document.getElementById('saveBtn');
    const linkedinBtn = document.getElementById('linkedinBtn');
    const tweetBtn = document.getElementById('tweetBtn');
    const darkModeBtn = document.getElementById('darkModeBtn');
    const chaosSelect = document.getElementById('chaosLevel');
    const styleSelect = document.getElementById('nameStyle');
    
    // Estado
    let isDarkFounder = false;
    let savedHistory = JSON.parse(localStorage.getItem('vibecraft_history') || '[]');
    
    // Función para generar y mostrar
    function generateAndDisplay() {
        const chaos = chaosSelect ? chaosSelect.value : 'mild';
        const style = styleSelect ? styleSelect.value : 'random';
        const name = Generators.generate(style, chaos);
        UI.displayName(name, chaos, style);
    }
    
    // Generar 5 nombres en secuencia (chaos x5)
    function chaosX5() {
        let count = 0;
        const interval = setInterval(() => {
            if (count >= 5) { clearInterval(interval); return; }
            generateAndDisplay();
            count++;
        }, 350);
    }
    
    // Guardar nombre en historial
    function saveName() {
        const name = UI.getCurrentName();
        if (!name || name === '⚡ press GENERATE') {
            alert('Generate a name first!');
            return;
        }
        const entry = {
            name: name,
            tier: document.getElementById('nameTier')?.textContent || 'TIER ?',
            timestamp: new Date().toLocaleString()
        };
        savedHistory.unshift(entry);
        if (savedHistory.length > 100) savedHistory.pop();
        localStorage.setItem('vibecraft_history', JSON.stringify(savedHistory));
        showToast('❤️ Saved!');
        
        if (typeof confetti === 'function') {
            confetti({ particleCount: 30, spread: 40, colors: ['#00ffcc'] });
        }
    }
    
    // Exportar a LinkedIn
    function exportToLinkedIn() {
        const name = UI.getCurrentName();
        if (!name || name === '⚡ press GENERATE') {
            alert('Generate a name first!');
            return;
        }
        const text = `Founder & CEO at ${name}\n\n🚀 Disrupting the synergy industry with our proprietary AI-first platform.\n\nPre-seed round open. DM for deck.\n\n#StartupLife #Disruption #Vibes`;
        navigator.clipboard.writeText(text);
        showToast('💼 LinkedIn post copied!');
        if (typeof confetti === 'function') {
            confetti({ particleCount: 40, spread: 50, colors: ['#0077b5'] });
        }
    }
    
    // Exportar a Twitter
    function exportToTwitter() {
        const name = UI.getCurrentName();
        if (!name || name === '⚡ press GENERATE') {
            alert('Generate a name first!');
            return;
        }
        const text = `🦄 Just discovered my unicorn startup name: "${name}"\n\nPre-seed open. The future is now.\n\n#StartupLife #Vibes`;
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    }
    
    // Dark mode
    function toggleDarkFounder() {
        isDarkFounder = !isDarkFounder;
        document.body.classList.toggle('dark-founder', isDarkFounder);
        if (darkModeBtn) {
            darkModeBtn.textContent = isDarkFounder ? '☀️ Light Mode' : '🌙 Dark Founder';
        }
        if (typeof confetti === 'function') {
            confetti({ particleCount: 20, spread: 30, colors: ['#ffffff'] });
        }
        showToast(isDarkFounder ? '🌙 Dark Founder Mode' : '☀️ Light Mode');
    }
    
    // Conectar botones
    if (generateBtn) generateBtn.onclick = generateAndDisplay;
    if (chaosBtn) chaosBtn.onclick = chaosX5;
    if (saveBtn) saveBtn.onclick = saveName;
    if (linkedinBtn) linkedinBtn.onclick = exportToLinkedIn;
    if (tweetBtn) tweetBtn.onclick = exportToTwitter;
    if (darkModeBtn) darkModeBtn.onclick = toggleDarkFounder;
    
    // Cambios en selects
    if (chaosSelect) chaosSelect.onchange = generateAndDisplay;
    if (styleSelect) styleSelect.onchange = generateAndDisplay;
    
    // Tabs
    document.querySelectorAll('.tab').forEach(btn => {
        btn.onclick = () => UI.switchTab(btn.dataset.tab);
    });
    
    // Generar primer nombre
    generateAndDisplay();
    
    // Mostrar toast de bienvenida
    setTimeout(() => showToast('🦄 VIBECRAFT ULTRA · SPACE to generate · Type "falopa" for cosmic mode'), 1500);
});

// Easter egg: type "falopa"
let typed = '';
document.addEventListener('keypress', e => {
    typed += e.key.toLowerCase();
    if (typed.includes('falopa')) {
        typed = '';
        showToast('💊 FALOPA MODE ACTIVATED');
        const chaosSelect = document.getElementById('chaosLevel');
        if (chaosSelect) chaosSelect.value = 'cosmic';
        for (let i = 0; i < 3; i++) {
            setTimeout(() => {
                const generateBtn = document.getElementById('generateBtn');
                if (generateBtn) generateBtn.click();
            }, i * 200);
        }
    }
    if (typed.length > 20) typed = typed.slice(-20);
});

// Keyboard shortcut: SPACE
document.addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
    if (e.code === 'Space') {
        e.preventDefault();
        const generateBtn = document.getElementById('generateBtn');
        if (generateBtn) generateBtn.click();
    }
});
EOF
