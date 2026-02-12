from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session, relationship

# --- DATABASE ENGINE ---
DATABASE_URL = "sqlite:///./heritage.db"
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# --- MODELS ---
class State(Base):
    __tablename__ = "states"
    id = Column(Integer, primary_key=True)
    name = Column(String, unique=True)
    sites = relationship("HeritageSite", back_populates="state")

class HeritageSite(Base):
    __tablename__ = "heritage_sites"
    id = Column(Integer, primary_key=True)
    name = Column(String)
    category = Column(String)
    photo_url = Column(Text)
    description = Column(Text)
    state_id = Column(Integer, ForeignKey("states.id"))
    state = relationship("State", back_populates="sites")

Base.metadata.create_all(bind=engine)

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"])

# This line links your CSS and JS files to the project
app.mount("/static", StaticFiles(directory="."), name="static")

def get_db():
    db = SessionLocal()
    try: yield db
    finally: db.close()

@app.get("/api/states")
def get_states(db: Session = Depends(get_db)):
    return db.query(State).all()

@app.get("/api/sites/{state_id}")
def get_sites(state_id: int, db: Session = Depends(get_db)):
    return db.query(HeritageSite).filter(HeritageSite.state_id == state_id).all()

@app.get("/", response_class=HTMLResponse)
async def serve_index():
    with open("index.html", "r") as f:
        return f.read()
