const form = document.getElementById("productForm");
const productList = document.getElementById("productList");
const messageBox = document.getElementById("messageBox");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  const name = document.getElementById("name").value.trim();
  const description = document.getElementById("description").value.trim();
  const imageUrl = document.getElementById("imageUrl").value.trim();
  const price = document.getElementById("price").value.trim();
  const brand = document.getElementById("brand").value.trim();

  // Clear previous messages
  messageBox.innerHTML = "";

  // Validate
  if (!name || !description || !imageUrl || !price || !brand) {
    const errorDiv = document.createElement("div");
    errorDiv.className = "message error";
    errorDiv.textContent = "Please fill in all fields.";
    messageBox.appendChild(errorDiv);
    return;
  }

  // Create product card
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${imageUrl}" alt="${name}" />
    <h3>${name}</h3>
    <p><strong>Brand:</strong> ${brand}</p>
    <p><strong>Price:</strong> $${parseFloat(price).toFixed(2)}</p>
    <p>${description}</p>
  `;
  productList.prepend(card);

  // Show success message
  const successDiv = document.createElement("div");
  successDiv.className = "message success";
  successDiv.textContent = "Product added successfully!";
  messageBox.appendChild(successDiv);

  // Clear form
  form.reset();
});
