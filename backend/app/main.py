from fastapi import FastAPI
from .products import router as products_router

app = FastAPI(title="Cloud-Shop API")

@app.get("/health")
def health():
    return {"status": "ok"}

app.include_router(products_router, prefix="/api")
