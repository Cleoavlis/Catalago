// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const catalogSection = document.getElementById("catalog");

    // Array de exemplo de produtos
    const products = [
        { id: 1, name: "Conjunto Floral", price: 19.99, image: "product1.jpg", whatsapp: "+5561984254534" },
        { id: 2, name: "Conjunto paty red", price: 29.99, image: "product2.jpg", whatsapp: "+5561984254534" },
        { id: 3, name: "Vestido Floral PT", price: 29.99, image: "product3.jpg", whatsapp: "+5561984254534" },
        { id: 4, name: "Conjunto Paty vinho", price: 29.99, image: "product4.jpg", whatsapp: "+5561984254534" },
        { id: 5, name: "Conjunto Floral", price: 19.99, image: "product1.jpg", whatsapp: "+5561984255302" },
        { id: 6, name: "Conjunto paty red", price: 29.99, image: "product2.jpg", whatsapp: "+5561984255303" },
        { id: 7, name: "Vestido Floral PT", price: 29.99, image: "product3.jpg", whatsapp: "+5561984255304" },
        { id: 8, name: "Conjunto Paty vinho", price: 29.99, image: "product4.jpg", whatsapp: "+5561984255305" },
        { id: 9, name: "Conjunto Floral", price: 19.99, image: "product1.jpg", whatsapp: "+5561984255302" },
        { id: 10, name: "Conjunto paty red", price: 29.99, image: "product2.jpg", whatsapp: "+5561984255303" },
        { id: 11, name: "Vestido Floral PT", price: 29.99, image: "product3.jpg", whatsapp: "+5561984255304" },
        { id: 12, name: "Conjunto Paty vinho", price: 29.99, image: "product4.jpg", whatsapp: "+5561984255305" },
        // Adicione mais produtos conforme necessário
    ];

    // Função para renderizar os produtos no catálogo
    function renderProducts() {
        catalogSection.innerHTML = "";
        products.forEach(product => {
            const productElement = document.createElement("div");
            productElement.classList.add("product");
            productElement.innerHTML = `
                <div class="product-item">
                    <a href="https://api.whatsapp.com/send?phone=${encodeURIComponent(product.whatsapp)}&text=Olá,%20estou%20interessado%20no%20produto%20${encodeURIComponent(product.name)}" target="_blank">
                        <img src="${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p>R$ ${product.price.toFixed(2)}</p>
                    </a>
                </div>
            `;
            catalogSection.appendChild(productElement);
        });
    }

    // Chama a função para renderizar os produtos quando a página for carregada
    renderProducts();
});