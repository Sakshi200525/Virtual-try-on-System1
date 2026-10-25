from fastapi import APIRouter, UploadFile, File, HTTPException
from app.config.services.tryon_service import TryOnService

router = APIRouter(prefix="/tryon", tags=["Virtual Try-On"])

@router.post("/")
async def run_tryon(person: UploadFile = File(...), garment: UploadFile = File(...)):
    try:
        result = await TryOnService.process_tryon(person, garment)
        return {"status": "success", "data": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))