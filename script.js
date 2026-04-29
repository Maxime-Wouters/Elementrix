/**
 * Elementrix SPA Core Logic
 */

// 1. DATA SCHEMA (The "Master List")
const elementrixData = {
    // ---- HIGH TIER ELEMENTS (1pt) ----
    "hydrogen": {
        atomicNumber: 1, valency: "+1 or -1", slug: "hydrogen", name: "Hydrogen", symbol: "H", type: "Element", groupClass: "nonmetal",
        image: "assets/images/hydrogen.webp", explanation: "High Tier Element (1 pt). Simple 1:1 ionic bonds. Great starter card.",
        actions: "Bond: Combine with other elements in the RZ to reach zero valency.",
        funFacts: ["Most abundant element in the universe."], active: true
    },
    "lithium": {
        atomicNumber: 3, valency: "+1", slug: "lithium", name: "Lithium", symbol: "Li", type: "Element", groupClass: "alkali-metal",
        image: "assets/images/lithium.webp", explanation: "High Tier Element (1 pt). Highly reactive metal.",
        actions: "Bond: Combine with other elements in the RZ to reach zero valency.",
        funFacts: ["Used in rechargeable batteries."], active: true
    },
    "sodium": {
        atomicNumber: 11, valency: "+1", slug: "sodium", name: "Sodium", symbol: "Na", type: "Element", groupClass: "alkali-metal",
        image: "assets/images/sodium.webp", explanation: "High Tier Element (1 pt). Highly reactive metal.",
        actions: "Bond: Combine with other elements in the RZ to reach zero valency.",
        funFacts: ["Half of table salt (NaCl)."], active: true
    },
    "potassium": {
        atomicNumber: 19, valency: "+1", slug: "potassium", name: "Potassium", symbol: "K", type: "Element", groupClass: "alkali-metal",
        image: "assets/images/potassium.webp", explanation: "High Tier Element (1 pt). Highly reactive metal.",
        actions: "Bond: Combine with other elements in the RZ to reach zero valency.",
        funFacts: ["Found in bananas; vital electrolyte."], active: true
    },
    "fluorine": {
        atomicNumber: 9, valency: "-1", slug: "fluorine", name: "Fluorine", symbol: "F", type: "Element", groupClass: "halogen",
        image: "assets/images/fluorine.webp", explanation: "High Tier Element (1 pt). Highly reactive halogen.",
        actions: "Bond: Combine with other elements in the RZ to reach zero valency.",
        funFacts: ["Most electronegative element."], active: true
    },
    "chlorine": {
        atomicNumber: 17, valency: "-1", slug: "chlorine", name: "Chlorine", symbol: "Cl", type: "Element", groupClass: "halogen",
        image: "assets/images/chlorine.webp", explanation: "High Tier Element (1 pt). Highly reactive halogen.",
        actions: "Bond: Combine with other elements in the RZ to reach zero valency.",
        funFacts: ["Keeps swimming pools clean."], active: true
    },
    "bromine": {
        atomicNumber: 35, valency: "-1", slug: "bromine", name: "Bromine", symbol: "Br", type: "Element", groupClass: "halogen",
        image: "assets/images/bromine.webp", explanation: "High Tier Element (1 pt). Highly reactive halogen.",
        actions: "Bond: Combine with other elements in the RZ to reach zero valency.",
        funFacts: ["Used in flame retardants."], active: true
    },
    "iodine": {
        atomicNumber: 53, valency: "-1", slug: "iodine", name: "Iodine", symbol: "I", type: "Element", groupClass: "halogen",
        image: "assets/images/iodine.webp", explanation: "High Tier Element (1 pt). Highly reactive halogen.",
        actions: "Bond: Combine with other elements in the RZ to reach zero valency.",
        funFacts: ["Essential for thyroid function."], active: true
    },

    // ---- MEDIUM TIER ELEMENTS (3pts) ----
    "magnesium": {
        atomicNumber: 12, valency: "+2", slug: "magnesium", name: "Magnesium", symbol: "Mg", type: "Element", groupClass: "alkaline-earth",
        image: "assets/images/magnesium.webp", explanation: "Medium Tier Element (3 pts). Form 1:2 or 2:1 bonds.",
        actions: "Bond: Combine with other elements in the RZ. Requires more strategic play.",
        funFacts: ["Makes fireworks burn bright white."], active: true
    },
    "calcium": {
        atomicNumber: 20, valency: "+2", slug: "calcium", name: "Calcium", symbol: "Ca", type: "Element", groupClass: "alkaline-earth",
        image: "assets/images/calcium.webp", explanation: "Medium Tier Element (3 pts). Form 1:2 or 2:1 bonds.",
        actions: "Bond: Combine with other elements in the RZ. Requires more strategic play.",
        funFacts: ["Builds bones and teeth."], active: true
    },
    "barium": {
        atomicNumber: 56, valency: "+2", slug: "barium", name: "Barium", symbol: "Ba", type: "Element", groupClass: "alkaline-earth",
        image: "assets/images/barium.webp", explanation: "Medium Tier Element (3 pts). Form 1:2 or 2:1 bonds.",
        actions: "Bond: Combine with other elements in the RZ. Requires more strategic play.",
        funFacts: ["Used in medical X-ray contrast."], active: true
    },
    "oxygen": {
        atomicNumber: 8, valency: "-2", slug: "oxygen", name: "Oxygen", symbol: "O", type: "Element", groupClass: "nonmetal",
        image: "assets/images/oxygen.webp", explanation: "Medium Tier Element (3 pts). Form 1:2 or 2:1 bonds.",
        actions: "Bond: Combine with other elements in the RZ. Requires more strategic play.",
        funFacts: ["Found in water, rust, and breath."], active: true
    },
    "sulfur": {
        atomicNumber: 16, valency: "-2", slug: "sulfur", name: "Sulfur", symbol: "S", type: "Element", groupClass: "nonmetal",
        image: "assets/images/sulfur.webp", explanation: "Medium Tier Element (3 pts). Form 1:2 or 2:1 bonds.",
        actions: "Bond: Combine with other elements in the RZ. Requires more strategic play.",
        funFacts: ["Responsible for the rotten egg smell."], active: true
    },
    
    // Polyatomics (Mocked with fake atomic numbers for the grid layout, or we keep them off grid)
    "sulfate": {
        atomicNumber: "SO4", valency: "-2", slug: "sulfate", name: "Sulfate", symbol: "SO₄²⁻", type: "Action", groupClass: "condition", // Putting in action deck since it doesn't fit standard table
        image: "assets/images/sulfate.webp", explanation: "Polyatomic Ion. Medium Tier (3 pts).",
        actions: "Bond: Needs Heat card to be in the RZ.",
        funFacts: ["Found in acid rain."], active: true
    },
    "carbonate": {
        atomicNumber: "CO3", valency: "-2", slug: "carbonate", name: "Carbonate", symbol: "CO₃²⁻", type: "Action", groupClass: "condition",
        image: "assets/images/carbonate.webp", explanation: "Polyatomic Ion. Medium Tier (3 pts).",
        actions: "Bond: Needs Heat card to be in the RZ.",
        funFacts: ["In baking soda and limestone."], active: true
    },
    "hydroxide": {
        atomicNumber: "OH", valency: "-1", slug: "hydroxide", name: "Hydroxide", symbol: "OH⁻", type: "Action", groupClass: "condition",
        image: "assets/images/hydroxide.webp", explanation: "Polyatomic Ion. Medium Tier (3 pts).",
        actions: "Bond: Combines to form bases.",
        funFacts: ["Present in all bases and cleaning products."], active: true
    },

    // ---- LOW TIER ELEMENTS (5pts) ----
    "iron": {
        atomicNumber: 26, valency: "+2 / +3", slug: "iron", name: "Iron", symbol: "Fe", type: "Element", groupClass: "transition-metal",
        image: "assets/images/iron.webp", explanation: "Low Tier Element (5 pts). Variable valency.",
        actions: "Bond: You must announce out loud which valency you are using before placing.",
        funFacts: ["Gives blood its red color (hemoglobin)."], active: true
    },
    "copper": {
        atomicNumber: 29, valency: "+1 / +2", slug: "copper", name: "Copper", symbol: "Cu", type: "Element", groupClass: "transition-metal",
        image: "assets/images/copper.webp", explanation: "Low Tier Element (5 pts). Variable valency.",
        actions: "Bond: You must announce out loud which valency you are using before placing.",
        funFacts: ["Used in electrical wiring; Statue of Liberty."], active: true
    },
    "zinc": {
        atomicNumber: 30, valency: "+2", slug: "zinc", name: "Zinc", symbol: "Zn", type: "Element", groupClass: "transition-metal",
        image: "assets/images/zinc.webp", explanation: "Low Tier Element (5 pts).",
        actions: "Bond: Combine with other elements in the RZ.",
        funFacts: ["In sunscreen; protects against UV radiation."], active: true
    },
    "silver": {
        atomicNumber: 47, valency: "+1", slug: "silver", name: "Silver", symbol: "Ag", type: "Element", groupClass: "transition-metal",
        image: "assets/images/silver.webp", explanation: "Low Tier Element (5 pts).",
        actions: "Bond: Combine with other elements in the RZ.",
        funFacts: ["Used in photography and jewelry."], active: true
    },
    "aluminum": {
        atomicNumber: 13, valency: "+3", slug: "aluminum", name: "Aluminum", symbol: "Al", type: "Element", groupClass: "post-transition",
        image: "assets/images/aluminum.webp", explanation: "Low Tier Element (5 pts).",
        actions: "Bond: Combine with other elements in the RZ.",
        funFacts: ["Most common metal in Earth's crust."], active: true
    },
    "nitrogen": {
        atomicNumber: 7, valency: "-3", slug: "nitrogen", name: "Nitrogen", symbol: "N", type: "Element", groupClass: "nonmetal",
        image: "assets/images/nitrogen.webp", explanation: "Low Tier Element (5 pts).",
        actions: "Bond: Combine with other elements in the RZ.",
        funFacts: ["Makes up 78% of the air you breathe."], active: true
    },
    "phosphorus": {
        atomicNumber: 15, valency: "-3", slug: "phosphorus", name: "Phosphorus", symbol: "P", type: "Element", groupClass: "nonmetal",
        image: "assets/images/phosphorus.webp", explanation: "Low Tier Element (5 pts).",
        actions: "Bond: Combine with other elements in the RZ.",
        funFacts: ["Backbone of DNA; used in matches."], active: true
    },

    // ---- ACTION CARDS ----
    "displacement": {
        atomicNumber: "A1", valency: "---", slug: "displacement", name: "Single Displacement", symbol: "SD", type: "Action", groupClass: "action",
        image: "assets/images/displacement.webp", explanation: "A more reactive metal replaces a less reactive one in a compound.",
        actions: "Swap one metal card in the RZ with a metal card from your hand of equal or higher reactivity tier.",
        funFacts: ["High tier can replace High, Medium, or Low", "Medium tier can replace Medium or Low", "The displaced card goes into your hand"], active: true
    },
    "skip": {
        atomicNumber: "A2", valency: "---", slug: "skip", name: "Inert Gas / Skip", symbol: "IG", type: "Action", groupClass: "action",
        image: "assets/images/skip.webp", explanation: "Noble gases are almost entirely non-reactive. They create a 'dead zone'.",
        actions: "The next player in turn order is skipped. They simply draw their card and end their turn.",
        funFacts: ["Helium, Neon, and Argon are famous inert gases."], active: true
    },
    "reverse": {
        atomicNumber: "A3", valency: "---", slug: "reverse", name: "Equilibrium", symbol: "EQ", type: "Action", groupClass: "action",
        image: "assets/images/reverse.webp", explanation: "Some reactions are reversible and can shift direction.",
        actions: "Reverse the order of play. Clockwise becomes counter-clockwise.",
        funFacts: ["Le Chatelier's Principle predicts how equilibrium shifts."], active: true
    },
    "steal": {
        atomicNumber: "A4", valency: "---", slug: "steal", name: "Electronegativity", symbol: "EN", type: "Action", groupClass: "action",
        image: "assets/images/steal.webp", explanation: "Highly electronegative atoms pull electrons away from other atoms.",
        actions: "Choose one opponent. Draw 2 cards randomly from their hand. Keep one; discard the other into the RZ.",
        funFacts: ["Fluorine is the most electronegative element."], active: true
    },
    "defense": {
        atomicNumber: "A5", valency: "---", slug: "defense", name: "Electron Shield", symbol: "ES", type: "Action", groupClass: "action",
        image: "assets/images/defense.webp", explanation: "A full outer electron shell is extremely stable and difficult to disrupt.",
        actions: "For the next 2 full rounds, your Stability Points cannot be targeted by Electronegativity or Snatch attempts.",
        funFacts: ["Full valence shells define noble gases."], active: true
    },
    "draw2": {
        atomicNumber: "A6", valency: "---", slug: "draw2", name: "Concentration Boost", symbol: "CB", type: "Action", groupClass: "action",
        image: "assets/images/draw2.webp", explanation: "Higher concentration of reactants increases the frequency of collisions.",
        actions: "Immediately draw 2 cards from the deck and take one additional Phase II action this turn.",
        funFacts: ["Reaction rates increase with concentration."], active: true
    },
    "reset": {
        atomicNumber: "A7", valency: "---", slug: "reset", name: "Radioactive Decay", symbol: "RD", type: "Action", groupClass: "action",
        image: "assets/images/reset.webp", explanation: "Unstable atomic nuclei break apart, releasing energy and clearing the field.",
        actions: "Discard all cards currently in the RZ. Every player must discard 1 card from their hand.",
        funFacts: ["Alpha, beta, and gamma are forms of decay."], active: true
    },

    // ---- CONDITION CARDS ----
    "heat": {
        atomicNumber: "C1", valency: "---", slug: "heat", name: "Heat", symbol: "Δ", type: "Action", groupClass: "condition",
        image: "assets/images/heat.webp", explanation: "Many bonds require activation energy to begin.",
        actions: "MUST be present in the RZ to play any polyatomic ion cards. Remains in the RZ until stabilized.",
        funFacts: ["Activation Energy is the 'spark' for reactions."], active: true
    },
    "catalyst": {
        atomicNumber: "C2", valency: "---", slug: "catalyst", name: "Catalyst", symbol: "Cat", type: "Action", groupClass: "condition",
        image: "assets/images/catalyst.webp", explanation: "Catalysts provide an alternative pathway, speeding up the bonding process.",
        actions: "While present in the RZ, the active player may play TWO element cards during Phase II instead of one.",
        funFacts: ["Enzymes are biological catalysts."], active: true
    },
    "shield_he": {
        atomicNumber: "Ng1", valency: "---", slug: "shield_he", name: "Helium Shield", symbol: "He", type: "Action", groupClass: "noble-gas",
        image: "assets/images/shield_he.webp", explanation: "Noble gases have full outer electron shells, nature's perfect shield.",
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

document.addEventListener("DOMContentLoaded", () => {
    initThemeToggle();
    initTabRouting();
    
    renderPeriodicTable();
    renderActionDeck();
    initActionDeckFilters();
    
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
            
            elDiv.addEventListener("click", () => {
                window.location.hash = availableElements[i].slug;
            });
            elDiv.title = availableElements[i].name;
            elDiv.innerHTML += `<span class="tile-name">${availableElements[i].name}</span>`;
        } else {
            elDiv.classList.add("inactive-element");
        }
        
        tableContainer.appendChild(elDiv);
    }
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
    imgElement.onerror = () => { imgElement.src = 'https://placehold.co/500x500/121212/00E5FF?text=' + data.symbol; };
    
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
    data.funFacts.forEach(fact => {
        const li = document.createElement("li");
        li.innerText = fact;
        funFactList.appendChild(li);
    });
    
    overlay.classList.remove("hidden");
}

function closeCard() {
    const overlay = document.getElementById("detail-overlay");
    overlay.classList.add("hidden");
    
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
