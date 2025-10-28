from pydantic import BaseModel, Field
from uuid import UUID
from datetime import datetime

class CalendarResponse(BaseModel):
    id: UUID
    owner_id: UUID
    name: str = Field(default="My Calendar")
    timezone: str = Field(default="Europe/Warsaw")
    color: str = Field(default="#216778")
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    model_config = {"from_attributes": True}