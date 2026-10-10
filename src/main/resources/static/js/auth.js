// ==========================================
// auth.js — Modern Navbar + Auth helpers
// ==========================================

function renderNavbar() {
    const loggedIn = isLoggedIn();
    const email = getEmail();
    const initial = email ? email.charAt(0).toUpperCase() : '?';

    const nav = `
        <div class="navbar">
            <div class="navbar-inner">
                <div class="logo" onclick="window.location.href='index.html'">
                    🛒 ShopEasy
                </div>
                <div class="search-bar">
                    <input type="text" id="globalSearch" placeholder="Search 120+ products..." onkeydown="if(event.key==='Enter') doSearch()">
                    <button onclick="doSearch()">Search</button>
                </div>
                <div class="nav-links">
                    <a class="nav-link" href="index.html">🏠 Home</a>
                    <a class="nav-link" href="cart.html">
                        🛒 Cart <span id="cartBadge" class="cart-badge" style="display:none">0</span>
                    </a>
                    ${loggedIn ? `
                        <a class="nav-link" href="orders.html">📦 Orders</a>
                        <div class="user-menu">
                            <div class="user-avatar">${initial}</div>
                            <span class="user-name">${email}</span>
                            <a class="nav-link" href="#" onclick="logout();return false;">Logout</a>
                        </div>
                    ` : `
                        <a class="nav-link" href="login.html">Login</a>
                        <a class="btn btn-small" href="register.html">Sign Up</a>
                    `}
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('afterbegin', nav);

    if (loggedIn) updateCartBadge();
}

function doSearch() {
    const q = document.getElementById('globalSearch').value.trim();
    if (q) {
        window.location.href = 'index.html?search=' + encodeURIComponent(q);
    } else {
        window.location.href = 'index.html';
    }
}

async function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (!badge || !isLoggedIn()) return;
    try {
        const cart = await getCart();
        const count = (cart.items || []).reduce((sum, i) => sum + i.quantity, 0);
        if (count > 0) {
            badge.textContent = count;
            badge.style.display = 'inline-block';
        } else {
            badge.style.display = 'none';
        }
    } catch (e) { /* silent */ }
}

function logout() {
    clearToken();
    window.location.href = 'login.html';
}

function requireLogin() {
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

function redirectIfLoggedIn() {
    if (isLoggedIn()) {
        window.location.href = 'index.html';
    }
}

document.addEventListener('DOMContentLoaded', renderNavbar);