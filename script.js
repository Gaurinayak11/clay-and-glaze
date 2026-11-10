/* =============== 1. DATA: products, potters, glaze finishes =============== */
// Potters: each one uses a different kiln firing technique.
var potters = [
  { id: 1, name: "Meera Rao",   initials: "MR", location: "Kasauli, Himachal Pradesh", firing: "Wood-fired",
    bio: "Meera trained under village potters for ten years before opening her own studio. She loads her wood kiln by hand and fires for two days, so every piece carries soft flame marks." },
  { id: 2, name: "Arjun Sethi", initials: "AS", location: "Jaipur, Rajasthan", firing: "Gas",
    bio: "Arjun makes clean, everyday tableware in a gas kiln, where steady heat gives even glazes and strong pieces. He works in batches of ten or fewer." },
  { id: 3, name: "Kavya Menon", initials: "KM", location: "Pondicherry", firing: "Raku",
    bio: "Kavya makes decorative pieces with raku firing. She pulls glowing pots out of the kiln and cools them fast, which gives bold, crackled surfaces. No two come out the same." }
];

// Reactive glaze finishes shown in the gallery.
var glazeFinishes = [
  { name: "Speckled Matte", css: "speckled", text: "A soft matte glaze with tiny iron speckles that show through from the clay body." },
  { name: "Ocean Blue Crystalline", css: "ocean", text: "Crystals grow in the glaze as the kiln cools, making deep blue, flower-like patterns that change with the light." },
  { name: "Raw Terracotta", css: "terracotta", text: "An earthy finish that keeps the warm red-orange colour of the raw clay." }
];

// badges = functional specifications. An empty list means a decorative piece.
// img = photo inside the images folder. focus = which part of the photo to keep when it is cropped. oldPrice 0 = no discount. color = glaze colour.
var products = [
  { id: 1,  img: "images/mug1.jpg", focus: "center 80%",   name: "Speckled Morning Mug",     category: "Coffee Mugs",  price: 495,  oldPrice: 0,    glazeName: "Speckled Matte",         color: "#D8CCB6", size: "300 ml", stock: 12, emoji: "☕", potter: 1, badges: ["Food Safe Glaze", "Microwave Safe", "Dishwasher Safe"], desc: "A rounded mug with a thumb rest, fired in a wood kiln." },
  { id: 2,  img: "images/mug2.jpg",   name: "Ocean Crystal Mug",        category: "Coffee Mugs",  price: 640,  oldPrice: 700,  glazeName: "Ocean Blue Crystalline", color: "#2F6A9A", size: "320 ml", stock: 3,  emoji: "☕", potter: 2, badges: ["Food Safe Glaze", "Microwave Safe", "Dishwasher Safe"], desc: "Deep blue crystals grow across the glaze of this tall mug." },
  { id: 3,  img: "images/mug3.jpg",   name: "Terracotta Chai Cup",      category: "Coffee Mugs",  price: 399,  oldPrice: 0,    glazeName: "Raw Terracotta",         color: "#B8643C", size: "250 ml", stock: 9,  emoji: "☕", potter: 1, badges: ["Food Safe Glaze", "Dishwasher Safe"], desc: "A small, warm-coloured cup made for strong chai." },
  { id: 4,  img: "images/ramen1.jpg", focus: "center 65%", name: "Speckled Ramen Bowl",      category: "Ramen Bowls",  price: 1099, oldPrice: 0,    glazeName: "Speckled Matte",         color: "#D8CCB6", size: "900 ml", stock: 9,  emoji: "🍜", potter: 2, badges: ["Food Safe Glaze", "Microwave Safe", "Dishwasher Safe", "Oven Safe"], desc: "Deep and wide with a steady foot. Holds noodles and broth well." },
  { id: 5,  img: "images/ramen2.jpg", name: "Ocean Blue Ramen Bowl",    category: "Ramen Bowls",  price: 1299, oldPrice: 1450, glazeName: "Ocean Blue Crystalline", color: "#2F6A9A", size: "950 ml", stock: 4,  emoji: "🍜", potter: 2, badges: ["Food Safe Glaze", "Microwave Safe", "Dishwasher Safe", "Oven Safe"], desc: "A glossy blue bowl where the crystals catch the light." },
  { id: 6,  img: "images/ramen3.jpg", focus: "center 65%", name: "Terracotta Noodle Bowl",   category: "Ramen Bowls",  price: 899,  oldPrice: 0,    glazeName: "Raw Terracotta",         color: "#B8643C", size: "800 ml", stock: 6,  emoji: "🍜", potter: 1, badges: ["Food Safe Glaze", "Oven Safe"], desc: "A rustic bowl with a raw clay outside and a glazed inside." },
  { id: 7,  img: "images/set1.jpg", focus: "center 60%",   name: "Four-Piece Dinner Set",    category: "Dinner Sets",  price: 3499, oldPrice: 0,    glazeName: "Speckled Matte",         color: "#D8CCB6", size: "2 plates, 2 bowls", stock: 3, emoji: "🍽️", potter: 2, badges: ["Food Safe Glaze", "Microwave Safe", "Dishwasher Safe", "Oven Safe"], desc: "Two dinner plates and two bowls in a matching glaze." },
  { id: 8,  img: "images/set2.jpg",   name: "Six-Piece Terracotta Set", category: "Dinner Sets",  price: 3999, oldPrice: 4500, glazeName: "Raw Terracotta",         color: "#B8643C", size: "3 plates, 3 bowls", stock: 2, emoji: "🍽️", potter: 1, badges: ["Food Safe Glaze", "Dishwasher Safe", "Oven Safe"], desc: "A warm earthy set for a family table." },
  { id: 9,  img: "images/vase1.jpg", focus: "center 55%",  name: "Raku Bud Vase",            category: "Vases",        price: 750,  oldPrice: 0,    glazeName: "Raw Terracotta",         color: "#B8643C", size: "14 cm", stock: 5,  emoji: "🏺", potter: 3, badges: [], desc: "A narrow raku vase for a single stem or dried grass." },
  { id: 10, img: "images/vase2.jpg",  name: "Crystal Moon Vase",        category: "Vases",        price: 2499, oldPrice: 0,    glazeName: "Ocean Blue Crystalline", color: "#2F6A9A", size: "26 cm", stock: 2,  emoji: "🏺", potter: 3, badges: [], desc: "A full, round vase covered in blue crystalline glaze." },
  { id: 11, img: "images/pot1.jpg",   name: "Speckled Plant Pot",       category: "Plant Pots",   price: 599,  oldPrice: 0,    glazeName: "Speckled Matte",         color: "#D8CCB6", size: "15 cm", stock: 11, emoji: "🪴", potter: 1, badges: [], desc: "A plant pot with a drainage hole and a matching saucer." },
  { id: 12, img: "images/pot2.jpg",   name: "Raku Hanging Planter",     category: "Plant Pots",   price: 849,  oldPrice: 999,  glazeName: "Ocean Blue Crystalline", color: "#2F6A9A", size: "12 cm", stock: 4,  emoji: "🪴", potter: 3, badges: [], desc: "A small raku planter with a cord for hanging." },
  { id: 13, img: "images/pot3.jpg",   name: "Terracotta Herb Pot",      category: "Plant Pots",   price: 450,  oldPrice: 0,    glazeName: "Raw Terracotta",         color: "#B8643C", size: "13 cm", stock: 0,  emoji: "🪴", potter: 1, badges: [], desc: "A simple pot for kitchen herbs. Currently sold out." }
];

/* =============== 2. VARIABLES (saved in the browser with localStorage) =============== */
var cart = JSON.parse(localStorage.getItem("cart")) || [];          // [{id, qty}]
var wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];  // [id, id, ...]
var selectedCategory = "All";
var openProductId = null;

function $(id) { return document.getElementById(id); }              // short name for getElementById
function rupees(n) { return "₹" + n.toLocaleString("en-IN"); }
// Shows the product photo. If the photo file is missing, it shows the emoji instead.
function picture(p) {
  return `<img src="${p.img}" alt="${p.name}" style="object-position:${p.focus || 'center'}" onerror="this.replaceWith(document.createTextNode('${p.emoji}'))">`;
}
function findProduct(id) { return products.find(function (p) { return p.id === id; }); }

/* =============== 3. SHOW PRODUCTS (category + search + 3 filters + sort) =============== */
function findPotter(id) { return potters.find(function (x) { return x.id === id; }); }

// Small green-tick labels such as "Dishwasher Safe". No badges = a decorative piece.
function badgeHtml(list) {
  if (list.length === 0) { return '<span class="spec muted">Decor piece</span>'; }
  var html = "";
  list.forEach(function (b) { html += '<span class="spec">✔ ' + b + '</span>'; });
  return html;
}

function showCategoryButtons() {
  var names = ["All"];
  products.forEach(function (p) { if (!names.includes(p.category)) names.push(p.category); });
  var html = "";
  names.forEach(function (name) {
    var cls = name === selectedCategory ? "active" : "";
    html += `<button class="${cls}" onclick="chooseCategory('${name}')">${name}</button>`;
  });
  $("categoryButtons").innerHTML = html;
}

function chooseCategory(name) {
  selectedCategory = name;
  showCategoryButtons();
  showProducts();
}

function showProducts() {
  var text = $("search").value.toLowerCase();
  var firing = $("firingFilter").value, spec = $("specFilter").value, glaze = $("glazeFilter").value;

  // keep a product only if it matches ALL the chosen filters
  var list = products.filter(function (p) {
    var potter = findPotter(p.potter);
    var categoryOk = selectedCategory === "All" || p.category === selectedCategory;
    var searchOk = (p.name + " " + p.glazeName + " " + p.category).toLowerCase().includes(text);
    var firingOk = firing === "All" || potter.firing === firing;
    var specOk = spec === "All" || p.badges.includes(spec);
    var glazeOk = glaze === "All" || p.glazeName === glaze;
    return categoryOk && searchOk && firingOk && specOk && glazeOk;
  });

  var sort = $("sort").value;
  if (sort === "low") list.sort(function (a, b) { return a.price - b.price; });
  if (sort === "high") list.sort(function (a, b) { return b.price - a.price; });
  if (sort === "name") list.sort(function (a, b) { return a.name.localeCompare(b.name); });

  var html = "";
  list.forEach(function (p) {
    var potter = findPotter(p.potter);
    var heart = wishlist.includes(p.id) ? "♥" : "♡";
    var price = p.oldPrice ? `<s>${rupees(p.oldPrice)}</s> ${rupees(p.price)}` : rupees(p.price);
    var sale = p.oldPrice ? `<span class="sale">Sale</span>` : "";
    var stock = p.stock === 0 ? "Sold out" : p.stock <= 3 ? "Only " + p.stock + " left" : "Small batch";
    var stockClass = p.stock <= 3 ? "low" : "small";
    var button = p.stock === 0 ? "" : `<button onclick="addToCart(${p.id})">Add</button>`;
    html += `
      <div class="card">
        ${sale}
        <button class="heart" onclick="toggleWishlist(${p.id})">${heart}</button>
        <div class="pic" style="background:${p.color}55" onclick="openProduct(${p.id})">${picture(p)}</div>
        <div class="card-info">
          <p class="${stockClass}">${stock}</p>
          <h3>${p.name}</h3>
          <p class="small"><span class="dot" style="background:${p.color}"></span>${p.glazeName}, ${p.size}</p>
          <p class="small">By ${potter.name}, ${potter.firing} kiln</p>
          <div>${badgeHtml(p.badges)}</div>
          <div class="row"><b>${price}</b>${button}</div>
        </div>
      </div>`;
  });
  $("grid").innerHTML = html || "<p>No pieces found. Try clearing the filters.</p>";
  $("count").textContent = list.length + " pieces";
}

// Reset every filter back to "All"
function clearFilters() {
  selectedCategory = "All";
  $("search").value = "";
  $("sort").value = "";
  $("firingFilter").value = "All";
  $("specFilter").value = "All";
  $("glazeFilter").value = "All";
  showCategoryButtons();
  showProducts();
}

// Used by the potter cards and glaze cards: set one filter, then jump to the shop
function shopWith(selectId, value) {
  clearFilters();
  $(selectId).value = value;
  showProducts();
  $("shop").scrollIntoView();
}

/* =============== 4. POTTER CARDS, GLAZE GALLERY, PRODUCT POPUP =============== */
function showPotters() {
  var html = "";
  potters.forEach(function (x) {
    html += `
      <div class="potter">
        <div class="avatar">${x.initials}</div>
        <h3>${x.name}</h3>
        <p class="small">📍 ${x.location}</p>
        <span class="tag">🔥 ${x.firing} kiln</span>
        <p>${x.bio}</p>
        <button class="btn outline" onclick="shopWith('firingFilter', '${x.firing}')">See ${x.firing} pieces</button>
      </div>`;
  });
  $("potterGrid").innerHTML = html;
}

function showGlazes() {
  var html = "";
  glazeFinishes.forEach(function (g) {
    var count = products.filter(function (p) { return p.glazeName === g.name; }).length;
    html += `
      <div class="glaze">
        <div class="swatch ${g.css}"></div>
        <h3>${g.name}</h3>
        <p>${g.text}</p>
        <p class="small">${count} pieces</p>
        <button class="btn outline" onclick="shopWith('glazeFilter', '${g.name}')">Shop this finish</button>
      </div>`;
  });
  $("glazeGrid").innerHTML = html;
}

function openProduct(id) {
  var p = findProduct(id), potter = findPotter(p.potter);
  openProductId = id;
  $("mPic").innerHTML = picture(p);
  $("mPic").style.background = p.color + "55";
  $("mName").textContent = p.name;
  $("mInfo").textContent = p.category + ", " + p.glazeName + ", " + p.size;
  $("mPotter").textContent = "Made by " + potter.name + " in " + potter.location + " (" + potter.firing + " kiln)";
  $("mBadges").innerHTML = badgeHtml(p.badges);
  $("mDesc").textContent = p.desc;
  $("mPrice").innerHTML = p.oldPrice ? `<s>${rupees(p.oldPrice)}</s> ${rupees(p.price)}` : rupees(p.price);
  $("productModal").classList.add("open");
}

/* =============== 5. CART =============== */
function addToCart(id) {
  var p = findProduct(id);
  var line = cart.find(function (item) { return item.id === id; });
  if (p.stock === 0) { showToast("Sorry, this piece is sold out"); return; }
  if (line && line.qty >= p.stock) { showToast("That is all we have of this piece"); return; }
  if (line) { line.qty++; } else { cart.push({ id: id, qty: 1 }); }
  saveCart();
  showToast(p.name + " added to cart");
}

function changeQty(id, change) {
  var line = cart.find(function (item) { return item.id === id; });
  var p = findProduct(id);
  line.qty = Math.min(line.qty + change, p.stock);
  cart = cart.filter(function (item) { return item.qty > 0; });   // remove if quantity is 0
  saveCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart();
}

function showCart() {
  var total = 0, count = 0, html = "";
  cart.forEach(function (item) {
    var p = findProduct(item.id);
    total += p.price * item.qty;
    count += item.qty;
    html += `
      <div class="item">
        <div class="thumb" style="background:${p.color}55">${picture(p)}</div>
        <div><b>${p.name}</b><br>${rupees(p.price)}<br>
          <button onclick="changeQty(${p.id}, -1)">-</button>${item.qty}
          <button onclick="changeQty(${p.id}, 1)">+</button></div>
        <b>${rupees(p.price * item.qty)}</b>
      </div>`;
  });
  $("cartItems").innerHTML = html || "<p>Your cart is empty.</p>";
  $("cartTotal").textContent = rupees(total);
  $("cartCount").textContent = count;
}

/* =============== 6. WISHLIST =============== */
function toggleWishlist(id) {
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(function (x) { return x !== id; });   // remove
  } else {
    wishlist.push(id);                                               // add
  }
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  showWishlist();
  showProducts();
}

function showWishlist() {
  var html = "";
  wishlist.forEach(function (id) {
    var p = findProduct(id);
    html += `
      <div class="item">
        <div class="thumb" style="background:${p.color}55">${picture(p)}</div>
        <div><b>${p.name}</b><br>${rupees(p.price)}<br>
          <button onclick="addToCart(${p.id})">Add to cart</button>
          <button onclick="toggleWishlist(${p.id})">Remove</button></div>
      </div>`;
  });
  $("wishItems").innerHTML = html || "<p>Nothing saved yet. Tap the heart on any piece.</p>";
  $("wishCount").textContent = wishlist.length;
}

/* =============== 7. FORM VALIDATION (used by contact form and checkout form) =============== */
// Each field has: id, a test function, and the error message to show.
var contactFields = [
  { id: "ctName",  test: function (v) { return v.length >= 2; },                      message: "Enter your name." },
  { id: "ctEmail", test: function (v) { return /^\S+@\S+\.\S+$/.test(v); },           message: "Enter a valid email." },
  { id: "ctPhone", test: function (v) { return /^[6-9][0-9]{9}$/.test(v); },          message: "Enter a 10-digit mobile number." },
  { id: "ctMsg",   test: function (v) { return v.length >= 10; },                     message: "Write at least 10 characters." }
];
var checkoutFields = [
  { id: "coName",    test: function (v) { return v.length >= 2; },                    message: "Enter your full name." },
  { id: "coPhone",   test: function (v) { return /^[6-9][0-9]{9}$/.test(v); },        message: "Enter a 10-digit mobile number." },
  { id: "coAddress", test: function (v) { return v.length >= 10; },                   message: "Enter your full address." },
  { id: "coCity",    test: function (v) { return v.length >= 2; },                    message: "Enter your city." },
  { id: "coState",   test: function (v) { return v.length >= 2; },                    message: "Enter your state." },
  { id: "coPin",     test: function (v) { return /^[0-9]{6}$/.test(v); },             message: "Enter a 6-digit pincode." }
];

// Returns true only if every field passes. Shows an error under each wrong field.
function validate(fields) {
  var allGood = true;
  fields.forEach(function (f) {
    var value = $(f.id).value.trim();
    var good = f.test(value);
    $(f.id + "Err").textContent = good ? "" : f.message;
    $(f.id).classList.toggle("bad", !good);
    if (!good) allGood = false;
  });
  return allGood;
}

function sendContact(event) {
  event.preventDefault();                       // stop the page from reloading
  if (validate(contactFields)) {
    $("contactForm").reset();
    showToast("Message sent. We will reply soon.");
  }
}

/* =============== 8. CHECKOUT (delivery address) =============== */
function openCheckout() {
  if (cart.length === 0) { showToast("Your cart is empty"); return; }
  closePanels();
  var total = 0, html = "";
  cart.forEach(function (item) {
    var p = findProduct(item.id);
    total += p.price * item.qty;
    html += `<div>${p.name} x ${item.qty}: ${rupees(p.price * item.qty)}</div>`;
  });
  var shipping = total >= 3000 ? 0 : 99;        // free delivery above 3000
  html += `<div>Shipping: ${shipping ? rupees(shipping) : "Free"}</div><b>Total: ${rupees(total + shipping)}</b>`;
  $("orderSummary").innerHTML = html;
  $("checkoutForm").style.display = "block";
  $("orderDone").style.display = "none";
  $("checkoutModal").classList.add("open");
}

function placeOrder(event) {
  event.preventDefault();
  if (!validate(checkoutFields)) return;           // stop if any field is wrong

  var orderNo = "CG-" + Math.floor(10000 + Math.random() * 90000);
  $("orderMsg").textContent = "Order " + orderNo + " will be delivered to " + $("coName").value + ", " +
    $("coAddress").value + ", " + $("coCity").value + " - " + $("coPin").value +
    " in 5 to 7 days. Payment: " + $("coPay").value + ".";

  $("checkoutForm").style.display = "none";        // hide the address form
  $("orderDone").style.display = "block";          // show the thank-you message
  cart = [];                                       // the ordered items are removed from the cart
  saveCart();                                      // update localStorage, cart count and cart panel
}

/* =============== 9. OPEN / CLOSE PANELS AND POPUPS =============== */
function openPanel(id) {
  $(id).classList.add("open");
  $("overlay").classList.add("open");
}
function closePanels() {
  $("cartPanel").classList.remove("open");
  $("wishPanel").classList.remove("open");
  $("overlay").classList.remove("open");
}
function closeModals() {
  $("productModal").classList.remove("open");
  $("checkoutModal").classList.remove("open");
}

/* =============== 10. DARK / LIGHT MODE =============== */
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);   // CSS reads this attribute
  localStorage.setItem("theme", theme);
  $("themeBtn").textContent = theme === "dark" ? "Light" : "Dark";
}
function toggleTheme() {
  var current = document.documentElement.getAttribute("data-theme");
  setTheme(current === "dark" ? "light" : "dark");
}

/* =============== 11. MOBILE MENU AND TOAST MESSAGE =============== */
function toggleMenu() { $("menu").classList.toggle("open"); }

function showToast(message) {
  $("toast").textContent = message;
  $("toast").style.display = "block";
  setTimeout(function () { $("toast").style.display = "none"; }, 2000);
}

/* =============== 12. START THE PAGE =============== */
setTheme(localStorage.getItem("theme") || "light");
showCategoryButtons();
showProducts();
showPotters();
showGlazes();
showCart();
showWishlist();
