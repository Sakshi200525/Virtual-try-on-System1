from fastapi import APIRouter
from app.config.services.body_service import BodyService

router = APIRouter(prefix="/body", tags=["Body Analysis"])

@router.post("/analyze")
async def analyze_body():
    return BodyService.analyze_body("")