document.addEventListener('DOMContentLoaded', () => {
  // Inject Navigation
  const navHtml = `
    <div class="logo">
      <a href="index.html">
        <img src="images/logo_1778046731081.png" alt="Lumière Logo">
      </a>
    </div>
    <ul class="nav-links">
      <li><a href="index.html">首頁</a></li>
      <li><a href="about.html">公司簡介</a></li>
      <li><a href="foundation.html">底妝</a></li>
      <li><a href="eyeshadow.html">眼影</a></li>
      <li><a href="eyeliner.html">眼線</a></li>
      <li><a href="eyebrow.html">眉毛</a></li>
      <li><a href="blush.html">頰彩</a></li>
      <li><a href="lip.html">唇彩</a></li>
      <li><a href="others.html">其它</a></li>
      <li><a href="contact.html">聯絡我們</a></li>
    </ul>
  `;
  const nav = document.createElement('nav');
  nav.innerHTML = navHtml;
  document.body.insertBefore(nav, document.body.firstChild);

  // Inject Footer
  const footerHtml = `
    <p class="footer-text">© 2026 Lumière Cosmetics. 保留所有權利。展現您的自然之美。</p>
  `;
  const footer = document.createElement('footer');
  footer.innerHTML = footerHtml;
  document.body.appendChild(footer);
});

// Render products grid function
function renderProducts(filterCategory = null) {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const filtered = filterCategory 
    ? products.filter(p => p.category === filterCategory) 
    : products;

  grid.innerHTML = filtered.map(p => `
    <a href="product.html?id=${p.id}" class="product-card">
      <img src="${p.image}" alt="${p.name}" class="product-image">
      <div class="product-info">
        <div class="product-category">${categoryMap[p.category]}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-price">${p.price}</div>
      </div>
    </a>
  `).join('');
}
