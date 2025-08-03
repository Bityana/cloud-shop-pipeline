from fastapi import APIRouter
router = APIRouter()

SAMPLE = [
    {"id": 1, "name": "DevOps Hoodie", "price": 49.0},
    {"id": 2, "name": "Cyber Mug",    "price": 15.0},
]

@router.get("/products")
def list_products():
    return SAMPLE
