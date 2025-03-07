// 🚀 ITERATION 1, 2, 3: Calculate Subtotals and Total Price
function updateSubtotal(product) {
  const price = parseFloat(product.querySelector('.price span').innerText);
  const quantity = parseInt(product.querySelector('.quantity input').value);
  const subtotal = price * quantity;
  product.querySelector('.subtotal span').innerText = subtotal.toFixed(2);
  return subtotal;
}

function calculateAll() {
  const allProducts = document.querySelectorAll('.product');
  let total = 0;

  allProducts.forEach((product) => {
    total += updateSubtotal(product);
  });

  document.querySelector('#total-value span').innerText = total.toFixed(2);
}

// 🚀 ITERATION 4: Remove Product
function removeProduct(event) {
  const productRow = event.currentTarget.closest('.product');
  productRow.remove();
  calculateAll();
}

// 🚀 ITERATION 5: Create New Product
function createProduct() {
  const nameInput = document.querySelector(
    '.create-product input[type="text"]'
  );
  const priceInput = document.querySelector(
    '.create-product input[type="number"]'
  );
  const name = nameInput.value.trim();
  const price = parseFloat(priceInput.value);

  if (name === '' || isNaN(price) || price <= 0) {
    alert('Please enter a valid product name and price.');
    return;
  }

  const newRow = document.createElement('tr');
  newRow.classList.add('product');
  newRow.innerHTML = `
      <td class="name"><span>${name}</span></td>
      <td class="price">$<span>${price.toFixed(2)}</span></td>
      <td class="quantity"><input type="number" value="0" min="0" /></td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action"><button class="btn btn-remove">Remove</button></td>
  `;

  document.querySelector('#cart tbody').appendChild(newRow);
  newRow.querySelector('.btn-remove').addEventListener('click', removeProduct);

  // Clear input fields
  nameInput.value = '';
  priceInput.value = 0;
}

// 🚀 EVENT LISTENERS
window.addEventListener('load', () => {
  document.getElementById('calculate').addEventListener('click', calculateAll);
  document.getElementById('create').addEventListener('click', createProduct);

  document.querySelectorAll('.btn-remove').forEach((button) => {
    button.addEventListener('click', removeProduct);
  });
});
