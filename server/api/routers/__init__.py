# from fastapi import APIRouter

# from .database import router as database_router

# main_router = APIRouter()

# main_router.include_router(database_router, prefix="/database", tags=["database"])
# # main_router.include_router(profile_router, tags=["user"])
# # main_router.include_router(security_router, tags=["security"])
# # main_router.include_router(user_router, prefix="/user", tags=["user"])


# @main_router.get("/")
# async def index():
#     return {"message": "Hello World!"}