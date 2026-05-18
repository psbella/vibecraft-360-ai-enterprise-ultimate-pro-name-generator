cat > js/ui.js << 'EOF'
const UI = (function() {
    let currentName = '';
    let currentTier = '';
    let generatedCount = 0;
    
    function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
    
    function assignTier(name) {
        const r = Math.random();
        if (r > 0.92) return 'S';
        if (r > 0.75) return 'A';
        if (r > 0.4) return 'B';
        return 'C';
    }
    
    function danceUnicorn(chaosLevel = 'mild') {
        const u = document.getElementById('unicornEmoji');
        u.classList.remove('unicorn-dance');
        if (chaosLevel === 'cosmic') {
            u.textContent = rand(['🦄','💀','👾','🤖','💥','🌀','⚡','🔥','💫','🌈']);
        } else {
            u.classList.add('unicorn-dance');
            u.textContent = '🦄';
        }
        setTimeout(() => {
            u.classList.remove('unicorn-dance');
            u.textContent = '🦄';
        }, 700);
    }
    
    function launchConfetti(chaosLevel = 'mild') {
        if (typeof confetti !== 'function') return;
        
        const count = chaosLevel === 'extreme' ? 200 : chaosLevel === 'cosmic' ? 400 : 120;
        const colors = currentTier === 'S' ? ['#ffd700','#ff8c00']
            : currentTier === 'A' ? ['#ff2fff','#8b00ff']
            : ['#ec4899','#8b5cf6','#fde047'];
        
        confetti({ particleCount: count, spread: 80, origin: { y: 0.6 }, colors });
        
        if (chaosLevel === 'extreme' || chaosLevel === 'cosmic') {
            [0.2, 0.35, 0.5, 0.65].forEach((x, i) => {
                setTimeout(() => confetti({ particleCount: 60, spread: 120, origin: { y: 0.5, x }, colors }), i * 100);
            });
        }
    }
    
    function maybeShowRandomEvent() {
        if (Math.random() > 0.7 && window.CONFIG) {
            const event = rand(window.CONFIG.RANDOM_EVENTS);
            const el = document.createElement('div');
            el.style.cssText = `
                position:fixed; bottom:20px; right:20px; z-index:999;
                background:#1a0f2e; border:1px solid #ff2fff40; border-radius:1rem;
                padding:1rem 1.25rem; font-family:'Space Mono',monospace; font-size:0.7rem;
                color:#e0d0ff; max-width:280px; box-shadow:0 8px 25px rgba(0,0,0,0.5);
                animation:slidein 0.4s ease; line-height:1.5;
            `;
            el.textContent = event;
            document.body.appendChild(el);
            setTimeout(() => el.remove(), 4000);
        }
    }
    
    function displayName(name, chaosLevel = 'mild', style = 'random') {
        currentName = name;
        currentTier = assignTier(name);
        generatedCount++;
        
        const nameEl = document.getElementById('startupName');
        const tierEl = document.getElementById('nameTier');
        const valEl = document.getElementById('valuationBadge');
        const counterEl = document.getElementById('genCount');
        
        nameEl.style.opacity = '0';
        setTimeout(() => {
            nameEl.textContent = name;
            nameEl.style.opacity = '1';
            
            if (valEl) {
                valEl.textContent = `✨ ${rand(window.CONFIG?.VALUE_PHRASES || ["$420M pre-revenue"])} ✨`;
            }
            
            if (tierEl) {
                tierEl.className = `name-tier tier-${currentTier}`;
                tierEl.textContent = `TIER ${currentTier}`;
                tierEl.style.display = 'inline-block';
            }
            
            if (counterEl) {
                counterEl.textContent = generatedCount;
                document.getElementById('generatedCounter').style.display = 'block';
            }
        }, 80);
        
        danceUnicorn(chaosLevel);
        launchConfetti(chaosLevel);
        maybeShowRandomEvent();
    }
    
    function switchTab(tabId) {
        document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        const panel = document.getElementById(`panel-${tabId}`);
        if (panel) panel.classList.add('active');
        const tab = document.querySelector(`.tab[data-tab="${tabId}"]`);
        if (tab) tab.classList.add('active');
    }
    
    function getCurrentName() { return currentName; }
    function getGeneratedCount() { return generatedCount; }
    
    return { displayName, switchTab, getCurrentName, getGeneratedCount };
})();
EOF
