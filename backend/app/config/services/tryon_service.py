import os
import cv2
from app.config.config.settings import settings

class TryOnService:
    @staticmethod
    async def process_tryon(person_file, garment_file):
        person_bytes = await person_file.read()
        garment_bytes = await garment_file.read()

        person_path = os.path.join(settings.UPLOAD_DIR, "persons", person_file.filename)
        garment_path = os.path.join(settings.UPLOAD_DIR, "garments", garment_file.filename)
        output_filename = f"output_{person_file.filename}"
        output_path = os.path.join(settings.UPLOAD_DIR, "outputs", output_filename)

        with open(person_path, "wb") as f:
            f.write(person_bytes)
        with open(garment_path, "wb") as f:
            f.write(garment_bytes)

        # Placeholder OpenCV processing logic
        person_img = cv2.imread(person_path)
        cv2.imwrite(output_path, person_img)

        return {"result_image_url": f"http://localhost:8000/uploads/outputs/{output_filename}"}