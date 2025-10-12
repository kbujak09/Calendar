from pydantic import BaseModel

class Calendar(BaseModel):
    id: int
    name: str