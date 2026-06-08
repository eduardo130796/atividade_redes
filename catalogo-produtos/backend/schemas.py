from pydantic import BaseModel

class ProductCreate(BaseModel):
    name: str
    category: str
    price: float


class ProductUpdate(BaseModel):
    name: str
    category: str
    price: float