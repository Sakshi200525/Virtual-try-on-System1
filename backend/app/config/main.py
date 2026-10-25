from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

from app.config.routes import tryon, body, size, recommendation
from app.config.config.settings import settings

app = FastAPI(title=settings.PROJECT_NAME)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount static folder to serve output images to frontend
app.mount("/uploads", StaticFiles(directory=settings.UPLOAD_DIR), name="uploads")

# Include Router Modules
app.include_router(tryon.router)
app.include_router(body.router)
app.include_router(size.router)
app.include_router(recommendation.router)

@app.get("/")
def root():
    return {"message": "Virtual Try-On Backend API is running successfully!"}