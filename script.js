/**
 * Elementrix SPA Core Logic
 */

// 1. DATA SCHEMA (The "Master List")
const elementrixData = {
    // ---- LOW TIER ELEMENTS (1pt) ----
    "hydrogen": {
        tier: "low", atomicNumber: 1, valency: "+1 or -1", slug: "hydrogen", name: "Hydrogen", symbol: "H", type: "Element", groupClass: "nonmetal",
        image: "cards/Element cards/Hydrogen.webp", explanation: "Low Tier Element (1 pt). Simple 1:1 ionic bonds. Great starter card.",
        actions: "Bond: Combine with other elements in the RZ to reach zero valency.",
        funFacts: ["Most abundant element in the universe.", "The lightest gas known.", "Highly flammable, used as rocket fuel."], active: true
    },
    "lithium": {
        tier: "low", atomicNumber: 3, valency: "+1", slug: "lithium", name: "Lithium", symbol: "Li", type: "Element", groupClass: "alkali-metal",
        image: "cards/Element cards/Lithium.webp", explanation: "Low Tier Element (1 pt). Highly reactive metal.",
        actions: "Bond: Combine with other elements in the RZ to reach zero valency.",
        funFacts: ["Used in rechargeable batteries.", "Lightest of all solid metals.", "Soft enough to be cut with a knife."], active: true
    },
    "sodium": {
        tier: "low", atomicNumber: 11, valency: "+1", slug: "sodium", name: "Sodium", symbol: "Na", type: "Element", groupClass: "alkali-metal",
        image: "cards/Element cards/Sodium.webp", explanation: "Low Tier Element (1 pt). Highly reactive metal.",
        actions: "Bond: Combine with other elements in the RZ to reach zero valency.",
        funFacts: ["Half of table salt (NaCl).", "Explodes when it comes into contact with water.", "Burns with a bright yellow flame."], active: true
    },
    "potassium": {
        tier: "low", atomicNumber: 19, valency: "+1", slug: "potassium", name: "Potassium", symbol: "K", type: "Element", groupClass: "alkali-metal",
        image: "cards/Element cards/Potassiun.webp", explanation: "Low Tier Element (1 pt). Highly reactive metal.",
        actions: "Bond: Combine with other elements in the RZ to reach zero valency.",
        funFacts: ["Found in bananas; vital electrolyte."], active: true
    },
    "fluorine": {
        tier: "low", atomicNumber: 9, valency: "-1", slug: "fluorine", name: "Fluorine", symbol: "F", type: "Element", groupClass: "halogen",
        image: "cards/Element cards/Fluroine.webp", explanation: "Low Tier Element (1 pt). Highly reactive halogen.",
        actions: "Bond: Combine with other elements in the RZ to reach zero valency.",
        funFacts: ["Most electronegative element."], active: true
    },
    "chlorine": {
        tier: "low", atomicNumber: 17, valency: "-1", slug: "chlorine", name: "Chlorine", symbol: "Cl", type: "Element", groupClass: "halogen",
        image: "cards/Element cards/Chlorine.webp", explanation: "Low Tier Element (1 pt). Highly reactive halogen.",
        actions: "Bond: Combine with other elements in the RZ to reach zero valency.",
        funFacts: ["Keeps swimming pools clean."], active: true
    },
    "bromine": {
        tier: "low", atomicNumber: 35, valency: "-1", slug: "bromine", name: "Bromine", symbol: "Br", type: "Element", groupClass: "halogen",
        image: "cards/Element cards/Bromine.webp", explanation: "Low Tier Element (1 pt). Highly reactive halogen.",
        actions: "Bond: Combine with other elements in the RZ to reach zero valency.",
        funFacts: ["Used in flame retardants."], active: true
    },
    "iodine": {
        tier: "low", atomicNumber: 53, valency: "-1", slug: "iodine", name: "Iodine", symbol: "I", type: "Element", groupClass: "halogen",
        image: "cards/Element cards/Iodine.webp", explanation: "Low Tier Element (1 pt). Highly reactive halogen.",
        actions: "Bond: Combine with other elements in the RZ to reach zero valency.",
        funFacts: ["Essential for thyroid function."], active: true
    },

    // ---- MEDIUM TIER ELEMENTS (3pts) ----
    "magnesium": {
        tier: "medium", atomicNumber: 12, valency: "+2", slug: "magnesium", name: "Magnesium", symbol: "Mg", type: "Element", groupClass: "alkaline-earth",
        image: "cards/Element cards/Magnesium.webp", explanation: "Medium Tier Element (3 pts). Form 1:2 or 2:1 bonds.",
        actions: "Bond: Combine with other elements in the RZ. Requires more strategic play.",
        funFacts: ["Makes fireworks burn bright white."], active: true
    },
    "calcium": {
        tier: "medium", atomicNumber: 20, valency: "+2", slug: "calcium", name: "Calcium", symbol: "Ca", type: "Element", groupClass: "alkaline-earth",
        image: "cards/Element cards/Calcium.webp", explanation: "Medium Tier Element (3 pts). Form 1:2 or 2:1 bonds.",
        actions: "Bond: Combine with other elements in the RZ. Requires more strategic play.",
        funFacts: ["Builds bones and teeth."], active: true
    },
    "barium": {
        tier: "medium", atomicNumber: 56, valency: "+2", slug: "barium", name: "Barium", symbol: "Ba", type: "Element", groupClass: "alkaline-earth",
        image: "cards/Element cards/Barium.webp", explanation: "Medium Tier Element (3 pts). Form 1:2 or 2:1 bonds.",
        actions: "Bond: Combine with other elements in the RZ. Requires more strategic play.",
        funFacts: ["Used in medical X-ray contrast."], active: true
    },
    "oxygen": {
        tier: "medium", atomicNumber: 8, valency: "-2", slug: "oxygen", name: "Oxygen", symbol: "O", type: "Element", groupClass: "nonmetal",
        image: "cards/Element cards/Oxygen.webp", explanation: "Medium Tier Element (3 pts). Form 1:2 or 2:1 bonds.",
        actions: "Bond: Combine with other elements in the RZ. Requires more strategic play.",
        funFacts: ["Found in water, rust, and breath."], active: true
    },
    "sulfur": {
        tier: "medium", atomicNumber: 16, valency: "-2", slug: "sulfur", name: "Sulfur", symbol: "S", type: "Element", groupClass: "nonmetal",
        image: "cards/Element cards/Suldur.webp", explanation: "Medium Tier Element (3 pts). Form 1:2 or 2:1 bonds.",
        actions: "Bond: Combine with other elements in the RZ. Requires more strategic play.",
        funFacts: ["Responsible for the rotten egg smell."], active: true
    },
    
    // Polyatomics (Mocked with fake atomic numbers for the grid layout, or we keep them off grid)
    "sulfate": {
        tier: "medium", atomicNumber: "SO4", valency: "-2", slug: "sulfate", name: "Sulfate", symbol: "SO₄²⁻", type: "Action", groupClass: "functional-group",
        image: "cards/Element cards/Suflate.webp", explanation: "Polyatomic Ion. Medium Tier (3 pts).",
        actions: "Bond: Needs Heat card to be in the RZ.",
        funFacts: ["Found in acid rain.", "Often forms insoluble salts like Barium Sulfate.", "Key component in many fertilizers."], active: true
    },
    "carbonate": {
        tier: "medium", atomicNumber: "CO3", valency: "-2", slug: "carbonate", name: "Carbonate", symbol: "CO₃²⁻", type: "Action", groupClass: "functional-group",
        image: "cards/Element cards/Carbonate.webp", explanation: "Polyatomic Ion. Medium Tier (3 pts).",
        actions: "Bond: Needs Heat card to be in the RZ.",
        funFacts: ["In baking soda and limestone.", "Reacts with acids to release carbon dioxide.", "Vital for the Earth's carbon cycle."], active: true
    },
    "hydroxide": {
        tier: "medium", atomicNumber: "OH", valency: "-1", slug: "hydroxide", name: "Hydroxide", symbol: "OH⁻", type: "Action", groupClass: "functional-group",
        image: "cards/Element cards/Hydroxide.webp", explanation: "Polyatomic Ion. Medium Tier (3 pts).",
        actions: "Bond: Combines to form bases.",
        funFacts: ["Present in all bases and cleaning products.", "Reacts with hydrogen ions to form water.", "Essential for soap making (saponification)."], active: true
    },

    // ---- HIGH TIER ELEMENTS (5pts) ----
    "iron": {
        tier: "high", atomicNumber: 26, valency: "+2 / +3", slug: "iron", name: "Iron", symbol: "Fe", type: "Element", groupClass: "transition-metal",
        image: "cards/Element cards/Iron.webp", explanation: "High Tier Element (5 pts). Variable valency.",
        actions: "Bond: You must announce out loud which valency you are using before placing.",
        funFacts: ["Gives blood its red color (hemoglobin)."], active: true
    },
    "copper": {
        tier: "high", atomicNumber: 29, valency: "+1 / +2", slug: "copper", name: "Copper", symbol: "Cu", type: "Element", groupClass: "transition-metal",
        image: "cards/Element cards/Copper.webp", explanation: "High Tier Element (5 pts). Variable valency.",
        actions: "Bond: You must announce out loud which valency you are using before placing.",
        funFacts: ["Used in electrical wiring; Statue of Liberty."], active: true
    },
    "zinc": {
        tier: "high", atomicNumber: 30, valency: "+2", slug: "zinc", name: "Zinc", symbol: "Zn", type: "Element", groupClass: "transition-metal",
        image: "cards/Element cards/Zinc.webp", explanation: "High Tier Element (5 pts).",
        actions: "Bond: Combine with other elements in the RZ.",
        funFacts: ["In sunscreen; protects against UV radiation."], active: true
    },
    "silver": {
        tier: "high", atomicNumber: 47, valency: "+1", slug: "silver", name: "Silver", symbol: "Ag", type: "Element", groupClass: "transition-metal",
        image: "cards/Element cards/Silver.webp", explanation: "High Tier Element (5 pts).",
        actions: "Bond: Combine with other elements in the RZ.",
        funFacts: ["Used in photography and jewelry."], active: true
    },
    "aluminum": {
        tier: "high", atomicNumber: 13, valency: "+3", slug: "aluminum", name: "Aluminum", symbol: "Al", type: "Element", groupClass: "post-transition",
        image: "cards/Element cards/Aluminium.webp", explanation: "High Tier Element (5 pts).",
        actions: "Bond: Combine with other elements in the RZ.",
        funFacts: ["Most common metal in Earth's crust."], active: true
    },
    "nitrogen": {
        tier: "high", atomicNumber: 7, valency: "-3", slug: "nitrogen", name: "Nitrogen", symbol: "N", type: "Element", groupClass: "nonmetal",
        image: "cards/Element cards/Nitrogen.webp", explanation: "High Tier Element (5 pts).",
        actions: "Bond: Combine with other elements in the RZ.",
        funFacts: ["Makes up 78% of the air you breathe."], active: true
    },
    "phosphorus": {
        tier: "high", atomicNumber: 15, valency: "-3", slug: "phosphorus", name: "Phosphorus", symbol: "P", type: "Element", groupClass: "nonmetal",
        image: "cards/Element cards/Phosphorus.webp", explanation: "High Tier Element (5 pts).",
        actions: "Bond: Combine with other elements in the RZ.",
        funFacts: ["Backbone of DNA; used in matches."], active: true
    },

    // ---- ACTION CARDS ----
    "displacement": {
        tier: "action", atomicNumber: "A1", valency: "---", slug: "displacement", name: "Single Displacement", symbol: "SD", type: "Action", groupClass: "action",
        image: "cards/Actioncards/Single displacement.webp", explanation: "A more reactive metal replaces a less reactive one in a compound.",
        actions: "Swap one metal card in the RZ with a metal card from your hand of equal or higher reactivity tier.",
        funFacts: ["High tier can replace High, Medium, or Low", "Medium tier can replace Medium or Low", "The displaced card goes into your hand"], active: true
    },
    "skip": {
        tier: "action", atomicNumber: "A2", valency: "---", slug: "skip", name: "Inert Gas / Skip", symbol: "IG", type: "Action", groupClass: "action",
        image: "cards/Actioncards/Inert Gas.webp", explanation: "Noble gases are almost entirely non-reactive. They create a 'dead zone'.",
        actions: "The next player in turn order is skipped. They simply draw their card and end their turn.",
        funFacts: ["Helium, Neon, and Argon are famous inert gases.", "They have completely full outer electron shells.", "Neon signs glow due to electrified noble gases."], active: true
    },
    "reverse": {
        tier: "action", atomicNumber: "A3", valency: "---", slug: "reverse", name: "Equilibrium", symbol: "EQ", type: "Action", groupClass: "action",
        image: "cards/Actioncards/Equilibrum.webp", explanation: "Some reactions are reversible and can shift direction.",
        actions: "Reverse the order of play. Clockwise becomes counter-clockwise.",
        funFacts: ["Le Chatelier's Principle predicts how equilibrium shifts."], active: true
    },
    "steal": {
        tier: "action", atomicNumber: "A4", valency: "---", slug: "steal", name: "Electronegativity", symbol: "EN", type: "Action", groupClass: "action",
        image: "cards/Actioncards/Electronegativity.webp", explanation: "Highly electronegative atoms pull electrons away from other atoms.",
        actions: "Choose one opponent. Draw 2 cards randomly from their hand. Keep one; discard the other into the RZ.",
        funFacts: ["Fluorine is the most electronegative element."], active: true
    },
    "defense": {
        tier: "action", atomicNumber: "A5", valency: "---", slug: "defense", name: "Electron Shield", symbol: "ES", type: "Action", groupClass: "action",
        image: "cards/Actioncards/Electron Shield.webp", explanation: "A full outer electron shell is extremely stable and difficult to disrupt.",
        actions: "For the next 2 full rounds, your Stability Points cannot be targeted by Electronegativity or Snatch attempts.",
        funFacts: ["Full valence shells define noble gases."], active: true
    },
    "draw2": {
        tier: "action", atomicNumber: "A6", valency: "---", slug: "draw2", name: "Concentration Boost", symbol: "CB", type: "Action", groupClass: "action",
        image: "cards/Actioncards/Concentration boost.webp", explanation: "Higher concentration of reactants increases the frequency of collisions.",
        actions: "Immediately draw 2 cards from the deck and take one additional Phase II action this turn.",
        funFacts: ["Reaction rates increase with concentration."], active: true
    },
    "reset": {
        tier: "action", atomicNumber: "A7", valency: "---", slug: "reset", name: "Radioactive Decay", symbol: "RD", type: "Action", groupClass: "action",
        image: "cards/Actioncards/Radioactive decay.webp", explanation: "Unstable atomic nuclei break apart, releasing energy and clearing the field.",
        actions: "Discard all cards currently in the RZ. Every player must discard 1 card from their hand.",
        funFacts: ["Alpha, beta, and gamma are forms of decay."], active: true
    },

    // ---- CONDITION CARDS ----
    "heat": {
        tier: "action", atomicNumber: "C1", valency: "---", slug: "heat", name: "Heat", symbol: "Δ", type: "Action", groupClass: "condition",
        image: "cards/condition/heat.webp", explanation: "Many bonds require activation energy to begin.",
        actions: "MUST be present in the RZ to play any polyatomic ion cards. Remains in the RZ until stabilized.",
        funFacts: ["Activation Energy is the 'spark' for reactions."], active: true
    },
    "catalyst": {
        tier: "action", atomicNumber: "C2", valency: "---", slug: "catalyst", name: "Catalyst", symbol: "Cat", type: "Action", groupClass: "condition",
        image: "cards/condition/CATALYST.webp", explanation: "Catalysts provide an alternative pathway, speeding up the bonding process.",
        actions: "While present in the RZ, the active player may play TWO element cards during Phase II instead of one.",
        funFacts: ["Enzymes are biological catalysts."], active: true
    },
    "shield_he": {
        tier: "action", atomicNumber: "Ng1", valency: "---", slug: "shield_he", name: "Helium Shield", symbol: "He", type: "Action", groupClass: "noble-gas",
        image: "cards/Shields/helium.webp", explanation: "Noble gases have full outer electron shells, nature's perfect shield.",
        actions: "Out-of-turn play: Cancel any Action card that targets you entirely. Discard after use.",
        funFacts: ["Helium is so light it escapes Earth's gravity."], active: true
    }
};

// Map atomic numbers to grid positions [col, row]
function getGridPosition(atomicNumber) {
    const layout = {
        1: [1, 1], 2: [18, 1],
        3: [1, 2], 4: [2, 2], 5: [13, 2], 6: [14, 2], 7: [15, 2], 8: [16, 2], 9: [17, 2], 10: [18, 2],
        11: [1, 3], 12: [2, 3], 13: [13, 3], 14: [14, 3], 15: [15, 3], 16: [16, 3], 17: [17, 3], 18: [18, 3]
    };
    
    if (layout[atomicNumber]) { return layout[atomicNumber]; }
    
    if (atomicNumber >= 19 && atomicNumber <= 36) return [(atomicNumber - 19) % 18 + 1, 4];
    if (atomicNumber >= 37 && atomicNumber <= 54) return [(atomicNumber - 37) % 18 + 1, 5];
    
    if (atomicNumber >= 55 && atomicNumber <= 86) {
        if(atomicNumber >= 57 && atomicNumber <= 71) return [3, 9]; 
        let offset = atomicNumber < 57 ? 55 : 69;
        return [(atomicNumber - offset) % 18 + 1, 6];
    }
    if (atomicNumber >= 87 && atomicNumber <= 118) {
        if(atomicNumber >= 89 && atomicNumber <= 103) return [3, 10]; 
        let offset = atomicNumber < 89 ? 87 : 101;
        return [(atomicNumber - offset) % 18 + 1, 7];
    }
    
    return [1, 1]; 
}

const elementSymbols = ["x", "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"];
const elementNames = ["", "Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", "Sodium", "Magnesium", "Aluminum", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon", "Cesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury", "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Darmstadtium", "Roentgenium", "Copernicium", "Nihonium", "Flerovium", "Moscovium", "Livermorium", "Tennessine", "Oganesson"];


document.addEventListener("DOMContentLoaded", () => {
    initThemeToggle();
    initTabRouting();
    
    renderPeriodicTable();
    renderActionDeck();
    initActionDeckFilters();
    initGameTracker();
    
    document.getElementById("btn-close-overlay").addEventListener("click", closeCard);
    
    // Allow clicking on the background overlay to close the modal
    document.getElementById("detail-overlay").addEventListener("click", (e) => {
        if(e.target.id === "detail-overlay") {
            closeCard();
        }
    });

    window.addEventListener("hashchange", handleHashRouting);
    
    if(window.location.hash) {
        handleHashRouting();
    }
});

function initTabRouting() {
    const tabs = document.querySelectorAll(".nav-tab");
    const panels = document.querySelectorAll(".view-panel");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active-tab"));
            tab.classList.add("active-tab");

            const targetId = tab.getAttribute("data-target");
            panels.forEach(p => {
                if(p.id === targetId) {
                    p.classList.add("active-panel");
                } else {
                    p.classList.remove("active-panel");
                }
            });
        });
    });
}

function initActionDeckFilters() {
    const searchInput = document.getElementById("action-search");
    const filterBtns = document.querySelectorAll(".filter-btn");
    
    let currentSearch = "";
    let currentFilter = "all";

    searchInput.addEventListener("input", (e) => {
        currentSearch = e.target.value.toLowerCase();
        applyFilters();
    });

    filterBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            filterBtns.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            currentFilter = e.target.getAttribute("data-filter");
            applyFilters();
        });
    });

    function applyFilters() {
        const cards = document.querySelectorAll("#action-cards .interaction-card");
        let visibleCount = 0;

        cards.forEach(card => {
            const matchSearch = card.innerText.toLowerCase().includes(currentSearch);
            const cardGroup = card.getAttribute("data-group");
            const matchFilter = currentFilter === "all" || cardGroup === currentFilter;

            if (matchSearch && matchFilter) {
                card.classList.remove("hidden");
                visibleCount++;
            } else {
                card.classList.add("hidden");
            }
        });

        const emptyState = document.getElementById("deck-empty-state");
        if(visibleCount === 0) {
            emptyState.classList.remove("hidden");
        } else {
            emptyState.classList.add("hidden");
        }
    }
}

function renderPeriodicTable() {
    const tableContainer = document.getElementById("periodic-table");
    tableContainer.innerHTML = "";
    
    const availableElements = {};
    Object.values(elementrixData).forEach(data => {
        if (data.type === "Element") {
            availableElements[data.atomicNumber] = data;
        }
    });

    for (let i = 1; i <= 118; i++) {
        if((i >= 57 && i <= 71) || (i >= 89 && i <= 103)) continue; 

        const pos = getGridPosition(i);
        const elDiv = document.createElement("div");
        elDiv.classList.add("periodic-tile");
        elDiv.style.gridColumn = pos[0];
        elDiv.style.gridRow = pos[1];
        
        let symbol = elementSymbols[i] || "X";
        elDiv.innerHTML = `
            <span class="tile-number">${i}</span>
            <span class="tile-symbol">${symbol}</span>
        `;
        
        if (availableElements[i] && availableElements[i].active) {
            elDiv.classList.add("active-element");
            elDiv.setAttribute("data-group", availableElements[i].groupClass); 
            elDiv.setAttribute("data-tier", availableElements[i].tier || "none");
            
            elDiv.addEventListener("click", () => {
                window.location.hash = availableElements[i].slug;
            });
            elDiv.title = availableElements[i].name;
            elDiv.innerHTML += `<span class="tile-name">${availableElements[i].name}</span>`;
        } else {
            elDiv.classList.add("inactive-element");
            const name = elementNames[i] || symbol;
            elDiv.title = name;
            elDiv.innerHTML += `<span class="tile-name">${name}</span>`;
            elDiv.addEventListener("click", () => {
                openUnplayableCard(i, symbol, name);
            });
        }
        
        tableContainer.appendChild(elDiv);
    }

    initPeriodicTableFilters();
}

function initPeriodicTableFilters() {
    const searchInput = document.getElementById("table-search");
    if(!searchInput) return;

    searchInput.addEventListener("input", (e) => {
        const term = e.target.value.toLowerCase();
        const tiles = document.querySelectorAll(".periodic-tile");
        
        tiles.forEach(tile => {
            const sym = tile.querySelector(".tile-symbol").innerText.toLowerCase();
            const name = tile.querySelector(".tile-name") ? tile.querySelector(".tile-name").innerText.toLowerCase() : "";
            
            if(sym.includes(term) || name.includes(term)) {
                tile.classList.remove("tile-faded");
            } else {
                tile.classList.add("tile-faded");
            }
        });
    });
}

function renderActionDeck() {
    const deckContainer = document.getElementById("action-cards");
    deckContainer.innerHTML = "";

    Object.values(elementrixData).forEach(data => {
        if (data.type === "Action") {
            const card = document.createElement("div");
            card.className = "interaction-card";
            card.setAttribute("data-group", data.groupClass);

            let badgeWord = "Action";
            if (data.groupClass === "condition") badgeWord = "Condition";
            if (data.groupClass === "noble-gas") badgeWord = "Reaction";
            if (data.groupClass === "functional-group") badgeWord = "Functional Grp";

            card.innerHTML = `
                <div class="card-header">
                    <span class="card-type-badge">${badgeWord}</span>
                    <h3 class="card-title">${data.name}</h3>
                </div>
                <div class="card-body">
                    <p>${data.explanation}</p>
                </div>
            `;

            card.addEventListener("click", () => {
                window.location.hash = data.slug;
            });

            deckContainer.appendChild(card);
        }
    });
}

function handleHashRouting() {
    let hash = window.location.hash.substring(1).toLowerCase();
    if (!hash) {
        closeCard();
        return;
    }

    let targetElement = null;
    if (!isNaN(hash)) {
        targetElement = Object.values(elementrixData).find(e => e.atomicNumber == hash);
    } else {
        targetElement = elementrixData[hash];
    }

    if (targetElement) {
        openCard(targetElement);
    } else {
        closeCard();
    }
}

function openCard(data) {
    const overlay = document.getElementById("detail-overlay");
    overlay.setAttribute("data-group", data.groupClass);
    
    document.getElementById("detail-symbol").innerText = data.symbol;
    document.getElementById("detail-name").innerText = data.name;
    document.getElementById("detail-valency").innerText = data.valency;
    
    const imgElement = document.getElementById("detail-image");
    imgElement.src = data.image;
    imgElement.style.display = "block";
    document.querySelector(".media-box-wrapper").style.display = "flex";
    
    document.getElementById("detail-explanation").innerText = data.explanation;
    document.getElementById("detail-actions").innerText = data.actions;
    
    const actionTitle = document.getElementById("action-title");
    if(data.type === "Action") {
        actionTitle.innerText = "The Rule";
    } else {
        actionTitle.innerText = "Gameplay Action";
    }

    const funFactList = document.getElementById("detail-funfacts");
    funFactList.innerHTML = "";
    
    let factsToUse = data.funFacts;
    
    const chemBlock = document.getElementById("block-chemistry");
    const chemProps = document.getElementById("detail-chem-props");
    chemProps.innerHTML = "";
    
    if (typeof elementReference !== 'undefined' && elementReference[data.symbol]) {
        const refData = elementReference[data.symbol];
        if (refData.funFacts && refData.funFacts.length > 0) {
            factsToUse = refData.funFacts;
        }
        if (refData.chemistry && Object.keys(refData.chemistry).length > 0) {
            chemBlock.style.display = "block";
            for (const [key, val] of Object.entries(refData.chemistry)) {
                chemProps.innerHTML += `<div><strong>${key}:</strong><br>${val}</div>`;
            }
        } else {
            chemBlock.style.display = "none";
        }
    } else {
        chemBlock.style.display = "none";
    }

    factsToUse.forEach(fact => {
        const li = document.createElement("li");
        li.innerText = fact;
        funFactList.appendChild(li);
    });
    
    overlay.classList.remove("hidden");
}

function closeCard() {
    const overlay = document.getElementById("detail-overlay");
    overlay.classList.add("hidden");
    document.getElementById("detail-image").style.display = "block";
    
    if(window.location.hash !== "") {
        history.pushState("", document.title, window.location.pathname + window.location.search);
    }
}

function initThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;
    
    const iconSun = toggleBtn.querySelector('.icon-sun');
    const iconMoon = toggleBtn.querySelector('.icon-moon');
    
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const validTheme = (savedTheme === 'light') ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', validTheme);
    updateThemeIcons(validTheme);

    toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcons(newTheme);
    });

    function updateThemeIcons(theme) {
        if(theme === 'dark') {
            iconSun.style.display = 'block';
            iconMoon.style.display = 'none';
        } else {
            iconSun.style.display = 'none';
            iconMoon.style.display = 'block';
        }
    }
}

function getFunFactsFor(i, symbol, name) {
    const facts = [];
    if(i >= 93) {
        facts.push(`${name} is a synthetic transuranium element.`);
        facts.push(`It is highly radioactive and does not occur naturally in significant amounts.`);
    } else if (i >= 57 && i <= 71) {
        facts.push(`Part of the Lanthanide series, often called "rare earth elements."`);
        facts.push(`Used extensively in modern electronics and strong magnets.`);
    } else if (i >= 89 && i <= 103) {
        facts.push(`Part of the Actinide series.`);
        facts.push(`All actinide elements are radioactive.`);
    } else if ([2, 10, 18, 36, 54, 86, 118].includes(i)) {
        facts.push(`It is a Noble Gas with a completely full outer electron shell.`);
        facts.push(`Known for being extremely unreactive.`);
    } else {
        facts.push(`Element ${i} on the periodic table, known by the symbol ${symbol}.`);
        facts.push(`It has ${i} protons in its atomic nucleus.`);
    }
    
    const special = {
        6: ["The foundation of all known organic life.", "Can take the form of graphite or diamond."],
        14: ["The second most abundant element in the Earth's crust.", "The basis of modern computer chips and semiconductors."],
        22: ["Titanium is as strong as steel but much lighter.", "Highly resistant to corrosion, even in seawater."],
        47: ["Silver has the highest electrical conductivity of any element.", "Historically used to prevent bacterial growth."],
        79: ["Gold is incredibly malleable; one ounce can be beaten into a 300 square foot sheet.", "It does not tarnish or rust."],
        80: ["Mercury is the only metal that is liquid at standard room temperature.", "Also known as quicksilver, it is highly toxic."],
        82: ["Lead was widely used in ancient Roman plumbing.", "It is a heavy metal that is extremely dense and blocks radiation."],
        92: ["Uranium is heavily used as fuel in nuclear power plants.", "It was discovered in 1789 and named after the planet Uranus."]
    };
    
    if(special[i]) {
        facts.length = 0;
        facts.push(...special[i]);
    }
    return facts;
}

function openUnplayableCard(num, symbol, name) {
    const overlay = document.getElementById("detail-overlay");
    overlay.setAttribute("data-group", "fallback");
    
    document.getElementById("detail-symbol").innerText = symbol;
    document.getElementById("detail-name").innerText = name;
    document.getElementById("detail-valency").innerText = "---";
    
    const imgElement = document.getElementById("detail-image");
    imgElement.style.display = "none";
    document.querySelector(".media-box-wrapper").style.display = "none";
    
    document.getElementById("detail-explanation").innerHTML = "<strong>DISCLAIMER:</strong> This element is not a playable card in Elementrix and cannot be used in the game.";
    document.getElementById("detail-actions").innerText = `${name} is element number ${num} on the periodic table.`;
    document.getElementById("action-title").innerText = "Element Info";
    
    const funFactList = document.getElementById("detail-funfacts");
    funFactList.innerHTML = "";
    
    let facts = getFunFactsFor(num, symbol, name);
    
    const chemBlock = document.getElementById("block-chemistry");
    const chemProps = document.getElementById("detail-chem-props");
    chemProps.innerHTML = "";
    
    if (typeof elementReference !== 'undefined' && elementReference[symbol]) {
        const refData = elementReference[symbol];
        if (refData.funFacts && refData.funFacts.length > 0) {
            facts = refData.funFacts;
        }
        if (refData.chemistry && Object.keys(refData.chemistry).length > 0) {
            chemBlock.style.display = "block";
            for (const [key, val] of Object.entries(refData.chemistry)) {
                chemProps.innerHTML += `<div><strong>${key}:</strong><br>${val}</div>`;
            }
        } else {
            chemBlock.style.display = "none";
        }
    } else {
        chemBlock.style.display = "none";
    }
    
    facts.forEach(fact => {
        const li = document.createElement("li");
        li.innerText = fact;
        funFactList.appendChild(li);
    });
    
    overlay.classList.remove("hidden");
}

function initGameTracker() {
    let instability = 0;
    const meterCount = document.getElementById("meter-count");
    const meterDisplay = document.getElementById("instability-meter");
    const boomText = document.getElementById("boom-text");
    
    function setMeter(value) {
        instability = value;
        if (instability > 3) instability = 3;
        
        meterCount.innerText = instability;
        
        if (instability === 3) {
            meterDisplay.classList.add("danger");
            boomText.classList.remove("hidden");
            
            // Auto reset after 1.5 seconds
            setTimeout(() => {
                setMeter(0);
            }, 1500);
        } else {
            meterDisplay.classList.remove("danger");
            boomText.classList.add("hidden");
        }
    }

    document.getElementById("btn-increase-meter").addEventListener("click", () => {
        if (instability < 3) {
            setMeter(instability + 1);
        }
    });

    document.getElementById("btn-reset-meter").addEventListener("click", () => {
        setMeter(0);
    });

    // Spacebar shortcut
    document.addEventListener("keydown", (e) => {
        // Only trigger if we are on the tracker panel and not typing in an input
        const trackerPanel = document.getElementById("view-tracker");
        if (trackerPanel && trackerPanel.classList.contains("active-panel") && e.code === "Space" && e.target.tagName !== "INPUT") {
            e.preventDefault(); // Prevent scrolling
            if (instability < 3) {
                setMeter(instability + 1);
            }
        }
    });

    // Player Scores
    let players = [];
    const maxPlayers = 4;
    const playersContainer = document.getElementById("players-container");
    const btnAddPlayer = document.getElementById("btn-add-player");

    function renderPlayers() {
        playersContainer.innerHTML = "";
        players.forEach((player, index) => {
            const card = document.createElement("div");
            card.className = "player-card";
            card.innerHTML = `
                <input type="text" class="player-name-input" value="${player.name}" data-index="${index}">
                <div class="player-score">${player.score}</div>
                <div class="score-controls">
                    <button class="btn-score btn-minus" data-index="${index}" ${player.score <= 0 ? 'disabled style="opacity:0.5; cursor:not-allowed;"' : ''}>-</button>
                    <button class="btn-score btn-plus" data-index="${index}">+</button>
                </div>
                <button class="btn-score-reset" data-index="${index}">Reset Score</button>
            `;
            playersContainer.appendChild(card);
        });

        btnAddPlayer.disabled = players.length >= maxPlayers;
        if(players.length >= maxPlayers) {
            btnAddPlayer.style.opacity = "0.5";
            btnAddPlayer.style.cursor = "not-allowed";
        } else {
            btnAddPlayer.style.opacity = "1";
            btnAddPlayer.style.cursor = "pointer";
        }

        const btnRemovePlayer = document.getElementById("btn-remove-player");
        if(btnRemovePlayer) {
            btnRemovePlayer.disabled = players.length <= 2;
            if(players.length <= 2) {
                btnRemovePlayer.style.opacity = "0.5";
                btnRemovePlayer.style.cursor = "not-allowed";
            } else {
                btnRemovePlayer.style.opacity = "1";
                btnRemovePlayer.style.cursor = "pointer";
            }
        }
    }

    playersContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("btn-plus")) {
            const index = e.target.getAttribute("data-index");
            players[index].score++;
            renderPlayers();
        } else if (e.target.classList.contains("btn-minus")) {
            const index = e.target.getAttribute("data-index");
            if (players[index].score > 0) {
                players[index].score--; 
                renderPlayers();
            }
        } else if (e.target.classList.contains("btn-score-reset")) {
            const index = e.target.getAttribute("data-index");
            players[index].score = 0;
            renderPlayers();
        }
    });

    playersContainer.addEventListener("input", (e) => {
        if (e.target.classList.contains("player-name-input")) {
            const index = e.target.getAttribute("data-index");
            players[index].name = e.target.value;
        }
    });

    btnAddPlayer.addEventListener("click", () => {
        if (players.length < maxPlayers) {
            players.push({ name: `Player ${players.length + 1}`, score: 0 });
            renderPlayers();
        }
    });

    const btnRemovePlayerGlobal = document.getElementById("btn-remove-player");
    if (btnRemovePlayerGlobal) {
        btnRemovePlayerGlobal.addEventListener("click", () => {
            if (players.length > 2) {
                players.pop();
                renderPlayers();
            }
        });
    }

    // Initialize with 2 players
    players = [
        { name: "Player 1", score: 0 },
        { name: "Player 2", score: 0 }
    ];
    renderPlayers();
}
