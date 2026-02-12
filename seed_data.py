from main import SessionLocal, State, HeritageSite, Base, engine
db = SessionLocal()
data = {
    "Uttar Pradesh": [("Taj Mahal", "Architecture", "https://images.unsplash.com/photo-1564507592333-c60657eaa0ae", "A Mughal masterpiece.")],
    "Maharashtra": [("Ajanta Caves", "Caves", "https://images.unsplash.com/photo-1591873831871-364276709b1f", "Buddhist rock-cut monuments.")],
    "Rajasthan": [("Amber Fort", "Hill Fort", "https://images.unsplash.com/photo-1590050752117-23a9d7fc2140", "A majestic Jaipur landmark.")]
}
for s_name, sites in data.items():
    state = State(name=s_name); db.add(state); db.commit()
    for name, cat, img, desc in sites:
        db.add(HeritageSite(name=name, category=cat, photo_url=img, description=desc, state_id=state.id))
db.commit()
print("✨ System Ready.")
