from sqlalchemy import Column, DateTime, String

from .database import Base
from datetime import datetime


class User(Base):
    __tablename__ = "user_metadata"

    id = Column(String, primary_key=True, index=True) ## TODO should be the user id from Supabase
    name = Column(String)
    email = Column(String, unique=True, index=True)
    added_on = Column(DateTime, nullable=False, default=datetime.utcnow)
