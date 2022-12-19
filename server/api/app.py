from fastapi import FastAPI
# from .routers import root_router
from .db import models, SessionLocal, engine


# will probably replace this in the future with Alembic
models.Base.metadata.create_all(bind=engine)

app = FastAPI()


# Dependency
def get_db_session():
    db_session = SessionLocal()
    try:
        yield db_session
    finally:
        db_session.close()


# app.include_router(root_router)
