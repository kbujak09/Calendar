from sqlalchemy import ForeignKey, String, UniqueConstraint
from sqlalchemy.orm import mapped_column, Mapped, DeclarativeBase
from sqlalchemy.dialects.postgresql import UUID
import uuid

class Base(DeclarativeBase):
    pass

class Calendar(Base):
    __tablename__ = "calendars"
    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    owner_id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), ForeignKey('users.id', ondelete="CASCADE"), nullable=False)
    name: Mapped[str] = mapped_column(String(120), default="Mój kalendarz", nullable=False)
    timezone: Mapped[str] = mapped_column(String(64), default="Europe/Warsaw", nullable=False)

    __table_args__ = (UniqueConstraint("owner_id", name="uq_one_calendar_per_user"),)