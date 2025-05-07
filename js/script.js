document.addEventListener("DOMContentLoaded", () => {
  let cartItems = [];

  const products = {
    1: {
      id: 1,
      name: "Leather Jacket",
      description: "Elegant leather jacket for all occasions...",
      price: 3600,
      sizes: ["46", "48", "52", "54"],
      images: [
        "../assets/mens/Light-Chaqueta-piel.avif",
        "../assets/mens/Light-Chaqueta-de-piel-front.jpg",
        "../assets/mens/Light-Chaqueta-piel-back.avif",
      ],
    },
    2: {
      name: "Squared Sunglasses",
      price: 280,
      description: "The Cruise 2025 eyewear collection...",
      sizes: [],
      images: [
        "../assets/mens/Light-Gafas-de-sol.avif",
        "../assets/mens/Light-Gafas-de-sol-face.avif",
      ],
    },
    // ... continúa con los demás productos
  };

  const cartCount = document.getElementById("cart-count");
  const cartItemsList = document.getElementById("cart-items-list");
  const cartDropdown = document.getElementById("cart-dropdown");
  const cartIcon = document.getElementById("cartIcon");

  function saveCart() {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }

  function loadCart() {
    const storedItems = localStorage.getItem("cartItems");
    if (storedItems) {
      cartItems = JSON.parse(storedItems);
      updateCart();
    }
  }

  function updateCart() {
    cartCount.textContent = cartItems.length;
    cartItemsList.innerHTML = "";
  
    cartItems.forEach((item, index) => {
      const li = document.createElement("li");
      li.classList.add("cart-item");
      li.innerHTML = `
        <span class="product-name">${item}</span>
        <button class="remove-item-btn">
          <i class="fas fa-trash-alt"></i>
        </button>
      `;
      li.querySelector(".remove-item-btn").addEventListener("click", () => {
        removeFromCart(index);
      });
      cartItemsList.appendChild(li);
    });
  
    // ✅ Calcular total del carrito
    let total = 0;
    cartItems.forEach((itemName) => {
      const [name] = itemName.split(" - ");
      const product = Object.values(products).find((p) => p.name === name);
      if (product) total += product.price;
    });
    document.getElementById("cart-total").textContent = `$${total.toFixed(2)}`;
  }
  

  function addToCart(productName) {
    cartItems.push(productName);
    updateCart();
    saveCart();
  }

  function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCart();
    saveCart();
  }

  function openModal(productId) {
    const product = products[productId];
    if (!product) return;

    const modal = document.getElementById("productModal");
    modal.style.display = "flex";
    document.querySelector(".header").style.display = "none";

    document.getElementById("productName").textContent = product.name;
    document.getElementById("productDesc").textContent = product.description;
    document.getElementById("productPrice").textContent = product.price;

    // Carousel
    const carouselContainer = document.getElementById("carouselImages");
    carouselContainer.innerHTML = "";
    product.images.forEach((image, index) => {
      const isActive = index === 0 ? "active" : "";
      const carouselItem = `
        <div class="carousel-item ${isActive}">
          <img src="${image}" class="d-block w-100" alt="${product.name}">
        </div>
      `;
      carouselContainer.innerHTML += carouselItem;
    });

    // Sizes
    const sizeSelect = document.getElementById("productSize");
    sizeSelect.innerHTML = "";

    if (product.sizes.length > 0) {
      product.sizes.forEach((size) => {
        const option = document.createElement("option");
        option.value = size;
        option.textContent = size;
        sizeSelect.appendChild(option);
      });
    } else {
      const option = document.createElement("option");
      option.value = "unique";
      option.textContent = "One size fits all";
      sizeSelect.appendChild(option);
    }

    // Botón agregar al carrito
    document.getElementById("addToCartBtn").onclick = () => {
      const selectedSize = sizeSelect.value;
      const itemDescription =
        selectedSize !== "unique"
          ? `${product.name} - Size ${selectedSize}`
          : product.name;
      addToCart(itemDescription);
      cartDropdown.classList.add("visible");
      closeModal();
    };
  }

  function closeModal() {
    document.getElementById("productModal").style.display = "none";
    document.querySelector(".header").style.display = "block";
  }

  document.querySelectorAll(".highlight-item").forEach((item) => {
    item.addEventListener("click", () => {
      const id = parseInt(item.getAttribute("data-id"));
      openModal(id);
    });
  });

  cartIcon.addEventListener("click", () => {
    cartDropdown.classList.toggle("visible");
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".cart-icon-container")) {
      cartDropdown.classList.remove("visible");
    }
  });

  document.querySelector(".close").addEventListener("click", closeModal);

  window.addEventListener("click", (e) => {
    const modal = document.getElementById("productModal");
    if (e.target === modal) {
      closeModal();
    }
  });

  // Carga inicial
  loadCart();

  // Contact page

  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que recargue la página
    alert('Thanks for contacting us! We’ll get back to you soon.');
    this.reset(); // Limpia los campos del formulario
  });
});
