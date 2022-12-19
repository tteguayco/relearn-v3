from sqlalchemy import Column, DateTime, Integer, String, ForeignKey
from sqlalchemy.orm import Mapped, relationship  ##, mapped_column 
from .. import Base
from datetime import datetime


class Database(Base):
    __tablename__ = "database_metadata"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    # tables: Mapped[list["Table"]] = relationship()
    created_by = Column(String)   ## TODO should be the user id from Supabase
    created_on = Column(DateTime, nullable=False, default=datetime.utcnow)


class Table(Base):
    __tablename__ = "table_metadata"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    # database_id: Mapped[int] = mapped_column(ForeignKey("Database.id"))
    # database: Mapped["Database"] = relationship(back_populates="Table")
    created_by = Column(String)   ## TODO should be the user id from Supabase
    created_on = Column(DateTime, nullable=False, default=datetime.utcnow)
