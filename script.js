// MODULE 3: State-wise Heritage Data Management
const heritageDB = {
    "Uttar Pradesh": {
        "Agra": [
            { name: "Taj Mahal", type: "Mughal", bio: "The pinnacle of Mughal craftsmanship." },
            { name: "Agra Fort", type: "Fortress", bio: "Historic military and imperial residence." }
        ],
        "Varanasi": [{ name: "Kashi Temple", type: "Sacred", bio: "Ancient Hindu center on the Ganges." }]
    },
    "Rajasthan": {
        "Jaipur": [{ name: "Amber Fort", type: "Hill Fort", bio: "Majestic Rajput fortress and palace." }]
    }
};

const appState = {
    uid: "HMS-X-" + Math.floor(Math.random() * 8999 + 1000),
    prefs: ["Architecture", "Sacred", "Fortress", "Natural"]
};

// MODULE 1: Onboarding Initialization
function startSession() {
    const name = document.getElementById('user-name').value;
    if(!name) return alert("System Error: Identity Required");
    document.getElementById('uid-display').innerText = appState.uid;

    // Module 5: QR Registration & Validation
    new QRCode(document.getElementById("qrcode"), appState.uid);

    gsap.to("#onboarding-overlay", { opacity: 0, display: "none", duration: 0.6 });
    initCore();
}

// MODULE 2: Interests & Preference
function initCore() {
    const pGrid = document.getElementById('pref-pills');
    appState.prefs.forEach(p => {
        pGrid.innerHTML += `<div class="pill" onclick="this.classList.toggle('active')">${p}</div>`;
    });

    const sSelect = document.getElementById('state-select');
    Object.keys(heritageDB).forEach(s => sSelect.innerHTML += `<option>${s}</option>`);
    syncStateData();
}

// MODULE 3: State & District Data Refresh
function syncStateData() {
    const state = document.getElementById('state-select').value;
    const cSelect = document.getElementById('city-select');
    cSelect.innerHTML = "";
    Object.keys(heritageDB[state]).forEach(c => cSelect.innerHTML += `<option>${c}</option>`);
    refreshNodes();
}

function refreshNodes() {
    const state = document.getElementById('state-select').value;
    const city = document.getElementById('city-select').value;
    const grid = document.getElementById('heritage-nodes');
    grid.innerHTML = "";

    heritageDB[state][city].forEach(site => {
        grid.innerHTML += `
            <div class="h-node">
                <small style="color:var(--accent); font-weight:900; letter-spacing:1px">${site.type.toUpperCase()}</small>
                <h3 style="margin:15px 0">${site.name}</h3>
                <button onclick="playGuide('${site.name}', '${site.bio}')" class="pill">LISTEN_GUIDE</button>
            </div>`;
    });
}

// MODULE 4: Circuit Trail Generation
function buildTrail() {
    const city = document.getElementById('city-select').value;
    const log = document.getElementById('trail-preview');
    log.innerHTML = `<div style="font-family:monospace; font-size:0.7rem; color:var(--accent); margin-top:20px;">
        [INFO] ROUTING_START: ${city}<br>
        [INFO] SCANNING_LOCAL_CIRCUITS...<br>
        [SUCCESS] TRAIL_OPTIMIZED_FOR_VISITOR
    </div>`;
}

// MODULE 6: Audio Guide Content Delivery
function playGuide(name, text) {
    window.speechSynthesis.cancel();
    document.getElementById('audio-status').innerText = `STREAMING: ${name}`;
    const speech = new SpeechSynthesisUtterance(`${name}. ${text}`);
    window.speechSynthesis.speak(speech);
}

function stopAudio() {
    window.speechSynthesis.cancel();
    document.getElementById('audio-status').innerText = "SYSTEM_IDLE";
}

// MODULE 8: Admin Protocol
function openAdmin() {
    alert("CRITICAL: ACCESSING STATE_ADMIN_DASHBOARD_V2.0");
}
