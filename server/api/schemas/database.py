from pydantic import BaseModel, EmailStr

class DatabaseBase(BaseModel):
    name: str = None
