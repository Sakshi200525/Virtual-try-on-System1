from fastapi import APIRouter
from app.config.services.size_service import SizeService

router = APIRouter(prefix="/size", tags=["Size Recommendation"])

@router.post("/recommend")
async def recommend_size():
    return SizeService.recommend_size({})