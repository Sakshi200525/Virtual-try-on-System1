from fastapi import APIRouter
from app.config.services.recommendation_service import RecommendationService

router = APIRouter(prefix="/recommendations", tags=["Outfit Recommendations"])

@router.get("/{user_id}")
async def get_recommendations(user_id: int):
    return RecommendationService.get_recommendations(user_id)