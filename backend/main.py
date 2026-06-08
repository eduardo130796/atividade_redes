from fastapi import FastAPI
from sqlalchemy.orm import Session

from database import SessionLocal, engine
from models import Base, Product
from schemas import ProductCreate

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Catálogo de Produtos")


@app.post("/products", status_code=201)
def create_product(product: ProductCreate):

    db: Session = SessionLocal()

    new_product = Product(
        name=product.name,
        category=product.category,
        price=product.price
    )

    db.add(new_product)
    db.commit()
    db.refresh(new_product)

    return {
        "id": new_product.id,
        "name": new_product.name,
        "category": new_product.category,
        "price": float(new_product.price)
    }


@app.get("/products")
def get_products():

    db: Session = SessionLocal()

    products = db.query(Product).all()

    return [
        {
            "id": p.id,
            "name": p.name,
            "category": p.category,
            "price": float(p.price)
        }
        for p in products
    ]

@app.get("/products/{product_id}")
def get_product(product_id: int):

    db = SessionLocal()

    product = (
        db.query(Product)
        .filter(Product.id == product_id)
        .first()
    )

    if not product:
        raise HTTPException(
            status_code=404,
            detail="Produto não encontrado"
        )

    return {
        "id": product.id,
        "name": product.name,
        "category": product.category,
        "price": float(product.price)
    }

@app.put("/products/{product_id}")
def update_product(
    product_id: int,
    data: ProductUpdate
):

    db = SessionLocal()

    product = (
        db.query(Product)
        .filter(Product.id == product_id)
        .first()
    )

    if not product:
        raise HTTPException(
            status_code=404,
            detail="Produto não encontrado"
        )

    product.name = data.name
    product.category = data.category
    product.price = data.price

    db.commit()

    return {
        "message": "Produto atualizado"
    }

@app.delete("/products/{product_id}")
def delete_product(product_id: int):

    db = SessionLocal()

    product = (
        db.query(Product)
        .filter(Product.id == product_id)
        .first()
    )

    if not product:
        raise HTTPException(
            status_code=404,
            detail="Produto não encontrado"
        )

    db.delete(product)

    db.commit()

    return {
        "message": "Produto removido"
    }