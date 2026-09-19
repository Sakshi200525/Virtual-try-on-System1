from fastapi import FastAPI

app = FastAPI(
    title="AI Based 3D Virtual Try-On System",
    version="1.0.0"
)


@app.get("/")
def home():
    return {
        "message": "Virtual Try-On API is running"
    }


@app.get("/health")
def health():
    return {
        "status": "OK"
    }