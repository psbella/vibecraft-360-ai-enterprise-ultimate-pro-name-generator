const Generators = (function() {
    const { COLORS, ANIMALS, VERBS, SUFFIXES } = window.CONFIG;
    
    function compound() {
        const c = rand(COLORS);
        const a = rand(ANIMALS);
        const s = rand(SUFFIXES);
        return Math.random() > 0.5 ? `${c}${a}${s}` : `${c} ${a} ${s}`;
    }
    
    function verbFirst() {
        const v = rand(VERBS);
        const c = rand(COLORS);
        return `${v}${c}`;
    }
    
    function generate(style = 'random') {
        if (style === 'compound') return compound();
        if (style === 'verb') return verbFirst();
        return Math.random() > 0.5 ? compound() : verbFirst();
    }
    
    return { generate };
})();
