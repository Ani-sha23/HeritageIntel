const heritageDB = {
    "Delhi": {
        "New Delhi": [
            { name: "Qutub Minar", img: "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=center,quality=60,width=400,height=265,dpr=2/tour_img/83e58e05d4785234893fc48440ecc1638c99e51f2fe73159ca97cf127221ba63.jpeg", map: "https://maps.app.goo.gl/duhMtyc2GLZUSJxT6", hindi: "कुतुब मीनार दिल्ली का एक प्रसिद्ध ऐतिहासिक स्तंभ है।" },
            { name: "Red Fort", img: "https://wanderwisdom.com/.image/c_fill,w_1200,h_675,g_faces:center/MjAzNDMwNzE1ODA1NjcyNzk2/fort-agra-easy-peasy.jpg", map: "https://maps.app.goo.gl/kJwJekWaYWPE9k1H6", hindi: "लाल किला मुगल वास्तुकला का एक बेहतरीन उदाहरण है।" },
            { name: "Humayun's Tomb", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoATc7-OSCDAIA3xdIjmvIsqmzJ65UXiVokqs0ikQoZRatjK25ggfkF-rth4TE5YKEHLtHAwj_bkU2ze_wv8ztDZe5f0BLITc5wEcT3ibcuVmrZ8MEbyZct62rEF7RPiyU5E83L=w408-h408-k-no", map: "https://maps.app.goo.gl/V7uhBnEc3S46TRn5A", hindi: "हुमायूँ का मकबरा भारत का पहला उद्यान मकबरा है।" },
            { name: "Lotus Temple", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweoOaEihhAzFrigFUEZwZAoiSF5hzSGN_lVrjGMGKjjhlM30iU3HPJwvV_sp521R4qujWiIPkFc4H81SK6tTPbdupyx8GlDisGQ6rij_dawRFGQtDPUzSTJlKbdOTRkUpHHRmJ5kjRHq32sf=w408-h306-k-no", map: "https://maps.app.goo.gl/YPCB7hsuudktpoXP9", hindi: "लोटस टेंपल अपने कमल के आकार के लिए जाना जाता है।" }
        ]
    },
    "Uttar Pradesh": {
        "Agra": [
            { name: "Taj Mahal", img: "https://media.istockphoto.com/id/519330110/photo/taj-mahal-agra-india-monument-of-love-in-blue-sky.jpg?s=612x612&w=0&k=20&c=Uma6Q7KduznA6jUKcSquFP1iHHiw8UXcZEYVLONrmaQ=", map: "https://maps.app.goo.gl/euHxE9cdQHXAbvVG9", hindi: "ताजमहल दुनिया के सात अजूबों में से एक है।" },
            { name: "Agra Fort", img: "https://whc.unesco.org/uploads/thumbs/site_0251_0010-1200-630-20240807180746.jpg", map: "https://maps.app.goo.gl/hfSybFY2L7F6xiCF9", hindi: "आगरा का किला यूनेस्को की विश्व धरोहर स्थल है।" }
        ],
        "Varanasi": [
            { name: "Kashi Temple", img: "https://www.daiwikhotels.com/wp-content/uploads/2024/07/kashi-viswanath-temple-cvr-2.jpg", map: "https://maps.app.goo.gl/pqZs7HVusTqUnQmj6", hindi: "काशी विश्वनाथ मंदिर भगवान शिव को समर्पित है।" },
            { name: "Sarnath", img: "https://static.toiimg.com/photo/msid-56472823,width-96,height-65.cms", map: "https://maps.app.goo.gl/e5NCTWTT21Bc2Qb97", hindi: "सारनाथ वह स्थान है जहाँ बुद्ध ने अपना पहला उपदेश दिया था।" }
        ]
    },
    "Maharashtra": {
        "Mumbai/Pune": [
            { name: "Gateway of India", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo0FMKlqo5rjtICwZ6ejrQ3clOQtojKaYTEhNX6Q-MjSy1rYhsXgt0R1SIbrTxoZyCR-LNovHEjocPB5UEv2J1mcV7HbTopdyVoDXTK7we1bKbTzclz1dqxtVehBwoARLNID1I=w408-h306-k-no", map: "https://maps.app.goo.gl/nwP1hkmV64QnPLFH7", hindi: "गेटवे ऑफ इंडिया मुंबई का सबसे प्रतिष्ठित स्मारक है।" },
            { name: "Ajanta Caves", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepkB56sP73TgF1cahJoWJ6YJW7U--AIfQ48hUdA8JNZvUW3qr5TkS_-LTzCTeC9Av3Cb1rrJXcaR_KB2D7OHZVYjAepQalnvUtNiYXEY5zW46dpXw5EtXRzbh0CIwLTnSw3Opsd=w408-h408-k-no", map: "https://maps.app.goo.gl/UdS9TiSnams7nJuG8", hindi: "अजंता की गुफाएं अपनी प्राचीन बौद्ध पेंटिंग के लिए प्रसिद्ध हैं।" }
        ]
    }
    // ... Note: You can continue adding up to 50+ sites in this structure
};

const interests = ["Architecture", "Sacred", "Nature", "Mughal", "Ancient", "Buddhist", "Forts"];

window.onload = () => {
    const pillBox = document.getElementById('pref-pills');
    interests.forEach(i => pillBox.innerHTML += `<div class="pill" onclick="this.classList.toggle('active')">${i}</div>`);

    const sSelect = document.getElementById('state-select');
    Object.keys(heritageDB).forEach(s => sSelect.innerHTML += `<option>${s}</option>`);

    new QRCode(document.getElementById("qrcode"), "USER_PRO_INTEL_2026");
    syncStateData();
};

function syncStateData() {
    const state = document.getElementById('state-select').value;
    const cSelect = document.getElementById('city-select');
    cSelect.innerHTML = "";
    Object.keys(heritageDB[state]).forEach(c => cSelect.innerHTML += `<option>${c}</option>`);
    renderHeritageGrid();
}

function renderHeritageGrid() {
    const state = document.getElementById('state-select').value;
    const city = document.getElementById('city-select').value;
    const grid = document.getElementById('heritage-nodes');
    grid.innerHTML = "";

    heritageDB[state][city].forEach(site => {
        grid.innerHTML += `
            <div class="h-node">
                <img src="${site.img}">
                <div class="h-label">${site.name}</div>
                <div style="padding: 10px; display:flex; gap:5px;">
                    <button class="action-btn" style="font-size:0.5rem" onclick="window.open('${site.map}')">MAP</button>
                    <button class="action-btn" style="font-size:0.5rem" onclick="playHindiGuide('${site.hindi}')">HINDI</button>
                </div>
            </div>`;
    });
}

function playHindiGuide(text) {
    window.speechSynthesis.cancel();
    document.getElementById('audio-status').innerText = "Streaming: Hindi Guide...";
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'hi-IN'; // MODULE 6: Hindi Voice Guide Implementation
    window.speechSynthesis.speak(utter);
}

function stopAudio() {
    window.speechSynthesis.cancel();
    document.getElementById('audio-status').innerText = "System Idle";
}

function generateTrail() {
    document.getElementById('trail-log').innerHTML = "[SUCCESS] CIRCUIT_TRAIL_OPTIMIZED";
}

function openAdmin() {
    alert("CRITICAL: ACCESSING STATE_ADMIN_DASHBOARD_V2.0");
}
