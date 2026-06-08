const API_URL = "/api/products";

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

                    </div>

                </div>

            </div>
        `;
    });
}

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

loadProducts();

async function deleteProduct(id) {

    await fetch(`/api/products/${id}`, {
        method: "DELETE"
    });

    loadProducts();
}