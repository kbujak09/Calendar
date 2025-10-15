from pydantic import BaseModel
from uuid import UUID

class CalendarResponse(BaseModel):
    id: UUID
    owner_id: UUID
    name: str
    timezone: str

    model_config = {"from_attributes": True}