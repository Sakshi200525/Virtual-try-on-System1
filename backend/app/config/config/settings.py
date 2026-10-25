import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "Virtual Try-On Backend"
    UPLOAD_DIR: str = os.path.join(os.getcwd(), "uploads")
    
    class Config:
        env_file = ".env"

settings = Settings()
os.makedirs(os.path.join(settings.UPLOAD_DIR, "persons"), exist_ok=True)
os.makedirs(os.path.join(settings.UPLOAD_DIR, "garments"), exist_ok=True)
os.makedirs(os.path.join(settings.UPLOAD_DIR, "outputs"), exist_ok=True)