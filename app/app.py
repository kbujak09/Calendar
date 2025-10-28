from fastapi import FastAPI
from schemas.calendar import CalendarResponse
from uuid import uuid4

app = FastAPI()

@app.get("/", response_model=CalendarResponse)
def read_root():
    return CalendarResponse(
        id=uuid4(),
        owner_id=uuid4()
    )