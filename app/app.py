from fastapi import FastAPI
from models.calendar import Calendar

app = FastAPI()

@app.get("/", response_model=Calendar)
def read_root():
  return Calendar(id=1, name="Main Calendar")