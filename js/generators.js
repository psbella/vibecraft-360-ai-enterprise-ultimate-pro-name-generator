cat > js/generators.js << 'EOF'
const Generators = (function() {
    const cfg = window.CONFIG;
    
    function rand(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
    
    function getAllSuffixes() {
        return [...cfg.SUFFIXES_TECH, ...cfg.SUFFIXES_CORP, ...cfg.SUFFIXES_AGILE, ...cfg.SUFFIXES_WEB3, ...cfg.SUFFIXES_AI, ""];
    }
    
    function compound() {
        const color = rand(cfg.COLORS);
        const animal = rand(cfg.ANIMALS);
        const suffix = rand(getAllSuffixes());
        if (!suffix) return `${color} ${animal}`;
        return Math.random() > 0.5 ? `${color}${animal}${suffix}` : `${color} ${animal} ${suffix}`;
    }
    
    function verbFirst() {
        const verb = rand(cfg.VERBS);
        const color = rand(cfg.COLORS);
        const suffix = rand(getAllSuffixes());
        if (!suffix) return `${verb} ${color}`;
        return Math.random() > 0.5 ? `${verb}${color}${suffix}` : `${verb} ${color} ${suffix}`;
    }
    
    function latin() {
        const prefixes = [
            "Aequi","Accel","Agilis","Apex","Aqua","Aura","Avia","Axia","Azura","Bene","Brevix",
            "Calcul","Celer","Centri","Chrono","Cogni","Continuum","Convergix","Dext","Digiti",
            "Dyna","Empir","Excelsis","Facil","Fidelis","Fluxus","Fortis","Genio","Glorix",
            "Graviton","Helix","Ignis","Illumin","Impactus","Influx","Integra","Kinesis","Latera",
            "Lenis","Levit","Libera","Lumen","Magnit","Mantis","Matrix","Maxim","Medius","Mentor"
        ];
        const suffixes = ["ix","us","um","a","ae","i","is","os","as","ex","yx","ax","ox","ion","ium"];
        return rand(prefixes) + rand(suffixes);
    }
    
    function acronym() {
        const acronyms = ["VIBE","HUSTLE","GRIND","ALPHA","SIGMA","OMEGA","DELTA","THETA","APEX","ZENITH","NEXUS","FLUX","NOVA","AURA","SYNC","CORE","PULSE","SPARK","FORGE","CRAFT","SHIP"];
        return rand(acronyms);
    }
    
    function numberSoup() {
        const nums = ["3","7","13","42","69","420","1337","0x","v2","v3","2.0","3.0","4.20","365","One","Uno","Primo","Alpha","Zero"];
        const word = rand([...cfg.COLORS, ...cfg.ANIMALS]);
        return Math.random() > 0.5 ? `${word}${rand(nums)}` : `${rand(nums)}${word}`;
    }
    
    function cosmic() {
        const cosmicNames = [
            () => `${rand(cfg.VERBS)}${rand(cfg.COLORS)}${rand(cfg.SUFFIXES_WEB3)}`,
            () => `${rand(cfg.VERBS)} the ${rand(cfg.ANIMALS)}`,
            () => `${rand(cfg.COLORS)} ${rand(cfg.COLORS)} ${rand(cfg.ANIMALS)}`,
            () => `${rand(cfg.VERBS)}${rand(cfg.VERBS)}${rand(cfg.SUFFIXES_AI)}`,
            () => `The ${rand(cfg.COLORS)} ${rand(cfg.ANIMALS)} Experience`,
            () => `${rand(cfg.ANIMALS)} as a Service`
        ];
        return rand(cosmicNames)();
    }
    
    function generate(style = 'random', chaosLevel = 'mild') {
        if (chaosLevel === 'cosmic') return cosmic();
        
        let name;
        switch(style) {
            case 'compound': name = compound(); break;
            case 'verb': name = verbFirst(); break;
            case 'latin': name = latin(); break;
            case 'acronym': name = acronym(); break;
            case 'number': name = numberSoup(); break;
            default: name = rand([compound, verbFirst, latin, acronym, numberSoup])(); break;
        }
        
        if (chaosLevel === 'extreme' && Math.random() > 0.7) {
            name = name.toUpperCase() + " " + rand(cfg.SUFFIXES_WEB3);
        }
        return name;
    }
    
    return { generate };
})();
EOF
