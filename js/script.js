document.addEventListener("DOMContentLoaded", () => {
  let cartItems = [];

  const products = {
    1: {
      id: 1,
      name: "Leather Jacket",
      description: "Elegant leather jacket for all occasions.This regular-fit bomber jacket is crafted from matte leather with a Web trim ",
      price: 3600,
      sizes: ["46", "48", "52", "54"],
      images: [
        "../assets/mens/Light-Chaqueta-piel.avif",
        "../assets/mens/Light-Chaqueta-de-piel-front.jpg",
        "../assets/mens/Light-Chaqueta-piel-back.avif",
      ],
    },
  2: {
    name: 'Squared Sunglasses',
    price: 280,
    description: 'The Cruise 2025 eyewear collection combines essential designs and exclusive motifs. ',
    sizes: [],
    images: [
      "../assets/mens/Light-Gafas-de-sol.avif",
      "../assets/mens/Light-Gafas-de-sol-face.avif",
      ]
  },
  3: {
      name: 'Brown Mocasin',
      price: 890,
      description: 'Modern interpretations of traditional symbols pay homage to Luxus heritage while looking to the future. These leather loafers reinterpret the traditional Horsebit design with a flat sole. The gold-toned detailing is a direct link to the brand jump in sports and leisure.',
      sizes: ['8 = 42 EU','9 = 43 EU','10 = 44 EU','11 = 45 EU','12 = 46 EU','13 = 47 EU'],
      images: [
          "../assets/mens/Light-Mocasn-hombre.avif",
          "../assets/mens/Light-Mocasn-hombre-front.avif",
          "../assets/mens/Light-Mocasn-hombre-back.avif",
      ]
    },
  4: {
      name: 'Denim Jeans',
      price: 780,
      description: 'The Cruise 2025 collection presents a new take on denim with subtle details that enhance everyday looks. These slim-fit pants are crafted from certified cotton denim with a green and red Web tab detail at the hems.',
      sizes: ['30','31','32','33','34','35','36','37','38','39','40','41','42','43'],
      images: [
          "../assets/mens/Light-Pantalon-denim.avif",
          "../assets/mens/Light-Pantalon-denim-front.avif",
          "../assets/mens/Light-Pantalon-denim-back.avif",
      ]
    },
  5: {
      name: 'Brown Suit',
      price: 7950,
      description: 'The dark brown suit in Oasi Cashmere showcases Luxus commitment to luxury fabrics.',
      sizes: ['48','50','52','56'],
      images: [
          "../assets/mens/traje-marron.avif",
          "../assets/mens/traje-marron-frente.avif",
          "../assets/mens/traje-marron-atras.avif",
      ]
    },
  6: {
      name: 'Black Smokin',
      price: 4100,
      description: 'Black wool and silk tuxedo has a fluid drape.',
      sizes: ['48','50','52','54','56','58'],
      images: [
          "../assets/mens/smokin.avif",
          "../assets/mens/smokin-frente.avif",
          "../assets/mens/smokin-atras.avif",
      ]
    },
  7: {
      name: 'Beige Blazer',
      price: 6100,
      description: 'A light beige and light taupe Madras checked motif in cashmere and silk: this cardigan jacket is a sartorial staple.',
      sizes: ['46','48','50','52','54','56','58'],
      images: [
          "../assets/mens/beige-blazer.avif",
          "../assets/mens/baige-blazer-front.jpeg",
          "../assets/mens/baige-blazer-back.jpeg",
  ]
    },
  8: {
      name: 'Green Scarf',
      price: 600,
      description: 'The dark green multimélange Oasi Cashmere scarf is a luxurious choice of accessory.',
      sizes: [],
      images: [
          "../assets/mens/green-scarf.avif",
          "../assets/mens/green-scarf-closeup.avif",
          "../assets/mens/green-scarf-fullbody.avif",
  ]
    },
  9: {
      name: 'Lino Shirt',
      price: 890,
      description: 'This light blue Oasi Lino shirt is made from Luxus 100% European-grown linen.',
      sizes: ['S','M','L','XL','XXL'],
      images: [
          "../assets/mens/oasi-lino-shirt.avif",
          "../assets/mens/oasi-lino-shirt-front.avif",
          "../assets/mens/oasi-lino-shirt-back.avif",
  ]
    },
  10: {
      name: 'Ochre Polo',
      price: 1100,
      description: 'This polo shirt is crafted from Luxus Premium Cotton in a refined ochre colorway.',
      sizes: ['46','48','50','52','54','56','58','60'],
      images: [
          "../assets/mens/ochre-polo.avif",
          "../assets/mens/ochre-polo-front.avif",
          "../assets/mens/ochre-polo-back.avif",
  ]
    },
    11: {
      name: 'Knit Dress',
      price: 1800,
      description: 'These flattering leggings, crafted from technical knit, feature a comfortable, sporty design. They feature a striking contrast elastic waistband with a stylish signature Monogram motif.',
      sizes: ['32','34','36','38','40','42','44'],
      images: [
          "../assets/womens/vestido-de-punto-Cropped view.avif",
          "../assets/womens/vestido-de-punto-Front view.avif",
          "../assets/womens/vestido-de-punto-worn view.avif",
  ]
    },
    12: {
      name: 'Monogram Waistband Leggings',
      price: 990,
      description: 'This polo shirt is crafted from Luxus Premium Cotton in a refined ochre colorway.',
      sizes: ['32','34','36','38','40','42','44'],
      images: [
        "../assets/womens/leggings-Worn view.avif",
        "../assets/womens/leggings-Front view.avif",
        "../assets/womens/leggings-Worn view.avif",
  ]
    },
    13: {
      name: 'Poplin blouse',
      price: 1950,
      description: 'Crafted from starched cotton poplin, this blouse features a modern design with clean lines. The top features a V-shaped inset, while the bottom features a peplum for added volume.',
      sizes: ['34','36','38','40','42','44'],
      images: [
          "../assets/womens/blusa-de-popelin-view.avif",
          "../assets/womens/blusa-de-popelin-Front view.avif",
          "../assets/womens/blusa-de-popelin-Ambiance view.avif",
  ]
    },
    14: {
      name: 'Slim-cut jeans',
      price: 1350,
      description: 'These essential denim jeans feature classic yellow stitching, highlighting their construction.',
      sizes: ['34','36','38','40','42','44'],
      images: [
          "../assets/womens/vaqueros-Worn view.avif",
          "../assets/womens/vaqueros-Front view.avif",
          "../assets/womens/vaqueros- worn view.avif",
  ]
    },
    15: {
      name: 'Cat Eye Sunglasses',
      price: 490,
      description: 'The striking LV Glam 2.0 Cat Eye sunglasses stand out with their colorful lenses and classic shape',
      sizes: [],
      images: [
          "../assets/womens/gafas-de-sol-Interior view.avif",
          "../assets/womens/gafas-de-sol-Side view.avif",
  ]
    },
    16: {
      name: 'Moon Metal Cat Eye',
      price: 600,
      description: 'An updated version of the iconic LV Moon style, the LV Moon Metal Cat Eye sunglasses feature classic lens shapes with a modern twist.',
      sizes: [],
      images: [
          "../assets/womens/gafas-de-sol-lmoon-Interior view.avif",
          "../assets/womens/gafas-de-sol-moon-Side view.png",
          "../assets/womens/gafas-de-sol-moon-Front view.avif",
  ]
    },
    17: {
      name: 'Capucines wallet',
      price: 2900,
      description: 'This new Capucines wallet, crafted in smooth leather, combines craftsmanship and refined details.',
      sizes: [],
      images: [
          "../assets/womens/cartera-capucines-Worn view.avif",
          "../assets/womens/cartera-capucines-Front view.avif",
          "../assets/womens/cartera-capucines-Back view.avif",
  ]
    },
    18: {
      name: 'Alma BB bag',
      price: 1700,
      description: 'Inspired by the original 1934 Art Deco style, this Alma BB bag is crafted from the Maisons signature textured and deep-dyed Epi leather.',
      sizes: [],
      images: [
          "../assets/womens/bolso-alma-Worn view.avif",
          "../assets/womens/bolso-alma-Front view.avif",
          "../assets/womens/bolso-alma-Back view.avif",
  ]
    },
    19: {
      name: 'Silhouette Sandal',
      price: 940,
      description: 'This Silhouette sandal is crafted from calfskin and a jacquard weave with a Monogram motif, which has been embroidered to create a geometric pattern.',
      sizes: ['5 = 35 EU','6 = 36 EU','6.5 = 37 EU','7.5 = 38 EU','8 = 39 EU','9 = 40 EU'],
      images: [
          "../assets/womens/sandalia-Front view.avif",
          "../assets/womens/sandalia-Interior view.avif",
          "../assets/womens/sandalia-Back view.avif",
  ]
    },
    20: {
      name: 'Swing backless court shoe',
      price: 950,
      description: 'This Swing slingback pump is crafted from smooth, soft, and supple lambskin.',
      sizes: ['5 = 35 EU','6 = 36 EU','6.5 = 37 EU','7.5 = 38 EU','8 = 39 EU','9 = 40 EU'],
      images: [
          "../assets/womens/zapato-Front view.avif",
          "../assets/womens/zapato-Interior view.avif",
          "../assets/womens/zapato-Back view.avif",
  ]
    },
    21: {
      name: 'Totissima Large Reversible Tote Bag',
      price: 2200,
      description: 'The reversible Totissima tote offers two distinct looks in one piece, with grained leather on one side and GG canvas on the other. The Totissima name emphasizes its enduring style and functionality.',
      sizes: [],
      images: [
          "../assets/signature/Bolso-Totissima.avif",
          "../assets/signature/Bolso-Totissima-front.avif",
          "../assets/signature/Bolso-Totissima-side.avif",
  ]
    },
    22: {
      name: 'Softbit maxi shoulder bag',
      price: 2900,
      description: 'The new Softbit shoulder bag features the House signature maxi half-Horsebit appliqué. This style combines aesthetics and functionality with its spacious design in supple grained leather with an exquisite texture and a magnetic closure.',
      sizes: [],
      images: [
          "../assets/signature/Bolso-Softbit.avif",
          "../assets/signature/Bolso-Softbit-front.avif",
          "../assets/signature/Bolso-Softbit-side.avif",
  ]
    },
    23: {
      name: 'GG Marmont Mini Shoulder Bag',
      price: 1200,
      description: 'This Swing slingback pump is crafted from smooth, soft, and supple lambskin.',
      sizes: [],
      images: [
          "../assets/signature/Minibolso-Marmont.avif",
          "../assets/signature/Minibolso-Marmont-front.avif",
          "../assets/signature/Minibolso-Marmont-side.avif",
  ]
    },
    24: {
      name: 'Re-Motion womens sneaker',
      price: 900,
      description: 'As part of the Spring Summer 2025 collection, these sporty sneakers feature an adjustable and removable ankle strap. The lightweight and flexible black outsole has been specially treated for a retro finish.',
      sizes: ['5 = 35 EU','6 = 36 EU','6.5 = 37 EU','7.5 = 38 EU','8 = 39 EU','9 = 40 EU'],
      images: [
          "../assets/signature/Zapatilla-Motion.avif",
          "../assets/signature/Zapatilla-Motion-front.avif",
          "../assets/signature/Zapatilla-Motion-back.avif",
  ]
    },
    25: {
      name: 'Horsebit Thong Sandal',
      price: 670,
      description: 'These womens thong sandals epitomize elegance and simplicity, with a design that adds a unique touch to warm-weather looks.',
      sizes: ['5 = 35 EU','6 = 36 EU','6.5 = 37 EU','7.5 = 38 EU','8 = 39 EU','9 = 40 EU'],
      images: [
          "../assets/signature/Sandalia-Horsebit.avif",
          "../assets/signature/Sandalia-Horsebit-front.avif",
          "../assets/signature/Sandalia-Horsebit-back.avif",
  ]
    },
    26: {
      name: 'Jordaan loafer for women',
      price: 890,
      description: 'The Horsebit loafers, a testament to heritage, reflect classic elegance.',
      sizes: ['5 = 35 EU','6 = 36 EU','6.5 = 37 EU','7.5 = 38 EU','8 = 39 EU','9 = 40 EU'],
      images: [
          "../assets/signature/Light-Mocasn.avif",
          "../assets/signature/Light-Mocasn-front.avif",
          "../assets/signature/Light-Mocasn-back.avif",
  ]
    },
    27: {
      name: 'Horsebit Loafer',
      price: 990,
      description: 'From the Spring Summer 2025 collection, these dark brown leather Horsebit loafers showcase the signature silver appliqué on the glossy leather upper and a sculptural elongated toe.',
      sizes: ['8 = 42 EU','9 = 43 EU','10 = 44 EU','11 = 45 EU','12 = 46 EU','13 = 47 EU'],
      images: [
          "../assets/signature/Mocasn-con-Horsebit.avif",
          "../assets/signature/Mocasn-con-Horsebit-front.avif",
          "../assets/signature/Mocasn-con-Horsebit-back.jpg",
  ]
    },
    28: {
      name: 'leather Web shoe',
      price: 950,
      description: 'These mens lace-up shoes are crafted from glossy black leather, a sophisticated and elegant material that highlights the styles sleek silhouette. The iconic green and red Web stripe, the brands signature symbol, enhances this style with a subtle touch.',
      sizes: ['8 = 42 EU','9 = 43 EU','10 = 44 EU','11 = 45 EU','12 = 46 EU','13 = 47 EU'],
      images: [
          "../assets/signature/Zapato-con-tribanda.avif",
          "../assets/signature/Zapato-con-tribanda-front.avif",
          "../assets/signature/Zapato-con-tribanda-back.avif",
  ]
    },
    29: {
      name: 'Re-Web Mens Sneaker',
      price: 950,
      description: 'The Re-Web sneakers, Sabato De Sarnos first for the brand, are a contemporary design enhanced by striking classic stripes. This model is crafted from white leather. Featuring a variety of iconic details, these new sneakers capture attention thanks to the green and red Web tongue.',
      sizes: ['8 = 42 EU','9 = 43 EU','10 = 44 EU','11 = 45 EU','12 = 46 EU','13 = 47 EU'],
      images: [
          "../assets/signature/Zapatilla-Re-Web.avif",
          "../assets/signature/Zapatilla-Re-Web-front.avif",
          "../assets/signature/Zapatilla-Re-Web-back.avif",
  ]
    },
    30: {
      name: 'Medium GG canvas backpack',
      price: 2200,
      description: 'This small GG canvas backpack pays homage to the founder unmistakable monogram. The design is completed with a Web detail and showcases a new forest green hue, bringing a contemporary touch to everyday accessories.',
      sizes: [],
      images: [
          "../assets/signature/Mochila-de-lona-GG.avif",
          "../assets/signature/Mochila-de-lona-GG-front.avif",
          "../assets/signature/Mochila-de-lona-GG-back.avif",
  ]
    },
    31: {
      name: 'Nexus backpack medium size',
      price: 950,
      description: 'The selection of mens bags from the Cruise 2025 collection combines sleek lines and a sporty aesthetic. This backpack is crafted from sophisticated black nylon, a soft yet durable material enhanced by the all-over GG motif. Other exclusive details include a green and red Web stripe.',
      sizes: [],
      images: [
          "../assets/signature/Mochila-Nexus.avif",
          "../assets/signature/Mochila-Nexus-front.avif",
          "../assets/signature/Mochila-Nexus-back.avif",
  ]
    },
    32: {
      name: 'GG Emblem Medium Backpack',
      price: 2250,
      description: 'The new GG Emblem mens travel collection reinterprets the Houses history of elegance and craftsmanship. Crafted from the new black GG monogram coated fabric, this backpack features versatile interior pockets and an exterior D-ring for accessory storage.',
      sizes: [],
      images: [
          "../assets/signature/Mochila-GG-Emblem.avif",
          "../assets/signature/Mochila-GG-Emblem-front.avif",
          "../assets/signature/Mochila-GG-Emblem-back.avif",
  ]
    },
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

  // Carga inicial para que el carrito no se borre
  loadCart();

  // Contact page

  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thanks for contacting us! We’ll get back to you soon.');
    this.reset(); 
  });
});