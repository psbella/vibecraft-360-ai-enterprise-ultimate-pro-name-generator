document.addEventListener('DOMContentLoaded', () => {
    // Generar primer nombre
    UI.displayName(Generators.generate());
    
    // Botones
    document.getElementById('generateBtn').onclick = () => {
        UI.displayName(Generators.generate());
    };
    
    document.getElementById('darkModeBtn').onclick = () => {
        document.body.classList.toggle('dark-founder');
        showToast(document.body.classList.contains('dark-founder') ? '🌙 Dark Founder Mode' : '☀️ Light Mode');
    };
    
    // LinkedIn export
    document.getElementById('linkedinBtn').onclick = () => {
        const name = UI.getCurrentName();
        if (!name) return;
        const text = `Founder & CEO at ${name}\n\n🚀 Disrupting the synergy industry.\nPre-seed open. DM for deck.\n#StartupLife`;
        copyToClipboard(text);
        showToast('💼 LinkedIn post copied!');
    };
    
    // Tabs
    document.querySelectorAll('.tab').forEach(btn => {
        btn.onclick = () => UI.switchTab(btn.dataset.tab);
    });
    
    showToast('🦄 VIBECRAFT ULTRA · SPACE to generate');
});

// Easter egg: type "falopa"
let typed = '';
document.addEventListener('keypress', e => {
    typed += e.key.toLowerCase();
    if (typed.includes('falopa')) {
        typed = '';
        showToast('💊 FALOPA MODE ACTIVATED');
        for (let i = 0; i < 3; i++) setTimeout(() => UI.displayName(Generators.generate()), i * 200);
    }
    if (typed.length > 20) typed = typed.slice(-20);
});
