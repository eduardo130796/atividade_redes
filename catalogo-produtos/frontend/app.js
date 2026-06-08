const API_URL = "/api/products";

/* =========================
   LISTAR PRODUTOS (READ)
========================= */
async function loadProducts() {

    const response = await fetch(API_URL);
    const products = await response.json();

    const container = document.getElementById("products");

    container.innerHTML = "";

    products.forEach(product => {

        container.innerHTML += `
            <div class="col-md-4 mb-4">

                <div class="card h-100 shadow-sm">

                    <div class="card-body">

                        <h5 class="card-title">
                            ${product.name}
                        </h5>

                        <p class="text-muted">
                            ${product.category}
                        </p>

                        <h4 class="text-success">
                            R$ ${product.price}
                        </h4>

                        <div class="d-flex gap-2 mt-3">

                            <button
                                class="btn btn-warning btn-sm"
                                onclick="editProduct(${product.id})">
                                Editar
                            </button>

                            <button
                                class="btn btn-danger btn-sm"
                                onclick="deleteProduct(${product.id})">
                                Excluir
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        `;
    });
}

/* =========================
   CREATE (CADASTRAR)
========================= */
document
.getElementById("productForm")
.addEventListener("submit", async (event) => {

    event.preventDefault();

    const product = {
        name: document.getElementById("name").value,
        category: document.getElementById("category").value,
        price: parseFloat(document.getElementById("price").value)
    };

    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    });

    event.target.reset();

    loadProducts();
});

/* =========================
   DELETE (EXCLUIR)
========================= */
async function deleteProduct(id) {

    const confirmDelete = confirm("Deseja realmente excluir este produto?");

    if (!confirmDelete) return;

    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    loadProducts();
}

/* =========================
   UPDATE (EDITAR)
========================= */
async function editProduct(id) {

    const newName = prompt("Novo nome do produto:");
    if (!newName) return;

    const newCategory = prompt("Nova categoria:");
    if (!newCategory) return;

    const newPrice = prompt("Novo preço:");
    if (!newPrice) return;

    const updatedProduct = {
        name: newName,
        category: newCategory,
        price: parseFloat(newPrice)
    };

    await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedProduct)
    });

    loadProducts();
}

/* =========================
   INIT
========================= */
loadProducts();