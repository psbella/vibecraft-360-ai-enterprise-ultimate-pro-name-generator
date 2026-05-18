cat > js/config.js << 'EOF'
window.CONFIG = {
    COLORS: [
        "Red","Blue","Green","Purple","Dark","Light","Soft","Hard","Liquid","Solid","Wild","Mild",
        "Deep","Shallow","Feral","Tame","Nimbus","Cumulus","Prism","Neon","Polar","Solar","Echo",
        "Swift","Blind","Stealth","Quantum","Phantom","Holographic","Vaporwave","Synthwave","Cyber",
        "Crypto","Decentralized","Distributed","Atomic","Subatomic","Ethereal","Temporal","Spatial",
        "Multidimensional","Psychedelic","Acid","Chaotic","Lawful","Neutral","Void","Null","Undefined",
        "NaN","Infinity","Abstract","Concrete","Plastic","Elastic","Magnetic","Gravitational",
        "Entangled","Mercurial","Venusian","Martian","Jovian","Saturnine","Uranian","Neptunian",
        "Plutonian","Lunar","Nostalgic","Hopeful","Desperate","Caffeinated","Insomniac","Hungover",
        "Motivated","Burnout","Impostor","Synergy","Disruptive","Innovative","BlueSky","Greenwashing",
        "Hyper","Ultra","Mega","Turbo","Super","Omni","Meta","Para","Trans","Neo","Proto","Pseudo",
        "Quasi","Semi","Crypto","Nano","Pico","Femto","Atto","Zetta","Yotta","Giga","Tera","Peta",
        "Exa","Bruh","Sigma","Chad","Based","Cringe","Goated","Frfr","Lowkey","Highkey","Slay",
        "Bussin","Ratio","Rizz","Delulu","Vibey","Snatched","Drip","Flex","Clout","Ghost","Shade",
        "Cap","No-cap","Mid","Fire","Ice","Gucci","Lit","Sic","Woke","Based","Cooked","Toast",
        "Glazed","Frosted","Toasted","Roasted","Smoked","Charred","Scorched","Blazing","Raging"
    ],
    ANIMALS: [
        "Panda","Tiger","Eagle","Fox","Wolf","Hawk","Shark","Lion","Bear","Koala","Sloth","Meerkat",
        "Octopus","Platypus","Narwhal","Falcon","Raven","Viper","Moose","Pigeon","Ferret","Badger",
        "Alpaca","Capybara","Dragon","Phoenix","Griffin","Cerberus","Hydra","Minotaur","Centaur",
        "Pegasus","Unicorn","Chimera","Basilisk","Leviathan","Behemoth","Kraken","Sphinx","Yeti",
        "Bigfoot","LochNess","Djinn","Valkyrie","Fairy","Goblin","Troll","Ogre","Axolotl","Quokka",
        "DikDik","Okapi","Tapir","Manatee","Dugong","Capuchin","Marmoset","Tamarin","SlowLoris",
        "Tarsier","AyeAye","Fossa","Civet","TRex","Triceratops","Velociraptor","Pterodactyl",
        "Mammoth","Sabertooth","Dodo","Megalodon","CryptoSloth","NFTApe","MoonWolf","DiamondHands",
        "Whale","Shrimp","Crab","Squid","Lobster","Plankton","Tardigrade","Blobfish","Mantis",
        "Amoeba","Mitochondria","Electron","Proton","Neutrino","Quark","Boson","Higgs","Gluon",
        "Muon","Tau","Lepton","Meson","Baryon","Fermion","Graviton","Tachyon","Wormhole","Singularity"
    ],
    VERBS: [
        "Launch","Scale","Pivot","Disrupt","Accelerate","Optimize","Leverage","Synergize","Incentivize",
        "Democratize","Monetize","Gamify","Virtualize","Tokenize","Decentralize","Automate","Augment",
        "Deploy","Iterate","Validate","Ideate","Prototype","Hack","Bootstrap","Grind","Hustle","Vibe",
        "Ship","Crush","Obliterate","Transcend","Ascend","Dominate","Conquer","Capture","Unlock",
        "Unleash","Activate","Trigger","Enable","Empower","Transform","Reimagine","Reinvent"
    ],
    SUFFIXES_TECH: ["io","ai","lytics","ify","hub","api","dev","xyz","cloud","scale","stream","sync"],
    SUFFIXES_CORP: ["labs","studio","works","forge","capital","ventures","systems","solutions","group","global"],
    SUFFIXES_AGILE: ["sprint","retro","standup","planning","velocity","scrum","kanban","agile","lean","mvp"],
    SUFFIXES_WEB3: ["chain","token","protocol","dao","defi","nft","web3","crypto","block","hash","wallet","vault"],
    SUFFIXES_AI: ["GPT","LLM","Transformer","Diffuser","Generator","Encoder","Decoder","Neural","Synapse","Cortex"],
    VALUE_PHRASES: [
        "$420M pre-revenue","$69M seed (friends & family)","Unicorn in egg stage",
        "Revenue: vibes & memes","Burn rate: 1 asado per sprint","Series F (of falopa)",
        "Valued at 3 pizzas","EBITDA: hopium","ARR: imaginary","Post-money: dreams",
        "Valuation: yes","Profitability: someday","Runway: until falopa runs out",
        "Unit economics: don't ask","Customer acquisition: aunts & uncles",
        "Churn rate: 100%","Net retention: negative","Gross margin: imaginary",
        "Market cap: 3 brain cells","Liquidity event: winning the lottery"
    ],
    ROASTS: [
        (n) => `"${n}" sounds like a VC's toddler naming their LEGO set.`,
        (n) => `"${n}" has the energy of a 47-slide deck with no revenue slide.`,
        (n) => `If "${n}" raised a Series A, I'm a unicorn.`,
        (n) => `"${n}" — the startup name equivalent of Comic Sans in a job interview.`,
        (n) => `The domain "${n}.io" has been parked since 2016. Poetic.`,
        (n) => `"${n}" fails the "say it at Thanksgiving without dying" test.`,
        (n) => `I asked 10 investors about "${n}". Nine said "interesting." None invested.`,
        (n) => `"${n}" sounds like an AI had a stroke while naming a company.`
    ],
    RANDOM_EVENTS: [
        "🚨 BREAKING: Series A closed at $0 pre-money!",
        "📢 UPDATE: Lead investor is 'thinking about it'",
        "⚠️ ALERT: Technical co-founder just rage-quit",
        "💀 RIP: Domain name was taken (.wtf available)",
        "🎉 MILESTONE: First user signed up (it's the CEO)",
        "📉 NEWS: Runway extended to 6.5 months after cutting coffee",
        "🔥 HOT: Featured in a Medium post nobody will read",
        "💼 BREAKING: YC rejection received, reapplying as 'pivoted'"
    ]
};
EOF
